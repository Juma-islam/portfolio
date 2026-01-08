import { useEffect, useState, useRef } from 'react'

export const useOptimizedInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Default options with performance optimizations
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '-50px',
      ...options
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)
        
        // Once element has been in view, we can stop observing for performance
        if (inView && !hasBeenInView) {
          setHasBeenInView(true)
          if (options.once !== false) {
            observer.unobserve(element)
          }
        }
      },
      defaultOptions
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [hasBeenInView, options])

  return [ref, isInView, hasBeenInView]
}