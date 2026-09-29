import { Fragment, type ReactNode } from 'react'

/**
 * 極簡 inline markdown：**粗體**、`code`、[[serviceId|顯示文字]] 內部連結
 */
export function Rich({
  text,
  onLink,
}: {
  text: string
  onLink?: (id: string) => void
}): ReactNode {
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[\[[^\]]+\]\])/g
  const parts = text.split(pattern).filter((p) => p !== '')
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i}>{part.slice(1, -1)}</code>
        }
        if (part.startsWith('[[') && part.endsWith(']]')) {
          const body = part.slice(2, -2)
          const [id, label] = body.split('|')
          return (
            <a
              key={i}
              className="link"
              onClick={(e) => {
                e.preventDefault()
                onLink?.(id.trim())
              }}
            >
              {label ?? id}
            </a>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
