import { useState } from 'react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Meriem<span className="text-primary text-sm align-top">&lt;/&gt;</span>
        </button>
        
        <div className="hidden md:flex space-x-8 items-center font-medium text-sm tracking-wide">
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 transition-all"
          >
            Contact
          </button>
        </div>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-600 dark:text-gray-300"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar