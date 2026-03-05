import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

const Logo = ({ size = 'md', animate = true }: LogoProps) => {
  const sizeMap = {
    sm: { container: 'w-8 h-8', inner: 'w-6 h-6', code: 'text-xs' },
    md: { container: 'w-10 h-10', inner: 'w-8 h-8', code: 'text-sm' },
    lg: { container: 'w-12 h-12', inner: 'w-10 h-10', code: 'text-base' },
  }

  const { container, inner } = sizeMap[size]

  const containerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  }

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${container}`}
      variants={animate ? containerVariants : undefined}
      initial="rest"
      whileHover="hover"
    >
      {/* Subtle outer glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-md"
        animate={animate ? { 
          opacity: [0.2, 0.4, 0.2]
        } : undefined}
        transition={animate ? { duration: 4, repeat: Infinity } : undefined}
      />

      {/* Main container */}
      <div className="relative w-full h-full">
        {/* Simple rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-green-500/30"
          animate={animate ? { 
            rotate: 360,
            borderColor: ['#10b98130', '#3b82f630', '#a855f730', '#10b98130']
          } : undefined}
          transition={animate ? { duration: 12, repeat: Infinity, ease: 'linear' } : undefined}
        />

        {/* Center content */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center ${inner} rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-green-500/20`}
          animate={animate ? { 
            borderColor: ['#10b98120', '#3b82f620', '#a855f720', '#10b98120']
          } : undefined}
          transition={animate ? { duration: 6, repeat: Infinity } : undefined}
        >
          {/* KS with brackets */}
          <div className="flex items-center gap-0.5">
            <motion.span 
              className="font-mono font-bold text-green-400"
              animate={animate ? { 
                color: ['#10b981', '#3b82f6', '#a855f7', '#10b981']
              } : undefined}
              transition={animate ? { duration: 6, repeat: Infinity } : undefined}
            >
              {'{'}
            </motion.span>
            
            <motion.span
              className="font-bold text-white tracking-tighter"
              animate={animate ? { 
                textShadow: [
                  '0 0 8px rgba(16, 185, 129, 0.3)',
                  '0 0 12px rgba(59, 130, 246, 0.4)',
                  '0 0 10px rgba(168, 85, 247, 0.3)',
                  '0 0 8px rgba(16, 185, 129, 0.3)'
                ]
              } : undefined}
              transition={animate ? { duration: 6, repeat: Infinity } : undefined}
            >
              KS
            </motion.span>
            
            <motion.span 
              className="font-mono font-bold text-green-400"
              animate={animate ? { 
                color: ['#10b981', '#3b82f6', '#a855f7', '#10b981']
              } : undefined}
              transition={animate ? { duration: 6, repeat: Infinity, delay: 1 } : undefined}
            >
              {'}'}
            </motion.span>
          </div>

          {/* Subtle cursor effect */}
          {animate && (
            <motion.div
              className="absolute right-1 w-0.5 h-2 bg-green-400"
              animate={{ 
                opacity: [1, 0, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Logo
