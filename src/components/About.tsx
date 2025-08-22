const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">Game Developer</span> with 
              expertise in creating immersive digital experiences. My journey spans from low-level 
              engine programming to high-level gameplay systems, always pushing the boundaries 
              of what's possible in interactive entertainment.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in <span className="text-purple-400 font-semibold">computer graphics</span>, 
              <span className="text-green-400 font-semibold"> game engines</span>, and 
              <span className="text-yellow-400 font-semibold"> systems programming</span>, 
              I bring both technical depth and creative vision to every project.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-blue-500/20">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-purple-500/20">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20 glow-effect">
                <h3 className="text-2xl font-bold mb-6 gradient-text">My Focus Areas</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Game Engine Development', desc: 'Custom engines, renderer optimization, and performance systems' },
                    { title: 'Graphics Programming', desc: 'Shaders, lighting systems, and real-time rendering techniques' },
                    { title: 'Gameplay Programming', desc: 'AI systems, physics integration, and player mechanics' },
                    { title: 'Tools Development', desc: 'Editor tools, asset pipelines, and development workflows' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
