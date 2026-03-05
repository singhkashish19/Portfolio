import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi'

interface Project {
  id: number
  title: string
  description: string
  problem: string
  approach: string
  impact: string
  metrics?: {
    latency?: string
    accuracy?: string
    precision?: string
    time_saved?: string
    throughput?: string
    availability?: string
    consistency?: string
    efficiency?: string
    hallucination?: string
    scale?: string
    storage?: string
  }
  tags: string[]
  github: string
  demo: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const contentVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.06,
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  }

  return (
    <motion.div
      className={`hover-lift group border rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500 ${
        project.featured 
          ? 'border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 hover:border-cyan-400/50' 
          : 'border-gray-800 hover:border-blue-500/50 bg-gray-900/30 hover:bg-gray-900/50'
      }`}
      whileHover={{ scale: 1.02, y: -4 }}
      layout
    >
      {/* Featured badge */}
      {project.featured && (
        <motion.div 
          className="absolute top-4 right-4 z-10 px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Featured
        </motion.div>
      )}
      {/* Card header */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
            animate={{ rotate: isExpanded ? 180 : 0 }}
          >
            <FiChevronDown size={20} />
          </motion.button>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {Object.entries(project.metrics).slice(0, 4).map(([key, value], i) => (
              <motion.div
                key={key}
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <p className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</p>
                <p className="text-sm font-semibold text-cyan-400">{value}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tags */}
        <motion.div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, isExpanded ? project.tags.length : 3).map((tag, i) => (
            <motion.span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-800/50 hover:bg-cyan-900/50 hover:border-cyan-700 transition-all cursor-default"
              custom={i}
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.08 }}
            >
              {tag}
            </motion.span>
          ))}
          {!isExpanded && project.tags.length > 3 && (
            <motion.span
              className="text-xs px-3 py-1 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24, duration: 0.4 }}
            >
              +{project.tags.length - 3} more
            </motion.span>
          )}
        </motion.div>

        {/* Expandable details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="mb-4 pt-4 border-t border-gray-800 space-y-3"
            >
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <p className="text-xs font-semibold text-cyan-400 mb-1">Problem</p>
                <p className="text-sm text-gray-300">{project.problem}</p>
              </motion.div>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <p className="text-xs font-semibold text-blue-400 mb-1">Approach</p>
                <p className="text-sm text-gray-300">{project.approach}</p>
              </motion.div>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <p className="text-xs font-semibold text-green-400 mb-1">Impact</p>
                <p className="text-sm text-gray-300">{project.impact}</p>
              </motion.div>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs font-semibold text-gray-400 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors"
                      custom={i}
                      variants={tagVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.4 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-gray-800">
          <motion.a
            href={project.github}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            whileHover={{ x: 2 }}
          >
            <FiGithub size={18} />
            Code
          </motion.a>
          {project.demo !== '#' && (
            <motion.a
              href={project.demo}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              whileHover={{ x: 2 }}
            >
              <FiExternalLink size={18} />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
