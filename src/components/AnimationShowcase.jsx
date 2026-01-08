import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  scaleIn, 
  staggerFadeIn,
  parallaxEffect,
  rotateOnScroll,
  floatingAnimation 
} from '../utils/gsapAnimations'

gsap.registerPlugin(ScrollTrigger)

const AnimationShowcase = () => {
  const showcaseRef = useRef(null)
  const parallaxRef = useRef(null)
  const rotateRef = useRef(null)
  const floatingRef = useRef(null)
  const staggerItemsRef = useRef([])

  useEffect(() => {
    // Apply different GSAP animations
    if (parallaxRef.current) {
      parallaxEffect(parallaxRef.current, 0.3)
    }

    if (rotateRef.current) {
      rotateOnScroll(rotateRef.current)
    }

    if (floatingRef.current) {
      floatingAnimation(floatingRef.current)
    }

    if (staggerItemsRef.current.length > 0) {
      staggerFadeIn(staggerItemsRef.current, 0.2)
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900 overflow-hidden" ref={showcaseRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Enhanced Animations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience smooth scrolling with Lenis and advanced animations with GSAP + Framer Motion
          </p>
        </div>

        {/* Parallax Element */}
        <div className="relative mb-20">
          <div 
            ref={parallaxRef}
            className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto opacity-20"
          />
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">Parallax Effect</p>
          </div>
        </div>

        {/* Rotating Element */}
        <div className="flex justify-center mb-20">
          <div className="text-center">
            <div 
              ref={rotateRef}
              className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mx-auto mb-4"
            />
            <p className="text-sm text-gray-500">Rotate on Scroll</p>
          </div>
        </div>

        {/* Floating Element */}
        <div className="flex justify-center mb-20">
          <div className="text-center">
            <div 
              ref={floatingRef}
              className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span className="material-icons text-white text-2xl">star</span>
            </div>
            <p className="text-sm text-gray-500">Floating Animation</p>
          </div>
        </div>

        {/* Stagger Animation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (staggerItemsRef.current[index] = el)}
              className="h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold"
            >
              {index + 1}
            </div>
          ))}
        </div>

        {/* Framer Motion Examples */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Hover Effects</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Interactive hover animations with 3D transforms
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, rotateX: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Scroll Animations</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Elements animate as they come into view
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Smooth Scrolling</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Lenis provides buttery smooth scrolling experience
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AnimationShowcase