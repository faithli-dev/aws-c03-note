import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/** 追蹤元素尺寸（用於互動圖的座標計算，必須是實際像素才能在 HTML/SVG 兩邊對齊） */
export function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setSize({ width: el.clientWidth, height: el.clientHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('orientationchange', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('orientationchange', update)
    }
  }, [])

  return { ref, ...size }
}

/** 以 hash 為基礎的路由（file:// 開啟也能用） */
export function useHashRoute() {
  const read = () => decodeURIComponent(window.location.hash.replace(/^#\/?/, ''))
  const [route, setRoute] = useState(read)

  useEffect(() => {
    const onHash = () => setRoute(read())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = useCallback((id: string) => {
    const next = id ? `#/${id}` : '#/'
    if (window.location.hash === next) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.location.hash = next
  }, [])

  return { route, navigate }
}

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('aws-notes-theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      /* ignore */
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem('aws-notes-theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}

/** 側邊欄的 anchor 高亮：回傳目前視線範圍中最靠近頂部的 section id */
export function useScrollSpy(ids: string[], deps: unknown[] = []) {
  const [active, setActive] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    if (ids.length === 0) return
    let frame = 0
    const compute = () => {
      frame = 0
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= 130) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|'), ...deps])

  return active
}

/** ⌘K / Ctrl+K 快捷鍵 */
export function useHotkey(combo: 'mod+k' | 'mod+\\', handler: () => void) {
  const ref = useRef(handler)
  ref.current = handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey
      if (!mod) return
      if (combo === 'mod+k' && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        ref.current()
      }
      if (combo === 'mod+\\' && e.key === '\\') {
        e.preventDefault()
        ref.current()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [combo])
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setMatches(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return matches
}

/** 讀取 CSS 變數（畫圖時要跟主題色一致） */
export function useCssVars(names: string[], deps: unknown[] = []) {
  return useMemo(() => {
    const styles = getComputedStyle(document.documentElement)
    const out: Record<string, string> = {}
    for (const n of names) out[n] = styles.getPropertyValue(n).trim()
    return out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
