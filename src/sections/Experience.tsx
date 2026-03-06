import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiBriefcase } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const ref = useInView()

  const educationTimeline = [
    {
      id: 1,
      icon: FaGraduationCap,
      period: '2024 - Present',
      title: 'B.E. Computer Science',
      organization: 'Panjab University',
      description:
        'Pursuing rigorous CS curriculum focused on algorithms, systems, and advanced concepts. GPA: 8.65/10.0',
      highlights: [
        'Data Structures & Algorithms - Advanced C++ implementation',
        'Operating Systems - Concurrency, scheduling, memory management',
        'Database Systems - SQL optimization, indexing strategies',
      ],
    },
  ]

  const experienceTimeline = [
    {
      id: 2,
      icon: FiBriefcase,
      period: '2025 - 2026',
      title: 'Data Science Intern',
      organization: 'EvoAstra Ventures Inc.',
      description: 'Developed data processing pipelines and infrastructure to support reliable machine learning experimentation and model training.',
      highlights: [
        'Built modular Python pipelines to process raw business data into validated ML-ready features',
        'Introduced schema validation and data integrity checks to improve pipeline stability',
        'Reduced data-related training failures by enforcing structured preprocessing workflows',
        
      ],
    },
  
  ]

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  }

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  }

  const highlightVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  }

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100/90 dark:bg-transparent backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section title */}
          <motion.div variants={titleVariants} className="mb-16">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience & Education
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-blue-500 rounded-full origin-left"
              variants={underlineVariants}
            />
          </motion.div>

          {/* Education block */}
          <div className="mb-12">
            <motion.h3 className="text-2xl font-semibold mb-6">Education</motion.h3>
            <div className="space-y-12">
              {educationTimeline.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-12"
                >
                  {/* icon dot */}
                  <motion.div
                    className="absolute left-0 top-0 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full border-4 border-bg-dark flex items-center justify-center"
                  >
                    <item.icon className="text-white w-3 h-3" />
                  </motion.div>
                  {idx !== educationTimeline.length - 1 && (
                    <motion.div
                      className="absolute left-2 md:left-3 top-6 md:top-9 w-0.5 h-32 md:h-40 bg-gradient-to-b from-green-500 to-transparent"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                      viewport={{ once: true }}
                      style={{ originY: 0 }}
                    />
                  )}

                  {/* content for education */}
                  <motion.div
                    className="pb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.p
                      className="text-sm font-semibold text-green-400 mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.period}
                    </motion.p>
                    <motion.h3
                      className="text-xl font-bold mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.organization}
                    </motion.p>
                    <motion.p
                      className="text-gray-300 text-sm mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Highlights */}
                    <motion.div className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="text-sm text-gray-400 flex items-start gap-3 hover-glow"
                          custom={i}
                          variants={highlightVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ x: 4, color: '#93c5fd' }}
                        >
                          <motion.span
                            className="text-green-400 mt-0.5 flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                          >
                            •
                          </motion.span>
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience & trading block */}
          <div>
            <motion.h3 className="text-2xl font-semibold mb-6">Professional Experience</motion.h3>
            <div className="space-y-12">
              {experienceTimeline.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-12"
                >
                  {/* timeline dot and line */}
                  <motion.div
                    className="absolute left-0 top-0 w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full border-4 border-bg-dark flex items-center justify-center"
                  >
                    <item.icon className="text-white w-3 h-3" />
                  </motion.div>
                  {idx !== experienceTimeline.length - 1 && (
                    <motion.div
                      className="absolute left-2 md:left-3 top-6 md:top-9 w-0.5 h-32 md:h-40 bg-gradient-to-b from-blue-500 to-transparent"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                      viewport={{ once: true }}
                      style={{ originY: 0 }}
                    />
                  )}

                  {/* content for experience */}
                  <motion.div
                    className="pb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.p
                      className="text-sm font-semibold text-blue-400 mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.period}
                    </motion.p>
                    <motion.h3
                      className="text-xl font-bold mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.organization}
                    </motion.p>
                    <motion.p
                      className="text-gray-300 text-sm mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Highlights */}
                    <motion.div className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="text-sm text-gray-400 flex items-start gap-3 hover-glow"
                          custom={i}
                          variants={highlightVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ x: 4, color: '#93c5fd' }}
                        >
                          <motion.span
                            className="text-blue-400 mt-0.5 flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                          >
                            •
                          </motion.span>
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div> {/* close experience block wrapper */}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
