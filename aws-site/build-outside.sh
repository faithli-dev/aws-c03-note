#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# 在 /tmp 建置再複製回 dist/。
#
# 為什麼需要這支：如果 ~/Desktop（或專案所在目錄）被 iCloud 同步 / Spotlight
# 卡住，bun 會停在掃描目錄的地方永遠不回應（連 `bun -e 'console.log(1)'` 都會
# 卡住），此時把建置工作搬到 /tmp 就能正常運作。
#
# 用法：bash build-outside.sh
# ---------------------------------------------------------------------------
set -euo pipefail

SRC="$(cd "$(dirname "$0")" && pwd)"
WORK="${WORK:-/tmp/aws-site-build}"
export TMPDIR="${BUILD_TMPDIR:-/tmp/bunwork}"

mkdir -p "$WORK" "$TMPDIR"

echo "→ 同步原始碼到 $WORK"
rsync -a --delete \
  --exclude node_modules --exclude dist --exclude .shots --exclude '.git' \
  "$SRC/" "$WORK/"

if [ ! -d "$WORK/node_modules" ]; then
  echo "→ 複製 node_modules（第一次會慢一點）"
  cp -R "$SRC/node_modules" "$WORK/node_modules"
fi

echo "→ 建置"
(cd "$WORK" && bun run build.ts)

mkdir -p "$SRC/dist"
cp "$WORK/dist/index.html" "$SRC/dist/index.html"
echo "✓ 已複製回 $SRC/dist/index.html"
