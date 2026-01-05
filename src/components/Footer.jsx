const Footer = () => {
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

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-900/50 bg-white dark:bg-[#020202]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Meriem<span className="text-primary text-xs align-top">&lt;/&gt;</span>
        </button>
        
        <div className="text-xs text-gray-500 dark:text-gray-500">
          © 2024 All rights reserved.
        </div>
        
        <div className="flex gap-6 text-xs text-gray-500 dark:text-gray-500 font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer