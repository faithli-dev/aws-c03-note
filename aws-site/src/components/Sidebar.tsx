import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import type { Service } from '../data/types'
import { CATEGORIES } from '../data/types'
import { Icon } from './Icons'

export function Sidebar({
  services,
  activeId,
  onNavigate,
  onSearch,
  open,
  onClose,
  theme,
  onToggleTheme,
}: {
  services: Service[]
  activeId?: string
  onNavigate: (id: string) => void
  onSearch: () => void
  open: boolean
  onClose: () => void
  theme: string
  onToggleTheme: () => void
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const grouped = useMemo(() => {
    return CATEGORIES.map((cat) => ({
      cat,
      items: services.filter((s) => s.category === cat.id),
    })).filter((g) => g.items.length > 0)
  }, [services])

  const go = (id: string) => {
    onNavigate(id)
    onClose()
  }

  return (
    <aside className={`sidebar${open ? ' open' : ''}`}>
      <div className="sidebar-head">
        <button className="brand" onClick={() => go('')}>
          <span className="brand-badge">AWS</span>
          <span>
            <span className="brand-title">AWS 服務筆記</span>
            <br />
            <span className="brand-sub">每個服務一頁 · {services.length} 頁</span>
          </span>
        </button>
      </div>

      <button className="search-trigger" onClick={onSearch}>
        <Icon.search />
        搜尋服務…
        <span className="kbd">⌘K</span>
      </button>

      <div className="sidebar-scroll">
        {grouped.map(({ cat, items }) => {
          const isCollapsed = collapsed[cat.id]
          return (
            <div className="nav-section" key={cat.id}>
              <button
                className="nav-label"
                data-open={!isCollapsed}
                onClick={() => setCollapsed((c) => ({ ...c, [cat.id]: !c[cat.id] }))}
              >
                <Icon.chevron size={11} />
                <span>
                  {cat.emoji} {cat.name}
                </span>
                <span style={{ marginLeft: 'auto', fontWeight: 400 }}>{items.length}</span>
              </button>
              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    {items.map((s) => {
                      const active = s.id === activeId
                      return (
                        <button
                          key={s.id}
                          className={`nav-item${active ? ' active' : ''}`}
                          onClick={() => go(s.id)}
                        >
                          {active && (
                            <motion.span
                              layoutId="nav-active"
                              className="nav-active-bg"
                              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                            />
                          )}
                          <span className="emoji">{s.emoji}</span>
                          <span className="nav-text">{s.name}</span>
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <div className="sidebar-foot">
        <button className="icon-btn" onClick={onToggleTheme} title="切換深色模式">
          {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
        </button>
        <span style={{ fontSize: 11.5, color: 'var(--text-3)', marginLeft: 'auto' }}>
          筆記整理 · 非官方文件
        </span>
      </div>
    </aside>
  )
}
