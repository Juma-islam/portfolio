const About = () => {
  const services = [
    {
      icon: "web",
      title: "Web Application Development"
    },
    {
      icon: "smartphone", 
      title: "Mobile Application Development"
    },
    {
      icon: "psychology",
      title: "Problem Solving"
    }
  ]

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 p-2 relative">
              <div className="absolute inset-0 rounded-full border-2 border-secondary/30 rotate-12 scale-105"></div>
              <img 
                alt="Meriem graduation photo" 
                className="w-full h-full object-cover rounded-full shadow-lg grayscale hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT8bIOt_2lmYWrpZiCmRMFqzv4eYlKwFBjdJhAxjZmZmfdIO7UATstdnaw1fP3mQdi9KOm9AubjkLQ93bFlksKAYLvO2N8SCu80jnCYDO63G4rm877xKGSqOLIXm_c4E8MqnMQPKZz853tGKKYcLtBRAgUWzsPjCGX_hww_ardbd-fp6rxM7ID37Sd3HYKxu11qvtSS9m9qq10JYDMbMk4HdGooDPKhdxmnmYPjJoMqXI_1yZCpl5DJhM3yKIVeNXbRHKxHlaT"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">I'm Meriem Benfakhadoun</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Software Engineering Master's student at USTHB and freelance web/mobile developer in Algiers.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I create tailored solutions using Laravel, React, Flutter, and more for startups and businesses. I am passionate about solving complex problems through elegant code.
            </p>
            
            <div className="space-y-4 pt-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-icons">{service.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200">{service.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About