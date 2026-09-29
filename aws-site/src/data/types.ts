export type Direction = 'in' | 'out' | 'both'

export type Interaction = {
  /** 目標服務 id（若存在於目錄中則可點擊跳轉），或自由輸入的服務名稱 */
  to: string
  /** in = 對方餵資料進來、out = 本服務送出去、both = 互相呼叫 / 雙向 */
  dir: Direction
  /** 一句話說明互動方式 */
  how: string
}

export type Setting = {
  name: string
  /** 必填 / 必修 */
  required?: boolean
  /** 設錯會出事 */
  warn?: boolean
  desc: string
}

export type PriceRow = {
  tier: string
  price: string
  note: string
  /** 0 = 免費，1 = 便宜，5 = 很貴，用來畫視覺化費用條 */
  level?: number
}

export type Pricing = {
  /** 計價模型一句話 */
  model: string
  /** 免費額度 */
  free?: string
  rows: PriceRow[]
  /** 費用陷阱 */
  traps?: string[]
}

export type Concept = { term: string; desc: string }

export type Service = {
  id: string
  /** 英文正式名稱 */
  name: string
  /** 中文名 / 常見簡稱 */
  zh: string
  category: string
  emoji: string
  /** 一句話定義 */
  tagline: string
  /** 搜尋用的別名與關鍵字 */
  aliases?: string[]
  /** 簡介段落，支援 **粗體** 與 `code` */
  intro: string[]
  /** 核心概念 / 重要名詞 */
  concepts?: Concept[]
  /** 與其他服務的互動 */
  interactions: Interaction[]
  /** 重要設定 */
  settings: Setting[]
  pricing: Pricing
  /** 考試重點 */
  exam?: string[]
  /** 常見陷阱 */
  gotchas?: string[]
  /** 快速開始 CLI / 程式碼片段 */
  cli?: string[]
  related?: string[]
  /** 頁面深度：full 完整、brief 精簡 */
  depth?: 'full' | 'brief'
}

export type Category = {
  id: string
  name: string
  emoji: string
  desc: string
}

export const CATEGORIES: Category[] = [
  { id: 'compute', name: 'Compute', emoji: '🖥️', desc: '跑程式的地方：VM、容器、函式' },
  { id: 'storage', name: 'Storage', emoji: '🗄️', desc: '放資料的地方：物件、區塊、檔案' },
  { id: 'database', name: 'Database', emoji: '🧮', desc: '結構化與專用資料庫、快取、搜尋' },
  { id: 'network', name: 'Network', emoji: '🌐', desc: '連線、網域、CDN、對外入口' },
  { id: 'security', name: 'Security', emoji: '🔐', desc: '身分、加密、金鑰、威脅偵測' },
  { id: 'integration', name: 'Integration', emoji: '🔀', desc: '服務之間的訊息與事件傳遞' },
  { id: 'monitoring', name: 'Monitoring', emoji: '📈', desc: '觀測、稽核、合規與維運' },
  { id: 'analytics', name: 'Analytics', emoji: '📊', desc: '資料湖、倉儲、大數據處理' },
  { id: 'ml', name: 'Machine Learning', emoji: '🤖', desc: 'AI/ML 服務與預訓練模型 API' },
  { id: 'migration', name: 'Migration & Management', emoji: '🧰', desc: '搬遷、基礎設施即程式碼、成本治理' },
]
