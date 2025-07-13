import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft, FaLightbulb, FaRocket, FaHandshake, FaChartLine } from 'react-icons/fa';
import Section from '../ui/Section';
import { programsData } from '../../data/siteContent';

// Import carousel CSS (add these to index.css or a separate file that's imported in your app)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components for the carousel
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      className="absolute right-0 top-1/2 -mt-5 z-10 bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary/90 transition-colors"
      onClick={onClick}
    >
      <FaArrowRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      className="absolute left-0 top-1/2 -mt-5 z-10 bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary/90 transition-colors"
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  );
};

// Icon mapping for program icons
const IconMap = {
  FaLightbulb: <FaLightbulb size={48} />,
  FaRocket: <FaRocket size={48} />,
  FaHandshake: <FaHandshake size={48} />,
  FaChartLine: <FaChartLine size={48} />
};

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <Section id="programs" className="bg-light">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Incubation Programs
          </h2>
          <p className="text-lg text-gray">
            Comprehensive support systems designed to nurture and accelerate innovative startups from concept to market
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative px-8"
        >
          <Slider {...carouselSettings}>
            {programsData.map((program) => (
              <motion.div 
                key={program.id} 
                variants={itemVariants}
                className="p-4"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div 
                    className="h-48 bg-primary/10 flex items-center justify-center"
                  >
                    <div className="text-primary">
                      {IconMap[program.icon] || program.id.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-primary mb-3">
                      {program.title}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-accent/10 text-accent text-xs px-3 py-1 rounded-full mb-2 mr-2">
                        {program.duration}
                      </span>
                      {program.isApplicationOpen ? (
                        <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                          Applications Open
                        </span>
                      ) : (
                        <span className="inline-block bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
                          Applications Closed
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray mb-6">
                      {program.description ? program.description.substring(0, 100) + '...' : ''}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-dark mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 text-gray text-sm">
                        {program.features && program.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                        {program.features && program.features.length > 3 && (
                          <li>And more...</li>
                        )}
                      </ul>
                    </div>
                    
                    <Link
                      to={`/programs/${program.id}`}
                      className="flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Learn More <FaArrowRight className="ml-2" size={12} />
                    </Link>
                    
                    {/* Add CTA button */}
                    <Link
                      to={`/apply?program=${program.id}`}
                      className="mt-4 block w-full bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-md font-medium transition-colors text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
        
        <div className="text-center mt-12">
          <Link
            to="/programs"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ProgramsSection;