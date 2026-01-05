import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const menuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  }

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 top-0 left-0 backdrop-blur-md transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800/50 shadow-lg' 
          : 'bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800/50'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Juma Islam<span className="text-primary text-sm align-top">&lt;/&gt;</span>
        </motion.button>
        
        <div className="hidden md:flex space-x-8 items-center font-medium text-sm tracking-wide">
          {['home', 'about', 'skills', 'projects'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-primary transition-colors text-gray-600 dark:text-gray-300 capitalize"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
            >
              {item}
            </motion.button>
          ))}
          <motion.button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            Contact
          </motion.button>
        </div>
        
        <motion.button 
          onClick={toggleMenu}
          className="md:hidden text-gray-600 dark:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span 
            className="material-icons"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            menu
          </motion.span>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left hover:text-primary transition-colors text-gray-600 dark:text-gray-300 capitalize"
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar