import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Service } from '../data/types'
import { CATEGORIES } from '../data/types'
import { Icon } from './Icons'

function score(s: Service, q: string): number {
  const query = q.trim().toLowerCase()
  if (!query) return 1
  const name = s.name.toLowerCase()
  const zh = s.zh.toLowerCase()
  const id = s.id.toLowerCase()
  let best = 0
  if (name === query || id === query) best = 100
  else if (name.startsWith(query) || id.startsWith(query)) best = 90
  else if (name.includes(query) || zh.includes(query) || id.includes(query)) best = 70
  else if (s.aliases?.some((a) => a.toLowerCase().includes(query))) best = 60
  else if (s.tagline.toLowerCase().includes(query)) best = 40
  else {
    // 子序列比對：打 "s3gw" 也能找到 S3 Gateway 之類
    let i = 0
    for (const ch of name + zh) {
      if (ch === query[i]) i++
      if (i === query.length) break
    }
    if (i === query.length) best = 20
  }
  return best
}

export function SearchPalette({
  services,
  open,
  onClose,
  onNavigate,
}: {
  services: Service[]
  open: boolean
  onClose: () => void
  onNavigate: (id: string) => void
}) {
  const [q, setQ] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const results = useMemo(() => {
    return services
      .map((s) => ({ s, sc: score(s, q) }))
      .filter((r) => r.sc > 0)
      .sort((a, b) => b.sc - a.sc || a.s.name.localeCompare(b.s.name))
      .slice(0, 40)
      .map((r) => r.s)
  }, [services, q])

  useEffect(() => {
    if (open) {
      setQ('')
      setCursor(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    setCursor((c) => Math.min(c, Math.max(0, results.length - 1)))
  }, [results.length])

  const pick = (id: string) => {
    onNavigate(id)
    onClose()
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setCursor((c) => (c + 1) % Math.max(1, results.length))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor((c) => (c - 1 + results.length) % Math.max(1, results.length))
    } else if (e.key === 'Enter' && results[cursor]) {
      e.preventDefault()
      pick(results[cursor].id)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onClick={onClose}
          onKeyDown={onKey}
        >
          <motion.div
            className="palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -6 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜尋服務名稱、中文、關鍵字… e.g. alb / 負載 / 加密 / 佇列"
            />
            <div className="palette-list">
              {results.length === 0 && <div className="palette-empty">找不到符合的服務，換個關鍵字試試</div>}
              {results.map((s, i) => (
                <div
                  key={s.id}
                  className="palette-item"
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => pick(s.id)}
                  style={{
                    background: i === cursor ? 'var(--hover)' : 'transparent',
                    fontWeight: i === cursor ? 500 : 400,
                  }}
                >
                  <span>{s.emoji}</span>
                  <span>
                    {s.name}
                    <span style={{ color: 'var(--text-3)', marginLeft: 8, fontSize: 12.5 }}>{s.zh}</span>
                  </span>
                  <span className="pi-cat">
                    {CATEGORIES.find((c) => c.id === s.category)?.name ?? s.category}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                borderTop: '1px solid var(--border)',
                padding: '7px 12px',
                display: 'flex',
                gap: 12,
                fontSize: 11.5,
                color: 'var(--text-3)',
              }}
            >
              <span>
                <span className="kbd">↑↓</span> 選擇
              </span>
              <span>
                <span className="kbd">↵</span> 開啟
              </span>
              <span>
                <span className="kbd">esc</span> 關閉
              </span>
              <span style={{ marginLeft: 'auto' }}>
                <Icon.search size={11} /> {services.length} 個服務
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
