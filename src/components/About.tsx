'use client'

import { useTranslation } from '@/contexts/TranslationContext'

const About = () => {
  const { t } = useTranslation()
  return (
    <section id="about" className="section-padding bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">{t.about.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.paragraphs.introduction }} />
            
            <p className="text-lg text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.paragraphs.experience }} />

            <p className="text-lg text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.paragraphs.passion }} />

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-blue-500/20">
                <div className="text-3xl font-bold gradient-text">2025</div>
                <div className="text-gray-400">{t.about.stats.graduation}</div>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-purple-500/20">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400">{t.about.stats.projects}</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20 glow-effect">
                <h3 className="text-2xl font-bold mb-6 gradient-text">{t.about.specializations.title}</h3>
                <div className="space-y-4">
                  {[
                    { title: t.about.specializations.items.gameProgramming.title, desc: t.about.specializations.items.gameProgramming.desc },
                    { title: t.about.specializations.items.aiSystems.title, desc: t.about.specializations.items.aiSystems.desc },
                    { title: t.about.specializations.items.webDevelopment.title, desc: t.about.specializations.items.webDevelopment.desc },
                    { title: t.about.specializations.items.creationTools.title, desc: t.about.specializations.items.creationTools.desc }
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
