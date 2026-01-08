import { useState } from 'react'
import { motion } from 'framer-motion'
import Loading, { ButtonLoading, FullScreenLoading } from './Loading'

const LoadingDemo = () => {
  const [showFullScreen, setShowFullScreen] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)

  const loaderTypes = [
    { type: 'default', name: 'Gradient Spinner' },
    { type: 'dots', name: 'Spinning Dots' },
    { type: 'pulse', name: 'Pulse Ring' },
    { type: 'squares', name: 'Rotating Squares' },
    { type: 'tech', name: 'Tech Icons' },
    { type: 'wave', name: 'Wave Loader' },
    { type: 'orbit', name: 'Orbit Loader' }
  ]

  const sizes = ['small', 'medium', 'large', 'xlarge']

  const handleButtonDemo = () => {
    setButtonLoading(true)
    setTimeout(() => setButtonLoading(false), 3000)
  }

  const handleFullScreenDemo = () => {
    setShowFullScreen(true)
    setTimeout(() => setShowFullScreen(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Professional Loading Components
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Beautiful, smooth, and professional loading animations for modern web applications.
          </p>
        </motion.div>

        {/* Loader Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {loaderTypes.map((loader, index) => (
            <motion.div
              key={loader.type}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Loading type={loader.type} size="large" message="" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {loader.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Type: {loader.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Size Variations */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Size Variations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sizes.map((size) => (
              <div key={size} className="text-center">
                <div className="mb-4 flex justify-center items-center h-24">
                  <Loading type="gradient" size={size} message="" />
                </div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                  {size}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demos */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Button Loading Demo */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Button Loading Demo
            </h3>
            <div className="text-center">
              <motion.button
                onClick={handleButtonDemo}
                disabled={buttonLoading}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={{ scale: buttonLoading ? 1 : 1.05 }}
                whileTap={{ scale: buttonLoading ? 1 : 0.95 }}
              >
                {buttonLoading ? (
                  <ButtonLoading message="Processing..." />
                ) : (
                  'Click to Test Loading'
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Full Screen Loading Demo */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Full Screen Loading Demo
            </h3>
            <div className="text-center">
              <motion.button
                onClick={handleFullScreenDemo}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show Full Screen Loading
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Usage Examples */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Usage Examples
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Loading type="dots" size="medium" message="Loading data..." />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Perfect for data fetching
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Loading type="tech" size="medium" message="Building project..." />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Great for development tasks
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Loading type="pulse" size="medium" message="Connecting..." />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Ideal for network operations
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Screen Loading Overlay */}
      {showFullScreen && (
        <FullScreenLoading message="Demo Full Screen Loading..." />
      )}
    </div>
  )
}

export default LoadingDemo