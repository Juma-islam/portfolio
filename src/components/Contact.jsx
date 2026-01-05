import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const formEndpoint = 'https://formspree.io/f/your-form-id'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Error sending message. Please try again.')
      }
    } catch (error) {
      alert('Error sending message. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

 
  const socialLinks = [
    { 
      icon: 'code', 
      href: 'https://github.com/Juma-islam', 
      hoverColor: 'hover:bg-gray-800', 
      color: 'gray-800' 
    },
    { 
      icon: 'work', 
      href: 'https://www.linkedin.com/in/juma-islam',
      hoverColor: 'hover:bg-blue-600', 
      color: 'blue-600' 
    },
    { 
      icon: 'facebook', 
      href: 'https://www.facebook.com/ononna.islam.juma', 
      hoverColor: 'hover:bg-blue-800', 
      color: 'blue-800' 
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 relative overflow-hidden" id="contact" ref={sectionRef}>
      <motion.div 
        className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="mt-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Have a project in mind? Let's connect.
          </motion.p>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white/50 dark:bg-card-dark/80 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl">
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            ref={formRef}
          >
            {/* Name Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            
            {/* Email Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            
            {/* Message Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            
            {/* Submit Button */}
            <motion.div className="flex justify-end pt-2" variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className={`w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${link.hoverColor} hover:text-white transition-colors text-gray-600 dark:text-gray-400`}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: "0 10px 20px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.8, duration: 0.3 }}
            >
              <span className="material-icons text-xl">{link.icon}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="text-center p-6 rounded-2xl bg-white/30 dark:bg-card-dark/30 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-primary text-xl">email</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <a href="mailto:your-email@example.com" className="text-gray-600 dark:text-gray-400 text-sm">islamjuma324@gmail.com</a> 
          </motion.div>

          <motion.div 
            className="text-center p-6 rounded-2xl bg-white/30 dark:bg-card-dark/30 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-primary text-xl">phone</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
            <a href="tel:+880XXXXXXXXXX" className="text-gray-600 dark:text-gray-400 text-sm">+8801720472108</a> 
          </motion.div>

          <motion.div 
            className="text-center p-6 rounded-2xl bg-white/30 dark:bg-card-dark/30 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-primary text-xl">whatsapp</span> 
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">WhatsApp </h3>
            <a href="https://wa.me/+8801720472108" className="text-gray-600 dark:text-gray-400 text-sm">+8801720472108</a> 
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact