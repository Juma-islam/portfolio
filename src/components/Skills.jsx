const Skills = () => {
  const skills = [
    {
      name: "HTML & CSS",
      icon: "html",
      color: "orange-500",
      percentage: 100
    },
    {
      name: "JavaScript", 
      icon: "javascript",
      color: "yellow-400",
      percentage: 90
    },
    {
      name: "Python",
      icon: "code", 
      color: "blue-500",
      percentage: 85
    },
    {
      name: "React",
      icon: "data_object",
      color: "cyan-400", 
      percentage: 80
    },
    {
      name: "SQL & Databases",
      icon: "storage",
      color: "blue-300",
      percentage: 75
    },
    {
      name: "Laravel / PHP",
      icon: "php",
      color: "red-500",
      percentage: 85
    },
    {
      name: "Flutter",
      icon: "smartphone",
      color: "blue-400",
      percentage: 70
    },
    {
      name: "Git & GitHub",
      icon: "call_split",
      color: "orange-600",
      percentage: 90
    }
  ]

  const getColorClasses = (color, percentage) => {
    const colorMap = {
      'orange-500': 'from-orange-500 to-orange-400',
      'yellow-400': 'from-yellow-400 to-yellow-300',
      'blue-500': 'from-blue-500 to-blue-300',
      'cyan-400': 'from-cyan-500 to-cyan-300',
      'blue-300': 'from-blue-400 to-blue-200',
      'red-500': 'from-red-600 to-red-400',
      'blue-400': 'from-blue-500 to-blue-300',
      'orange-600': 'from-orange-600 to-orange-400'
    }
    return colorMap[color] || 'from-gray-500 to-gray-400'
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#080808]" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className={`material-icons text-${skill.color}`}>{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              </div>
              <div className="flex gap-1">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(skill.color, skill.percentage)}`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
                {skill.percentage < 100 && (
                  <div 
                    className="h-2 rounded-full bg-gray-700"
                    style={{ width: `${100 - skill.percentage}%` }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills