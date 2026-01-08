import { motion } from 'framer-motion'
import { useMemo } from 'react'

const BackgroundEffects = () => {
  // Memoize particle positions to prevent recalculation on every render
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${5 + i * 6}%`,
      top: `${10 + i * 5}%`,
      size: `${20 + i * 2}px`,
      delay: i * 0.3,
      duration: 12 + i * 0.5,
      clipPath: i % 3 === 0 ? "polygon(50% 0%, 0% 100%, 100% 100%)" : 
                i % 3 === 1 ? "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" : 
                "circle(50%)",
      gradient: i % 4 === 0 ? 'from-primary/20 to-secondary/20' :
                i % 4 === 1 ? 'from-blue-500/20 to-purple-500/20' :
                i % 4 === 2 ? 'from-green-500/20 to-teal-500/20' :
                'from-pink-500/20 to-red-500/20'
    })), []
  )

  const floatingParticles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      z: Math.random() * 100 - 50,
      scale: Math.random() * 2 + 0.5,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      rotateZ: Math.random() * 360,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5
    })), []
  )

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 3D Grid Pattern - Optimized */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.1] will-change-transform"
      />
      
      {/* 3D Floating Orbs - Reduced complexity */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mix-blend-screen filter blur-[120px] will-change-transform"
      />
      
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.7, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-gradient-to-r from-secondary/25 to-purple-500/25 rounded-full mix-blend-screen filter blur-[100px] will-change-transform"
      />

      {/* 3D Geometric Shapes - Optimized */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute will-change-transform"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            rotateZ: [0, 90, -45, 0],
            scale: [0.5, 1.2, 0.8, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        >
          <div 
            className={`w-full h-full bg-gradient-to-br ${particle.gradient} will-change-transform`}
            style={{
              clipPath: particle.clipPath,
              filter: "blur(2px)",
            }}
          />
        </motion.div>
      ))}

      {/* 3D Particle System - Reduced count */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute w-2 h-2 bg-primary/30 rounded-full will-change-transform"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            x: [0, particle.x],
            y: [0, particle.y],
            opacity: [0, 1, 0],
            scale: [0, particle.scale, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* 3D Mesh Lines - Simplified */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{
          rotateX: [0, 5, -5, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-full h-full opacity-10 dark:opacity-5" viewBox="0 0 1000 1000">
          {Array.from({ length: 5 }, (_, i) => (
            <motion.line
              key={i}
              x1={i * 200}
              y1="0"
              x2={i * 200}
              y2="1000"
              stroke="url(#gradient)"
              strokeWidth="1"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 200}
              x2="1000"
              y2={i * 200}
              stroke="url(#gradient)"
              strokeWidth="1"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1 + 1
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* 3D Depth Layers - Simplified */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 will-change-transform"
        animate={{
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default BackgroundEffects