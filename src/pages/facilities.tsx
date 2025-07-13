import { facilities } from '../data/siteContent';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SEO from '../utils/SEO';

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Facilities | Geenovate Foundation" 
        description="Explore our state-of-the-art facilities designed to support innovation and entrepreneurship at Geenovate Foundation." 
      />
      
      <section className="pt-24 pb-16 bg-primary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Facilities
            </h1>
            <p className="text-lg text-gray mb-8">
              Geenovate Foundation offers state-of-the-art facilities designed to foster innovation, 
              collaboration, and entrepreneurship. Our spaces are equipped with the latest technology 
              and resources to help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-56 bg-gray-200">
                  {/* Placeholder for actual images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray">{facility.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-heading font-bold text-primary mb-3">
                    {facility.title}
                  </h2>
                  <p className="text-gray mb-4">
                    {facility.description}
                  </p>
                  <div>
                    <h3 className="text-sm font-semibold text-dark mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 text-sm text-gray space-y-1">
                      {facility.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Additional Spaces
            </h2>
            <p className="text-gray">
              Beyond our core facilities, we offer these specialized spaces to support your entrepreneurial journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Open Stage
              </h3>
              <p className="text-gray">
                A versatile presentation area for pitches, demos, and community gatherings. 
                This space is designed to showcase innovations and foster community engagement.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Seminar Hall
              </h3>
              <p className="text-gray">
                A professional space for larger events, workshops, and conferences. 
                Equipped with advanced audio-visual technology and seating for audiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-4 text-center">
                Schedule a Tour
              </h2>
              <p className="text-gray text-center mb-6">
                Interested in seeing our facilities in person? We'd be happy to show you around 
                and discuss how Geenovate can support your entrepreneurial journey.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/contact"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
                >
                  Contact Us for a Tour
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;