import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCode, FiTerminal } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isHoveringTop, setIsHoveringTop] = useState(false)

  const socials = [
    { icon: FiGithub, href: 'https://github.com/singhkashish19', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/singh-kashish', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:kashishsingh281105@gmail.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gray-800 dark:border-gray-700 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          y: [0, -10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FiTerminal className="text-white text-lg" />
                </div>
                <motion.h3
                  className="text-xl font-bold text-white"
                  whileHover={{ x: 4 }}
                >
                  Kashish Singh
                </motion.h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Backend Engineer • ML Systems • Quantitative Trading
              </p>
              <p className="text-gray-500 text-xs italic">
                Building scalable systems and exploring market inefficiencies.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
                <FiCode className="text-cyan-400" />
                Navigation
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Trading', href: '#trading' },
                  { label: 'Contact', href: '#contact' },
                ].map((item, i) => (
                  <motion.li
                    key={item.label}
                    custom={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={item.href}
                      className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white">Let's Connect</h4>
              <div className="flex gap-3">
                {socials.map((social, i) => {
                  const Icon = social.icon
                  const bgColors = [
                    'hover:bg-gray-700 hover:border-cyan-500/50',
                    'hover:bg-blue-600 hover:border-blue-400/50',
                    'hover:bg-cyan-600 hover:border-cyan-400/50'
                  ]
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.label !== 'Email' ? '_blank' : undefined}
                      rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all ${bgColors[i]} group`}
                      custom={i}
                      variants={socialVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                {socials[0].label === 'GitHub' && 'Check out my code'}
                {socials[1].label === 'LinkedIn' && 'Let\'s connect professionally'}
                {socials[2].label === 'Email' && 'Or just say hi'}
              </p>
            </motion.div>
          </div>

          {/* Divider with animation */}
          <motion.div
            className="border-t border-gray-800 my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />

          {/* Bottom section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-1">
              <p>&copy; {currentYear} Kashish Kumar Singh. All rights reserved.</p>
              <p className="text-xs text-gray-600">
                Built with curiosity, trial and error🧿.
              </p>
            </div>

            <motion.div className="flex items-center gap-2">
              <span className="text-gray-400">Crafted with code</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-cyan-400 text-lg"
              >
                <FiCode />
              </motion.span>
              <span className="text-gray-400">and confusion</span>
            </motion.div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              onMouseEnter={() => setIsHoveringTop(true)}
              onMouseLeave={() => setIsHoveringTop(false)}
              className="p-3 rounded-lg bg-gray-800/50 hover:bg-cyan-600 border border-gray-700/50 hover:border-cyan-500/50 text-gray-400 hover:text-white transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <motion.div
                animate={isHoveringTop ? { y: [0, -4, 0] } : { y: 0 }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                <FiArrowUp size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
