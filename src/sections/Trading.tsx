import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiTrendingUp, FiActivity, FiShield } from 'react-icons/fi'

const Trading = () => {
  const ref = useInView()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  // Generate realistic candlestick data
  const generateCandlestickData = () => {
    const data = []
    let basePrice = 1.0842
    
    for (let i = 0; i < 20; i++) {
      const volatility = 0.002
      const trend = Math.sin(i * 0.3) * 0.001
      const open = basePrice
      const close = basePrice + (Math.random() - 0.5) * volatility + trend
      const high = Math.max(open, close) + Math.random() * volatility * 0.5
      const low = Math.min(open, close) - Math.random() * volatility * 0.5
      
      data.push({
        x: i * 20,
        open: parseFloat(open.toFixed(4)),
        high: parseFloat(high.toFixed(4)),
        low: parseFloat(low.toFixed(4)),
        close: parseFloat(close.toFixed(4)),
        isGreen: close >= open
      })
      
      basePrice = close
    }
    
    return data
  }

  const candlestickData = generateCandlestickData()
  
  // Debug: log the data to see if it's generating correctly
  console.log('Candlestick data:', candlestickData)

  return (
    <section id="trading" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100/90 dark:bg-transparent backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-950 dark:text-white flex items-center justify-center gap-3">
              <FiTrendingUp className="text-cyan-600 dark:text-cyan-400" />
              Systematic Trading
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Quantitative research and systematic strategy development for financial markets
            </motion.p>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Main content */}
          <div className="space-y-12">
            {/* Trading Philosophy */}
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <motion.p 
                className="text-slate-700 dark:text-gray-300 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Research and development of rule-based trading strategies focused on price action, technical indicators, and disciplined risk management.

                I study market structure and test trading ideas through historical data and structured backtesting. My focus is on building simple, rule-driven strategies and refining them through data and consistent execution across forex and commodities markets.
              </motion.p>
            </motion.div>

            {/* Trading Approach Grid */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Strategy Development',
                  description: 'Design rule-based trading strategies using price action, session breakouts, and technical indicators.',
                  icon: FiActivity,
                  color: 'cyan'
                },
                {
                  title: 'Risk Management',
                  description: 'Apply disciplined position sizing, stop-loss rules, and risk-to-reward frameworks to maintain consistent trading performance',
                  icon: FiShield,
                  color: 'blue'
                },
                {
                  title: 'Backtesting & Analysis',
                  description: 'Evaluate strategies through historical testing and performance analysis using Python, Pandas, and TA-Lib.',
                  icon: FiTrendingUp,
                  color: 'purple'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50 hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`text-${item.color}-600 dark:text-${item.color}-400`} size={24} />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Technical Details */}
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <motion.h3 
                className="text-2xl font-semibold text-slate-900 dark:text-white mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Technical Framework
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Markets & Instruments</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      Major currency pairs (EUR/USD, GBP/USD, USD/JPY)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      Commodity futures (Gold, Crude Oil)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      Intraday and swing trading timeframes
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Tools & Technologies</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      Python for analysis and backtesting
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      Pandas, NumPy, and TA-Lib for indicators
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      API integration for execution and data feeds
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Candlestick Chart */}
            <motion.div variants={itemVariants} className="mt-12">
              <motion.div 
                className="w-full h-96 bg-gray-900 dark:bg-black rounded-xl border border-gray-800 dark:border-gray-700 overflow-hidden relative shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                {/* Chart Header */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center justify-between px-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">EUR/USD • H1</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-green-400 font-mono">1.0842</span>
                    <span className="text-gray-400">+0.15%</span>
                  </div>
                </div>
                
                {/* Chart Content */}
                <div className="pt-12 p-4 h-full">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 30" fill="none" stroke="rgba(55, 65, 81, 0.3)" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="300" fill="url(#grid)" />
                    
                    {/* Horizontal grid lines */}
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1="0"
                        y1={i * 30}
                        x2="400"
                        y2={i * 30}
                        stroke="rgba(55, 65, 81, 0.2)"
                        strokeWidth="0.5"
                      />
                    ))}
                    
                    {/* Vertical grid lines */}
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={i * 40}
                        y1="0"
                        x2={i * 40}
                        y2="300"
                        stroke="rgba(55, 65, 81, 0.2)"
                        strokeWidth="0.5"
                      />
                    ))}
                    
                    {/* Candlesticks */}
                    {candlestickData.map((candle, i) => {
                      const scaleY = 20000 // Scale factor for prices (increased for better visibility)
                      const yOffset = 100 // Offset to center the chart
                      const scaledOpen = yOffset + (1.09 - candle.open) * scaleY
                      const scaledClose = yOffset + (1.09 - candle.close) * scaleY
                      const scaledHigh = yOffset + (1.09 - candle.high) * scaleY
                      const scaledLow = yOffset + (1.09 - candle.low) * scaleY
                      
                      // Ensure values are within SVG bounds
                      const clampedOpen = Math.max(10, Math.min(290, scaledOpen))
                      const clampedClose = Math.max(10, Math.min(290, scaledClose))
                      const clampedHigh = Math.max(10, Math.min(290, scaledHigh))
                      const clampedLow = Math.max(10, Math.min(290, scaledLow))
                      
                      return (
                        <g key={i}>
                          {/* Wick */}
                          <line
                            x1={candle.x + 10}
                            y1={clampedHigh}
                            x2={candle.x + 10}
                            y2={clampedLow}
                            stroke={candle.isGreen ? '#10B981' : '#EF4444'}
                            strokeWidth="1.5"
                            opacity={0.9}
                          />
                          {/* Body */}
                          <rect
                            x={candle.x + 6}
                            y={Math.min(clampedOpen, clampedClose)}
                            width="8"
                            height={Math.max(2, Math.abs(clampedOpen - clampedClose))}
                            fill={candle.isGreen ? '#10B981' : '#EF4444'}
                            opacity={0.95}
                          />
                          {/* Glow effect for recent candles */}
                          {i >= candlestickData.length - 3 && (
                            <>
                              <rect
                                x={candle.x + 6}
                                y={Math.min(clampedOpen, clampedClose)}
                                width="8"
                                height={Math.max(2, Math.abs(clampedOpen - clampedClose))}
                                fill={candle.isGreen ? '#10B981' : '#EF4444'}
                                opacity={0.3}
                                filter="blur(3px)"
                              />
                              <line
                                x1={candle.x + 10}
                                y1={clampedHigh}
                                x2={candle.x + 10}
                                y2={clampedLow}
                                stroke={candle.isGreen ? '#10B981' : '#EF4444'}
                                strokeWidth="3"
                                opacity={0.2}
                                filter="blur(2px)"
                              />
                            </>
                          )}
                        </g>
                      )
                    })}
                    
                    {/* Volume bars at bottom */}
                    {candlestickData.slice(-10).map((candle, i) => {
                      const volume = Math.random() * 40 + 10 // Increased volume for visibility
                      const x = candlestickData[candlestickData.length - 10 + i].x + 6
                      return (
                        <rect
                          key={`volume-${i}`}
                          x={x}
                          y={280 - volume}
                          width="8"
                          height={volume}
                          fill={candle.isGreen ? '#10B981' : '#EF4444'}
                          opacity={0.4}
                        />
                      )
                    })}
                    
                    {/* Price labels on the right */}
                    {[1.09, 1.087, 1.084, 1.081, 1.078].map((price, i) => (
                      <text
                        key={price}
                        x="395"
                        y={i * 30 + 5}
                        fill="rgba(156, 163, 175, 0.8)"
                        fontSize="10"
                        textAnchor="end"
                      >
                        {price.toFixed(4)}
                      </text>
                    ))}
                    
                    {/* Time labels at the bottom */}
                    {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map((time, i) => (
                      <text
                        key={time}
                        x={i * 50 + 10}
                        y="295"
                        fill="rgba(156, 163, 175, 0.6)"
                        fontSize="9"
                        textAnchor="middle"
                      >
                        {time}
                      </text>
                    ))}
                  </svg>
                  
                  {/* Chart Legend */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-6 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <span className="text-gray-400">Bullish</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                      <span className="text-gray-400">Bearish</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-2 bg-gray-600 rounded-sm opacity-30"></div>
                      <span className="text-gray-400">Volume</span>
                    </div>
                  </div>
                  
                  {/* Current Price Line */}
                  <div className="absolute top-20 left-0 right-0 flex items-center">
                    <div className="flex-1 h-px bg-green-500 opacity-50"></div>
                    <div className="px-2 py-1 bg-green-500 text-white text-xs font-mono rounded">
                      1.0842
                    </div>
                    <div className="flex-1 h-px bg-green-500 opacity-50"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Trading
