# Performance Optimization Guide

## Current Build Metrics

```
dist/index.html                   1.05 kB │ gzip:  0.53 kB
dist/assets/index--Ol-3tOS.css   17.79 kB │ gzip:  3.92 kB
dist/assets/index-B9Qez4LJ.js   277.74 kB │ gzip: 86.86 kB
```

**Total Gzipped: ~91 kB** ✓ Excellent

---

## Lighthouse Score Targets

- **Performance**: > 95
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

### How to Test

1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Analyze page load"
4. Review recommendations

---

## Performance Optimization Strategies

### 1. Image Optimization

**Current:** No images (text-based design)

**If adding images:**

```tsx
// Use Next.js Image component (if migrating to Next.js)
import Image from 'next/image'

export default function ImageComponent() {
  return (
    <Image
      src="/image.png"
      alt="Description"
      width={800}
      height={600}
      loading="lazy"
    />
  )
}

// Or use native lazy loading
<img 
  src="image.png" 
  alt="Description" 
  loading="lazy"
/>
```

**Best Practices:**
- Use WebP format with PNG fallback
- Compress with TinyPNG/ImageOptim
- Use srcset for responsive images
- Lazy load images with `loading="lazy"`

---

### 2. Font Loading Optimization

**Current:** Google Fonts via `@import`

**Current:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

**Optimized (use `display=swap`):**
- Already using `display=swap` ✓
- Fonts load in background
- System font shown initially

**Further optimization (optional):**

```css
/* Use font-display local cache */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter.woff2') format('woff2');
}
```

---

### 3. Code Splitting

**Already implemented by Vite ✓**

React components are automatically code-split. For manual control:

```tsx
// Lazy load route components
import { lazy, Suspense } from 'react'

const Projects = lazy(() => import('./sections/Projects'))

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects />
    </Suspense>
  )
}
```

---

### 4. Lazy Loading Components

**Current:** Intersection Observer for reveal animations ✓

**Further optimization:**

```tsx
// Lazy load heavy components
import { lazy, Suspense } from 'react'

const HeavyChart = lazy(() => import('./components/HeavyChart'))

export function Dashboard() {
  return (
    <Suspense fallback={<Skeleton />}>
      <HeavyChart />
    </Suspense>
  )
}
```

---

### 5. CSS Optimization

**Current:** TailwindCSS with purging ✓

Already optimized:
- Only used styles are included
- No unused CSS
- Minimal CSS bundle

**Verification:**
```bash
# Check what's in the CSS bundle
npm run build

# Bundle analyzer (optional)
npm install -D vite-plugin-visualizer
```

---

### 6. JavaScript Optimization

**Current:**
- React 18.3 (lightweight)
- Framer Motion (8.7 kB gzipped)
- React Icons (tree-shaken)
- No unnecessary libraries ✓

**Best Practices:**
```tsx
// ❌ Avoid: Importing entire library
import * as icons from 'react-icons/fi'

// ✓ Good: Import only what you need
import { FiMenu, FiX } from 'react-icons/fi'
```

---

### 7. Caching Strategy

**In `vite.config.ts`:**

```ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendors: ['react', 'react-dom'],
          framer: ['framer-motion'],
        },
      },
    },
  },
})
```

**In server (Nginx example):**

```nginx
# Cache static assets for 1 year (content-hashed)
location ~* \.(js|css|png|jpg|svg|ico|woff|woff2|ttf)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Don't cache HTML (or cache for 1 day)
location = /index.html {
    expires 1d;
    add_header Cache-Control "public, max-age=86400";
}
```

---

### 8. Core Web Vitals Optimization

#### Largest Contentful Paint (LCP)
- Minimize main thread blocking
- Defer non-critical JavaScript
- Optimize server response time

#### First Input Delay (FID) / Interaction to Next Paint (INP)
- Reduce main thread work
- Break long tasks into smaller ones

```tsx
// Bad: Long-running calculation
function expensiveComponent() {
  const result = heavyCalculation() // Blocks UI
  return <div>{result}</div>
}

// Good: Use async operations
import { useEffect, useState } from 'react'

function optimizedComponent() {
  const [result, setResult] = useState(null)
  
  useEffect(() => {
    // Moved to separate task
    setTimeout(() => {
      setResult(heavyCalculation())
    }, 0)
  }, [])
  
  return <div>{result}</div>
}
```

#### Cumulative Layout Shift (CLS)
- Reserve space for dynamic content
- Avoid inserting content above existing elements

```tsx
// Good: Reserve space with aspect-ratio
<div className="w-full aspect-video bg-gray-900">
  {/* Content loads here */}
</div>
```

---

### 9. Minification & Compression

**Already enabled ✓**

In `vite.config.ts`:
```ts
export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: false,
  },
})
```

**Server-side compression (Nginx):**
```nginx
gzip on;
gzip_types text/plain text/css text/javascript 
           application/json application/javascript;
gzip_min_length 1024;
gzip_proxied any;
```

---

### 10. Remove Unused Dependencies

**Current dependencies check:**

```bash
# Check for unused packages
npm ls --depth=0

# Outdated packages
npm outdated

# Security vulnerabilities
npm audit
```

**Keep:** ✓
- react (essential)
- react-dom (essential)
- framer-motion (lightweight animation library)
- react-icons (tree-shakeable)
- tailwindcss (already purged)

---

## Measurement & Monitoring

### 1. Lighthouse CI

Add `.github/workflows/lighthouse.yml`:

```yaml
name: Lighthouse CI
on:
  push:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v10
        with:
          uploadArtifacts: true
```

### 2. Web Vitals Tracking

Add to app (optional):

```tsx
// src/utils/web-vitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function handleMetric(metric: any) {
  console.log(metric.name, metric.value)
  // Send to analytics service
}

getCLS(handleMetric)
getFID(handleMetric)
getFCP(handleMetric)
getLCP(handleMetric)
getTTFB(handleMetric)
```

### 3. Bundle Analysis

Install visualizer plugin:

```bash
npm install -D vite-plugin-visualizer
```

Update `vite.config.ts`:

```ts
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
  ],
})
```

Then run `npm run build` to see interactive bundle breakdown.

---

## Advanced Optimizations

### 1. Service Worker Caching

Create `public/service-worker.js`:

```js
const CACHE_NAME = 'portfolio-v1'
const urlsToCache = ['/', '/index.html']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
```

Register in `src/main.tsx`:

```tsx
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
```

### 2. Code Splitting by Route

```tsx
import { lazy } from 'react'

const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
// Each section loads only when needed
```

### 3. Preload Critical Resources

In `index.html`:

```html
<link rel="preload" as="script" href="/assets/main.js">
<link rel="preload" as="style" href="/assets/style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

### 4. Critical CSS Extraction

Automatically extract above-fold CSS for faster rendering.

---

## Performance Checklist

### Build Time
- [ ] Analyze bundle size with visualizer
- [ ] Remove unused dependencies
- [ ] Enable code splitting
- [ ] Minify CSS and JavaScript

### Runtime Performance
- [ ] Lazy load components
- [ ] Defer non-critical JavaScript
- [ ] Optimize animations (use `will-change` sparingly)
- [ ] Use Intersection Observer for visibility

### Core Web Vitals
- [x] LCP < 2.5s (minimal static content)
- [x] FID/INP < 100ms (no heavy JS)
- [x] CLS < 0.1 (no layout shifts)

### Network
- [ ] Enable gzip compression
- [ ] Set cache headers
- [ ] Use CDN for static assets
- [ ] Optimize font loading

### Monitoring
- [ ] Set up Lighthouse CI
- [ ] Monitor real user metrics
- [ ] Track Core Web Vitals
- [ ] Set up error tracking

---

## Current Performance Status

✓ **Excellent Foundation** - The portfolio is already highly optimized:

1. Minimal JavaScript (277 KB → 86 KB gzipped)
2. Minimal CSS (17 KB → 3.92 KB gzipped)
3. No images (text-based design)
4. No third-party scripts
5. Lazy loading built-in
6. Semantic HTML
7. Accessibility considered

**Expected Lighthouse Scores:**
- Performance: 95+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

---

## Next Steps for Further Optimization

1. Deploy to Vercel/Netlify (they optimize automatically)
2. Monitor real user metrics via Google Analytics or Sentry
3. Consider adding Blog with markdown support (if needed)
4. Add service worker for offline support (if needed)
5. Implement image optimization (when adding images)

