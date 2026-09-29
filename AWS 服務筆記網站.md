# AWS 服務筆記網站

用 Bun + React 寫的 AWS 教學網站，編譯成**單一 standalone HTML**：`aws-site/dist/index.html`
（雙擊即可開啟，離線可用，不需要伺服器）。

## 內容

- **93 個 service，每個一頁**
- 每頁固定結構：簡介 → 核心概念 → 與其他服務的互動（含互動圖）→ 重要設定 → 價錢 → 快速開始 → 考試重點 & 陷阱
- 總計 **692 條服務互動**、**628 條重要設定說明**
- 中文為主，保留所有英文專業術語（service 名稱、參數、CLI 指令）
- Notion 風格，含深色模式、⌘K 搜尋、動畫（framer-motion）

## 快速開始

```bash
cd aws-site
bun install
bun run build     # 產出 dist/index.html
bun run dev       # 開發伺服器
```

若 `bun` 在 Desktop 目錄下卡住（macOS 隱私權保護），改用：

```bash
bash aws-site/build-outside.sh
```

詳細說明見 [[aws-site/README]]。
