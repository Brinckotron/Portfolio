import { Translations } from '@/types/translations'

export const fr: Translations = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact'
  },

  hero: {
    title: {
      firstName: 'François',
      lastName: 'Brinck-Boucher'
    },
    subtitle: 'Finissant en programmation de jeux vidéo passionné par la création d\'expériences immersives et la programmation de moteurs de jeu avancés.',
    buttons: {
      viewGames: 'Voir Mes Jeux',
      contactMe: 'Me Contacter'
    }
  },

  about: {
    title: 'À propos de moi',
    paragraphs: {
      introduction: `Je suis finissant en <span class="text-blue-400 font-semibold">Programmation en Jeux Vidéo</span> au Collège LaSalle, à la recherche d'un emploi où je peux appliquer mes compétences et connaissances. J'ai des bases solides en <span class="text-purple-400 font-semibold">C++, C#, Java, JavaScript</span> et de l'expérience avec <span class="text-green-400 font-semibold">Unreal Engine 5</span> et <span class="text-yellow-400 font-semibold">Unity</span>.`,
      experience: `J'ai fait du développement <span class="text-blue-400 font-semibold">Web</span> et <span class="text-purple-400 font-semibold">Agentic Coding</span> durant mon stage à GigLinked. Je suis créatif, habitué au travail d'équipe, bon communicateur, adaptable et toujours prêt à apprendre.`,
      passion: `Je suis passionné des jeux vidéo et souhaite contribuer à la création de jeux marquants, tout en travaillant un jour sur des <span class="text-green-400 font-semibold">outils de création pour les joueurs</span> (Map Makers, Toolsets) qui m'ont inspiré dans ma jeunesse.`
    },
    specializations: {
      title: 'Mes spécialisations',
      items: {
        gameProgramming: {
          title: 'Programmation de Jeux',
          desc: 'C++, C#, Unity et Unreal Engine 5 avec systèmes complexes'
        },
        aiSystems: {
          title: 'IA et Systèmes de Jeu',
          desc: 'Behaviour Trees, systèmes de combat et mécaniques de puzzle'
        },
        webDevelopment: {
          title: 'Développement Web',
          desc: 'TypeScript, React et intégration d\'APIs modernes'
        },
        creationTools: {
          title: 'Outils de Création',
          desc: 'Level editors, map makers et systèmes d\'interaction'
        }
      }
    },
    stats: {
      graduation: 'Graduation',
      projects: 'Projets de Jeu'
    }
  },

  skills: {
    title: 'Compétences Techniques',
    subtitle: 'Une boîte à outils complète pour créer des jeux et expériences interactives innovantes',
    categories: {
      programmingLanguages: 'Langages de Programmation',
      enginesAndTechnologies: 'Moteurs & Technologies',
      toolsAndDatabases: 'Outils & Bases de Données',
      gameDevelopment: 'Développement de Jeux'
    },
    gameDevSkills: {
      aiSystems: 'Systèmes IA',
      gameplayProgramming: 'Programmation Gameplay',
      puzzleSystems: 'Systèmes de Puzzle',
      animation: 'Animation',
      userInterface: 'Interface Utilisateur',
      performanceOptimization: 'Optimisation Performance'
    },
    specializedExpertise: {
      title: 'Expertises Spécialisées',
      gameArchitecture: {
        title: 'Architecture de Jeux',
        description: 'Systèmes complexes avec IA, puzzles et mécaniques innovantes'
      },
      performanceOptimization: {
        title: 'Optimisation Performance',
        description: 'Gestion mémoire, profiling et élimination des goulots d\'étranglement'
      },
      toolDevelopment: {
        title: 'Développement d\'Outils',
        description: 'Éditeurs personnalisés, pipelines d\'assets et automation'
      }
    }
  },

  projects: {
    title: 'Projets Principaux',
    subtitle: 'Projets de développement de jeux innovants et réalisations techniques',
    filters: {
      all: 'Tous les Projets',
      games: 'Jeux',
      tools: 'Outils'
    },
    status: {
      completed: 'Terminé',
      inProgress: 'En Cours'
    },
    keyFeatures: 'Fonctionnalités Clés:',
    viewDetails: 'Voir Détails',
    callToAction: {
      text: 'Intéressé par une collaboration ou en apprendre plus sur mon travail?',
      button: 'Contactez-moi'
    },
    projectData: {
      xcape: {
        title: 'ProjectXCAPE',
        description: 'Jeu d\'horreur puzzle 3D en première personne avec IA complexe et systèmes d\'interaction avancés',
        longDescription: 'Jeu d\'aventure immersif situé dans une tombe égyptienne ancienne avec puzzles complexes et IA Anubis.',
        features: [
          'Système IA complexe avec Behavior Trees',
          'Système d\'inventaire dynamique',
          'Framework d\'interaction avancé',
          'Systèmes de puzzles modulaires',
          'Animation events personnalisés',
          'Optimisation mémoire et performance'
        ]
      },
      poker: {
        title: 'Poker Roguelite',
        description: 'Jeu de poker roguelite pour Android avec IA adaptive et systèmes de progression',
        longDescription: 'Jeu de poker sophistiqué avec mécaniques roguelite, IA adaptative et progression par reliques.',
        features: [
          'Algorithme de reconnaissance de mains poker',
          'IA adaptative avec difficulté progressive',
          'Système de reliques et upgrades',
          'Interface mobile optimisée',
          'Système d\'animation de cartes',
          'Architecture événementielle'
        ]
      },
      togv: {
        title: 'Twilight of Grim Valor',
        description: 'Plateforme action-aventure roguelite 2D avec systèmes de combat et progression',
        longDescription: 'Projet personnel ambitieux montrant la persistance et les compétences techniques croissantes.',
        features: [
          'Machine à états complexe pour le joueur',
          'IA ennemie polymorphique',
          'Système de progression et XP',
          'Interface utilisateur dynamique',
          'Système audio intégré',
          'Architecture modulaire'
        ]
      },
      zombie: {
        title: 'ZombieShooter',
        description: 'Jeu de tir de survie 2D avec LibGDX et intégration base de données MySQL',
        longDescription: 'Démontre les concepts fondamentaux des moteurs de jeu et la persistance des données.',
        features: [
          'Pipeline de rendu 2D efficace',
          'Système de power-ups dynamique',
          'Intégration base de données MySQL',
          'Architecture Entity-Component',
          'Système de high scores persistant',
          'Gestion des assets centralisée'
        ]
      },
      pointbuy: {
        title: 'D&D Point Buy Calculator',
        description: 'Application desktop WPF pour calculer les statistiques D&D avec interface intuitive',
        longDescription: 'Outil pratique créé très tôt dans mon parcours, démontrant la passion pour résoudre des problèmes réels.',
        features: [
          'Interface WPF responsive',
          'Calculs mathématiques Point Buy',
          'Gestion d\'état pour scores',
          'Système de randomisation',
          'Visualisateur de stats avancé',
          'Architecture MVVM'
        ]
      },
      spectrail: {
        title: 'Spectrail',
        description: 'Jeu créé pour Game Jam avec level design, concept et programmation',
        longDescription: 'Projet collaboratif démontrant les compétences en game design et développement rapide.',
        features: [
          'Développement rapide (Game Jam)',
          'Level design créatif',
          'Mécaniques de jeu innovantes',
          'Collaboration d\'équipe',
          'Polish et finition',
          'Publication sur itch.io'
        ]
      }
    }
  },

  contact: {
    title: 'Contactez-moi',
    subtitle: 'Prêt à collaborer sur votre prochain projet de jeu? Discutons de comment nous pouvons donner vie à votre vision.',
    form: {
      title: 'Envoyer un Message',
      fields: {
        name: {
          label: 'Votre Nom',
          placeholder: 'Jean Dupont'
        },
        email: {
          label: 'Adresse Email',
          placeholder: 'jean@exemple.com'
        },
        subject: {
          label: 'Sujet',
          placeholder: 'Collaboration de Projet'
        },
        message: {
          label: 'Message',
          placeholder: 'Parlez-moi de vos idées de projet...'
        }
      },
      submitButton: 'Envoyer le Message'
    },
    info: {
      title: 'Connectons-nous',
      email: {
        label: 'Email',
        response: 'Je réponds dans les 24 heures'
      },
      location: {
        label: 'Localisation',
        city: 'Montréal, QC, Canada',
        remote: 'Collaboration à distance bienvenue'
      },
      phone: {
        label: 'Téléphone',
        availability: 'Disponible pour opportunités temps plein'
      },
      findMeOnline: 'Trouvez-moi en ligne'
    },
    whyWorkWithMe: {
      title: 'Pourquoi Travailler Avec Moi?',
      items: [
        '✨ Finissant en programmation jeux vidéo (2025)',
        '🚀 Expérience avec projets complexes et complets',
        '🔧 Compétences en développement web et jeux',
        '🎯 Focus sur optimisation et architecture propre',
        '🤝 Approche collaborative et communicative',
        '💡 Agentic Coding et technologies modernes'
      ]
    }
  },

  footer: {
    brand: {
      tagline: 'Création d\'expériences numériques immersives grâce au développement de jeux innovant et aux solutions technologiques de pointe.'
    },
    quickLinks: 'Liens Rapides',
    getInTouch: 'Contactez-moi',
    contact: {
      worldwide: 'Disponible Mondialement',
      opportunities: 'Ouvert aux nouvelles opportunités'
    },
    copyright: 'Francois Game Developer. Tous droits réservés.',
    builtWith: 'Construit avec Next.js & Tailwind CSS • Hébergé sur Cloudflare Pages'
  }
}
