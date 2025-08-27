'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { name: 'GitHub', icon: '🔗', url: 'https://github.com/Brinckotron' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/fran%C3%A7ois-brinck-boucher-10868a332/' },
    { name: 'itch.io', icon: '🎮', url: 'https://brinckotron.itch.io/' },
    { name: 'Email', icon: '📧', url: 'mailto:f.brinck.boucher@gmail.com' }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Contactez-moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Prêt à collaborer sur votre prochain projet de jeu? Discutons de comment nous pouvons donner vie à votre vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyer un Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Collaboration de Projet"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Parlez-moi de vos idées de projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Connectons-nous</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">f.brinck.boucher@gmail.com</p>
                    <p className="text-gray-400 text-sm">Je réponds dans les 24 heures</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Localisation</h4>
                    <p className="text-gray-300">Montréal, QC, Canada</p>
                    <p className="text-gray-400 text-sm">Collaboration à distance bienvenue</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Téléphone</h4>
                    <p className="text-gray-300">514-774-0816</p>
                    <p className="text-gray-400 text-sm">Disponible pour opportunités temps plein</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <h4 className="font-semibold text-white mb-4">Trouvez-moi en ligne</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-xl hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50"
                      title={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-500/20">
              <h4 className="font-semibold text-white mb-4">Pourquoi Travailler Avec Moi?</h4>
              <div className="space-y-3">
                {[
                  '✨ Finissant en programmation jeux vidéo (2025)',
                  '🚀 Expérience avec projets complexes et complets',
                  '🔧 Compétences en développement web et jeux',
                  '🎯 Focus sur optimisation et architecture propre',
                  '🤝 Approche collaborative et communicative',
                  '💡 Agentic Coding et technologies modernes'
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300 text-sm">
                    <span className="mr-2">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
