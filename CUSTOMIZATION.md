# Quick Customization Guide

## 🎬 Essential Customizations (Do This First)

### 1. Update Hero Section
**File:** [src/sections/Hero.tsx](src/sections/Hero.tsx#L32)

```tsx
// Change this:
<h1>
  Backend Engineer &
  <span className="block text-blue-400">Data Systems Enthusiast</span>
</h1>

// To your headline:
<h1>
  Your Title Here &
  <span className="block text-blue-400">Your Subtitle</span>
</h1>
```

### 2. Update About Section
**File:** [src/sections/About.tsx](src/sections/About.tsx#L32)

- Replace personal story
- Update education details
- Update target opportunities

### 3. Update Projects
**File:** [src/sections/Projects.tsx](src/sections/Projects.tsx#L17)

```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Short description',
    problem: 'What problem did you solve?',
    approach: 'How did you build it?',
    impact: 'What were the results?',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourprofile/repo',
    demo: 'https://project-demo.com',
  },
  // Add more projects
]
```

### 4. Update Contact Info
**File:** [src/sections/Contact.tsx](src/sections/Contact.tsx#L90)

Replace email, LinkedIn, and GitHub links with yours.

### 5. Update Footer Links
**File:** [src/components/Footer.tsx](src/components/Footer.tsx#L6)

Update social media links to your profiles.

---

## 🎨 Color Customization

### Change Theme Colors

**File:** [tailwind.config.js](tailwind.config.js#L9)

```js
colors: {
  bg: {
    dark: '#0D0D0D',      // ← Change dark background
    light: '#FAFAFA',     // ← Change light background
  },
  accent: {
    blue: '#3B82F6',      // ← Change accent color
  },
}
```

### Common Color Options

**Dark backgrounds:**
- `#0D0D0D` (current, pure black)
- `#111111` (slightly lighter)
- `#1A1A1A` (more visible)

**Accent colors:**
- `#3B82F6` (current, blue)
- `#EC4899` (pink)
- `#10B981` (green)
- `#F59E0B` (amber)
- `#8B5CF6` (purple)

---

## ✍️ Typography Changes

### Change Fonts

**File:** [src/index.css](src/index.css#L3)

Current:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

**Alternative fonts:**

```css
/* Geist font */
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap');

/* Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Outfit */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
```

Then update in [tailwind.config.js](tailwind.config.js#L16):

```js
fontFamily: {
  sans: ['Poppins', 'sans-serif'],  // ← Change here
  display: ['Geist', 'sans-serif'],
}
```

---

## 🖼️ Add Your Resume PDF

1. Store PDF in `public/resume.pdf`
2. Update link in [src/sections/Hero.tsx](src/sections/Hero.tsx#L51):

```tsx
<a href="/resume.pdf">  {/* ← Update path if different */}
  Download Resume
</a>
```

---

## 📱 Responsive Breakpoints

Used throughout (TailwindCSS defaults):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Example usage:
```tsx
<div className="text-sm md:text-lg lg:text-xl">
  Different text sizes for different screens
</div>
```

---

## 🎬 Animation Customization

### Framer Motion Easing Options

**File:** [src/sections/Hero.tsx](src/sections/Hero.tsx#L17)

```tsx
transition={{ 
  duration: 0.8,
  ease: 'easeOut'  // ← Change easing
}}
```

**Available easings:**
- `'easeIn'` - accelerating
- `'easeOut'` - decelerating (recommended)
- `'easeInOut'` - accelerate then decelerate
- `'linear'` - constant speed
- `'backIn'`, `'backOut'` - bouncy

### Scroll Animation Timing

**File:** [src/hooks/useInView.ts](src/hooks/useInView.ts#L9)

```ts
const observer = new IntersectionObserver(
  (entries) => { /* ... */ },
  { 
    threshold: 0.1,           // ← Trigger when 10% in view
    rootMargin: '0px 0px -100px 0px'  // ← Adjust trigger zone
  }
)
```

---

## 🌙 Dark/Light Mode Customization

### Change Default Theme

**File:** [src/App.tsx](src/App.tsx#L13)

```tsx
const [theme, setTheme] = useState<Theme>(() => {
  const stored = localStorage.getItem('theme')
  return (stored as Theme) || 'light'  // ← Change 'dark' to 'light'
})
```

### Add More Theme Options

Extend `src/App.tsx`:

```tsx
type Theme = 'dark' | 'light' | 'auto'

useEffect(() => {
  if (theme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', prefersDark)
  } else {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }
}, [theme])
```

---

## 🔗 Navigation Links

### Add New Navigation Item

**File:** [src/components/Navigation.tsx](src/components/Navigation.tsx#L11)

```tsx
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },          // ← Add new section
  { label: 'Contact', href: '#contact' },
]
```

Then add corresponding section in [src/App.tsx](src/App.tsx#L39):

```tsx
<Blog />  {/* ← Add new component */}
```

---

## 📊 Add New Section Template

### Create New Section Component

Create `src/sections/NewSection.tsx`:

```tsx
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const NewSection = () => {
  const ref = useInView()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="newsection" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12">
            Section Title
          </motion.h2>

          <motion.div variants={itemVariants}>
            {/* Your content here */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewSection
```

### Add to App

**File:** [src/App.tsx](src/App.tsx)

```tsx
import NewSection from './sections/NewSection'

// In render:
<NewSection />
```

---

## 🏷️ Update Meta Tags

**File:** [index.html](index.html#L6)

```html
<meta name="description" content="Your description here" />
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your description" />
<meta name="author" content="Your Name" />
```

---

## 🔧 Environment Variables

### Add API Endpoints

Create `.env`:

```env
VITE_API_URL=https://api.example.com
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_ID
```

Use in code:

```tsx
const apiUrl = import.meta.env.VITE_API_URL

// Usage:
fetch(`${apiUrl}/endpoint`)
```

---

## 📦 Dependency Management

### Install New Packages

```bash
npm install package-name
npm install -D dev-package-name  # For dev dependencies
```

### Remove Unused Packages

```bash
npm uninstall package-name
npm prune  # Remove unused dependencies
```

### Update Packages

```bash
npm outdated          # Check outdated packages
npm update            # Update to latest compatible
npm install -g npm@latest  # Update npm itself
```

---

## 🧪 Testing Commands

```bash
# Type checking
npx tsc --noEmit

# Build check
npm run build

# Preview production
npm run preview
```

---

## 🚀 Performance Tips

1. **Keep animations smooth**: Use `will-change` sparingly
2. **Lazy load images**: Always use `loading="lazy"`
3. **Minimize re-renders**: Use React.memo for static components
4. **Code split routes**: Use dynamic imports for new sections
5. **Monitor bundle size**: Regular `npm run build` review

---

## 🎯 Common Changes Checklist

- [ ] Update hero headline and subtext
- [ ] Add your projects to Projects section
- [ ] Update About section with your info
- [ ] Update Skills section with your skills
- [ ] Update Experience/Education timeline
- [ ] Update Contact section with your email/socials
- [ ] Update Footer links
- [ ] Add your resume PDF
- [ ] Change colors if desired
- [ ] Test dark/light mode toggle
- [ ] Test responsive design
- [ ] Verify all links work
- [ ] Test form submission
- [ ] Run `npm run build` successfully
- [ ] Deploy to platform of choice

---

## ❓ Frequently Changed Items

| Item | File | Line(s) |
|------|------|---------|
| Main headline | Hero.tsx | 32-34 |
| CTA buttons | Hero.tsx | 51-63 |
| About text | About.tsx | 32-50 |
| Projects list | Projects.tsx | 17-60 |
| Skills | Skills.tsx | 8-25 |
| Experience | Experience.tsx | 8-50 |
| Contact email | Contact.tsx | 90 |
| Social links | Footer.tsx | 6-10 |
| Colors | tailwind.config.js | 9-16 |
| Fonts | index.css + tailwind | 3, 16 |
| Navigation items | Navigation.tsx | 11-18 |

---

## 📞 Support & Issues

If something breaks:

1. Check console for errors (F12)
2. Verify all files are saved
3. Run `npm install` to restore dependencies
4. Try `npm run build` to catch TypeScript errors
5. Restart dev server: Stop with Ctrl+C, then `npm run dev`

---

## 💾 Before Deployment

```bash
# 1. Type check
npx tsc --noEmit

# 2. Build production
npm run build

# 3. Preview locally
npm run preview

# 4. Check console for errors
# (Open DevTools: F12, go to Console tab)

# 5. Test on mobile
# (Resize browser or use phone)

# 6. Lighthouse audit
# (DevTools → Lighthouse → Generate report)
```

Then deploy confidently! 🚀

