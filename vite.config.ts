import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    https: false,
    allowedHosts: ['all', 'dcb2-106-222-233-49.ngrok-free.app'],
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      // Image optimization options
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ],
  build: {
    // Ensure CSS is extracted for better performance
    cssCodeSplit: true,
    
    // Generate sourcemaps for better debugging
    sourcemap: true,
    
    // Optimize output
    rollupOptions: {
      output: {
        // Chunk naming and splitting strategy
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-helmet-async', 'react-scroll'],
          ui: ['react-icons', 'react-intersection-observer', 'framer-motion'],
        },
      },
    },
    
    // Optimize assets for better performance
    assetsInlineLimit: 4096, // 4kb - inline smaller assets
    chunkSizeWarningLimit: 1000, // warn for chunks > 1mb
  },  
  // Enable preview of production build
  preview: {
    port: 8080,
  },
});
