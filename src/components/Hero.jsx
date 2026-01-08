import { motion } from 'framer-motion'
import { FaReact, FaCode } from 'react-icons/fa'
import { SiJavascript, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/25 to-pink-400/25 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -120, 80, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.4, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <motion.div 
          className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full filter blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, -30, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <motion.span 
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                 Hello, I'm
              </motion.span>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              <motion.span 
                className="text-gray-800 dark:text-white block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Juma
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Islam
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mb-10"
            >
              <motion.p 
                className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Mern Stack Developer
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                Crafting beautiful digital experiences with modern technologies. 
                Passionate about creating innovative solutions that make a difference.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">View My Work</span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Enhanced Tech Stack */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              <motion.p 
                className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.6 }}
              >
                Technologies I Master
              </motion.p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {[
                  { name: 'React', icon: FaReact, color: 'from-blue-400 to-blue-600' },
                  { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-400 to-green-600' },
                  { name: 'MongoDB', icon: SiMongodb, color: 'from-green-500 to-green-700' },
                  { name: 'Express', icon: SiExpress, color: 'from-gray-500 to-gray-700' },
                  { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-400 to-yellow-600' },
                  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-400 to-cyan-600' }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="group flex items-center gap-3 px-5 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 2.1 + index * 0.1, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    <motion.div
                      className={`p-2 rounded-lg bg-gradient-to-r ${tech.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <tech.icon className="text-white text-lg" />
                    </motion.div>
                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image Section */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Multi-layered Animated Rings */}
              <motion.div
                className="absolute inset-0 w-96 h-96 lg:w-[28rem] lg:h-[28rem]"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 p-1 opacity-70"></div>
              </motion.div>

              <motion.div
                className="absolute inset-3 w-90 h-90 lg:w-[26rem] lg:h-[26rem]"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 p-1 opacity-50"></div>
              </motion.div>

              <motion.div
                className="absolute inset-6 w-84 h-84 lg:w-[24rem] lg:h-[24rem]"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 p-1 opacity-30"></div>
              </motion.div>

              {/* Main Profile Container */}
              <motion.div
                className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full p-3 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 shadow-2xl"
                initial={{ scale: 0.7, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden relative shadow-inner">
                  <motion.img
                    src="https://i.ibb.co.com/9FKBkBT/jumko-removebg-preview-1.jpg"
                    alt="Juma Islam - Full Stack Developer"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face&auto=format&q=80"
                      e.target.onerror = (e2) => {
                        e2.target.style.display = 'none'
                        e2.target.nextSibling.style.display = 'flex'
                      }
                    }}
                  />
                  <motion.div 
                    className="w-full h-full bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800 flex items-center justify-center" 
                    style={{display: 'none'}}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <FaCode className="text-8xl text-purple-600 dark:text-purple-400" />
                  </motion.div>

                  {/* Dynamic Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-blue-600/20 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                  />
                </div>
              </motion.div>

              {/* Enhanced Floating Tech Icons - Reduced complexity */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl border-4 border-blue-200 dark:border-blue-800"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1.8, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    y: [-4, 4, -4] 
                  }}
                  transition={{ 
                    rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <FaReact className="text-3xl text-blue-500" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl border-4 border-orange-200 dark:border-orange-800"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 2, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <motion.div
                  animate={{ 
                    y: [4, -4, 4],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <SiNodedotjs className="text-3xl text-orange-500" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-10 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-200 dark:border-yellow-800"
                initial={{ scale: 0, x: -30 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.2, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.3, 
                  x: 10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.4, 1],
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <SiMongodb className="text-2xl text-yellow-500" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-10 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl border-4 border-pink-200 dark:border-pink-800"
                initial={{ scale: 0, x: 30 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.4, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.3, 
                  x: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <SiExpress className="text-2xl text-pink-500" />
                </motion.div>
              </motion.div>

              {/* Reduced Floating Particles */}
              <motion.div
                className="absolute top-12 left-12 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-80"
                animate={{ 
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  scale: [1, 1.5, 1],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 3
                }}
              />

              <motion.div
                className="absolute bottom-12 right-12 w-8 h-8 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full opacity-90"
                animate={{ 
                  y: [15, -15, 15],
                  x: [8, -8, 8],
                  scale: [1, 1.8, 1]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 4
                }}
              />

              {/* Simplified Pulsing Ring Effects */}
              <motion.div
                className="absolute inset-0 w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full border-4 border-purple-400/40"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero