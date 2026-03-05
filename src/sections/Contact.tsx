import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMessageCircle, FiCoffee, FiCode } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'

const Contact = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const contactItems = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'kashishsingh281105@gmail.com',
      href: 'mailto:kashishsingh281105@gmail.com',
      description: 'Best for serious inquiries'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'singhkashish19',
      href: 'https://github.com/singhkashish19',
      description: 'Check out my code'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'singh-kashish',
      href: 'https://www.linkedin.com/in/singh-kashish/',
      description: 'Let\'s connect professionally'
    }
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/90 dark:bg-transparent backdrop-blur-sm">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section title */}
          <motion.div variants={titleVariants} className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-4">
              Got an idea?
            </motion.h2>
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto text-lg mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's build something interesting. Or just tell me what you’re working on — good projects usually start with random conversations...
            </motion.p>
            <motion.div
              className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FiCoffee className="text-cyan-400" />
              <span>Low latency responses. Usually.</span>
              <FiCode className="text-cyan-400" />
            </motion.div>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              const bgColors: Record<number, string> = {
                0: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-400/50',
                1: 'from-gray-500/20 to-gray-600/20 border-gray-500/30 hover:border-gray-400/50', 
                2: 'from-blue-500/20 to-purple-500/20 border-blue-500/30 hover:border-blue-400/50'
              }
              const iconColors: Record<number, string> = {
                0: 'text-cyan-400',
                1: 'text-gray-400',
                2: 'text-blue-400'
              }
              
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.label !== 'Email' ? '_blank' : undefined}
                  rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className={`h-full p-6 rounded-xl border bg-gradient-to-br ${bgColors[index]} transition-all cursor-pointer hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm`}
                    whileHover={{
                      y: -4,
                    }}
                  >
                    <motion.div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900/50 mb-4 group-hover:bg-gray-900/70 transition-colors`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className={`${iconColors[index]}`} size={24} />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-3">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      {item.description}
                    </p>
                    <motion.div
                      className="mt-4 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      {item.label === 'Email' ? 'Send message' : 'View profile'} →
                    </motion.div>
                  </motion.div>
                </motion.a>
              )
            })}
          </div>

          {/* Fun CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl max-w-2xl mx-auto backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FiMessageCircle className="text-cyan-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">
                  What's on your mind?
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                Project idea, question, something interesting to discuss, or found a bug on this site? 
                <br className="hidden sm:block" />
                <span className="text-cyan-400 font-medium">I'll call the last one an "Undocumented feature".</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:kashishsingh281105@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-cyan-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail size={18} />
                  Send a message
                </motion.a>
                <motion.a
                  href="https://github.com/singhkashish19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded-lg font-medium transition-all hover:bg-gray-800/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={18} />
                  View my work
                </motion.a>
              </div>
              <p className="text-xs text-gray-500 mt-6 italic">
                Response time: Usually faster than a Docker build on slow internet
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
