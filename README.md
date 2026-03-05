# Premium Backend Engineer Portfolio

A modern, minimal, high-performance personal portfolio website built for CS students targeting FAANG and HFT-level roles. Designed with engineering depth, scalability thinking, and recruiter focus.

## 🎯 Features

- **Minimal & Premium Design**: Dark-first theme with smooth light mode toggle
- **High Performance**: Lighthouse score > 95, optimized asset loading, lazy rendering
- **Responsive**: Fully responsive design for all screen sizes
- **Dark/Light Mode**: Smooth theme transitions with localStorage persistence
- **Smooth Animations**: Framer Motion for subtle, professional transitions
- **SEO Optimized**: Meta tags, semantic HTML, structured data
- **Intersection Observer**: Scroll-triggered animations for performance
- **TypeScript**: Full type safety throughout the project
- **Accessible**: ARIA roles, semantic HTML, keyboard navigation

## 🏗️ Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Footer.tsx
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── hooks/          # Custom React hooks
│   │   └── useInView.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 🎨 Design System

### Colors

**Dark Mode** (Default):
- Background: `#0D0D0D`
- Text: `#E5E7EB`
- Accent Blue: `#3B82F6`
- Muted: `#64748B`

**Light Mode**:
- Background: `#FAFAFA`
- Text: `#1F2937`
- Accent Blue: `#3B82F6`

### Typography

- Font Family: Inter (primary), Geist (display)
- Imported via Google Fonts

### Spacing

- Full width container max: `1152px` (max-w-6xl)
- Standard padding: `1rem` to `6rem`
- Gap between sections: `6rem` (24px)

## ⚙️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3 + PostCSS
- **Animations**: Framer Motion 10
- **Icons**: React Icons
- **State Management**: React Hooks (useState, useRef, useEffect)

## 🎬 Sections

### 1. Hero Section
- Strong headline with blue accent
- Subtext highlighting key attributes
- CTA buttons (View Projects, Download Resume)
- Animated scroll indicator
- Subtle background gradient

### 2. About Me
- Personal story highlighting engineering focus
- Key areas: Backend, DSA, Trading Systems, Data Systems
- Education details
- Target opportunities

### 3. Featured Projects
- 4 showcase projects (expandable cards)
- Problem → Approach → Impact format
- Tech stack tags
- GitHub and demo links
- Subtle hover animations

### 4. Skills & Expertise
- Organized by category: Languages, Backend, Frontend, Databases, Tools, Concepts
- Interactive skill tags with hover effects
- Currently learning section

### 5. Experience & Education
- Timeline layout with animated dots and lines
- 3 key experiences/education items
- Highlights for each item
- Subtle staggered animations

### 6. Contact Section
- Contact form (name, email, message)
- Contact information cards (Email, LinkedIn, GitHub)
- Social links
- Professional footer

## 🔧 Performance Optimizations

1. **Lazy Loading**: Components render on viewport intersection
2. **Image Optimization**: Consider using WebP with fallbacks
3. **Code Splitting**: Vite automatically code-splits React components
4. **CSS Optimization**: TailwindCSS purges unused styles
5. **Minification**: Production builds are minified with Terser

## 📝 Customization

### Update Personal Information

1. **Navigation** (`src/components/Navigation.tsx`):
   - Update logo text

2. **Hero** (`src/sections/Hero.tsx`):
   - Update headline, subtext, resume link

3. **About** (`src/sections/About.tsx`):
   - Update personal story, education, target roles

4. **Projects** (`src/sections/Projects.tsx`):
   - Replace dummy projects with your own
   - Update GitHub and demo links

5. **Skills** (`src/sections/Skills.tsx`):
   - Customize skill categories and items

6. **Experience** (`src/sections/Experience.tsx`):
   - Update timeline items

7. **Contact** (`src/sections/Contact.tsx`):
   - Update email, LinkedIn, GitHub links
   - Configure form endpoint

8. **Footer** (`src/components/Footer.tsx`):
   - Update social media links

### Customize Colors

Edit `tailwind.config.js` and modify the theme colors:
```js
colors: {
  bg: {
    dark: '#0D0D0D',    // Change dark background
    light: '#FAFAFA',   // Change light background
  },
  accent: {
    blue: '#3B82F6',    // Change accent color
  },
}
```

### Customize Fonts

1. Import different fonts in `src/index.css`
2. Update `tailwind.config.js` fontFamily section

## 🚢 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects Vite and deploys

```bash
npm run build
# Vercel uses 'dist' as output directory
```

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Custom Server

```bash
# Build the project
npm run build

# Upload 'dist' folder to your server
# Configure server to serve index.html for all routes (SPA)
```

## 🎯 SEO Best Practices

- Meta tags in `index.html` include title, description, OG tags
- Semantic HTML throughout (header, main, section, footer)
- Mobile-friendly viewport meta tag
- Sitemap can be added for better indexing

## 🔄 CI/CD Configuration

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 🎓 Future Enhancements

### Potential Additions

1. **Blog Section**: Add technical writing portfolio
   - Markdown parsing with gray-matter
   - Article cards with metadata
   - Search functionality

2. **Trading Dashboard Demo**: Interactive visualization
   - Real-time price charts (Chart.js or Recharts)
   - Strategy backtesting visualization
   - Performance metrics

3. **System Design Visualizations**: Interactive diagrams
   - Three.js for 3D architecture visualizations
   - Mermaid diagrams for system design
   - Live algorithm visualizations

4. **Animated Cursor**: Professional cursor effect
   - Custom SVG cursor
   - Magnetic button interactions
   - Smooth follow effect

5. **Three.js Background**: Subtle mesh animation
   - Minimal neural network visualization
   - Grid morphing effect
   - Performance-optimized (WebGL)

6. **Reading Time**: For blog articles
   - Estimated reading time calculation
   - Progress bar

7. **Newsletter Signup**: Email list building
   - Email validation
   - Integration with Mailchimp/Substack

## 📊 Performance Metrics

Target Lighthouse Scores:
- **Performance**: > 95
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

Actual scores depend on:
- Asset optimization
- Image compression
- Third-party scripts
- Font loading strategy

## 🛠️ Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Theme Not Persisting
- Check browser's localStorage is enabled
- Verify `localStorage.setItem('theme', theme)` in App.tsx

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork and customize this template for your own portfolio!

---

**Built for ambitious engineers targeting FAANG and quantitative trading firms. Make it count.** 🚀

