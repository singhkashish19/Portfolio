import { Component, ErrorInfo, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    
    // You could also log to an error reporting service here
    // logErrorToService(error, errorInfo)
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
        >
          <div className="text-center max-w-md">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FiAlertCircle className="text-red-600 dark:text-red-400 text-2xl" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {this.state.error?.message || 'An unexpected error occurred while rendering this page.'}
            </p>
            
            <motion.button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiRefreshCw size={18} />
              Try Again
            </motion.button>
            
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-6">
              If this problem persists, please refresh the page or contact me.
            </p>
          </div>
        </motion.div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
