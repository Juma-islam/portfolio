import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const services = [
    {
      icon: "web",
      title: "Web Application Development"
    },
    {
      icon: "smartphone", 
      title: "Front-End Development"
    },
    {
      icon: "psychology",
      title: "Problem Solving"
    }
  ]

  useEffect(() => {
    if (imageRef.current) {
      // Simple CSS animation instead of GSAP - non-blocking
      imageRef.current.style.transition = 'all 1.2s ease-out'
      
      // Add subtle entrance animation after component mounts
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transform = 'scale(1) rotate(0deg)'
          imageRef.current.style.filter = 'grayscale(0%)'
        }
      }, 500)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const serviceVariants = {
    hidden: { x: 0, opacity: 1 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  const imageVariants = {
    hidden: { scale: 1, rotate: 0, opacity: 1 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "back.out(1.7)"
      }
    }
  }

  return (
    <section className="py-24 relative" id="about" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 80 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative flex justify-center"
            variants={imageVariants}
            initial="visible"
            animate="visible"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 p-2 relative">
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-secondary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center" }}
              />
              <img 
                alt="Meriem graduation photo" 
                className="w-full h-full object-cover rounded-full shadow-lg grayscale hover:grayscale-0 transition-all duration-500" 
                src="https://i.ibb.co.com/wZ0ct1yX/image-5-Photoroom.png"
                ref={imageRef}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="visible"
            animate="visible"
          >
            <motion.h3 
              className="text-2xl font-bold text-primary"
              variants={itemVariants}
            >
              I'm Juma Islam
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              I am a Front-End / MERN Stack Web Developer focused on building modern, responsive, and user-friendly web applications.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              I work mainly with React, JavaScript, Tailwind CSS, Node.js, and MongoDB to create clean, efficient, and scalable solutions. I enjoy learning new technologies and turning ideas into real-world digital experiences through thoughtful design and clean code.
            </motion.p>
            
            <div className="space-y-4 pt-4">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors group"
                  variants={serviceVariants}
                  initial="visible"
                  animate="visible"
                  custom={index}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)"
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="material-icons">{service.icon}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">{service.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About