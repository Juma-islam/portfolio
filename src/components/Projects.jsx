import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Web Application')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const projects = [
    {
      id: 1,
      title: "SaaS Analytics Platform",
      description: "A comprehensive dashboard for SaaS metrics. Designed to visualize complex data streams into actionable insights. Features include real-time charts and exportable reports.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwN7NqLCubzlw-omgaz4zB1teO24ELfvgN9I81PJzOT7rbwrmnvlVKVdxTnZhCferj0QSWZ6BgVmbFOlEMcAwENkjVt5nzdBw_TFDBbx9x_Lb538zl1wLcCW4zeIdGYlDso7y6upOZ9Pedsa6JLYo9_pUwVf5kI5CEz8Wh1LUcsfp60x2rlP4Ez5TFcLTjcWAYSsiiBO94vIJ1kZ_n3J-vzYRRxlosAo0Sq-sGvNzG_gHghQdvUnZeDx6a8woIxZrr35Ca5mtN",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Task Management App", 
      description: "Kanban-style project management tool for teams. Features drag-and-drop interface, real-time collaboration, and deadline tracking.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiwgZ1Xm43Q_Jv9u2JIPBlW7w8p7bj_LEWwhA-9CcXi6K4skaqRb1oRv-LBvWW7r185v56RJiayFKBbgc26VT4Tp6ETVMVG0s7MS-OwuzdfR8v-9bemcWa2gh36xTziy76kp7VAx9vubTzrVJg1Y7HiLbDt4GhUBP7N-OeuIxeszQrPYFBreoz01VP2uQltJ9Re6MUCtlyQ870BqgpEdPPPg7F0ns7CcnI6d-2rqldsjCC02jqNrxDD4sFpSHNwLIB-3nm5yOP",
      category: "Web Application"
    },
    {
      id: 3,
      title: "Construction Inventory",
      description: "Corporate website for an industrial logistics firm. Modern layout focusing on clear structure, strong visuals, and intuitive navigation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu7w-WvTHJTz14Bz4Pi3pKkD7iSAG7Fdv7QflP_J9wOmHLTFRF68weQotDRdxzj0W33YcwawLj2JfPHgtBokVpO5mPcvbI6_BtzZULhdSwRIulCJpc44YNZcecPAv1804EDAXiP8MkXnff7d35kdtm1kk1c9a8eGOvxlMtj3urF8yfvosulO2l-koxBymWVzcZX6XkXixWPMxu2igfUKVMFMNUplFTGKS97IS-WAqYTGjZVskPvwm7iZ-O8z3GftpE7PFJv_8z",
      category: "Web Application"
    }
  ]

  const filters = ['Web Application', 'Mobile Application']

  const filteredProjects = projects.filter(project => project.category === activeFilter)

  const handleProjectView = (projectId) => {
    console.log('View project:', projectId)
  }

  const handleProjectCode = (projectId) => {
    console.log('View code:', projectId)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const projectVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  }

  const filterVariants = {
    active: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
    },
    inactive: {
      scale: 1,
      boxShadow: "0 0 0px rgba(168, 85, 247, 0)"
    }
  }

  return (
    <section className="py-24" id="projects" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'border border-gray-700 hover:border-primary text-gray-500 hover:text-primary dark:text-gray-400'
                }`}
                variants={filterVariants}
                animate={activeFilter === filter ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all group flex flex-col h-full"
                variants={projectVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)"
                }}
                layout
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img 
                    alt={project.title}
                    className="w-full h-full object-cover" 
                    src={project.image}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button 
                      onClick={() => handleProjectView(project.id)}
                      className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="material-icons">visibility</span>
                    </motion.button>
                    <motion.button 
                      onClick={() => handleProjectCode(project.id)}
                      className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="material-icons">code</span>
                    </motion.button>
                  </motion.div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <motion.h3 
                    className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <motion.button 
                      onClick={() => handleProjectCode(project.id)}
                      className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary dark:hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Repository
                    </motion.button>
                    <motion.button 
                      onClick={() => handleProjectView(project.id)}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Demo
                    </motion.button>
                  </motion.div>
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