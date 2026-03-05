import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import ErrorBoundary from './components/ErrorBoundary'
import Hero from './sections/Hero'
import About from './sections/About.tsx'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Trading from './sections/Trading'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'

type Theme = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored as Theme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark'
  })

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ErrorBoundary>
      <motion.div
        className="min-h-screen transition-colors duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ScrollProgress />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <BackgroundAnimation />
        
        <main className="overflow-hidden">
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
          <ErrorBoundary>
            <Skills />
          </ErrorBoundary>
          <ErrorBoundary>
            <Experience />
          </ErrorBoundary>
          <ErrorBoundary>
            <Trading />
          </ErrorBoundary>
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
        </main>

        <Footer />
      </motion.div>
    </ErrorBoundary>
  )
}

export default App
