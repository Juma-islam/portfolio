import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Experience = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const learningJourney = [
    {
      title: "MERN Stack Development Journey",
      type: "Self-Learning & Online Courses",
      period: "2024 - Present",
      status: "Ongoing",
      description: "Started my web development journey with comprehensive MERN stack learning. Mastering React.js, Node.js, Express.js, and MongoDB through hands-on projects and online courses.",
      achievements: [
        "Built 4+ full-stack web applications",
        "Mastered React hooks and state management",
        "Learned backend development with Node.js & Express",
        "Database design and MongoDB operations"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS"],
      icon: "school",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Frontend Development Mastery",
      type: "Online Learning & Practice",
      period: "2024 - Present",
      status: "Advanced",
      description: "Focused on modern frontend technologies and responsive design. Built multiple projects using React, implemented animations with Framer Motion, and mastered CSS frameworks.",
      achievements: [
        "Created responsive, mobile-first designs",
        "Implemented complex animations and interactions",
        "Learned modern CSS techniques and frameworks",
        "Built reusable component libraries"
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "CSS3", "HTML5", "JavaScript ES6+"],
      icon: "web",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Backend Development & APIs",
      type: "Self-Study & Project Building",
      period: "2024 - Present",
      status: "Intermediate",
      description: "Diving deep into server-side development, API creation, and database management. Learning authentication, security best practices, and deployment strategies.",
      achievements: [
        "Built RESTful APIs with Express.js",
        "Implemented user authentication & authorization",
        "Learned database design and optimization",
        "Deployed applications to cloud platforms"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Mongoose"],
      icon: "dns",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Full-Stack Project Development",
      type: "Personal Projects & Portfolio",
      period: "2024 - Present",
      status: "Active",
      description: "Applying learned skills to build complete web applications. Focus on real-world problem solving, user experience, and modern development practices.",
      achievements: [
        "Developed CleanConnect community platform",
        "Built Garments Tracker production system",
        "Created Green Nest environmental platform",
        "Implemented modern UI/UX design patterns"
      ],
      technologies: ["MERN Stack", "Firebase", "Vercel", "Netlify", "Git", "GitHub"],
      icon: "rocket_launch",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" id="experience" ref={sectionRef}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full filter blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Learning Path Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 8}%`,
              top: `${10 + i * 7}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="w-3 h-3 bg-primary rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-primary font-medium">Learning Journey</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-secondary dark:from-white dark:via-primary dark:to-secondary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            My Development Journey
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Since 2024, I've been on an intensive self-learning journey to master the MERN stack. Through online courses, hands-on projects, and continuous practice, I'm building expertise in modern web development.
          </motion.p>
        </motion.div>

        {/* Enhanced Learning Journey Timeline */}
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {learningJourney.map((journey, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              variants={itemVariants}
            >
              {/* Timeline Connection */}
              {index < learningJourney.length - 1 && (
                <motion.div 
                  className="absolute left-8 top-20 w-1 h-32 bg-gradient-to-b from-primary via-secondary to-primary/50 rounded-full"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: 128 } : {}}
                  transition={{ duration: 1, delay: index * 0.3 + 1 }}
                />
              )}

              <motion.div 
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl group"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(168, 85, 247, 0.15)"
                }}
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${journey.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                />

                <div className="flex items-start gap-6 relative z-10">
                  {/* Enhanced Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${journey.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="material-icons text-2xl">{journey.icon}</span>
                  </motion.div>
                  
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + 0.7 }}
                        >
                          {journey.title}
                        </motion.h3>
                        <motion.p 
                          className="text-primary font-semibold"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + 0.8 }}
                        >
                          {journey.type}
                        </motion.p>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                        <motion.span 
                          className="text-sm text-gray-500 dark:text-gray-400 font-medium"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + 0.9 }}
                        >
                          {journey.period}
                        </motion.span>
                        <motion.div
                          className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${journey.color} shadow-md`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + 1 }}
                        >
                          {journey.status}
                        </motion.div>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 1.1 }}
                    >
                      {journey.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 1.2 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <span className="material-icons text-primary">emoji_events</span>
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {journey.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + 1.3 + achIndex * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                            <span className="text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 1.4 }}
                    >
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <span className="material-icons text-primary text-sm">code</span>
                        Technologies Learned
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {journey.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + 1.5 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${journey.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Build Amazing Things Together! 
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm passionate about learning and growing as a developer. Let's create something incredible!
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect & Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience