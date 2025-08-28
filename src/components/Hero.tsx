'use client'

import { useTranslation } from '@/contexts/TranslationContext'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="block text-white">{t.hero.title.firstName}</span>
              <span className="block gradient-text">{t.hero.title.lastName}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              {t.hero.buttons.viewGames}
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
            >
              {t.hero.buttons.contactMe}
            </a>
          </div>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-12">
            {['C++', 'C#', 'Unity', 'Unreal Engine 5', 'JavaScript', 'React', 'Java'].map((tech) => (
              <span key={tech} className="tech-badge animate-fade-in-up" style={{animationDelay: `${Math.random() * 0.5}s`}}>
                {tech}
              </span>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
