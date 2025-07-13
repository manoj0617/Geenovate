# Geenovate Foundation Website

A modern, responsive static website for the Geenovate Foundation college incubation center built with Vite, React, and Tailwind CSS.

![Geenovate Foundation](public/logo.svg)

## 🚀 Features

- **Static Site Generation**: Built with Vite and React for blazing-fast performance
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Optimized for Performance**: Image optimization, font preloading, and critical CSS
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Scroll-driven Animations**: Smooth scroll-triggered animations with react-intersection-observer
- **Accessibility-focused**: ARIA attributes and semantic markup
- **Static Forms**: Integrated form handling for user inquiries and applications

## 📋 Pages & Sections

- **Hero**: Full-screen background with logo overlay and call-to-action buttons
- **About**: Mission and vision statements with supporting imagery
- **Programs**: Cards showcasing different incubation programs with hover animations
- **Team**: Team member profiles with fade-in animations on scroll
- **Events**: Upcoming events calendar with lazy-loaded images
- **Apply**: Application form for prospective startups and innovators
- **Contact**: Contact information with responsive map and inquiry form

## 🔧 Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & CSS animations
- **Form Handling**: React Hooks
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📦 Project Structure

```
geenovate-foundation/
├── public/               # Static assets
│   ├── logo.svg          # Site logo
│   └── images/           # Image assets
├── src/
│   ├── components/       # React components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── data/             # Site content data
│   ├── utils/            # Utility functions and SEO components
│   └── App.tsx           # Main App component
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration
```

## 🔎 SEO Features

- **Meta Tags**: Descriptive title and meta description for each section
- **Structured Data**: JSON-LD for organization information
- **Open Graph**: Tags for social media sharing
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Performance**: Optimized for Lighthouse scores (Performance, Accessibility, SEO, Best Practices)

## 🖥️ Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/geenovate-foundation.git

# Navigate to the project directory
cd geenovate-foundation

# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm run dev
```

The site will be available at http://localhost:3000

### Building for Production

```bash
# Build the site for production
npm run build

# Preview the production build
npm run preview
```

## 📝 Creating New Content

### Adding a New Team Member

1. Add an image to `public/images/team/`
2. Add the team member data to `src/data/siteContent.ts` in the `teamMembers` array

### Adding a New Event

1. Add an event image to `public/images/events/`
2. Add the event data to `src/data/siteContent.ts` in the `events` array

## 🚀 Deployment

### Netlify

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`

### Vercel

1. Push your code to a GitHub repository
2. Import your project in Vercel
3. The build settings should be detected automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed with ❤️ for Geenovate Foundation
