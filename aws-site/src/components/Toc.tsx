import { motion } from 'framer-motion'
import type { SectionDef } from './ServicePage'
import { useScrollSpy } from '../lib/hooks'

export function Toc({ sections, deps }: { sections: SectionDef[]; deps: unknown[] }) {
  const active = useScrollSpy(
    sections.map((s) => s.id),
    deps,
  )
  if (sections.length === 0) return null
  return (
    <nav className="toc">
      <div className="toc-label">目錄</div>
      {sections.map((s) => (
        <button
          key={s.id}
          className={`toc-item${active === s.id ? ' active' : ''}`}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          {active === s.id && (
            <motion.span
              layoutId="toc-active"
              style={{
                position: 'absolute',
                left: 0,
                top: 6,
                bottom: 6,
                width: 2,
                borderRadius: 2,
                background: 'var(--text)',
              }}
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            />
          )}
          <span style={{ paddingLeft: 8 }}>
            {s.emoji} {s.label}
          </span>
        </button>
      ))}
    </nav>
  )
}
