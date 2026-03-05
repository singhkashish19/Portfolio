import { motion } from 'framer-motion'
import { FiCode, FiServer, FiLayout, FiTool, FiZap, FiTrendingUp } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'

const Skills = () => {
  const ref = useInView()

  const skillCategories = [
    {
      category: 'Core Languages',
      icon: FiCode,
      skills: ['C++', 'Python', 'JavaScript', 'SQL'],
      color: 'blue',
      level: 'expert'
    },
    {
      category: 'Backend Systems',
      icon: FiServer,
      skills: ['FastAPI', 'REST APIs', 'System Design', 'PostgreSQL'],
      color: 'green',
      level: 'advanced'
    },
    {
      category: 'Core Concepts',
      icon: FiServer,
      skills: ['Data Structures', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'Algorithms'],
      color: 'green',
      level: 'expert'
    },
    {
      category: 'AI/ML & Data Science',
      icon: FiZap,
      skills: ['Scikit-learn', 'Probability & Statistics', 'TensorFlow', 'Exploratary Data Analysis (EDA)', 'RAG Pipelines'],
      color: 'purple',
      level: 'advanced'
    },
    {
      category: 'Data & Databases',
      icon: FiTrendingUp,
      skills: ['DBMS', 'Data Cleaning & Preprocessing', 'Data Analysis', 'SQL'],
      color: 'orange',
      level: 'advanced'
    },
    {
      category: 'DevOps & Tools',
      icon: FiTool,
      skills: ['Docker', 'Git', 'GitHub Actions', 'AWS (Fundamentals)', 'VS Code'],
      color: 'cyan',
      level: 'intermediate'
    },
    {
      category: 'Libraries & Frameworks',
      icon: FiTool,
      skills: ['C++ STL', 'Numpy & Pandas', 'Pydantic', 'Matplotlib', ''],
      color: 'cyan',
      level: 'advanced'
    },
    {
      category: 'Frontend',
      icon: FiLayout,
      skills: ['HTML', 'React', 'CSS', 'Framer Motion'],
      color: 'pink',
      level: 'intermediate'
    }
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
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: 'easeOut',
      },
    }),
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100/90 dark:bg-transparent backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section title */}
          <motion.div variants={titleVariants} className="mb-16 text-center">
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Arsenal
            </motion.h2>
            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specialized skills across backend engineering, machine learning, and quantitative trading
            </motion.p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon
              const colorClasses: Record<string, string> = {
                blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-400/50',
                green: 'from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400/50',
                purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400/50',
                orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/30 hover:border-orange-400/50',
                cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:border-cyan-400/50',
                pink: 'from-pink-500/20 to-pink-600/10 border-pink-500/30 hover:border-pink-400/50'
              }
              const iconColors: Record<string, string> = {
                blue: 'text-blue-400',
                green: 'text-green-400',
                purple: 'text-purple-400',
                orange: 'text-orange-400',
                cyan: 'text-cyan-400',
                pink: 'text-pink-400'
              }
              const levelBadges: Record<string, string> = {
                expert: 'bg-green-500/20 text-green-400 border-green-500/30',
                advanced: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
                intermediate: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
              }

              return (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="group"
                >
                  <div className={`h-full p-6 rounded-xl border bg-gradient-to-br ${colorClasses[category.color]} transition-all hover:scale-[1.02] backdrop-blur-sm`}>
                    {/* Category header with icon and level */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`p-2.5 rounded-lg bg-gray-900/50 group-hover:bg-gray-900/70 transition-colors`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className={`${iconColors[category.color]} w-5 h-5`} />
                        </motion.div>
                        <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors">
                          {category.category}
                        </h3>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${levelBadges[category.level]}`}>
                        {category.level}
                      </span>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          custom={i}
                          variants={skillVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <motion.span
                            className="px-3 py-1.5 bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700 hover:border-gray-600 rounded-md text-xs font-medium text-gray-300 hover:text-gray-100 transition-all cursor-default"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: 'rgba(255, 255, 255, 0.05)'
                            }}
                          >
                            {skill}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
