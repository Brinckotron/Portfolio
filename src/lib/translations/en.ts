import { Translations } from '@/types/translations'

export const en: Translations = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact'
  },

  hero: {
    title: {
      firstName: 'François',
      lastName: 'Brinck-Boucher'
    },
    subtitle: 'Graduating video game programming student passionate about creating immersive experiences and advanced game engine programming.',
    buttons: {
      viewGames: 'View My Games',
      contactMe: 'Contact Me'
    }
  },

  about: {
    title: 'About Me',
    paragraphs: {
      introduction: `I'm a graduating <span class="text-blue-400 font-semibold">Video Game Programming</span> student at LaSalle College, seeking employment where I can apply my skills and knowledge. I have solid foundations in <span class="text-purple-400 font-semibold">C++, C#, Java, JavaScript</span> and experience with <span class="text-green-400 font-semibold">Unreal Engine 5</span> and <span class="text-yellow-400 font-semibold">Unity</span>.`,
      experience: `I did <span class="text-blue-400 font-semibold">Web</span> and <span class="text-purple-400 font-semibold">Agentic Coding</span> development during my internship at GigLinked. I'm creative, used to teamwork, a good communicator, adaptable and always ready to learn.`,
      passion: `I'm passionate about video games and want to contribute to creating impactful games, while one day working on <span class="text-green-400 font-semibold">creation tools for players</span> (Map Makers, Toolsets) that inspired me in my youth.`
    },
    specializations: {
      title: 'My Specializations',
      items: {
        gameProgramming: {
          title: 'Game Programming',
          desc: 'C++, C#, Unity and Unreal Engine 5 with complex systems'
        },
        aiSystems: {
          title: 'AI and Game Systems',
          desc: 'Behavior Trees, combat systems and puzzle mechanics'
        },
        webDevelopment: {
          title: 'Web Development',
          desc: 'TypeScript, React and modern API integration'
        },
        creationTools: {
          title: 'Creation Tools',
          desc: 'Level editors, map makers and interaction systems'
        }
      }
    },
    stats: {
      graduation: 'Graduation',
      projects: 'Game Projects'
    }
  },

  skills: {
    title: 'Technical Skills',
    subtitle: 'A complete toolkit for creating innovative games and interactive experiences',
    categories: {
      programmingLanguages: 'Programming Languages',
      enginesAndTechnologies: 'Engines & Technologies',
      toolsAndDatabases: 'Tools & Databases',
      gameDevelopment: 'Game Development'
    },
    gameDevSkills: {
      aiSystems: 'AI Systems',
      gameplayProgramming: 'Gameplay Programming',
      puzzleSystems: 'Puzzle Systems',
      animation: 'Animation',
      userInterface: 'User Interface',
      performanceOptimization: 'Performance Optimization'
    },
    specializedExpertise: {
      title: 'Specialized Expertise',
      gameArchitecture: {
        title: 'Game Architecture',
        description: 'Complex systems with AI, puzzles and innovative mechanics'
      },
      performanceOptimization: {
        title: 'Performance Optimization',
        description: 'Memory management, profiling and bottleneck elimination'
      },
      toolDevelopment: {
        title: 'Tool Development',
        description: 'Custom editors, asset pipelines and automation'
      }
    }
  },

  projects: {
    title: 'Featured Projects',
    subtitle: 'Innovative game development projects and technical achievements',
    filters: {
      all: 'All Projects',
      games: 'Games',
      tools: 'Tools'
    },
    status: {
      completed: 'Completed',
      inProgress: 'In Progress'
    },
    keyFeatures: 'Key Features:',
    viewDetails: 'View Details',
    callToAction: {
      text: 'Interested in collaboration or learning more about my work?',
      button: 'Contact Me'
    },
    projectData: {
      xcape: {
        title: 'ProjectXCAPE',
        description: '3D first-person horror puzzle game with complex AI and advanced interaction systems',
        longDescription: 'Immersive adventure game set in an ancient Egyptian tomb with complex puzzles and Anubis AI.',
        features: [
          'Complex AI system with Behavior Trees',
          'Dynamic inventory system',
          'Advanced interaction framework',
          'Modular puzzle systems',
          'Custom animation events',
          'Memory and performance optimization'
        ]
      },
      poker: {
        title: 'Poker Roguelite',
        description: 'Android roguelite poker game with adaptive AI and progression systems',
        longDescription: 'Sophisticated poker game with roguelite mechanics, adaptive AI and relic progression.',
        features: [
          'Poker hand recognition algorithm',
          'Adaptive AI with progressive difficulty',
          'Relic and upgrade system',
          'Optimized mobile interface',
          'Card animation system',
          'Event-driven architecture'
        ]
      },
      togv: {
        title: 'Twilight of Grim Valor',
        description: '2D roguelite action-adventure platformer with combat and progression systems',
        longDescription: 'Ambitious personal project showcasing persistence and growing technical skills.',
        features: [
          'Complex state machine for player',
          'Polymorphic enemy AI',
          'Progression and XP system',
          'Dynamic user interface',
          'Integrated audio system',
          'Modular architecture'
        ]
      },
      zombie: {
        title: 'ZombieShooter',
        description: '2D survival shooter game with LibGDX and MySQL database integration',
        longDescription: 'Demonstrates fundamental game engine concepts and data persistence.',
        features: [
          'Efficient 2D rendering pipeline',
          'Dynamic power-up system',
          'MySQL database integration',
          'Entity-Component architecture',
          'Persistent high score system',
          'Centralized asset management'
        ]
      },
      pointbuy: {
        title: 'D&D Point Buy Calculator',
        description: 'WPF desktop application for calculating D&D statistics with intuitive interface',
        longDescription: 'Practical tool created very early in my journey, demonstrating passion for solving real problems.',
        features: [
          'Responsive WPF interface',
          'Point Buy mathematical calculations',
          'State management for scores',
          'Randomization system',
          'Advanced stats visualizer',
          'MVVM architecture'
        ]
      },
      spectrail: {
        title: 'Spectrail',
        description: 'Game created for Game Jam with level design, concept and programming',
        longDescription: 'Collaborative project demonstrating game design skills and rapid development.',
        features: [
          'Rapid development (Game Jam)',
          'Creative level design',
          'Innovative game mechanics',
          'Team collaboration',
          'Polish and finishing',
          'Published on itch.io'
        ]
      }
    }
  },

  contact: {
    title: 'Contact Me',
    subtitle: 'Ready to collaborate on your next game project? Let\'s discuss how we can bring your vision to life.',
    form: {
      title: 'Send a Message',
      fields: {
        name: {
          label: 'Your Name',
          placeholder: 'John Doe'
        },
        email: {
          label: 'Email Address',
          placeholder: 'john@example.com'
        },
        subject: {
          label: 'Subject',
          placeholder: 'Project Collaboration'
        },
        message: {
          label: 'Message',
          placeholder: 'Tell me about your project ideas...'
        }
      },
      submitButton: 'Send Message'
    },
    info: {
      title: 'Let\'s Connect',
      email: {
        label: 'Email',
        response: 'I respond within 24 hours'
      },
      location: {
        label: 'Location',
        city: 'Montreal, QC, Canada',
        remote: 'Remote collaboration welcome'
      },
      phone: {
        label: 'Phone',
        availability: 'Available for full-time opportunities'
      },
      findMeOnline: 'Find me online'
    },
    whyWorkWithMe: {
      title: 'Why Work With Me?',
      items: [
        '✨ Graduating in video game programming (2025)',
        '🚀 Experience with complex and complete projects',
        '🔧 Skills in web development and games',
        '🎯 Focus on optimization and clean architecture',
        '🤝 Collaborative and communicative approach',
        '💡 Agentic Coding and modern technologies'
      ]
    }
  },

  footer: {
    brand: {
      tagline: 'Crafting immersive digital experiences through innovative game development and cutting-edge technology solutions.'
    },
    quickLinks: 'Quick Links',
    getInTouch: 'Get In Touch',
    contact: {
      worldwide: 'Available Worldwide',
      opportunities: 'Open to new opportunities'
    },
    copyright: 'Francois Game Developer. All rights reserved.',
    builtWith: 'Built with Next.js & Tailwind CSS • Hosted on Cloudflare Pages'
  }
}
