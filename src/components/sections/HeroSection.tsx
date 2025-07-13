import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Section from '../ui/Section';

// Import the carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components for the carousel
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      className="absolute right-8 top-1/2 -mt-5 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-md transition-colors"
      onClick={onClick}
      aria-label="Next slide"
    >
      <FaArrowRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      className="absolute left-8 top-1/2 -mt-5 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-md transition-colors"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <FaArrowLeft />
    </button>
  );
};

// Carousel slide data - Both Y.I.E.L.D and W.I.L.D now point to pre-incubation
const carouselItems = [
  {
    id: 1,
    backgroundImage: '/images/hero/hero-1.png',
    backgroundFallback: '#1E2A78', // Primary color as fallback
    showMainTagline: true,
    headline: 'Innovate. Incubate. Impact.',
    subheadline: 'A premier innovation hub fostering entrepreneurship and technological advancement for the next generation of changemakers.',
    programTitle: null,
    programSubtitle: null,
    programId: null
  },
  {
    id: 2,
    backgroundImage: '/images/hero/hero-2.png',
    backgroundFallback: '#234567',
    showMainTagline: false,
    headline: null,
    subheadline: null,
    programTitle: 'Arambh',
    programSubtitle: 'Incubation Program',
    programId: 'arambh-incubation'
  },
  {
    id: 3,
    backgroundImage: '/images/hero/hero-3.png',
    backgroundFallback: '#345678',
    showMainTagline: false,
    headline: null,
    subheadline: null,
    programTitle: 'Y.I.E.L.D',
    programSubtitle: '(Young Innovators & Entrepreneurs Learning & Development) Program',
    programId: 'pre-incubation'
  },
  {
    id: 4,
    backgroundImage: '/images/hero/hero-4.png',
    backgroundFallback: '#456789',
    showMainTagline: false,
    headline: null,
    subheadline: null,
    programTitle: 'W.I.L.D',
    programSubtitle: '(Women Innovators Learning & Development) Program',
    programId: 'pre-incubation'
  }
];

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState([false, false, false, false]);
  
  // Preload images
  useEffect(() => {
    carouselItems.forEach((item, index) => {
      const img = new Image();
      img.src = item.backgroundImage;
      img.onload = () => {
        setImageLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: i => (
      <div
        className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-white scale-110" : "bg-white/50"
        }`}
      ></div>
    ),
    appendDots: dots => (
      <div className="custom-dots">
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
  };

  const currentProgram = carouselItems[currentSlide];

  return (
    <Section id="hero" className="min-h-screen flex items-center overflow-hidden pb-0">
      {/* Hero carousel */}
      <div className="absolute inset-0 z-0">
        <Slider {...carouselSettings} className="h-full">
          {carouselItems.map((item, index) => (
            <div key={item.id} className="relative h-screen">
              <div
                style={{ 
                  backgroundColor: item.backgroundFallback,
                  backgroundImage: `url(${item.backgroundImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  opacity: imageLoaded[index] ? 1 : 0.8,
                  transition: 'opacity 0.5s ease-in'
                }} 
                className="w-full h-full"
              >
                {/* Enhanced gradient overlay for better text readability - no red background */}
                <div 
                  className="absolute inset-0" 
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Content overlay (stays fixed over the carousel) */}
      <div className="container relative z-10 text-white pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {currentProgram.showMainTagline ? (
              // First slide - Show main tagline and subheadline
              <>
                <div className="mb-8">
                  <h1 className="text-6xl md:text-7xl font-bold font-heading mb-2 tracking-tight">
                    {currentProgram.headline}
                  </h1>
                </div>
                
                <p className="text-xl md:text-2xl mb-10 text-white/90">
                  {currentProgram.subheadline}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link 
                    to="/programs"
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-medium transition-colors text-center text-lg"
                  >
                    Explore Programs
                  </Link>
                  <Link 
                    to="/apply"
                    className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-md font-medium transition-colors text-center text-lg"
                  >
                    Apply Now
                  </Link>
                </div>
              </>
            ) : (
              // Program-specific slides
              <>
                {/* Program Title with increased size and better styling */}
                <div className="mb-12">
                  <h2 className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                    {currentProgram.programTitle}
                  </h2>
                  <div className=" inline-block px-4 py-2 rounded-md">
                    <p className="text-xl md:text-2xl text-white font-medium">
                      {currentProgram.programSubtitle}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Improved hover state with better visibility */}
                  <Link 
                    to={`/programs/${currentProgram.programId}`}
                    className="bg-accent hover:bg-accent text-white hover:text-white px-8 py-4 rounded-md font-medium transition-colors text-center text-lg shadow-lg"
                  >
                    Explore Program
                  </Link>
                  <Link 
                    to={`/apply?program=${currentProgram.programId}`}
                    className="bg-transparent hover:bg-white/30 border-2 border-white text-white hover:text-white px-8 py-4 rounded-md font-medium transition-colors text-center text-lg shadow-lg"
                  >
                    Apply Now
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Scroll indicator - positioned higher to reduce gap */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M7 10L12 15L17 10" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Custom styles for carousel dots - positioned higher */}
      <style jsx>{`
        .custom-dots {
          position: absolute;
          bottom: 60px;
          left: 0;
          width: 100%;
          padding: 0;
          list-style: none;
          text-align: center;
          z-index: 20;
        }
      `}</style>
    </Section>
  );
};

export default HeroSection;