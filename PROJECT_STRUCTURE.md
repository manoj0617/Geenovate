# Geenovate Foundation Project Structure

## Overview
This document outlines the complete file and directory structure of the Geenovate Foundation website project, a static site built with Vite, React, TypeScript, and Tailwind CSS.

## Directory Structure

```
geenovate-foundation/
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point with meta tags for SEO
├── package.json               # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration for Tailwind
├── PROJECT_STRUCTURE.md       # This file documenting project structure
├── README.md                  # Project documentation and setup instructions
├── tailwind.config.js         # Tailwind CSS configuration with custom theme
├── tsconfig.app.json          # TypeScript config for application code
├── tsconfig.json              # Main TypeScript configuration
├── tsconfig.node.json         # TypeScript config for Node.js environment
├── vite.config.ts             # Vite bundler configuration
│
├── public/                    # Static assets served as-is
│   ├── logo.svg               # Geenovate Foundation logo
│   ├── vite.svg               # Vite logo (to be removed)
│   └── images/                # Static image assets
│       ├── events/            # Event images for the events section
│       └── team/              # Team member profile photos
│
└── src/                       # Source code
    ├── App.css                # App-specific styles
    ├── App.tsx                # Main App component that assembles all sections
    ├── index.css              # Global styles with Tailwind directives
    ├── main.tsx               # Application entry point
    ├── vite-env.d.ts          # Vite environment type declarations
    │
    ├── assets/                # Bundled assets
    │   ├── react.svg          # React logo (to be removed)
    │   └── images/            # Images to be processed by bundler
    │
    ├── components/            # React components
    │   ├── layout/            # Layout components
    │   │   ├── Footer.tsx     # Site footer with contact info and links
    │   │   └── Header.tsx     # Site header with navigation
    │   │
    │   ├── sections/          # Page section components
    │   │   ├── AboutSection.tsx     # About section with mission and vision
    │   │   ├── ApplySection.tsx     # Application form section
    │   │   ├── ContactSection.tsx   # Contact info with map and form
    │   │   ├── EventsSection.tsx    # Events calendar section
    │   │   ├── HeroSection.tsx      # Hero banner with CTA
    │   │   ├── ProgramsSection.tsx  # Programs offered section
    │   │   └── TeamSection.tsx      # Team members profile section
    │   │
    │   └── ui/                # Reusable UI components
    │       ├── Button.tsx     # Customizable button component
    │       ├── ScrollAnimated.tsx  # Animation wrapper for scroll effects
    │       └── Section.tsx    # Section wrapper with consistent styling
    │
    ├── data/                  # Data files
    │   └── siteContent.ts     # Centralized content for the entire website
    │
    ├── pages/                 # Page components (for future multi-page setup)
    │
    └── utils/                 # Utility functions and helpers
        └── SEO.tsx            # SEO component with meta tags and JSON-LD
```

## Key Features

### Component Structure
- **Layout Components**: Header and Footer for consistent page structure
- **Section Components**: Individual sections that make up the landing page
- **UI Components**: Reusable components like Button and Section

### Data Management
- Centralized content in `siteContent.ts` for easy updates and maintenance
- Separation of content from presentation

### Styling
- Tailwind CSS for utility-first styling
- Custom theme with Geenovate brand colors
- Responsive design for all screen sizes

### Performance Optimization
- Code splitting and lazy loading
- Image optimization
- Preloaded critical assets

### SEO Features
- Meta tags for search engines
- JSON-LD structured data
- OpenGraph tags for social sharing

## Build and Deployment
- Development server: `npm run dev`
- Production build: `npm run build`
- Validation: `npm run validate`
- Deployment scripts for Netlify and Vercel