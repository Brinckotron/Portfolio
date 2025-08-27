'use client'

import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'ProjectXCAPE',
      description: 'Jeu d\'horreur puzzle 3D en première personne avec IA complexe et systèmes d\'interaction avancés',
      longDescription: 'Jeu d\'aventure immersif situé dans une tombe égyptienne ancienne avec puzzles complexes et IA Anubis.',
      image: '/api/placeholder/600/400',
      technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Animation'],
      category: 'game',
      status: 'completed',
      year: 2024,
      features: [
        'Système IA complexe avec Behavior Trees',
        'Système d\'inventaire dynamique',
        'Framework d\'interaction avancé',
        'Systèmes de puzzles modulaires',
        'Animation events personnalisés',
        'Optimisation mémoire et performance'
      ]
    },
    {
      id: 2,
      title: 'Poker Roguelite',
      description: 'Jeu de poker roguelite pour Android avec IA adaptive et systèmes de progression',
      longDescription: 'Jeu de poker sophistiqué avec mécaniques roguelite, IA adaptative et progression par reliques.',
      image: '/api/placeholder/600/400',
      technologies: ['Unity', 'C#', 'Android SDK', 'LINQ'],
      category: 'game',
      status: 'completed',
      year: 2023,
      features: [
        'Algorithme de reconnaissance de mains poker',
        'IA adaptative avec difficulté progressive',
        'Système de reliques et upgrades',
        'Interface mobile optimisée',
        'Système d\'animation de cartes',
        'Architecture événementielle'
      ]
    },
    {
      id: 3,
      title: 'Moteur De Jeu Project',
      description: 'Plateforme action-aventure roguelite 2D avec systèmes de combat et progression',
      longDescription: 'Projet personnel ambitieux montrant la persistance et les compétences techniques croissantes.',
      image: '/api/placeholder/600/400',
      technologies: ['Unity', 'C#', 'URP', 'Animation 2D'],
      category: 'game',
      status: 'in-progress',
      year: 2024,
      features: [
        'Machine à états complexe pour le joueur',
        'IA ennemie polymorphique',
        'Système de progression et XP',
        'Interface utilisateur dynamique',
        'Système audio intégré',
        'Architecture modulaire'
      ]
    },
    {
      id: 4,
      title: 'ZombieShooter',
      description: 'Jeu de tir de survie 2D avec LibGDX et intégration base de données MySQL',
      longDescription: 'Démontre les concepts fondamentaux des moteurs de jeu et la persistance des données.',
      image: '/api/placeholder/600/400',
      technologies: ['LibGDX', 'Java', 'MySQL', 'JDBC'],
      category: 'game',
      status: 'completed',
      year: 2023,
      features: [
        'Pipeline de rendu 2D efficace',
        'Système de power-ups dynamique',
        'Intégration base de données MySQL',
        'Architecture Entity-Component',
        'Système de high scores persistant',
        'Gestion des assets centralisée'
      ]
    },
    {
      id: 5,
      title: 'D&D Point Buy Calculator',
      description: 'Application desktop WPF pour calculer les statistiques D&D avec interface intuitive',
      longDescription: 'Outil pratique créé très tôt dans mon parcours, démontrant la passion pour résoudre des problèmes réels.',
      image: '/api/placeholder/600/400',
      technologies: ['C#', 'WPF', '.NET 6', 'XAML'],
      category: 'tool',
      status: 'completed',
      year: 2022,
      features: [
        'Interface WPF responsive',
        'Calculs mathématiques Point Buy',
        'Gestion d\'état pour scores',
        'Système de randomisation',
        'Visualisateur de stats avancé',
        'Architecture MVVM'
      ]
    },
    {
      id: 6,
      title: 'Spectrail',
      description: 'Jeu créé pour Game Jam avec level design, concept et programmation',
      longDescription: 'Projet collaboratif démontrant les compétences en game design et développement rapide.',
      image: '/api/placeholder/600/400',
      technologies: ['Unity', 'C#', 'Level Design', 'Game Design'],
      category: 'game',
      status: 'completed',
      year: 2023,
      features: [
        'Développement rapide (Game Jam)',
        'Level design créatif',
        'Mécaniques de jeu innovantes',
        'Collaboration d\'équipe',
        'Polish et finition',
        'Publication sur itch.io'
      ]
    }
  ]

  const filters = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'game', label: 'Jeux' },
    { id: 'tool', label: 'Outils' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-slate-800/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Projets Principaux</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Projets de développement de jeux innovants et réalisations techniques
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 card-hover group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">🎮</div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status === 'completed' ? 'Terminé' : 'En Cours'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-badge text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Fonctionnalités Clés:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600/30 transition-colors">
                    Voir Détails
                  </button>
                  <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm hover:bg-slate-600/50 transition-colors">
                    ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Intéressé par une collaboration ou en apprendre plus sur mon travail?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Contactez-moi
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
