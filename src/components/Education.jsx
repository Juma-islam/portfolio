import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Education = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Bachelor of Business Administration (BBA)",
      specialization: "Accounting",
      institution: "Kishoreganj Government Mohila College",
      year: "2018 - 2022",
      status: "Completed",
      grade: "Good Standing",
      description: "Developed strong analytical and problem-solving skills through comprehensive business studies. Gained expertise in accounting principles, financial analysis, and business management while discovering my passion for technology and web development.",
      highlights: [
        "Business Analysis & Strategic Thinking",
        "Financial Management & Accounting",
        "Problem-Solving & Critical Thinking",
        "Project Management & Leadership",
        "Computer Applications & Technology"
      ],
      skills: ["Analytical Thinking", "Problem Solving", "Financial Analysis", "Business Management"],
      icon: "school",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-500"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Business Studies",
      institution: "Kishoreganj Government Mohila College",
      year: "2016 - 2018",
      status: "Completed",
      grade: "Good Performance",
      description: "Built a strong foundation in business studies with focus on accounting and mathematics. Developed computational thinking and analytical skills that later proved valuable in programming and web development.",
      highlights: [
        "Mathematics & Logical Reasoning",
        "Accounting Fundamentals",
        "Computer Basics & Applications",
        "Business Communication",
        "Research & Documentation"
      ],
      skills: ["Mathematics", "Logical Thinking", "Computer Basics", "Communication"],
      icon: "menu_book",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "bg-purple-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -60, opacity: 0, rotateY: -15 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900" id="education" ref={sectionRef}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Academic Elements */}
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full filter blur-[100px]"
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

        {/* Academic Symbols */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            <div className="w-4 h-4 bg-primary/30 rounded-full" />
          </motion.div>
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
            <span className="text-primary font-medium">Academic Background</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-secondary dark:from-white dark:via-primary dark:to-secondary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Educational Journey
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            My academic foundation in business and accounting has provided me with strong analytical thinking and problem-solving skills that complement my passion for web development.
          </motion.p>
        </motion.div>

        {/* Enhanced Education Timeline */}
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-16 last:mb-0"
              variants={itemVariants}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced Timeline Connection */}
              {index < education.length - 1 && (
                <motion.div 
                  className="absolute left-8 top-32 w-1 h-40 bg-gradient-to-b from-primary via-secondary to-primary/50 rounded-full shadow-lg"
                  initial={{ height: 0, opacity: 0 }}
                  animate={isInView ? { height: 160, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: index * 0.4 + 1 }}
                />
              )}

              <motion.div 
                className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl group"
                whileHover={{ 
                  y: -8,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  boxShadow: "0 30px 60px rgba(168, 85, 247, 0.2)"
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gradient Background Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Status Badge */}
                <motion.div
                  className="absolute top-6 right-6 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.8 }}
                >
                  <div className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${edu.color} shadow-lg`}>
                    {edu.status}
                  </div>
                </motion.div>

                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    {/* Enhanced Icon */}
                    <motion.div 
                      className={`w-20 h-20 rounded-3xl ${edu.iconBg} flex items-center justify-center text-white shadow-xl flex-shrink-0 relative overflow-hidden`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="material-icons text-3xl relative z-10">{edu.icon}</span>
                    </motion.div>
                    
                    <div className="flex-1">
                      {/* Header Section */}
                      <div className="mb-6">
                        <motion.h3 
                          className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                          initial={{ opacity: 0, x: -30 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.3 + 0.9 }}
                        >
                          {edu.degree}
                        </motion.h3>
                        
                        <motion.div
                          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                          initial={{ opacity: 0, x: -30 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.3 + 1 }}
                        >
                          <div>
                            <p className="text-primary font-bold text-lg">{edu.specialization}</p>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
                          </div>
                          <div className="flex flex-col md:items-end gap-1">
                            <span className="text-gray-500 dark:text-gray-400 font-semibold">{edu.year}</span>
                            <span className="text-sm text-green-600 dark:text-green-400 font-medium">{edu.grade}</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* Description */}
                      <motion.p 
                        className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.3 + 1.1 }}
                      >
                        {edu.description}
                      </motion.p>

                      {/* Key Highlights */}
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.3 + 1.2 }}
                      >
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <span className="material-icons text-primary">star</span>
                          Key Highlights
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {edu.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={hIndex}
                              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.3 + 1.3 + hIndex * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Skills Gained */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.3 + 1.4 }}
                      >
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <span className="material-icons text-primary">psychology</span>
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {edu.skills.map((skill, sIndex) => (
                            <motion.span
                              key={sIndex}
                              className={`px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-semibold shadow-lg`}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.3 + 1.5 + sIndex * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Achievement Summary */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <motion.h3 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              From Business to Technology 🎓
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  4+
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Years of Academic Excellence</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  2
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Degrees Completed</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  ∞
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Continuous Learning</p>
              </motion.div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              My academic journey in business and accounting has equipped me with analytical thinking, problem-solving abilities, and a structured approach to learning—skills that perfectly complement my passion for web development and technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education