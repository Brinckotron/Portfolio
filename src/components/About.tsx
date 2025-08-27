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
              Je suis finissant en <span className="text-blue-400 font-semibold">Programmation en Jeux Vidéo</span> au 
              Collège LaSalle, à la recherche d'un emploi où je peux appliquer mes compétences et connaissances. 
              J'ai des bases solides en <span className="text-purple-400 font-semibold">C++, C#, Java, JavaScript</span> 
              et de l'expérience avec <span className="text-green-400 font-semibold">Unreal Engine 5</span> et 
              <span className="text-yellow-400 font-semibold">Unity</span>.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              J'ai fait du développement <span className="text-blue-400 font-semibold">Web</span> et 
              <span className="text-purple-400 font-semibold">Agentic Coding</span> durant mon stage à GigLinked. 
              Je suis créatif, habitué au travail d'équipe, bon communicateur, adaptable et toujours prêt à apprendre.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Je suis passionné des jeux vidéo et souhaite contribuer à la création de jeux marquants, tout en 
              travaillant un jour sur des <span className="text-green-400 font-semibold">outils de création pour les joueurs</span> 
              (Map Makers, Toolsets) qui m'ont inspiré dans ma jeunesse.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-blue-500/20">
                <div className="text-3xl font-bold gradient-text">2025</div>
                <div className="text-gray-400">Graduation</div>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-purple-500/20">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400">Game Projects</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20 glow-effect">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Mes spécialisations</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Programmation de Jeux', desc: 'C++, C#, Unity et Unreal Engine 5 avec systèmes complexes' },
                    { title: 'IA et Systèmes de Jeu', desc: 'Behaviour Trees, systèmes de combat et mécaniques de puzzle' },
                    { title: 'Développement Web', desc: 'TypeScript, React et intégration d\'APIs modernes' },
                    { title: 'Outils de Création', desc: 'Level editors, map makers et systèmes d\'interaction' }
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
