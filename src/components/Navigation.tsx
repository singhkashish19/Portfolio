import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import Logo from './Logo'

interface NavigationProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

const Navigation = ({ theme, toggleTheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Track active section for highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Trading', href: '#trading' },
    { label: 'Contact', href: '#contact' },
  ]

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md ${
        theme === 'dark'
          ? 'bg-bg-dark/80 border-b border-gray-800'
          : 'bg-bg-light/80 border-b border-gray-200'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo size="md" animate={true} />
            <span className={`text-sm font-bold tracking-tight hidden sm:inline ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Kashish Singh
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 relative py-2 ${
                  theme === 'dark'
                    ? activeSection === item.href.slice(1) 
                      ? 'text-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                    : activeSection === item.href.slice(1)
                      ? 'text-cyan-600'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                    layoutId="activeTab"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right side - Resume, Theme toggle and mobile menu */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Resume Download Button */}
            <motion.a
              href="/Kashish_Kumar_Singh.pdf"
              download="Kashish_Kumar_Singh.pdf"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all shadow-md hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={16} />
              <span className="hidden md:inline">Resume</span>
            </motion.a>

            <motion.button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 hover:text-yellow-300 border border-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900 hover:text-gray-800 border border-gray-300'
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiMenu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mobile Resume Download */}
              <motion.a
                href="/resume.txt"
                download="Resume.txt"
                className="flex items-center gap-3 px-4 py-3 my-3 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all shadow-md"
                custom={navItems.length}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload size={18} />
                Download Resume
              </motion.a>

              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all ${
                    theme === 'dark'
                      ? activeSection === item.href.slice(1)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      : activeSection === item.href.slice(1)
                        ? 'text-cyan-600 bg-cyan-50 border border-cyan-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        layoutId="activeMobile"
                      />
                    )}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
