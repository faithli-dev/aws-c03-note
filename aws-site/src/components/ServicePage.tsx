import { motion } from 'framer-motion'
import type { Service } from '../data/types'
import { CATEGORIES } from '../data/types'
import { Rich } from './Rich'
import { Callout, Reveal } from './Reveal'
import { Icon } from './Icons'
import { IntegrationGraph } from './ServiceGraph'

const DIR_META = {
  in: { label: 'in · 送進來', cls: 'dir-in' },
  out: { label: 'out · 送出去', cls: 'dir-out' },
  both: { label: 'both · 雙向', cls: 'dir-both' },
} as const

export type SectionDef = { id: string; label: string; emoji: string }

export function serviceSections(s: Service): SectionDef[] {
  const out: SectionDef[] = []
  if (s.intro.length) out.push({ id: 'intro', label: '簡介', emoji: '📌' })
  if (s.concepts?.length) out.push({ id: 'concepts', label: '核心概念', emoji: '🧠' })
  if (s.interactions.length) out.push({ id: 'interactions', label: '與其他服務的互動', emoji: '🔀' })
  if (s.settings.length) out.push({ id: 'settings', label: '重要設定', emoji: '⚙️' })
  if (s.pricing.rows.length) out.push({ id: 'pricing', label: '價錢', emoji: '💸' })
  if (s.cli?.length) out.push({ id: 'cli', label: '快速開始', emoji: '⌨️' })
  if (s.exam?.length || s.gotchas?.length) out.push({ id: 'exam', label: '考試重點 & 陷阱', emoji: '🎯' })
  return out
}

function meterColor(level: number) {
  if (level <= 0) return 'var(--green)'
  if (level <= 2) return 'var(--accent)'
  if (level === 3) return 'var(--orange)'
  return 'var(--red)'
}

function Section({
  def,
  children,
  note,
}: {
  def: SectionDef
  children: React.ReactNode
  note?: string
}) {
  return (
    <Reveal as="section" className="section" id={def.id}>
      <h2 className="section-title" id={def.id}>
        <span>{def.emoji}</span>
        {def.label}
      </h2>
      {note && <p className="section-note">{note}</p>}
      {children}
    </Reveal>
  )
}

export function ServicePage({
  service,
  services,
  onNavigate,
  prev,
  next,
}: {
  service: Service
  services: Service[]
  onNavigate: (id: string) => void
  prev?: Service
  next?: Service
}) {
  const category = CATEGORIES.find((c) => c.id === service.category)
  const ids = new Set(services.map((s) => s.id))
  const secs = serviceSections(service)
  const has = (id: string) => secs.some((s) => s.id === id)
  const cover = categoryCover(service.category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="page-cover" style={cover} />

      <motion.div
        className="page-emoji"
        initial={{ scale: 0.4, rotate: -12, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.05 }}
        whileHover={{ scale: 1.12, rotate: 6 }}
      >
        {service.emoji}
      </motion.div>

      <h1 className="page-title">{service.name}</h1>
      <div className="zh-sub">{service.zh}</div>
      <p className="tagline">
        <Rich text={service.tagline} onLink={onNavigate} />
      </p>

      <div className="meta-row">
        {category && (
          <span className="pill outline">
            {category.emoji} {category.name}
          </span>
        )}
        {service.aliases?.slice(0, 3).map((a) => (
          <span className="pill" key={a}>
            {a}
          </span>
        ))}
        <span className="pill blue">{service.interactions.length} 個服務互動</span>
        <span className="pill">{service.settings.length} 個關鍵設定</span>
      </div>

      {has('intro') && (
        <Section def={secs.find((s) => s.id === 'intro')!}>
          {service.intro.map((p, i) => (
            <motion.p
              className="body"
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Rich text={p} onLink={onNavigate} />
            </motion.p>
          ))}
        </Section>
      )}

      {has('concepts') && (
        <Section def={secs.find((s) => s.id === 'concepts')!} note="先搞懂這些名詞，設定畫面才看得懂">
          <div>
            {service.concepts!.map((c, i) => (
              <Reveal key={c.term} delay={i * 0.03} className="concept">
                <div className="term">{c.term}</div>
                <div className="desc">
                  <Rich text={c.desc} onLink={onNavigate} />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {has('interactions') && (
        <Section
          def={secs.find((s) => s.id === 'interactions')!}
          note="線的方向代表資料流向：綠色送進來、藍色送出去、紫色雙向。點節點可以直接跳到那個服務。"
        >
          <IntegrationGraph service={service} services={services} onNavigate={onNavigate} />
          <div style={{ marginTop: 18 }}>
            {service.interactions.map((it, i) => {
              const target = services.find((s) => s.id === it.to)
              const meta = DIR_META[it.dir]
              return (
                <Reveal
                  key={`${it.to}-${i}`}
                  delay={i * 0.02}
                  className="flow-card"
                  style={{ paddingLeft: 8, paddingRight: 8 }}
                >
                  <span
                    className="pill"
                    style={{ minWidth: 26, justifyContent: 'center', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {i + 1}
                  </span>
                  <div
                    className="flow-body"
                    onClick={() => target && onNavigate(it.to)}
                    style={{ cursor: target ? 'pointer' : 'default' }}
                  >
                    <div className="flow-target">
                      <span style={{ fontWeight: 600 }}>
                        {target?.emoji ?? '🔹'} {target?.name ?? it.to}
                      </span>
                      <span className={`dir-badge ${meta.cls}`}>{meta.label}</span>
                      {!ids.has(it.to) && <span className="pill">外部服務</span>}
                    </div>
                    <div className="flow-how">
                      <Rich text={it.how} onLink={onNavigate} />
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Section>
      )}

      {has('settings') && (
        <Section def={secs.find((s) => s.id === 'settings')!} note="這些是實務上最常調、也最容易設錯的選項">
          <div className="table-wrap">
            <table className="notion">
              <thead>
                <tr>
                  <th style={{ width: '26%' }}>設定項目</th>
                  <th>說明</th>
                  <th style={{ width: 92 }}>類型</th>
                </tr>
              </thead>
              <tbody>
                {service.settings.map((s, i) => (
                  <motion.tr
                    key={s.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.24) }}
                  >
                    <td className="setting-name">{s.name}</td>
                    <td className="setting-desc">
                      <Rich text={s.desc} onLink={onNavigate} />
                    </td>
                    <td>
                      {s.required ? (
                        <span className="pill red">必填</span>
                      ) : s.warn ? (
                        <span className="pill orange">注意</span>
                      ) : (
                        <span className="pill">預設值</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      {has('pricing') && (
        <Section def={secs.find((s) => s.id === 'pricing')!}>
          <Callout emoji="🧮" tone="blue" title="計價模型">
            <Rich text={service.pricing.model} onLink={onNavigate} />
            {service.pricing.free && (
              <>
                <br />
                <strong>免費額度：</strong>
                <Rich text={service.pricing.free} onLink={onNavigate} />
              </>
            )}
          </Callout>
          <div className="grid two" style={{ marginTop: 14 }}>
            {service.pricing.rows.map((r, i) => {
              const level = r.level ?? 0
              return (
                <Reveal key={r.tier} delay={i * 0.04} className="price-card">
                  <div className="price-tier">{r.tier}</div>
                  <div className="price-value">{r.price}</div>
                  <div className="meter" style={{ ['--meter-color' as string]: meterColor(level) }}>
                    {[0, 1, 2, 3, 4].map((k) => (
                      <motion.span
                        key={k}
                        initial={{ scaleX: 0.3, opacity: 0.25 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.04 + k * 0.05 }}
                        className={k < level ? 'on' : ''}
                        style={{ transformOrigin: 'left' }}
                      />
                    ))}
                  </div>
                  <div className="price-note">
                    <Rich text={r.note} onLink={onNavigate} />
                  </div>
                </Reveal>
              )
            })}
          </div>
          {service.pricing.traps?.length ? (
            <div style={{ marginTop: 16 }}>
              <Callout emoji="💡" tone="yellow" title="費用陷阱（考試很愛考、帳單很愛爆）">
                <ul style={{ margin: '4px 0 0', paddingLeft: 18 }}>
                  {service.pricing.traps.map((t) => (
                    <li key={t} style={{ marginBottom: 4 }}>
                      <Rich text={t} onLink={onNavigate} />
                    </li>
                  ))}
                </ul>
              </Callout>
            </div>
          ) : null}
        </Section>
      )}

      {has('cli') && (
        <Section def={secs.find((s) => s.id === 'cli')!} note="用 AWS CLI 或 SDK 最快體驗一次">
          <pre>
            <code>{service.cli!.join('\n')}</code>
          </pre>
        </Section>
      )}

      {has('exam') && (
        <Section def={secs.find((s) => s.id === 'exam')!}>
          <div className="grid two">
            {service.exam?.length ? (
              <Reveal className="card card-accent">
                <div className="card-title">🎯 考試重點</div>
                <ul style={{ margin: '6px 0 0', paddingLeft: 18, fontSize: 14.5, lineHeight: 1.7 }}>
                  {service.exam.map((t) => (
                    <li key={t}>
                      <Rich text={t} onLink={onNavigate} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
            {service.gotchas?.length ? (
              <Reveal delay={0.05} className="card" style={{ borderColor: 'var(--red-soft)' }}>
                <div className="card-title">⚠️ 常見陷阱</div>
                <ul style={{ margin: '6px 0 0', paddingLeft: 18, fontSize: 14.5, lineHeight: 1.7 }}>
                  {service.gotchas.map((t) => (
                    <li key={t}>
                      <Rich text={t} onLink={onNavigate} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
        </Section>
      )}

      <Reveal className="prev-next">
        {prev && (
          <button className="pn" onClick={() => onNavigate(prev.id)}>
            <span className="pn-label">
              <Icon.arrowLeft /> 上一個服務
            </span>
            <span className="pn-name">
              {prev.emoji} {prev.name}
            </span>
          </button>
        )}
        {next && (
          <button className="pn next" onClick={() => onNavigate(next.id)}>
            <span className="pn-label">
              下一個服務 <Icon.arrowRight />
            </span>
            <span className="pn-name">
              {next.emoji} {next.name}
            </span>
          </button>
        )}
      </Reveal>

      <div className="page-foot">
        <div>
          本頁內容依 AWS Certified Solutions Architect – Associate 的學習筆記整理，重點放在「這個服務是什麼、跟誰互動、要調什麼、多少錢」。
        </div>
        <div style={{ marginTop: 6 }}>
          價格為 <strong>us-east-1 / 美金</strong> 的常見參考值，實際費用會依 Region 與用量變動，請以 AWS 官方 Pricing 頁面為準。
        </div>
      </div>
    </motion.div>
  )
}

function categoryCover(category: string): React.CSSProperties {
  const map: Record<string, [string, string]> = {
    compute: ['#ffe6c7', '#ffd6a5'],
    storage: ['#d8f3e5', '#c3ecd6'],
    database: ['#dbe8ff', '#cfe0ff'],
    network: ['#d9f0ff', '#c8e6ff'],
    security: ['#ffe0e0', '#ffd2e8'],
    integration: ['#e8e0ff', '#f3dcff'],
    monitoring: ['#dcf5f0', '#d3f0ff'],
    analytics: ['#fff0c9', '#ffe3c2'],
    ml: ['#f0dcff', '#ffd9ec'],
    migration: ['#e9e5df', '#dfe7e4'],
  }
  const [a, b] = map[category] ?? ['#eeeae4', '#e6e2dc']
  return { ['--cover-a' as string]: a, ['--cover-b' as string]: b }
}
