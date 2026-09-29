# AWS 服務筆記網站

用 **Bun + React + framer-motion** 寫成的 AWS 教學網站：**每一個 service 一頁**，固定用
「它是什麼 → 核心概念 → 跟哪些服務互動 → 重要設定 → 價錢 → 考試重點 / 陷阱」的順序講清楚。
最後會編譯成**單一 standalone HTML**（JS / CSS 全部 inline），可以直接雙擊開啟、離線可用，不需要伺服器。

- 服務頁面：**93 個**
- 服務間互動：**692 條**（每條都有方向與說明）
- 重要設定說明：**628 條**
- 產出檔案：`dist/index.html`（約 690 KB，含所有內容與動畫）

---

## 快速開始

```bash
bun install          # 安裝依賴
bun run dev          # 開發伺服器 http://localhost:5173（每次請求即時 bundle）
bun run build        # 編譯成 dist/index.html
bun run typecheck    # TypeScript 檢查
```

如果 `bun` 在專案目錄下卡住（見下方「已知環境問題」）：

```bash
bash build-outside.sh   # 在 /tmp 建置後把 HTML 複製回 dist/
```

## 目錄結構

```
aws-site/
├─ build.ts              # CLI：編譯成 standalone HTML（並執行內容健檢）
├─ bundle.ts             # 共用：Bun.build + inline CSS/JS + 內容稽核
├─ dev.ts                # 開發伺服器
├─ build-outside.sh      # 在 /tmp 建置的備援腳本
└─ src/
   ├─ index.html         # HTML 模板（CSS / JS 由 build 注入）
   ├─ styles.css         # Notion 風格設計系統（含深色模式）
   ├─ main.tsx           # React 進入點
   ├─ App.tsx            # 版面、hash 路由、搜尋、主題、進度條
   ├─ lib/hooks.ts       # useHashRoute / useTheme / useScrollSpy / useElementSize…
   ├─ components/        # Sidebar / Home / ServicePage / ServiceGraph / Toc / SearchPalette…
   └─ data/              # ★ 內容都在這裡，一個分類一個檔案
      ├─ types.ts        # Service 型別與分類定義
      ├─ index.ts        # 目錄（順序 = 側邊欄與上/下一頁順序）
      └─ compute.ts storage.ts database.ts network.ts security.ts
         integration.ts monitoring.ts analytics.ts ml.ts migration.ts
```

## 內容資料模型

每一頁就是 `src/data/*.ts` 裡的一個 `Service` 物件：

```ts
{
  id: 'ec2', name: 'Amazon EC2', zh: '虛擬機器', category: 'compute', emoji: '🖥️',
  tagline: '一句話定義',
  intro: ['段落，支援 **粗體**、`code` 與 [[lambda|內部連結]]'],
  concepts: [{ term: 'AMI', desc: '名詞解釋' }],
  interactions: [{ to: 'ebs', dir: 'both', how: '怎麼互動' }],   // dir: in | out | both
  settings: [{ name: 'Timeout', required: true, warn: false, desc: '設定說明' }],
  pricing: {
    model: '計價模型一句話', free: '免費額度',
    rows: [{ tier: '規格', price: '$0.09/GB', note: '說明', level: 2 }],  // level 0–5 畫費用條
    traps: ['費用陷阱'],
  },
  exam: ['考試重點'], gotchas: ['常見陷阱'], cli: ['aws ...'], related: ['ebs', 'vpc'],
}
```

`interactions[].to` 必須是目錄中存在的 `id`，否則 `bun run build` 會印出警告
（同時會檢查重複 id、缺漏的設定 / 價格、未知分類）。

### 新增一個服務頁

1. 在對應分類檔案中加一個 `Service` 物件（`id` 用小寫與連字號）。
2. 在 `related` 或別的服務的 `interactions` 指向它（讓它有 backlink，不孤立）。
3. `bun run build` → 沒有警告就完成了。

## 網站設計

- **Notion 風格**：`#ffffff` / `#f7f7f5` 底色、`#37352f` 文字、`rgba(55,53,47,.09)` 邊框、
  內行 `code` 用 Notion 的 `#eb5757`、callout 色塊、屬性表格、左側階層目錄、右側 TOC（≥1180px 顯示）。
- **深色模式**：跟隨系統，也可用手動切換（存 localStorage）。
- **動畫（framer-motion）**：
  - 頁面切換淡入 / 上移，區塊捲入時 stagger 淡入
  - 互動圖：節點彈簧進場、連線 `pathLength` 描繪、虛線流動、hover 時其他節點變暗並顯示說明
  - 側邊欄 active 指示用 `layoutId` 平滑移動；分類展開用 height 動畫
  - 價錢卡片費用條逐格展開；搜尋面板彈簧縮放；頂端閱讀進度條
  - 全文**尊重 `prefers-reduced-motion`**（關閉無限動畫與虛線流動）
- **快捷鍵**：`⌘K / Ctrl+K` 搜尋、`⌘\ / Ctrl+\` 開合側邊欄、`↑↓` 選擇、`↵` 開啟、`esc` 關閉。

## 搜尋

`src/components/SearchPalette.tsx` 的自製評分：完全符合 > 開頭符合 > 包含 > 別名 > 描述 > 子序列比對，
因此**中英文都能搜**（例：`負載` → ELB、`快取` → ElastiCache、`q` → 佇列相關服務）。

## 已知環境問題（重要）

1. **`bun` 在 `~/Desktop` 底下會卡住**：macOS 對 Desktop / Documents 有隱私權保護（TCC），
   無圖形介面的程序讀取該目錄時會無限等待，`bun`、`python3` 都一樣（`bun -e 'console.log(1)'` 都會卡）。
   解法：把專案移出 Desktop、或在終端機 / 編輯器授予「檔案與檔案夾 → 桌面」權限，
   或直接使用 `bash build-outside.sh`（在 `/tmp` 建置再複製回來）。
2. **`file://` 開啟時，若檔案放在 `~/Desktop` 底下**，無頭瀏覽器同樣會被 TCC 卡住而載入逾時；
   檔案本身沒有問題（放到 `/tmp` 或一般網站目錄即可正常開啟）。
3. 產出的 HTML 是**單一檔案**，沒有外部請求，所以雙擊即可用；`<link rel="icon">` 用的是
   **base64 data URI**（百分比編碼的 SVG data URI 在部分 Chromium 版本會讓 `file://` 載入卡住）。

## 授權 / 資料來源

內容依本 vault 的 AWS SAA 學習筆記整理，並補充常見實務設定與定價。價格為
**us-east-1、美金**的常見參考值，會隨 Region 與時間變動，正式使用請以 AWS 官方 Pricing 頁面為準。
