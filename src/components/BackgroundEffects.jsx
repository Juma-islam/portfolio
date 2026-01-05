import { motion } from 'framer-motion'

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.1]"
      />
      
      <motion.div
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
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 dark:opacity-20"
      />
      
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-secondary rounded-full mix-blend-screen filter blur-[100px] opacity-20 dark:opacity-15"
      />
      
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 dark:opacity-10"
      />
    </div>
  )
}

export default BackgroundEffects