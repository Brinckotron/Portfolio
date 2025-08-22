const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'C#', 'Python', 'JavaScript/TypeScript', 'HLSL/GLSL', 'Lua'],
      color: 'blue'
    },
    {
      title: 'Game Engines & Frameworks',
      skills: ['Unity', 'Unreal Engine', 'Custom Engines', 'OpenGL', 'Vulkan', 'DirectX'],
      color: 'purple'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Visual Studio', 'Git', 'Perforce', 'Blender', 'Maya', 'Photoshop'],
      color: 'green'
    },
    {
      title: 'Game Development',
      skills: ['Gameplay Programming', 'Graphics Programming', 'Engine Architecture', 'Performance Optimization', 'AI Systems', 'Physics'],
      color: 'yellow'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20',
      purple: 'border-purple-500/20 bg-purple-500/10 hover:bg-purple-500/20',
      green: 'border-green-500/20 bg-green-500/10 hover:bg-green-500/20',
      yellow: 'border-yellow-500/20 bg-yellow-500/10 hover:bg-yellow-500/20'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for creating cutting-edge games and interactive experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 card-hover"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Specialized Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎮',
                title: 'Game Architecture',
                description: 'Scalable systems design and modular component architecture'
              },
              {
                icon: '⚡',
                title: 'Performance Optimization',
                description: 'Memory management, CPU/GPU profiling, and bottleneck elimination'
              },
              {
                icon: '🔧',
                title: 'Tool Development',
                description: 'Custom editors, asset pipelines, and workflow automation'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
