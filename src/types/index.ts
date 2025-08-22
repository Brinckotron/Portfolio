export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  image: string
  demoUrl?: string
  sourceUrl?: string
  category: 'game' | 'engine' | 'tool' | 'web'
  status: 'completed' | 'in-progress' | 'concept'
  year: number
}

export interface Skill {
  name: string
  category: 'programming' | 'engine' | 'tools' | 'gamedev'
  proficiency: number // 1-5
  icon?: string
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
