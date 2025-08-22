# Getting Started Guide

## 🚀 You're Almost Ready!

Great job installing the dependencies! I can see you're using WSL (Windows Subsystem for Linux). Here's how to get your portfolio running:

## Next Steps:

### 1. Open your WSL terminal and run:
```bash
cd /mnt/c/Users/Francois/Documents/Portfolio
npm audit fix
npm run dev
```

### 2. Open your browser to:
```
http://localhost:3000
```

You should see your beautiful game developer portfolio! 🎮

## Development Workflow:

### Start development server:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm start
```

## Customization Guide:

### 📝 Update Your Information:

1. **Personal Details**: Edit contact info in `src/components/Contact.tsx` and `src/components/Footer.tsx`

2. **Projects**: Replace sample projects in `src/components/Projects.tsx` with your actual game development work:
   ```typescript
   const projects = [
     {
       id: 1,
       title: 'Your Actual Game Title',
       description: 'Description of your game',
       technologies: ['Unity', 'C#', 'etc'],
       category: 'game', // 'game', 'engine', 'tool'
       status: 'completed',
       year: 2024,
       features: ['Feature 1', 'Feature 2']
     }
   ]
   ```

3. **Skills**: Update `src/components/Skills.tsx` with your actual technical skills

4. **About Section**: Modify `src/components/About.tsx` with your background and experience

### 🎨 Styling:
- Colors and themes are in `src/app/globals.css`
- Component styles use Tailwind CSS classes
- Gaming theme with blue/purple gradients

## 🌐 Deployment to Cloudflare Pages:

### Method 1: Git Integration (Recommended)
1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Connect to Cloudflare Pages:
   - Go to Cloudflare Dashboard → Pages
   - Connect your GitHub repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `out`

### Method 2: Direct Upload
1. Build locally: `npm run build`
2. Upload the `out` folder to Cloudflare Pages

## 🔧 Troubleshooting:

### If you get "npm not found" in PowerShell:
You have two options:
1. **Continue in WSL** (recommended - you already have it working)
2. **Install Node.js for Windows** from nodejs.org

### If you see build errors:
1. Make sure you're using Node.js 18+ (`node --version`)
2. Delete `node_modules` and run `npm install` again
3. Check that all files are saved

## 📱 Testing:
- Test on mobile devices
- Check all sections scroll smoothly
- Verify contact form works
- Test project filtering

Your portfolio is ready to showcase your game development skills! 🎮✨
