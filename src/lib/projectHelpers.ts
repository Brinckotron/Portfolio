import { Translations } from '@/types/translations'

export const getProjectsData = (t: Translations) => [
  {
    id: 1,
    title: t.projects.projectData.xcape.title,
    description: t.projects.projectData.xcape.description,
    longDescription: t.projects.projectData.xcape.longDescription,
    image: '/XCape.png',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Animation'],
    category: 'game',
    status: 'in-progress',
    year: 2024,
    features: t.projects.projectData.xcape.features,
    sourceUrl: 'https://github.com/Brinckotron/ProjectXCAPE'
  },
  {
    id: 2,
    title: t.projects.projectData.poker.title,
    description: t.projects.projectData.poker.description,
    longDescription: t.projects.projectData.poker.longDescription,
    image: '/Poker.jpg',
    technologies: ['Unity', 'C#', 'Android SDK', 'LINQ'],
    category: 'game',
    status: 'completed',
    year: 2023,
    features: t.projects.projectData.poker.features,
    sourceUrl: 'https://github.com/Brinckotron/ProjetPoker'
  },
  {
    id: 3,
    title: t.projects.projectData.togv.title,
    description: t.projects.projectData.togv.description,
    longDescription: t.projects.projectData.togv.longDescription,
    image: '/ToGV.png',
    technologies: ['Unity', 'C#', 'URP', 'Animation 2D'],
    category: 'game',
    status: 'in-progress',
    year: 2024,
    features: t.projects.projectData.togv.features,
    sourceUrl: 'https://github.com/Brinckotron/MoteurDeJeuProject'
  },
  {
    id: 4,
    title: t.projects.projectData.zombie.title,
    description: t.projects.projectData.zombie.description,
    longDescription: t.projects.projectData.zombie.longDescription,
    image: '/Zombie.png',
    technologies: ['LibGDX', 'Java', 'MySQL', 'JDBC'],
    category: 'game',
    status: 'completed',
    year: 2023,
    features: t.projects.projectData.zombie.features,
    sourceUrl: 'https://github.com/Brinckotron/ZombieShooter'
  },
  {
    id: 5,
    title: t.projects.projectData.pointbuy.title,
    description: t.projects.projectData.pointbuy.description,
    longDescription: t.projects.projectData.pointbuy.longDescription,
    image: '/PointBuy.png',
    technologies: ['C#', 'WPF', '.NET 6', 'XAML'],
    category: 'tool',
    status: 'completed',
    year: 2022,
    features: t.projects.projectData.pointbuy.features,
    sourceUrl: 'https://github.com/Brinckotron/DnDPointBuy'
  },
  {
    id: 6,
    title: t.projects.projectData.spectrail.title,
    description: t.projects.projectData.spectrail.description,
    longDescription: t.projects.projectData.spectrail.longDescription,
    image: '/Spectrail.png',
    technologies: ['Unity', 'C#', 'Level Design', 'Game Design'],
    category: 'game',
    status: 'completed',
    year: 2023,
    features: t.projects.projectData.spectrail.features,
    demoUrl: 'https://thefacelesssheep.itch.io/spectrail'
  }
]
