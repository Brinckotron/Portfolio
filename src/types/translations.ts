export type Language = 'en' | 'fr'

export interface Translations {
  // Navigation
  nav: {
    about: string
    skills: string
    projects: string
    contact: string
  }

  // Hero Section
  hero: {
    title: {
      firstName: string
      lastName: string
    }
    subtitle: string
    buttons: {
      viewGames: string
      contactMe: string
    }
  }

  // About Section
  about: {
    title: string
    paragraphs: {
      introduction: string
      experience: string
      passion: string
    }
    specializations: {
      title: string
      items: {
        gameProgramming: {
          title: string
          desc: string
        }
        aiSystems: {
          title: string
          desc: string
        }
        webDevelopment: {
          title: string
          desc: string
        }
        creationTools: {
          title: string
          desc: string
        }
      }
    }
    stats: {
      graduation: string
      projects: string
    }
  }

  // Skills Section
  skills: {
    title: string
    subtitle: string
    categories: {
      programmingLanguages: string
      enginesAndTechnologies: string
      toolsAndDatabases: string
      gameDevelopment: string
    }
    gameDevSkills: {
      aiSystems: string
      gameplayProgramming: string
      puzzleSystems: string
      animation: string
      userInterface: string
      performanceOptimization: string
    }
    specializedExpertise: {
      title: string
      gameArchitecture: {
        title: string
        description: string
      }
      performanceOptimization: {
        title: string
        description: string
      }
      toolDevelopment: {
        title: string
        description: string
      }
    }
  }

  // Projects Section
  projects: {
    title: string
    subtitle: string
    filters: {
      all: string
      games: string
      tools: string
    }
    status: {
      completed: string
      inProgress: string
    }
    keyFeatures: string
    viewDetails: string
    callToAction: {
      text: string
      button: string
    }
    projectData: {
      xcape: {
        title: string
        description: string
        longDescription: string
        features: string[]
      }
      poker: {
        title: string
        description: string
        longDescription: string
        features: string[]
      }
      togv: {
        title: string
        description: string
        longDescription: string
        features: string[]
      }
      zombie: {
        title: string
        description: string
        longDescription: string
        features: string[]
      }
      pointbuy: {
        title: string
        description: string
        longDescription: string
        features: string[]
      }
      spectrail: {
        title: string
        description: string
        longDescription: string
        features: string[]
      }
    }
  }

  // Contact Section
  contact: {
    title: string
    subtitle: string
    form: {
      title: string
      fields: {
        name: {
          label: string
          placeholder: string
        }
        email: {
          label: string
          placeholder: string
        }
        subject: {
          label: string
          placeholder: string
        }
        message: {
          label: string
          placeholder: string
        }
      }
      submitButton: string
    }
    info: {
      title: string
      email: {
        label: string
        response: string
      }
      location: {
        label: string
        city: string
        remote: string
      }
      phone: {
        label: string
        availability: string
      }
      findMeOnline: string
    }
    whyWorkWithMe: {
      title: string
      items: string[]
    }
  }

  // Footer
  footer: {
    brand: {
      tagline: string
    }
    quickLinks: string
    getInTouch: string
    contact: {
      worldwide: string
      opportunities: string
    }
    copyright: string
    builtWith: string
  }
}
