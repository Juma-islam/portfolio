import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const menuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const menuItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`w-full backdrop-blur-xl transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-black/90 border-b border-gray-200/60 dark:border-gray-800/60 shadow-xl shadow-black/5 dark:shadow-black/20' 
          : 'bg-white/80 dark:bg-black/60 border-b border-gray-200/40 dark:border-gray-800/40 shadow-lg shadow-black/5'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold relative group overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
          <span className="relative text-gray-800 dark:text-white drop-shadow-sm">
            Juma Islam
            <motion.span 
              className="text-primary text-sm align-top ml-1"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              &lt;/&gt;
            </motion.span>
          </span>
        </motion.button>
        
        <div className="hidden md:flex space-x-8 items-center font-medium text-sm tracking-wide">
          {['home', 'about', 'skills', 'projects', 'education', 'experience'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative hover:text-primary transition-all duration-300 text-gray-600 dark:text-gray-300 capitalize group px-3 py-2 rounded-lg"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ y: 0, scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.3, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="relative z-10 drop-shadow-sm">{item}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ scale: 0.8, rotate: -2 }}
                whileHover={{ scale: 1, rotate: 0 }}
              />
              <motion.div
                className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
              />
            </motion.button>
          ))}
          <motion.button 
            onClick={() => scrollToSection('contact')}
            className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 text-primary border border-primary/40 hover:border-primary/60 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-all duration-400"
              initial={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1, rotate: 0 }}
            />
            <motion.span 
              className="relative z-10 group-hover:text-white transition-colors duration-300 font-semibold drop-shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.span>
          </motion.button>
        </div>
        
        <motion.button 
          onClick={toggleMenu}
          className="md:hidden text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          <motion.span 
            className="material-icons text-2xl"
            animate={{ 
              rotate: isMenuOpen ? 180 : 0,
              scale: isMenuOpen ? 1.1 : 1
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200/60 dark:border-gray-800/60 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 space-y-2">
              {['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left hover:text-primary transition-all duration-300 text-gray-600 dark:text-gray-300 capitalize py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 group relative overflow-hidden"
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r"
                  />
                  <span className="relative z-10 font-medium drop-shadow-sm">{item}</span>
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