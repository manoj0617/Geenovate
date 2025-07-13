import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page components
import HomePage from './pages';
import AboutPage from './pages/about';
import ProgramsPage from './pages/programs';
import ProgramDetail from './pages/programs/[program]';
import FacilitiesPage from './pages/facilities';
import CommunityPage from './pages/community';
import PortfolioPage from './pages/portfolio';
import EventsPage from './pages/events';
import ContactPage from './pages/contact';
import MentorsPoolPage from './pages/mentors-pool';
import AdvisoryBoardPage from './pages/advisory-board';

function App() {
  useEffect(() => {
    // Preload key fonts
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/fonts/inter-var.woff2';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    
    // Preload hero image for better performance
    const imagePreload = document.createElement('link');
    imagePreload.rel = 'preload';
    imagePreload.href = '/images/hero-bg.jpg';
    imagePreload.as = 'image';
    document.head.appendChild(imagePreload);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/programs/:program" element={<ProgramDetail />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/mentors-pool" element={<MentorsPoolPage />} />
              <Route path="/advisory-board" element={<AdvisoryBoardPage />} />
              {/* Add an apply route that redirects to contact page with form pre-selected */}
              <Route path="/apply" element={<ContactPage />} />
              
              {/* 404 Page - TODO: Create custom NotFound component */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center p-8">
                    <h1 className="text-4xl font-heading font-bold text-primary mb-4">Page Not Found</h1>
                    <p className="text-gray mb-6">The page you're looking for doesn't exist or has been moved.</p>
                    <a href="/" className="bg-accent hover:bg-accent/90 text-white py-2 px-6 rounded-md">
                      Return to Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
