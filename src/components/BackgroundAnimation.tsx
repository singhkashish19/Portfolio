import { motion } from 'framer-motion'

// Subtle trading-themed background animation (restored but minimal)
const BackgroundAnimation = () => {
  const stockSymbols = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN', 'NVDA', 'META', 'BTC', 'ETH']
  const priceChanges = [2.4, -1.2, 3.8, -0.5, 1.9, 4.2, -2.1, 5.6, -3.3]

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Subtle gradient panel */}
      <div className="absolute inset-0 bg-animated" />
      
      {/* Stock ticker tape */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-8 bg-black/15 backdrop-blur-sm border-b border-white/8 overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="flex items-center h-full gap-8 px-4"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {[...stockSymbols, ...stockSymbols].map((symbol, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-cyan-400/50 font-mono text-xs font-medium">{symbol}</span>
              <span className={`font-mono text-xs ${priceChanges[i % priceChanges.length] >= 0 ? 'text-green-400/50' : 'text-red-400/50'}`}>
                {priceChanges[i % priceChanges.length] >= 0 ? '+' : ''}{priceChanges[i % priceChanges.length]}%
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Multiple chart lines */}
      {[0, 1].map((chartIndex) => (
        <motion.svg
          key={chartIndex}
          viewBox="0 0 1200 250"
          className="absolute inset-0 w-full h-full opacity-12"
          preserveAspectRatio="none"
          style={{ transform: `translateY(${chartIndex * 80}px)` }}
        >
          <motion.path
            d={chartIndex === 0 
              ? "M0,180 L150,160 L300,170 L450,140 L600,150 L750,120 L900,130 L1050,100 L1200,110"
              : "M0,150 L200,130 L400,160 L600,120 L800,140 L1000,110 L1200,130"
            }
            fill="none"
            stroke={chartIndex === 0 ? "rgba(34, 211, 238, 0.5)" : "rgba(168, 85, 247, 0.5)"}
            strokeWidth={1.5}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 18 + chartIndex * 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      ))}

      {/* Minimal floating candlesticks */}
      {[...Array(5)].map((_, i) => {
        const isGreen = Math.random() > 0.4
        const bodyHeight = 18 + Math.random() * 22
        const wickHeight = 10 + Math.random() * 15
        
        return (
          <motion.div
            key={`candle-${i}`}
            className="absolute"
            style={{
              top: `${15 + i * 12}%`,
              left: `${8 + i * 18}%`,
            }}
            animate={{
              x: [0, 12, 0],
              y: [0, -10, 0],
              rotate: [0, 3, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{ 
              duration: 22 + i * 4, 
              repeat: Infinity, 
              ease: 'easeInOut'
            }}
          >
            <div className="relative flex flex-col items-center">
              {/* Upper wick */}
              <div 
                className={`w-0.5 ${isGreen ? 'bg-green-400/35' : 'bg-red-400/35'}`}
                style={{ height: `${wickHeight}px` }}
              />
              
              {/* Candle body */}
              <div 
                className={`w-1.5 ${isGreen ? 'bg-green-500/35' : 'bg-red-500/35'} rounded-sm`}
                style={{ height: `${bodyHeight}px` }}
              />
              
              {/* Lower wick */}
              <div 
                className={`w-0.5 ${isGreen ? 'bg-green-400/35' : 'bg-red-400/35'}`}
                style={{ height: `${wickHeight * 0.6}px` }}
              />
            </div>
          </motion.div>
        )
      })}

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut'
          }}
        >
          <div className={`w-full h-full rounded-full ${i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-green-400'}`} />
        </motion.div>
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${350 + i * 120}px`,
            height: `${350 + i * 120}px`,
            top: `${-15 + i * 35}%`,
            left: `${-25 + i * 45}%`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(34, 211, 238, 0.08)' : 'rgba(168, 85, 247, 0.08)'} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 28 + i * 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default BackgroundAnimation
