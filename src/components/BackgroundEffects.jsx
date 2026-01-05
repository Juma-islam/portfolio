const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.1]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 dark:opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-secondary rounded-full mix-blend-screen filter blur-[100px] opacity-20 dark:opacity-15"></div>
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 dark:opacity-10"></div>
    </div>
  )
}

export default BackgroundEffects