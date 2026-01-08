import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { 
  FaGithub, 
  FaExternalLinkAlt 
} from 'react-icons/fa'

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "CleanConnect",
      description: "A community-based platform where users can report local issues, donate, and track problem resolutions in real time.",
      image: "https://i.ibb.co.com/mwsSL8s/clean-Connect.jpg",
      demo: "https://clean-connect-project.netlify.app",
      repo: "https://github.com/Juma-islam/assignment-number-10-client.git",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      fullDescription: "CleanConnect is a comprehensive community platform designed to address local environmental and infrastructure issues. Users can report problems like broken streetlights, potholes, or waste management issues, while also contributing through donations to support resolution efforts.",
      challenges: "The main challenge was implementing real-time updates across multiple user roles while maintaining data consistency. We also had to design an intuitive reporting system that works across different device types.",
      improvements: "Future plans include adding AI-powered issue categorization, mobile app development, integration with local government APIs, and implementing a reward system for active community members."
    },
    {
      id: 2,
      title: "Garments Tracker",
      description: "A production-focused platform that enables garment factories to manage orders, track production stages, monitor inventory, and ensure timely delivery through a centralized, real-time system.",
      image: "https://i.ibb.co.com/rKS2M04P/banner.png",
      demo: "https://garments-tracker-projects.netlify.app/",
      repo: "https://github.com/Juma-islam/assignment-number-11-client.git",
      technologies: ["React", "Firebase", "Node.js", "Express", "Chart.js"],
      fullDescription: "Garments Tracker is an enterprise-level production management system specifically designed for garment manufacturing. It provides comprehensive order management, real-time production tracking, inventory monitoring, and delivery scheduling.",
      challenges: "Managing complex production workflows with multiple stages and dependencies was challenging. We also needed to ensure the system could handle high-volume data processing while maintaining real-time updates.",
      improvements: "Planned enhancements include predictive analytics for production planning, IoT integration for automated data collection, advanced reporting with custom dashboards, and mobile applications for floor workers."
    },
    {
      id: 3,
      title: "Green Nest Project",
      description: "A community-driven platform that allows users to report local environmental issues, monitor ongoing resolutions, and contribute through donations, enabling real-time tracking and collective action for a cleaner, greener neighborhood.",
      image: "https://i.ibb.co.com/KjL3mvBq/banner-2.jpg",
      demo: "https://green-nest-project.netlify.app/",
      repo: "https://github.com/Juma-islam",
      technologies: ["React", "MongoDB", "Express", "Node.js", "Stripe API"],
      fullDescription: "Green Nest is an environmental activism platform that empowers communities to take collective action on local environmental issues. Users can report problems, track resolution progress, organize cleanup events, and contribute financially to environmental initiatives.",
      challenges: "Creating an engaging user experience that motivates community participation was crucial. We also faced challenges in implementing secure payment processing for donations and creating effective communication tools.",
      improvements: "Future developments include gamification features to increase engagement, partnership integrations with environmental organizations, advanced analytics for impact measurement, and expansion to support multiple languages."
    },
    // {
    //   id: 4,
    //   title: "Productive Apps",
    //   description: "A productivity-focused platform that helps teams and individuals manage tasks, track progress, organize workflows, and ensure timely completion through a centralized, real-time system.",
    //   image: "https://i.ibb.co.com/SX2KKTBN/card-4.jpg",
    //   demo: "https://magical-druid-8444a1.netlify.app/.app/",
    //   repo: "https://github.com/Juma-islam/assignment-number-08",
    //   technologies: ["React", "Firebase", "Material-UI", "Context API", "PWA"],
    //   fullDescription: "Productive Apps is a comprehensive productivity suite designed for both individual users and teams. It combines task management, project tracking, time management, and collaboration tools in a unified platform. The application supports multiple project views, real-time collaboration, and detailed analytics for productivity insights.",
    //   challenges: "The biggest challenge was creating a flexible system that works for both individual users and large teams without becoming overly complex. We also needed to implement efficient real-time synchronization across multiple devices and users while maintaining optimal performance.",
    //   improvements: "Upcoming features include AI-powered task prioritization, advanced time tracking with automated suggestions, integration with popular third-party tools like Slack and Google Workspace, and enhanced mobile experience with offline capabilities."
    // }
  ]

  // Modal functions
  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        handleCloseModal()
      }
    }

    if (modalOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [modalOpen])

  const openLink = (url) => {
    window.open(url, "_blank")
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="projects" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-purple-400/15 rounded-full filter blur-3xl"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Here are some of my recent projects that showcase my skills and experience in web development.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Tech Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                >
                  {project.technologies[0]}
                </motion.div>
              </div>

              {/* Project Content */}
              <motion.div 
                className="p-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              >
                <motion.h3 
                  className="text-xl font-bold text-gray-800 dark:text-white mb-3"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                >
                  {project.description}
                </motion.p>

                {/* Technology Stack */}
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + 0.8 + techIndex * 0.1 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.span 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + 1.1 }}
                      >
                        +{project.technologies.length - 3}
                      </motion.span>
                    )}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.9 }}
                >
                  <motion.button
                    onClick={() => handleViewDetails(project)}
                    className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <span>View Details</span>
                  </motion.button>
                  
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => openLink(project.demo)}
                      className="flex-1 py-2 px-3 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
                    >
                      <FaExternalLinkAlt className="mr-1 text-xs" />
                      <span>Live Demo</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={() => openLink(project.repo)}
                      className="flex-1 py-2 px-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center group relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gray-100 dark:bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      />
                      <FaGithub className="mr-1 text-xs relative z-10" />
                      <span className="relative z-10">GitHub</span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold transition-colors"
              >
                ×
              </button>

              {/* Project Image */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  {selectedProject.title}
                </h2>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                    <span className="mr-2">🛠️</span>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                    <span className="mr-2">📝</span>
                    Project Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                    <span className="mr-2">⚡</span>
                    Challenges Faced
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Future Plans */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                    <span className="mr-2">🚀</span>
                    Future Enhancements
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.improvements}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => openLink(selectedProject.demo)}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="mr-2">🌐</span>
                    View Live Project
                  </button>
                  <button
                    onClick={() => openLink(selectedProject.repo)}
                    className="flex-1 border-2 border-purple-500 text-purple-500 dark:text-purple-400 dark:border-purple-400 py-3 px-6 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="mr-2">💻</span>
                    GitHub Repository
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects