import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const floatingIconsRef = useRef([])

  useEffect(() => {
    // Simple floating animation without GSAP ScrollTrigger
    floatingIconsRef.current.forEach((icon, index) => {
      if (icon) {
        // Ensure icons are visible from start
        icon.style.transform = 'scale(1) rotate(0deg)'
        icon.style.opacity = '1'
        
        // Add entrance animation after a delay
        setTimeout(() => {
          icon.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          icon.style.transform = 'scale(1.1) rotate(10deg)'
          
          // Return to normal after animation
          setTimeout(() => {
            icon.style.transform = 'scale(1) rotate(0deg)'
          }, 800)
        }, 1500 + index * 300)
      }
    })
  }, [])

  const handleDownloadCV = () => {
    console.log('Download CV clicked')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1, rotate: 0, opacity: 1 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.5
      }
    }
  }

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.6, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20" id="home" ref={heroRef}>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6 text-center md:text-left order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-white dark:text-white"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 40px rgba(168, 85, 247, 0.8)",
                  "0 0 20px rgba(168, 85, 247, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Meriem
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-400"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
            variants={itemVariants}
          >
            Building modern, responsive, and user-friendly web experiences with passion and precision. Let's turn ideas into reality.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
            variants={itemVariants}
          >
            <motion.button 
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <motion.span 
                className="material-icons text-sm"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                download
              </motion.span>
            </motion.button>
            
            <div className="flex items-center justify-center gap-4 px-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="material-icons text-lg">code</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: -360 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="material-icons text-lg">work</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="relative order-1 md:order-2 flex justify-center">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full filter blur-[60px] opacity-40"
            variants={glowVariants}
            initial={{ opacity: 0.4, scale: 1 }}
            animate="animate"
          />
          
          <motion.div 
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-gray-800/50 dark:border-white/10 overflow-hidden shadow-2xl glow-box"
            variants={imageVariants}
            initial="visible"
            animate="visible"
            ref={imageRef}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              alt="Meriem working at a laptop" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvbA-LysyGe47kIhpZ0GSlhnzNmmCJtBU9pBduAnc63a-IhCpuLvEm1j7AADSoZztAqkKdD5WwRKNWqeUQOWT_Muggl8nhadmPNIz4-vpxipPvHKEFektUzRj8kBZLZ4lPYngOI9jx791wV_c9vM3wPtdiKJmrltXjWBU4a-YRJJPogI-5V_2dTytZgedmMPftP7ZuAxD1iv9vFQzS5MeCeFJbhMW-pH1cMFghtvtmnCWsjSRVvL2XILx5mRfXmTRoYoBKXtXM"
            />
          </motion.div>
          
          {/* Floating Icons */}
          <div 
            ref={el => floatingIconsRef.current[0] = el}
            className="absolute top-0 right-10 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-lg cursor-pointer floating-icon"
          >
            <span className="material-icons text-yellow-500 text-xl">javascript</span>
          </div>
          
          <div 
            ref={el => floatingIconsRef.current[1] = el}
            className="absolute bottom-10 left-4 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-lg cursor-pointer floating-icon"
          >
            <span className="material-icons text-blue-400 text-lg">data_object</span>
          </div>
          
          <div 
            ref={el => floatingIconsRef.current[2] = el}
            className="absolute bottom-4 right-20 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-lg cursor-pointer floating-icon"
          >
            <span className="material-icons text-green-500 text-sm">storage</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero