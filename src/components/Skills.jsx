

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { progressBarAnimation, staggerFadeIn } from "../utils/gsapAnimations"

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const progressRefs = useRef([])
  const skillItemsRef = useRef([])
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const skills = [
    {
      name: "HTML & CSS",
      icon: "html",
      color: "orange-500",
      percentage: 95
    },
    {
      name: "JavaScript",
      icon: "javascript",
      color: "yellow-400",
      percentage: 90
    },
    {
      name: "React.js",
      icon: "data_object",
      color: "cyan-400",
      percentage: 85
    },
    {
      name: "Next.js",
      icon: "code",
      color: "gray-800",
      percentage: 75
    },
    {
      name: "Tailwind CSS",
      icon: "style",
      color: "blue-400",
      percentage: 90
    },
    {
      name: "Node.js",
      icon: "terminal",
      color: "green-500",
      percentage: 75
    },
    {
      name: "Express.js",
      icon: "dns",
      color: "gray-600",
      percentage: 80
    },
    {
      name: "MongoDB",
      icon: "storage",
      color: "green-600",
      percentage: 75
    },
    {
      name: "Firebase",
      icon: "local_fire_department",
      color: "orange-600",
      percentage: 70
    },
    {
      name: "CRUD Operations",
      icon: "sync_alt",
      color: "indigo-500",
      percentage: 85
    },
    {
      name: "Git & GitHub",
      icon: "call_split",
      color: "orange-600",
      percentage: 90
    },
    {
      name: "Vercel",
      icon: "cloud_upload",
      color: "black",
      percentage: 80
    },
    {
      name: "Netlify",
      icon: "cloud_done",
      color: "teal-500",
      percentage: 85
    },
    {
      name: "Problem Solving",
      icon: "psychology",
      color: "purple-500",
      percentage: 85
    }
  ]

  useEffect(() => {
    // GSAP animations for skill items
    if (skillItemsRef.current.length > 0) {
      staggerFadeIn(skillItemsRef.current, 0.2)
    }

    // GSAP animations for progress bars
    progressRefs.current.forEach((progressBar, index) => {
      if (progressBar) {
        progressBarAnimation(progressBar, skills[index].percentage, index * 0.1)
      }
    })

    // Cleanup function
    return () => {
      // Kill all animations for this component
      skillItemsRef.current.forEach(el => {
        if (el) {
          gsap.killTweensOf(el)
        }
      })
      progressRefs.current.forEach(el => {
        if (el) {
          gsap.killTweensOf(el)
        }
      })
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (skillItemsRef.current.includes(trigger.trigger) || 
            progressRefs.current.includes(trigger.trigger)) {
          trigger.kill()
        }
      })
    }
  }, [])

  const getColorClasses = (color) => {
    const colorMap = {
      "orange-500": "from-orange-500 to-orange-400",
      "yellow-400": "from-yellow-400 to-yellow-300",
      "cyan-400": "from-cyan-500 to-cyan-300",
      "gray-800": "from-gray-800 to-gray-600",
      "blue-400": "from-blue-500 to-blue-300",
      "green-500": "from-green-500 to-green-400",
      "gray-600": "from-gray-600 to-gray-500",
      "green-600": "from-green-600 to-green-400",
      "orange-600": "from-orange-600 to-orange-400",
      "indigo-500": "from-indigo-500 to-indigo-400",
      "black": "from-gray-900 to-gray-700",
      "teal-500": "from-teal-500 to-teal-400",
      "purple-500": "from-purple-500 to-purple-400"
    }
    return colorMap[color] || "from-gray-500 to-gray-400"
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
    <section
      className="py-24 bg-gray-50 dark:bg-[#080808]"
      id="skills"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-400">
            My Skills
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillItemsRef.current[index] = el)}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`material-icons text-${skill.color} hover:rotate-12 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </span>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-500">
                  {skill.percentage}%
                </span>
              </div>

              <div className="flex gap-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  ref={(el) => (progressRefs.current[index] = el)}
                  className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(
                    skill.color
                  )} relative overflow-hidden`}
                  style={{ width: "0%" }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
