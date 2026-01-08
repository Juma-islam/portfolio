import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const services = [
    {
      icon: "web",
      title: "Web Application Development",
      description: "Building responsive and scalable web applications"
    },
    {
      icon: "smartphone", 
      title: "Frontend Development",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: "psychology",
      title: "Problem Solving",
      description: "Analyzing complex problems and delivering solutions"
    }
  ]

  useEffect(() => {
    if (imageRef.current && isInView) {
      // Enhanced image animation
      imageRef.current.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
      
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transform = 'scale(1) rotate(0deg)'
          imageRef.current.style.filter = 'grayscale(0%) brightness(1.1)'
        }
      }, 300)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const serviceVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  }

  const imageVariants = {
    hidden: { scale: 0.8, rotate: -5, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.3
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="py-24 relative overflow-hidden" id="about" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full filter blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-secondary/8 to-purple-500/8 rounded-full filter blur-[80px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Passionate developer crafting digital experiences with modern technologies
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Enhanced Image Section - Left Side */}
          <motion.div 
            className="relative flex justify-center items-start"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Background Glow Effects */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-secondary/15 rounded-3xl filter blur-[40px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main Image Container - Square Shape */}
            <motion.div 
              className="relative w-full max-w-md aspect-square"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Decorative Border Elements */}
              <motion.div
                className="absolute -inset-4 rounded-3xl border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-2 rounded-3xl border border-secondary/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image with Square Shape */}
              <motion.div 
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  alt="Juma Islam - Professional Developer" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                  src="https://i.ibb.co.com/wZ0ct1yX/image-5-Photoroom.png"
                  ref={imageRef}
                />
                
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-secondary to-purple-500 rounded-lg shadow-lg"
                animate={{
                  scale: [1, 0.8, 1],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Tech Stack Icons */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 bg-yellow-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 15 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span className="material-icons text-white text-lg">javascript</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 right-4 w-10 h-10 bg-blue-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: -15 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <span className="material-icons text-white text-lg">data_object</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 w-10 h-10 bg-green-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <span className="material-icons text-white text-lg">storage</span>
              </motion.div>
            </motion.div>

            {/* Professional Badge */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm">MERN Stack Developer</span>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Content Section - Right Side */}
          <motion.div 
            className="flex flex-col justify-start space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4"
                whileHover={{ scale: 1.02 }}
              >
                I'm Juma Islam
              </motion.h3>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.p 
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6"
                variants={itemVariants}
              >
                I am a Front-End / MERN Stack Web Developer focused on building modern, responsive, and user-friendly web applications.
              </motion.p>
            </motion.div>
            
            {/* Compact Content Cards */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.div 
                className="p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)"
                }}
              >
                <h4 className="text-primary font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="material-icons text-xl">rocket_launch</span>
                  Programming Journey
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Started 1.5 years ago with curiosity about web development. Evolved from simple HTML/CSS to mastering React, Node.js, MongoDB, and modern web technologies.
                  I work mainly with React, JavaScript, Tailwind CSS, Node.js, and MongoDB to create clean, efficient, and scalable solutions. I enjoy learning new technologies and turning ideas into real-world digital experiences through thoughtful design and clean code.
                </p>
              </motion.div>
              
              {/* <motion.div 
                className="p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)"
                }}
              >
                <h4 className="text-primary font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="material-icons text-xl">favorite</span>
                  What I Love
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Building interactive UIs and solving complex problems. Turning ideas into functional applications that make a difference in people's lives.
                </p>
              </motion.div> */}
              
              {/* <motion.div 
                className="p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)"
                }}
              >
                <h4 className="text-primary font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="material-icons text-xl">sports_cricket</span>
                  Beyond Code
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Cricket enthusiast, tech blogger, and travel photographer. These hobbies bring fresh perspectives to my development work.
                </p>
              </motion.div> */}
            </motion.div>
            
            {/* Compact Services Grid */}
            <motion.div 
              className="space-y-3"
              variants={itemVariants}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all"
                  variants={serviceVariants}
                  custom={index}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(168, 85, 247, 0.12)"
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-md"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="material-icons text-lg">{service.icon}</span>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-gray-900 dark:text-gray-200 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Compact Stats Section */}
            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
              variants={itemVariants}
            >
              {[
                { number: "1.5+", label: "Years Exp" },
                { number: "15+", label: "Projects" },
                { number: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <motion.h4 
                    className="text-xl font-bold text-primary mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About