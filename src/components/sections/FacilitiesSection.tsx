import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLaptopCode, FaFlask, FaBuilding, FaHandshake } from 'react-icons/fa';
import Section from '../ui/Section';

// Facilities data
const facilitiesData = {
  heading: 'Our Facilities & Offerings',
  subheading: 'State-of-the-art resources to support your entrepreneurial journey',
  facilities: [
    {
      id: 1,
      title: 'Development Program',
      description: 'Tailored incubation and accelerator programs designed to address diverse entrepreneurial needs, focusing on skill development, market strategies, and business scalability.',
      icon: <FaLaptopCode className="h-12 w-12 text-accent" />,
      image: '/images/facilities/dev-program.jpg'
    },
    {
      id: 2,
      title: 'State of Art Labs',
      description: 'Advanced laboratories equipped with cutting-edge technology, providing startups with the tools and resources to innovate, prototype, and refine their products and services.',
      icon: <FaFlask className="h-12 w-12 text-accent" />,
      image: '/images/facilities/labs.jpg'
    },
    {
      id: 3,
      title: 'Co-working Space',
      description: 'A modern, plug-and-play workspace designed to foster collaboration, equipped with high-speed internet, private meeting rooms, and shared amenities to support startups and innovators.',
      icon: <FaBuilding className="h-12 w-12 text-accent" />,
      image: '/images/facilities/coworking.jpg'
    },
    {
      id: 4,
      title: 'Industry-Investor Connect',
      description: 'Bridging the gap between startups and the ecosystem, we facilitate valuable connections with industry leaders and investors, opening pathways for growth, mentorship, and funding opportunities.',
      icon: <FaHandshake className="h-12 w-12 text-accent" />,
      image: '/images/facilities/investor.jpg'
    }
  ]
};

const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <Section id="facilities" className="bg-light pt-0">
      <div className="container py-16 pt-0">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {facilitiesData.heading}
          </h2>
          <p className="text-lg text-gray">
            {facilitiesData.subheading}
          </p>
        </div>
        
        {/* Facilities Grid - Mobile friendly layout */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {facilitiesData.facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href="/facilities" 
              className="inline-block bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Our Facilities
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default FacilitiesSection;