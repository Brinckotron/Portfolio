'use client'

import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Custom Game Engine',
      description: 'A modern, multi-threaded game engine built from scratch with Vulkan rendering',
      longDescription: 'Complete game engine featuring advanced rendering pipeline, entity-component system, and comprehensive tooling.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'Vulkan', 'OpenGL', 'ImGui'],
      category: 'engine',
      status: 'completed',
      year: 2024,
      features: [
        'Multi-threaded architecture',
        'Vulkan/OpenGL renderer',
        'Entity-Component-System',
        'Built-in editor tools',
        'Advanced lighting system',
        'Cross-platform support'
      ]
    },
    {
      id: 2,
      title: '3D Action Platformer',
      description: 'Fast-paced 3D platformer with dynamic camera system and responsive controls',
      longDescription: 'Engaging platformer featuring smooth character movement, dynamic environments, and polished gameplay mechanics.',
      image: '/api/placeholder/600/400',
      technologies: ['Unity', 'C#', 'ProBuilder', 'Cinemachine'],
      category: 'game',
      status: 'completed',
      year: 2023,
      features: [
        'Responsive character controller',
        'Dynamic camera system',
        'Interactive environments',
        'Particle effects system',
        'Audio integration',
        'Level progression system'
      ]
    },
    {
      id: 3,
      title: 'Shader Library',
      description: 'Collection of advanced shaders for realistic lighting and visual effects',
      longDescription: 'Comprehensive shader library featuring PBR materials, post-processing effects, and advanced lighting techniques.',
      image: '/api/placeholder/600/400',
      technologies: ['HLSL', 'GLSL', 'Unity ShaderGraph', 'DirectX'],
      category: 'tool',
      status: 'completed',
      year: 2023,
      features: [
        'PBR material shaders',
        'Post-processing effects',
        'Animated materials',
        'Optimization techniques',
        'Cross-platform compatibility',
        'Documentation and examples'
      ]
    },
    {
      id: 4,
      title: 'Multiplayer Racing Game',
      description: 'Online multiplayer racing game with custom physics and networking',
      longDescription: 'High-speed multiplayer racing experience with custom vehicle physics and robust networking architecture.',
      image: '/api/placeholder/600/400',
      technologies: ['Unreal Engine', 'C++', 'Blueprints', 'Dedicated Servers'],
      category: 'game',
      status: 'in-progress',
      year: 2024,
      features: [
        'Custom vehicle physics',
        'Multiplayer networking',
        'Track editor',
        'Performance optimization',
        'Vehicle customization',
        'Anti-cheat systems'
      ]
    },
    {
      id: 5,
      title: 'Level Editor Tool',
      description: 'Visual level editor with real-time collaboration features',
      longDescription: 'Professional-grade level editing tool with intuitive interface and collaborative development features.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'Qt', 'OpenGL', 'WebSockets'],
      category: 'tool',
      status: 'completed',
      year: 2023,
      features: [
        'Real-time collaboration',
        'Intuitive drag-drop interface',
        'Asset management system',
        'Undo/redo functionality',
        'Export to multiple formats',
        'Plugin architecture'
      ]
    },
    {
      id: 6,
      title: 'AI Behavior System',
      description: 'Modular AI framework for dynamic NPC behaviors and decision making',
      longDescription: 'Sophisticated AI system featuring behavior trees, state machines, and machine learning integration.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'Python', 'TensorFlow', 'Behavior Trees'],
      category: 'engine',
      status: 'completed',
      year: 2023,
      features: [
        'Behavior tree system',
        'State machine framework',
        'Pathfinding algorithms',
        'Machine learning integration',
        'Visual debugging tools',
        'Performance profiling'
      ]
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'game', label: 'Games' },
    { id: 'engine', label: 'Engine' },
    { id: 'tool', label: 'Tools' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-slate-800/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing innovative game development projects and technical achievements
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
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
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
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
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
                    View Details
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
            Interested in collaborating or learning more about my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Let's Connect
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
