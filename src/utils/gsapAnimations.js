import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Utility function to kill existing animations
const killExistingAnimations = (element) => {
  if (element) {
    gsap.killTweensOf(element)
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === element) {
        trigger.kill()
      }
    })
  }
}

// Fade in from bottom animation
export const fadeInUp = (element, delay = 0) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  return gsap.fromTo(element, 
    {
      y: 60,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        once: true // Optimize performance
      }
    }
  )
}

// Fade in from left animation
export const fadeInLeft = (element, delay = 0) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  return gsap.fromTo(element,
    {
      x: -60,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        once: true
      }
    }
  )
}

// Fade in from right animation
export const fadeInRight = (element, delay = 0) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  return gsap.fromTo(element,
    {
      x: 60,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        once: true
      }
    }
  )
}

// Scale in animation
export const scaleIn = (element, delay = 0) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  return gsap.fromTo(element,
    {
      scale: 0.8,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        once: true
      }
    }
  )
}

// Stagger animation for multiple elements
export const staggerFadeIn = (elements, delay = 0) => {
  if (!elements || elements.length === 0) return
  
  elements.forEach(el => killExistingAnimations(el))
  
  return gsap.fromTo(elements,
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        once: true
      }
    }
  )
}

// Parallax effect
export const parallaxEffect = (element, speed = 0.5) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true
    }
  })
}

// Text reveal animation
export const textReveal = (element, delay = 0) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  const chars = element.textContent.split('')
  element.innerHTML = chars.map(char => 
    char === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${char}</span>`
  ).join('')
  
  const spans = element.querySelectorAll('span')
  
  return gsap.to(spans, {
    opacity: 1,
    y: 0,
    duration: 0.05,
    delay,
    ease: "power2.out",
    stagger: 0.02,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse",
      once: true
    }
  })
}

// Floating animation
export const floatingAnimation = (element) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  return gsap.to(element, {
    y: -10,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  })
}

// Rotate on scroll
export const rotateOnScroll = (element) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  return gsap.to(element, {
    rotation: 360,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true
    }
  })
}

// Progress bar animation
export const progressBarAnimation = (element, percentage, delay = 0) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  return gsap.fromTo(element,
    {
      width: "0%"
    },
    {
      width: `${percentage}%`,
      duration: 1.5,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
        once: true
      }
    }
  )
}

// Counter animation
export const counterAnimation = (element, endValue, delay = 0) => {
  if (!element) return
  
  killExistingAnimations(element)
  
  const obj = { value: 0 }
  
  return gsap.to(obj, {
    value: endValue,
    duration: 2,
    delay,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value)
    },
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse",
      once: true
    }
  })
}

// Cleanup function to kill all ScrollTriggers
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  gsap.globalTimeline.clear()
}