// Performance monitoring utilities

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for resize events
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Lazy load images
export const lazyLoadImage = (img, src) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target
        image.src = src
        image.classList.remove('lazy')
        observer.unobserve(image)
      }
    })
  })
  
  imageObserver.observe(img)
}

// Preload critical resources
export const preloadResource = (href, as = 'image') => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  document.head.appendChild(link)
}

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Performance observer for monitoring
export const observePerformance = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'measure') {
          console.log(`Performance: ${entry.name} took ${entry.duration}ms`)
        }
      })
    })
    
    observer.observe({ entryTypes: ['measure', 'navigation'] })
  }
}

// Measure component render time
export const measureRender = (componentName, renderFunction) => {
  if (process.env.NODE_ENV === 'development') {
    performance.mark(`${componentName}-start`)
    const result = renderFunction()
    performance.mark(`${componentName}-end`)
    performance.measure(
      `${componentName}-render`,
      `${componentName}-start`,
      `${componentName}-end`
    )
    return result
  }
  return renderFunction()
}