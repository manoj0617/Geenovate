import { lazy, Suspense } from 'react';
import SEO from '../utils/SEO';

// Lazy-loaded components
const HeroSection = lazy(() => import('../components/sections/HeroSection'));
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const CommunitySection = lazy(() => import('../components/sections/CommunitySection'));
const FacilitiesSection = lazy(() => import('../components/sections/FacilitiesSection'));
const PortfolioSection = lazy(() => import('../components/sections/PortfolioSection'));

const HomePage = () => {
  return (
    <>
      <SEO
        title="Geenovate Foundation | Innovate. Incubate. Impact."
        description="Empowering college students to turn innovative ideas into sustainable ventures through mentorship, resources, and a supportive ecosystem."
      />
      
      {/* Hero Section */}
      <Suspense fallback={<div className="h-screen bg-primary animate-pulse" />}>
        <HeroSection />
      </Suspense>
      
      {/* About Section */}
      <Suspense fallback={<div className="h-96 bg-light animate-pulse" />}>
        <AboutSection />
      </Suspense>
      
      {/* Community Section */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <CommunitySection />
      </Suspense>
      
      {/* Facilities Section */}
      <Suspense fallback={<div className="h-96 bg-light animate-pulse" />}>
        <FacilitiesSection />
      </Suspense>
      
      {/* Portfolio Section */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <PortfolioSection />
      </Suspense>
    </>
  );
};

export default HomePage;