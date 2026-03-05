import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiCode, FiTerminal, FiGlobe, FiCpu, FiTrendingUp, FiLayers } from 'react-icons/fi'

const About = () => {
  const ref = useInView()

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
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  const focusAreas = [
    {
      icon: FiCode,
      title: 'Backend Systems',
      description: 'Building scalable APIs and distributed systems',
      color: 'cyan'
    },
    {
      icon: FiCpu,
      title: 'Machine Learning',
      description: 'Production deployment and optimization',
      color: 'blue'
    },
    {
      icon: FiTrendingUp,
      title: 'Quantitative Trading',
      description: 'Systematic strategies and risk management',
      color: 'purple'
    },
    {
      icon: FiLayers,
      title: 'System Design',
      description: 'Architecture and performance optimization',
      color: 'green'
    }
  ]

  const highlights = [
    { label: 'Problems Solved', value: '250+' },
    { label: 'Projects Built', value: '10+' },
    { label: 'Certifications', value: '3+' },
    { label: 'hrs. Sleep', value: '8+' }
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100/90 dark:bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 text-slate-950 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 rounded-full mt-6"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Card */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-800 dark:border-gray-700 shadow-2xl">
                {/* Profile Header */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <FiTerminal className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Kashish Singh</h3>
                  <p className="text-gray-400 text-sm">Computer Science Engineer</p>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  I build backend systems and machine learning pipelines. My work focuses on scalable architecture, performance optimization, and systematic approaches to complex problems.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Engineering Philosophy */}
              <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <FiGlobe className="text-cyan-400" />
                  Engineering Approach
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    I approach software development as a systematic process. Whether designing distributed systems or optimizing ML pipelines, I focus on understanding the fundamental constraints and building solutions that scale.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    My interest extends to financial markets, where I apply similar analytical thinking to develop trading strategies and risk management systems.
                  </p>
                </div>
              </div>

              {/* Focus Areas Grid */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Areas of Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {focusAreas.map((area, i) => {
                    const Icon = area.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-800/30 dark:to-gray-900/30 rounded-xl p-6 border border-gray-700/50 dark:border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-${area.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`text-${area.color}-400 text-xl`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold mb-1">{area.title}</h4>
                              <p className="text-gray-400 text-sm">{area.description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Current Work */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Currently Building</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    'Retrieval-augmented AI systems',
                    'Backend services and API infrastructure',
                    'Forex trading strategy experiments'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
