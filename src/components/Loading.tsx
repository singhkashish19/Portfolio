import { motion } from 'framer-motion'
import { FiLoader } from 'react-icons/fi'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
}

const Loading = ({ size = 'md', text, fullScreen = false }: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const containerClasses = fullScreen 
    ? 'min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900'
    : 'flex items-center justify-center'

  return (
    <div className={containerClasses}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className={`${sizeClasses[size]} text-cyan-500 mx-auto mb-4`}
        >
          <FiLoader className="w-full h-full" />
        </motion.div>
        
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

export default Loading
