import { motion } from 'framer-motion'

interface LoadingSkeletonProps {
  count?: number
  height?: string
}

export const LoadingSkeleton = ({ count = 3, height = 'h-12' }: LoadingSkeletonProps) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`${height} bg-gray-800 rounded-lg overflow-hidden relative`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundSize: '200% 100%',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
