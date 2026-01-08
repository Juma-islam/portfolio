import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FullScreenLoading } from './components/Loading'
import { useLenis } from './hooks/useLenis'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize smooth scrolling
  useLenis()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    // Preload critical images for better performance
    const criticalImages = [
      'https://i.ibb.co.com/9FKBkBT/jumko-removebg-preview-1.jpg',
      'https://i.ibb.co.com/wZ0ct1yX/image-5-Photoroom.png'
    ]
    
    criticalImages.forEach(src => {
      const img = new Image()
      img.src = src
    })

    // Reduce loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Reduced from 2.5s to 1.5s

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <FullScreenLoading message="Loading Portfolio..." />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App