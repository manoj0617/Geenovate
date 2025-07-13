import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import { aboutSection } from '../../data/siteContent';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <Section id="about" className="bg-white pt-0 pb-0">
      <div className="container py-12 pb-0">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            ABOUT US
          </h2>
          <p className="text-lg text-gray">
            Empowering innovation and entrepreneurship through dedicated support and resources
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-light p-8 rounded-lg border-l-4 border-primary shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">
                {aboutSection.mission.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {aboutSection.mission.text}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-light p-8 rounded-lg border-l-4 border-accent shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-accent">
                {aboutSection.vision.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {aboutSection.vision.text}
            </p>
          </motion.div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto mt-10 mb-2">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-light p-8 rounded-lg border-t-4 border-primary/70 shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">
                {aboutSection.values ? aboutSection.values.title : "Our Values"}
              </h3>
            </div>
            {aboutSection.values && aboutSection.values.items ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutSection.values.items.map((value, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                At Geenovate Foundation, we are passionate about nurturing changemakers and driving innovation that leads to meaningful change.
              </p>
            )}
          </motion.div>
        </div>
        
        <div className="text-center mt-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link 
              to="/about" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;