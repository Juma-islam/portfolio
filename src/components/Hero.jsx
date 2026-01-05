const Hero = () => {
  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log('Download CV clicked')
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20" id="home">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-white dark:text-white">Meriem</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-400">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Building modern, responsive, and user-friendly web experiences with passion and precision. Let's turn ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
            >
              Download CV
              <span className="material-icons text-sm">download</span>
            </button>
            <div className="flex items-center justify-center gap-4 px-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-icons text-lg">code</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <span className="material-icons text-lg">work</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full filter blur-[60px] opacity-40 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-gray-800/50 dark:border-white/10 overflow-hidden shadow-2xl glow-box">
            <img 
              alt="Meriem working at a laptop" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvbA-LysyGe47kIhpZ0GSlhnzNmmCJtBU9pBduAnc63a-IhCpuLvEm1j7AADSoZztAqkKdD5WwRKNWqeUQOWT_Muggl8nhadmPNIz4-vpxipPvHKEFektUzRj8kBZLZ4lPYngOI9jx791wV_c9vM3wPtdiKJmrltXjWBU4a-YRJJPogI-5V_2dTytZgedmMPftP7ZuAxD1iv9vFQzS5MeCeFJbhMW-pH1cMFghtvtmnCWsjSRVvL2XILx5mRfXmTRoYoBKXtXM"
            />
          </div>
          
          {/* Floating Icons */}
          <div 
            className="absolute top-0 right-10 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-lg animate-bounce" 
            style={{animationDuration: '3s'}}
          >
            <span className="material-icons text-yellow-500 text-xl">javascript</span>
          </div>
          <div 
            className="absolute bottom-10 left-4 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-lg animate-bounce" 
            style={{animationDuration: '4s', animationDelay: '1s'}}
          >
            <span className="material-icons text-blue-400 text-lg">data_object</span>
          </div>
          <div 
            className="absolute bottom-4 right-20 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-lg animate-bounce" 
            style={{animationDuration: '5s', animationDelay: '0.5s'}}
          >
            <span className="material-icons text-green-500 text-sm">storage</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero