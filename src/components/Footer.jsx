import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Footer = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-50px" })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.footer 
      className="relative py-12 border-t border-gray-200/60 dark:border-gray-900/60 bg-gradient-to-b from-white to-gray-50/50 dark:from-[#020202] dark:to-black/50 overflow-hidden"
      ref={footerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <motion.button 
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold relative group overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95, y: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
            whileHover={{ scale: 1.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
          <span className="relative text-gray-800 dark:text-white drop-shadow-sm">
            Juma Islam
            <motion.span 
              className="text-primary text-xs align-top ml-1"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4
              }}
            >
              &lt;/&gt;
            </motion.span>
          </span>
        </motion.button>
        
        <motion.div 
          className="text-xs text-gray-500 dark:text-gray-500 font-medium tracking-wide"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            className="relative"
            whileHover={{ color: "#a855f7" }}
            transition={{ duration: 0.3 }}
          >
            © 2024 All rights reserved.
          </motion.span>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-500 dark:text-gray-500 font-medium"
          variants={itemVariants}
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative hover:text-primary transition-all duration-300 px-2 py-1 rounded group"
              whileHover={{ 
                y: -3, 
                scale: 1.05,
                color: "#a855f7"
              }}
              whileTap={{ y: 0, scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.06 + 0.5, 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              <span className="relative z-10 drop-shadow-sm">{link.name}</span>
              <motion.div
                className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
      
      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.footer>
  )
}

export default Footer