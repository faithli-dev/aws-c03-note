import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/** 捲動進入視窗時淡入 + 上移，Notion 式的輕量動畫 */
export function Reveal({
  children,
  delay = 0,
  className,
  style,
  id,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  id?: string
  as?: 'div' | 'section' | 'li'
}) {
  const reduce = useReducedMotion()
  const MotionTag = (motion as unknown as Record<string, typeof motion.div>)[
    as === 'section' ? 'section' : as === 'li' ? 'li' : 'div'
  ]
  return (
    <MotionTag
      className={className}
      id={id}
      style={style}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px 0px -60px 0px' }}
      transition={{ duration: 0.42, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export function Callout({
  emoji,
  title,
  tone = 'gray',
  children,
}: {
  emoji: string
  title?: string
  tone?: 'gray' | 'blue' | 'green' | 'yellow' | 'red' | 'purple'
  children: ReactNode
}) {
  return (
    <div className={`callout ${tone}`}>
      <span className="co-emoji">{emoji}</span>
      <div>
        {title && <span className="callout-title">{title}</span>}
        {children}
      </div>
    </div>
  )
}
