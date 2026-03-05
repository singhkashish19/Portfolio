import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="min-h-screen pt-32 pb-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="max-w-3xl mx-auto z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Professional Realistic Boy Coding Illustration */}
        <motion.div
          variants={itemVariants}
          className="mb-10"
        >
          <motion.div 
            className="w-64 h-64 relative flex items-center justify-center"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {/* Minimal modern vector logo of focused programmer */}
            <svg viewBox="0 0 280 280" className="w-full h-full">
              <defs>
                {/* Dark tech gradient background */}
                <radialGradient id="bgGradient" cx="50%" cy="40%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="70%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
                
                {/* Neon blue glow for screen */}
                <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0891b2" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
                </linearGradient>
                
                {/* Soft glow lighting effect */}
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Circular avatar composition with dark gradient */}
              <circle cx="140" cy="140" r="130" fill="url(#bgGradient)" />
              <circle cx="140" cy="140" r="130" fill="none" stroke="url(#screenGlow)" strokeWidth="1" opacity="0.3" />
              
              {/* Minimal programmer figure */}
              <g transform="translate(140, 140)">
                
                {/* Head - clean geometric shape */}
                <ellipse cx="0" cy="-35" rx="18" ry="20" fill="#f8fafc" />
                
                {/* Hair - minimal geometric style */}
                <path d="M -18,-50 Q 0,-55 18,-50 L 18,-42 L -18,-42 Z" fill="#1e293b" />
                
                {/* Glasses - clean rectangular frames */}
                <g>
                  <rect x="-14" y="-38" width="10" height="8" rx="1" fill="none" stroke="#334155" strokeWidth="1.5" />
                  <rect x="4" y="-38" width="10" height="8" rx="1" fill="none" stroke="#334155" strokeWidth="1.5" />
                  <line x1="-4" y1="-34" x2="4" y2="-34" stroke="#334155" strokeWidth="1.5" />
                </g>
                
                {/* Code reflection on face */}
                <g opacity="0.4">
                  <rect x="-12" y="-36" width="6" height="1" fill="#0891b2" />
                  <rect x="-12" y="-34" width="4" height="1" fill="#06b6d4" />
                  <rect x="6" y="-36" width="5" height="1" fill="#0891b2" />
                  <rect x="6" y="-34" width="3" height="1" fill="#06b6d4" />
                </g>
                
                {/* Focused eyes */}
                <circle cx="-9" cy="-34" r="1.5" fill="#1e293b" />
                <circle cx="9" cy="-34" r="1.5" fill="#1e293b" />
                
                {/* Subtle mouth */}
                <path d="M -6,-26 Q 0,-24 6,-26" stroke="#94a3b8" strokeWidth="1" fill="none" strokeLinecap="round" />
                
                {/* Body - leaning forward slightly */}
                <g transform="rotate(-5)">
                  <rect x="-15" y="-10" width="30" height="35" rx="3" fill="#1e293b" />
                  <rect x="-13" y="-8" width="26" height="30" rx="2" fill="#334155" />
                </g>
                
                {/* Arms positioned for typing */}
                <rect x="-20" y="0" width="8" height="25" rx="2" fill="#1e293b" transform="rotate(-20 -16 0)" />
                <rect x="12" y="0" width="8" height="25" rx="2" fill="#1e293b" transform="rotate(20 16 0)" />
                
                {/* Minimal laptop */}
                <g transform="translate(0, 20)">
                  {/* Laptop base */}
                  <rect x="-25" y="0" width="50" height="28" rx="2" fill="#1e293b" />
                  <rect x="-23" y="2" width="46" height="24" rx="1" fill="#0f172a" />
                  
                  {/* Glowing screen */}
                  <rect x="-21" y="4" width="42" height="20" rx="1" fill="url(#screenGlow)" filter="url(#softGlow)" />
                  
                  {/* Minimal code lines */}
                  <g fontFamily="monospace" fontSize="4" opacity="0.9">
                    <text x="-19" y="8" fill="#0891b2">const dev =</text>
                    <text x="-19" y="12" fill="#06b6d4">{'  () => {'}</text>
                    <text x="-19" y="16" fill="#0284c7">    return</text>
                    <text x="-19" y="20" fill="#0891b2">      'AI'</text>
                  </g>
                  
                  {/* Keyboard */}
                  <rect x="-27" y="28" width="54" height="4" rx="1" fill="#475569" />
                </g>
                
                {/* Floating code elements - futuristic vibe */}
                <g opacity="0.3">
                  <text x="-35" y="-25" fontSize="5" fill="#0891b2" fontFamily="monospace">AI</text>
                  <text x="30" y="-35" fontSize="5" fill="#06b6d4" fontFamily="monospace">API</text>
                  <text x="-30" y="50" fontSize="5" fill="#0284c7" fontFamily="monospace">ML</text>
                </g>
                
                {/* Neon highlights */}
                <circle cx="-20" cy="-30" r="1.5" fill="#0891b2" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="25" cy="-25" r="1.5" fill="#06b6d4" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Outer glow ring */}
              <circle cx="140" cy="140" r="125" fill="none" stroke="url(#screenGlow)" strokeWidth="0.5" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.2;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight mb-4">
            Kashish Singh
          </h1>
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 font-medium text-sm">👋 ハロー・ワールド</span>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-2">
            Computer Science Engineer
          </p>
          <p className="text-gray-400 text-lg">
            Backend Systems • Machine Learning • Quantitative Trading
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 max-w-3xl"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Building scalable backend systems and production-ready ML services.
            <span className="text-cyan-400 font-semibold"> Strong in algorithms and quantitative analysis.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">C++ • Python</span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">FastAPI • Systems</span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">ML Deployment • Trading Systems</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-medium text-base flex items-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3.5 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white rounded-lg font-medium text-base transition-all bg-cyan-500/5 hover:bg-cyan-500/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border border-cyan-500/40 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              className="w-0.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
