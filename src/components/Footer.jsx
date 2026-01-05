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
    { name: 'Contact', id: 'contact' }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.footer 
      className="py-8 border-t border-gray-200 dark:border-gray-900/50 bg-white dark:bg-[#020202]"
      ref={footerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.button 
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Juma Islam<span className="text-primary text-xs align-top">&lt;/&gt;</span>
        </motion.button>
        
        <motion.div 
          className="text-xs text-gray-500 dark:text-gray-500"
          variants={itemVariants}
        >
          © 2024 All rights reserved.
        </motion.div>
        
        <motion.div 
          className="flex gap-6 text-xs text-gray-500 dark:text-gray-500 font-medium"
          variants={itemVariants}
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2, color: "#a855f7" }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
            >
              {link.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer