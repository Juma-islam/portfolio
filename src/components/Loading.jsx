import { motion } from 'framer-motion'
import { FaReact, FaCode, FaRocket } from 'react-icons/fa'

const Loading = ({ type = 'default', size = 'medium', message = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  }

  const containerSizes = {
    small: 'w-16 h-16',
    medium: 'w-20 h-20',
    large: 'w-24 h-24',
    xlarge: 'w-32 h-32'
  }

  // Spinning Dots Loader
  const SpinningDots = () => (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )

  // Pulse Ring Loader
  const PulseRing = () => (
    <div className="relative flex items-center justify-center">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute border-4 border-purple-500 rounded-full"
          style={{
            width: 40 + index * 20,
            height: 40 + index * 20,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.3, 1],
            borderColor: ['#8b5cf6', '#3b82f6', '#06b6d4', '#8b5cf6']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      <motion.div
        className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full z-10"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  )

  // Rotating Squares
  const RotatingSquares = () => (
    <div className="relative">
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-sm"
          style={{
            top: index < 2 ? 0 : 20,
            left: index % 2 === 0 ? 0 : 20,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            borderRadius: ['2px', '50%', '2px']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )

  // Tech Icons Loader
  const TechIcons = () => {
    const icons = [FaReact, FaCode, FaRocket]
    return (
      <div className="flex items-center justify-center space-x-4">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="text-2xl text-purple-500"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    )
  }

  // Gradient Spinner
  const GradientSpinner = () => (
    <motion.div
      className={`${sizeClasses[size]} border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full`}
      style={{
        background: 'conic-gradient(from 0deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6)',
        mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), white 0)',
        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), white 0)'
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )

  // Wave Loader
  const WaveLoader = () => (
    <div className="flex items-end space-x-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className="w-2 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full"
          animate={{
            height: [8, 24, 8],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )

  // Orbit Loader
  const OrbitLoader = () => (
    <div className="relative w-16 h-16">
      <motion.div
        className="absolute inset-0 border-2 border-purple-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '50% 32px' }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-2 h-2 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '-32px 50%' }}
      />
    </div>
  )

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return <SpinningDots />
      case 'pulse':
        return <PulseRing />
      case 'squares':
        return <RotatingSquares />
      case 'tech':
        return <TechIcons />
      case 'gradient':
        return <GradientSpinner />
      case 'wave':
        return <WaveLoader />
      case 'orbit':
        return <OrbitLoader />
      default:
        return <GradientSpinner />
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`flex items-center justify-center ${containerSizes[size]}`}>
        {renderLoader()}
      </div>
      {message && (
        <motion.p
          className="text-sm font-medium text-gray-600 dark:text-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {message}
        </motion.p>
      )}
    </div>
  )
}

// Full Screen Loading Component
export const FullScreenLoading = ({ message = 'Loading Portfolio...' }) => (
  <motion.div
    className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-center">
      <motion.div
        className="mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Loading type="orbit" size="xlarge" />
      </motion.div>
      
      <motion.h2
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Juma Islam
      </motion.h2>
      
      <motion.p
        className="text-gray-600 dark:text-gray-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {message}
      </motion.p>
      
      {/* Progress Bar */}
      <motion.div
        className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-8 mx-auto overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  </motion.div>
)

// Button Loading Component
export const ButtonLoading = ({ message = 'Loading...', size = 'medium' }) => (
  <span className="flex items-center justify-center space-x-2">
    <Loading type="gradient" size="small" message="" />
    <span>{message}</span>
  </span>
)

export default Loading