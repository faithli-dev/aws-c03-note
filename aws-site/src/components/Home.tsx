import { motion, useReducedMotion } from 'framer-motion'
import type { Service } from '../data/types'
import { CATEGORIES } from '../data/types'
import { Icon } from './Icons'
import { Callout, Reveal } from './Reveal'

export function Home({
  services,
  onNavigate,
  onSearch,
}: {
  services: Service[]
  onNavigate: (id: string) => void
  onSearch: () => void
}) {
  const groups = CATEGORIES.map((cat) => ({
    cat,
    items: services.filter((s) => s.category === cat.id),
  })).filter((g) => g.items.length > 0)

  const interactionCount = services.reduce((n, s) => n + s.interactions.length, 0)
  const reduce = useReducedMotion()

  const scrollTo = (id: string) => {
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28 }}
    >
      <div className="hero">
        <motion.div
          className="hero-glow"
          style={{
            width: 320,
            height: 320,
            left: -40,
            top: -90,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,184,77,0.95) 0%, rgba(255,184,77,0) 62%)',
          }}
          animate={reduce ? { opacity: 0.5 } : { x: [0, 26, 0], y: [0, 16, 0], opacity: [0.42, 0.6, 0.42] }}
          transition={reduce ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-glow"
          style={{
            width: 300,
            height: 300,
            right: 40,
            top: -60,
            background: 'radial-gradient(circle at 50% 50%, rgba(127,178,255,0.95) 0%, rgba(127,178,255,0) 62%)',
          }}
          animate={reduce ? { opacity: 0.42 } : { x: [0, -22, 0], y: [0, 22, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={reduce ? { duration: 0 } : { duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />
        <h1>
          AWS 服務筆記
          <br />
          <span style={{ color: 'var(--text-3)' }}>每個 service 一頁講清楚</span>
        </h1>
        <p className="lede">
          用「它是什麼 → 跟誰互動 → 要調哪些設定 → 多少錢 → 考試怎麼考」的順序，把 AWS 的核心服務串成一張可以走動的知識地圖。
          點任何一個服務進入該頁，互動圖上的節點都可以再跳去下一個服務。
        </p>

        <div className="hero-stats">
          {[
            { num: services.length, lbl: '服務頁面' },
            { num: interactionCount, lbl: '服務間互動' },
            { num: groups.length, lbl: '主題分類' },
          ].map((s, i) => (
            <motion.div
              className="hero-stat"
              key={s.lbl}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
            >
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </motion.div>
          ))}
          <motion.button
            onClick={onSearch}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="pill blue"
            style={{ fontSize: 13, padding: '6px 12px', cursor: 'pointer', border: 'none', alignSelf: 'center' }}
          >
            <Icon.search size={13} /> 搜尋服務（⌘K）
          </motion.button>
        </div>
      </div>

      <Reveal>
        <Callout emoji="🧭" tone="blue" title="怎麼用這個網站">
          <strong>1.</strong> 左邊選服務，或用 ⌘K 搜尋（支援中文關鍵字，例如「負載」「快取」）。
          <strong> 2.</strong> 每頁固定五個段落：簡介、核心概念、與其他服務的互動、重要設定、價錢。
          <strong> 3.</strong> 互動圖的節點可點擊，順著資料流走就能理解整體架構。
          <strong> 4.</strong> 最後看「考試重點 & 陷阱」對照自己的盲點。
        </Callout>
      </Reveal>

      <Reveal>
        <h2 className="section-title" style={{ marginTop: 34, marginBottom: 14 }}>
          <span>🗂️</span> 主題分類
        </h2>
        <div className="grid three">
          {groups.map(({ cat, items }, i) => (
            <motion.button
              key={cat.id}
              className="cat-card"
              onClick={() => scrollTo(cat.id)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="cat-emoji">{cat.emoji}</span>
              <span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-desc">{cat.desc}</span>
                <span className="cat-count">{items.length} 個服務 →</span>
              </span>
            </motion.button>
          ))}
        </div>
      </Reveal>

      {groups.map(({ cat, items }) => (
        <Reveal key={cat.id} delay={0.02}>
          <h2 className="section-title" id={`cat-${cat.id}`} style={{ marginTop: 44, marginBottom: 6, scrollMarginTop: 24 }}>
            <span>{cat.emoji}</span> {cat.name}
          </h2>
          <p className="section-note">{cat.desc}</p>
          <div style={{ border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
            {items.map((s) => (
              <button className="svc-row" key={s.id} onClick={() => onNavigate(s.id)}>
                <span style={{ fontSize: 15 }}>{s.emoji}</span>
                <span className="sr-name">{s.name}</span>
                <span className="sr-tag">{s.tagline.replace(/\*\*/g, '')}</span>
                <span className="sr-arrow">
                  <Icon.arrowRight size={13} />
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      ))}

      <div className="page-foot">
        <div>
          {services.length} 個服務、每個一頁：簡介 → 互動 → 設定 → 價錢 → 考試重點。價格為 us-east-1 常見參考值，實際請以官方 Pricing 為準。
        </div>
      </div>
    </motion.div>
  )
}
