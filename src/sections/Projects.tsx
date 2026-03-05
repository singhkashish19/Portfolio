import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const ref = useInView()

  const projects = [
    {
      id: 1,
      title: 'RAG Pipeline System',
      description: 'End-to-end Retrieval-Augmented Generation pipeline for context-aware question answering over custom document datasets.',
      problem: 'LLM hallucination and lack of domain grounding in enterprise applications.',
      approach: 'Implemented chunking strategies, vector embeddings with Milvus database, semantic retrieval, and LLM-based answer generation.',
      impact: '35% improvement in answer relevance, 40% reduction in hallucinations, <1s retrieval latency over 10K+ documents.',
      metrics: {
        latency: '<1s',
        accuracy: '+35%',
        hallucination: '-40%',
        scale: '10K+ docs'
      },
      tags: ['Python', 'LangChain', 'Vector Database', 'Hugging Face', 'Milvus'],
      github: 'https://github.com/singhkashish19/RAG-with-Langchain',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Job Recommendation API',
      description: 'Scalable REST API for intelligent job matching using NLP and similarity-based ranking algorithms.',
      problem: 'Information overload in job search leading to poor candidate-job matches.',
      approach: 'Built NLP feature extraction pipeline with cosine similarity scoring and deployed as containerized FastAPI service.',
      impact: '2× improvement in match precision, 60% reduction in manual search time for candidates.',
      metrics: {
        precision: '+200%',
        time_saved: '-60%',
        throughput: '1K+ req/s',
        latency: '<100ms'
      },
      tags: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas', 'Docker', 'NLP'],
      github: 'https://github.com/singhkashish19/Job-recommendation-service',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Scalable URL Shortener',
      description: 'High-performance URL shortening service with collision-safe encoding and sub-100ms redirection.',
      problem: 'Long URLs are inefficient for sharing and tracking; naive implementations fail under high load.',
      approach: 'Designed FastAPI service with unique key generation, PostgreSQL persistence, and optimized redirection logic.',
      impact: 'Sub-100ms redirection latency, handles high-volume traffic with collision-safe encoding.',
      metrics: {
        latency: '<100ms',
        availability: '99.9%',
        throughput: '10K+ req/s',
        storage: 'PostgreSQL'
      },
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
      github: 'https://github.com/singhkashish19/Scalable-URL-Shortener',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Insurance Premium Predictor',
      description: 'ML-powered REST API for real-time insurance premium prediction based on risk factors.',
      problem: 'Manual premium estimation is inconsistent and inefficient for large-scale operations.',
      approach: 'Trained regression model with feature engineering pipeline and deployed as FastAPI service.',
      impact: 'Automated risk-based pricing with <100ms inference latency and improved consistency.',
      metrics: {
        latency: '<100ms',
        accuracy: '92%',
        consistency: '+85%',
        efficiency: '+300%'
      },
      tags: ['Python', 'Uvicorn', 'Scikit-learn', 'Pandas', 'Docker', 'ML'],
      github: 'https://github.com/singhkashish19/insurance-premium-api',
      demo: '#',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
              Featured Projects
            </motion.h2>
            <motion.p className="text-gray-400 text-lg max-w-2xl">
              Production-ready systems demonstrating expertise in backend engineering, ML deployment, and scalable architecture
            </motion.p>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full origin-left mt-4"
              variants={underlineVariants}
            />
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
