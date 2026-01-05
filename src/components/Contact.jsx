import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { icon: 'code', href: '#', hoverColor: 'hover:bg-primary' },
    { icon: 'work', href: '#', hoverColor: 'hover:bg-blue-600' },
    { icon: 'camera_alt', href: '#', hoverColor: 'hover:bg-pink-600' },
    { icon: 'flutter_dash', href: '#', hoverColor: 'hover:bg-blue-400' }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Have a project in mind? Let's connect.</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white/50 dark:bg-card-dark/80 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                required
              />
            </div>
            
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1 w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="flex justify-center gap-6 mt-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${link.hoverColor} hover:text-white transition-colors text-gray-600 dark:text-gray-400`}
            >
              <span className="material-icons text-xl">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact