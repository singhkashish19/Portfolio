# Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended - Zero Config)

Vercel automatically detects Vite and optimizes the build:

**Steps:**
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Vercel detects the framework automatically
6. Click "Deploy"

**Environment Variables:**
- Add VITE_* variables in Vercel dashboard
- They'll be automatically available during build

**Custom Domain:**
- Add domain in Vercel dashboard → Settings → Domains
- SSL certificate is automatic

---

### 2. Netlify

**Steps:**
1. Push to Git repository
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

**Environment Variables:**
- Site settings → Build & Deploy → Environment

**Redirects for SPA:**
Netlify automatically handles SPA routing, but you can add to `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**Steps:**
1. Update `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/portfolio/',  // or '/' if custom domain
     // ... rest of config
   })
   ```

2. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. Push to GitHub
4. Go to repository Settings → Pages
5. Source: Deploy from a branch
6. Branch: gh-pages

---

### 4. AWS S3 + CloudFront

**Steps:**

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://your-portfolio-bucket --region us-east-1
   ```

2. **Enable static hosting:**
   ```bash
   aws s3 website s3://your-portfolio-bucket \
     --index-document index.html \
     --error-document index.html
   ```

3. **Build and upload:**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-portfolio-bucket --delete
   ```

4. **Create CloudFront distribution:**
   - Origin: Your S3 bucket
   - Cache policy: Optimized for SPA
   - Behavior: Redirect HTTP to HTTPS

5. **Update DNS:**
   - Point domain to CloudFront distribution

---

### 5. Traditional Server (Linux/Node.js)

**Steps:**

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder to server:**
   ```bash
   scp -r dist/ user@server:/var/www/portfolio/
   ```

3. **Setup Nginx:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       root /var/www/portfolio;
       index index.html;

       location / {
           try_files $uri /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|svg|ico|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Don't cache HTML
       location = /index.html {
           expires 1d;
           add_header Cache-Control "public";
       }
   }
   ```

4. **Enable HTTPS with Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Performance Optimization Checklist

### Build Optimization
- [x] Minification enabled (Terser)
- [x] CSS purging (TailwindCSS)
- [x] Code splitting (Vite default)
- [x] Source maps disabled in production

### Runtime Optimization
- [x] Lazy loading with Intersection Observer
- [x] Smooth animations (Framer Motion)
- [x] Optimized font loading
- [x] CSS-in-JS avoided (using TailwindCSS)

### Caching Strategy
- **HTML**: 1 day (must validate)
- **JavaScript/CSS**: 1 year (versioned)
- **Images**: 1 year

### Monitoring
- Use Lighthouse (built into Chrome DevTools)
- Monitor Core Web Vitals in production
- Set up error tracking (optional: Sentry)

---

## Environment-Specific Builds

### Development
```bash
npm run dev
# Default: http://localhost:5173
# Hot Module Replacement enabled
# Source maps available
```

### Production
```bash
npm run build
npm run preview
# Serve dist/ folder
# Minified bundle
# Optimized for performance
```

---

## Continuous Deployment (CD)

### GitHub Actions Example

Create `.github/workflows/build.yml`:

```yaml
name: Build and Deploy
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - run: npm ci
      - run: npm run build
      - run: npm run lint

      # Upload build artifacts
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: dist

      # Deploy to Vercel, Netlify, S3, etc.
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Pre-Deployment Checklist

- [ ] Update personal information in all sections
- [ ] Update social links and contact info
- [ ] Test dark/light mode toggle
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test form submission
- [ ] Update resume PDF link
- [ ] Check all external links
- [ ] Run `npm run build` successfully
- [ ] Verify no console errors
- [ ] Test accessibility with keyboard navigation
- [ ] Audit with Lighthouse
- [ ] Set up analytics (optional)
- [ ] Configure DNS/domain settings

---

## Post-Deployment Monitoring

1. **Performance Metrics:**
   - Core Web Vitals
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)

2. **Error Tracking:**
   - Set up Sentry or similar
   - Monitor for unhandled promises

3. **Analytics:**
   - Google Analytics
   - Visitor flow and engagement

4. **SEO:**
   - Google Search Console
   - Sitemap indexing
   - Structured data validation

---

## Troubleshooting

### Site shows blank page
- Check browser console for errors
- Verify build completed successfully
- Clear browser cache

### Styles not loading
- Check CSS is being served correctly
- Verify TailwindCSS configuration
- Check Content Security Policy headers

### Animations stuttering
- Check network tab for large assets
- Monitor CPU/GPU usage
- Consider reducing animation complexity

### Dark mode not working
- Check localStorage permissions
- Verify CSS class is applied to html/body
- Test localStorage in DevTools console

---

## Manual Deployment Steps (General)

```bash
# 1. Build the project
npm run build

# 2. Test locally
npm run preview

# 3. Upload dist/ folder to hosting
# (Use SCP, FTP, or platform-specific CLI)

# 4. Set up redirects for SPA routing
# (index.html for all 404s)

# 5. Configure caching headers
# (Static assets: 1 year, HTML: 1 day)

# 6. Set up HTTPS
# (Let's Encrypt or platform default)

# 7. Configure custom domain
# (DNS CNAME or A records)

# 8. Monitor performance
# (Lighthouse, Core Web Vitals)
```

---

## Cost Estimation

| Platform | Cost | Notes |
|----------|------|-------|
| Vercel | Free | Free tier with 100GB bandwidth/mo |
| Netlify | Free | Free tier with 100GB bandwidth/mo |
| GitHub Pages | Free | Only for public repos |
| AWS S3 + CloudFront | ~$5-10/mo | Pay-as-you-go, very cheap for static sites |
| Traditional VPS | $5-20/mo | Shared hosting or VPS |

Recommendation: **Vercel or Netlify** for easiest deployment with free tier.

