# Geenovate Foundation Website - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository `manoj0617/Geenovate`
5. Vercel will auto-detect the settings from `vercel.json`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
npm run deploy:vercel
```

## 🌐 Alternative: Deploy to Netlify

### Via Netlify Dashboard
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose your GitHub repository
4. Build settings are configured in `netlify.toml`
5. Click "Deploy site"

### Via Netlify CLI
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
npm run deploy:netlify
```

## 🛠️ Build Commands

```bash
# Development server
npm run dev

# Production build (fast, skips TS checking)
npm run build

# Production build with TypeScript checking
npm run build:check

# Production build with strict TypeScript
npm run build:strict

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Lint and fix issues
npm run lint:fix
```

## 📁 Project Structure

- `src/` - Source code
- `public/` - Static assets
- `dist/` - Production build output
- `vercel.json` - Vercel deployment configuration
- `netlify.toml` - Netlify deployment configuration

## ⚙️ Configuration Files

- **vercel.json**: Configures SPA routing, caching headers, and build settings
- **netlify.toml**: Configures build command, redirects, and caching
- **vite.config.ts**: Optimized for production builds with image optimization
- **tsconfig.build.json**: Lenient TypeScript config for faster builds

## 🎯 Production Features

✅ **Performance Optimized**
- Code splitting and lazy loading
- Image optimization
- Asset compression
- Optimal caching headers

✅ **SEO Ready**
- React Helmet for meta tags
- Clean URLs
- Proper routing

✅ **Modern Stack**
- React 18 + TypeScript
- Vite for fast builds
- Tailwind CSS for styling
- Framer Motion for animations

## 🔧 Troubleshooting

### TypeScript Errors
If you encounter TypeScript errors during deployment:
1. Use `npm run build` (skips TS checking)
2. Or fix TypeScript errors and use `npm run build:check`

### Routing Issues
- Single Page Application (SPA) routing is configured in both `vercel.json` and `netlify.toml`
- All routes will fallback to `index.html`

### Build Failures
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear build cache: `rm -rf dist`
3. Try building locally first: `npm run build`

## 🌟 Live URLs

- **Vercel**: https://geenovate-foundation.vercel.app
- **Netlify**: https://geenovate-foundation.netlify.app (after deployment)
- **Custom Domain**: Configure in your hosting platform dashboard

---

For more help, check the [Vercel Documentation](https://vercel.com/docs) or [Netlify Documentation](https://docs.netlify.com/).
