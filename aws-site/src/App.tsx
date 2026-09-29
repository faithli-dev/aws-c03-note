import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { services as allServices } from './data'
import { Home } from './components/Home'
import { SearchPalette } from './components/SearchPalette'
import { ServicePage, serviceSections } from './components/ServicePage'
import { Sidebar } from './components/Sidebar'
import { Toc } from './components/Toc'
import { Icon } from './components/Icons'
import { useHashRoute, useHotkey, useMediaQuery, useTheme } from './lib/hooks'

export function App() {
  const { route, navigate } = useHashRoute()
  const { theme, toggle } = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useHotkey('mod+k', () => setSearchOpen((v) => !v))
  useHotkey('mod+\\', () => setSidebarOpen((v) => !v))

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 34, restDelta: 0.001 })

  const index = useMemo(() => allServices.findIndex((s) => s.id === route), [route])
  const service = index >= 0 ? allServices[index] : undefined

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [route])

  useEffect(() => {
    if (isDesktop) setSidebarOpen(false)
  }, [isDesktop])

  const sections = service ? serviceSections(service) : []

  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ scaleX: progress }} />

      <Sidebar
        services={allServices}
        activeId={service?.id}
        onNavigate={navigate}
        onSearch={() => setSearchOpen(true)}
        open={isDesktop ? true : sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        theme={theme}
        onToggleTheme={toggle}
      />

      {!isDesktop && sidebarOpen && <div className="scrim" onClick={() => setSidebarOpen(false)} />}

      <div className="topbar">
        <button className="icon-btn" onClick={() => setSidebarOpen(true)} title="目錄（⌘\）">
          <Icon.menu />
        </button>
        <button
          className="icon-btn"
          onClick={() => navigate('')}
          style={{ width: 'auto', padding: '0 8px', fontSize: 13, fontWeight: 600 }}
        >
          {service ? service.name : 'AWS 服務筆記'}
        </button>
        <button className="icon-btn" style={{ marginLeft: 'auto' }} onClick={() => setSearchOpen(true)}>
          <Icon.search />
        </button>
        <button className="icon-btn" onClick={toggle}>
          {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
        </button>
      </div>

      <main className="main">
        <div className="main-inner">
          <div className="content">
            <AnimatePresence mode="wait">
              {service ? (
                <ServicePage
                  key={service.id}
                  service={service}
                  services={allServices}
                  onNavigate={navigate}
                  prev={allServices[index - 1]}
                  next={allServices[index + 1]}
                />
              ) : (
                <Home key="home" services={allServices} onNavigate={navigate} onSearch={() => setSearchOpen(true)} />
              )}
            </AnimatePresence>
          </div>
          {service && <Toc sections={sections} deps={[service.id]} />}
        </div>
      </main>

      <SearchPalette
        services={allServices}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  )
}
