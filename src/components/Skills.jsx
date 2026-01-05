import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
  const sectionRef = useRef(null)
  const progressRefs = useRef([])
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const skills = [
    {
      name: "HTML & CSS",
      icon: "html",
      color: "orange-500",
      percentage: 100
    },
    {
      name: "JavaScript", 
      icon: "javascript",
      color: "yellow-400",
      percentage: 90
    },
    {
      name: "Python",
      icon: "code", 
      color: "blue-500",
      percentage: 85
    },
    {
      name: "React",
      icon: "data_object",
      color: "cyan-400", 
      percentage: 80
    },
    {
      name: "SQL & Databases",
      icon: "storage",
      color: "blue-300",
      percentage: 75
    },
    {
      name: "Laravel / PHP",
      icon: "php",
      color: "red-500",
      percentage: 85
    },
    {
      name: "Flutter",
      icon: "smartphone",
      color: "blue-400",
      percentage: 70
    },
    {
      name: "Git & GitHub",
      icon: "call_split",
      color: "orange-600",
      percentage: 90
    }
  ]

  useEffect(() => {
    if (isInView) {
      progressRefs.current.forEach((progressBar, index) => {
        if (progressBar) {
          // Use CSS animation instead of GSAP
          progressBar.style.transition = `width 1.5s ease-out ${index * 0.1}s`
          progressBar.style.width = `${skills[index].percentage}%`
        }
      })
    }
  }, [isInView, skills])

  const getColorClasses = (color, percentage) => {
    const colorMap = {
      'orange-500': 'from-orange-500 to-orange-400',
      'yellow-400': 'from-yellow-400 to-yellow-300',
      'blue-500': 'from-blue-500 to-blue-300',
      'cyan-400': 'from-cyan-500 to-cyan-300',
      'blue-300': 'from-blue-400 to-blue-200',
      'red-500': 'from-red-600 to-red-400',
      'blue-400': 'from-blue-500 to-blue-300',
      'orange-600': 'from-orange-600 to-orange-400'
    }
    return colorMap[color] || 'from-gray-500 to-gray-400'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const skillVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#080808]" id="skills" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={skillVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <motion.span 
                    className={`material-icons text-${skill.color}`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <motion.span 
                  className="text-sm font-semibold text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 1, duration: 0.3 }}
                >
                  {skill.percentage}%
                </motion.span>
              </div>
              
              <div className="flex gap-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  ref={el => progressRefs.current[index] = el}
                  className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(skill.color, skill.percentage)} relative overflow-hidden`}
                  style={{ width: "0%" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/30 shimmer"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: index * 0.2 
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills