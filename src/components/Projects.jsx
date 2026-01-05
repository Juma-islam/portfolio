import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Web Application")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // ======= YOUR REAL PROJECTS =======
  const projects = [
    {
      id: 1,
      title: "CleanConnect",
      description:
        "A community-based platform where users can report local issues, donate, and track problem resolutions in real time.",
      image: "https://i.ibb.co.com/mwsSL8s/clean-Connect.jpg",
      category: "Web Application",
      demo: "https://clean-connect-project.netlify.app",
      repo: "https://github.com/Juma-islam/assignment-number-10-client.git",
    },
    {
      id: 2,
      title: "Garments Tracker",
      description:
        "A production-focused platform that enables garment factories to manage orders, track production stages, monitor inventory, and ensure timely delivery through a centralized, real-time system.",
      image: "https://i.ibb.co.com/rKS2M04P/banner.png",
      category: "Web Application",
      demo: "https://garments-tracker-projects.netlify.app/",
      repo: "https://github.com/Juma-islam/assignment-number-11-client.git",
    },
    {
      id: 3,
    title: "Green Nest Project",
      description:
        "A community-driven platform that allows users to report local environmental issues, monitor ongoing resolutions, and contribute through donations, enabling real-time tracking and collective action for a cleaner, greener neighborhood.",
      image: "https://i.ibb.co.com/KjL3mvBq/banner-2.jpg",
      category: "Web Application",
      demo: "https://garments-tracker-projects.netlify.app/",
      repo: "https://github.com/Juma-islam",
    },
    {
      id: 4,
   title: "Productive Apps",
      description:
        "A productivity-focused platform that helps teams and individuals manage tasks, track progress, organize workflows, and ensure timely completion through a centralized, real-time system.",
      image: "https://i.ibb.co.com/SX2KKTBN/card-4.jpg",
      category: "Web Application",
      demo: "https://magical-druid-8444a1.netlify.app/.app/",
      repo: "https://github.com/Juma-islam/assignment-number-08",
    },
  ]

  const filters = ["Web Application", "Mobile Application"]

  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter
  )

  const openLink = (url) => {
    window.open(url, "_blank")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const projectVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="py-24" id="projects" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* ===== Header ===== */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* ===== Filters ===== */}
          <div className="flex justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "border border-gray-700 text-gray-500 hover:text-primary dark:text-gray-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ===== Projects Grid ===== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 group flex flex-col"
                variants={projectVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)",
                }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-between mt-auto pt-4 border-t dark:border-gray-800">
                    <motion.button
                      onClick={() => openLink(project.repo)}
                      className="text-xs font-semibold px-3 py-1 rounded-full border hover:border-primary hover:text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      Repository
                    </motion.button>
                    <motion.button
                      onClick={() => openLink(project.demo)}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      Demo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
