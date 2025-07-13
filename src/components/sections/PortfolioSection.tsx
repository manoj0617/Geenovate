import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from '../ui/Section';
import { startupPortfolio } from '../../data/siteContent';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  // Select only the first 3 startups to display
  const featuredStartups = startupPortfolio.slice(0, 3);
  
  return (
    <Section id="portfolio" className="bg-white pt-0">
      <div className="container pt-0 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Startup Portfolio
          </h2>
          <p className="text-lg text-gray">
            Innovative ventures that have emerged from our programs, making real-world impact
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredStartups.map((startup) => (
            <motion.div key={startup.id} variants={itemVariants}>
              <div className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <img 
                    src={startup.image} 
                    alt={startup.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {startup.name}
                  </h3>
                  <p className="text-gray mb-4 line-clamp-3">
                    {startup.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">
                      {startup.program}
                    </span>
                    {startup.website && (
                      <a
                        href={startup.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline text-sm"
                      >
                        Visit <FaExternalLinkAlt size={12} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="/portfolio" 
            className="inline-block bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Startups
          </a>
        </div>
      </div>
    </Section>
  );
};

export default PortfolioSection;