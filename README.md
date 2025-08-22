# Game Developer Portfolio

A modern, responsive portfolio website showcasing video game programming work and technical expertise. Built with Next.js and optimized for Cloudflare Pages deployment.

## 🎮 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Performance Optimized**: Static export for fast loading
- **Cloudflare Ready**: Configured for Cloudflare Pages hosting
- **Gaming Theme**: Tailored specifically for game development portfolios

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Install Node.js** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Choose the LTS version (18.x or later)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Navbar.tsx      # Navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
└── types/             # TypeScript definitions
    └── index.ts       # Type definitions
```

## 🛠 Customization

### Adding Your Projects

Edit `src/components/Projects.tsx` and update the `projects` array with your game development work:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Game Title',
    description: 'Brief description',
    technologies: ['Unity', 'C#', 'etc'],
    category: 'game', // 'game', 'engine', 'tool'
    status: 'completed', // 'completed', 'in-progress'
    year: 2024,
    features: ['Feature 1', 'Feature 2']
  }
]
```

### Updating Skills

Modify `src/components/Skills.tsx` to reflect your technical expertise:

```typescript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'C#', 'Python'], // Add your skills
    color: 'blue'
  }
]
```

### Contact Information

Update contact details in `src/components/Contact.tsx` and `src/components/Footer.tsx`.

## 🌐 Deployment to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub repository
   - Use these build settings:
     - **Framework preset**: Next.js (Static HTML Export)
     - **Build command**: `npm run build`
     - **Build output directory**: `out`

### Method 2: Direct Upload

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `out` folder** to Cloudflare Pages via the dashboard

### Build Configuration

The project is pre-configured for static export with these settings:

- ✅ Static HTML export enabled
- ✅ Image optimization disabled (for Cloudflare compatibility)
- ✅ Trailing slashes configured
- ✅ Node.js version specified (.nvmrc)

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom animations**: Smooth transitions and hover effects
- **Responsive design**: Mobile-first approach
- **Dark theme**: Gaming-inspired color scheme
- **Gradient effects**: Modern visual appeal

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

---

**Built by a Game Developer, for Game Developers** 🎮
