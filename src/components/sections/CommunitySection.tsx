import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Counter from '../ui/Counter';
import { communityData } from '../../data/siteContent';

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <Section id="community" className="bg-white pt-0">
      <div className="container py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {communityData.heading}
          </h2>
          <p className="text-lg text-gray">
            {communityData.subheading}
          </p>
        </div>
        
        {/* Community Stats - responsive grid for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {communityData.stats.map((stat, index) => (
            <div key={index} className="text-center bg-light p-4 md:p-6 rounded-lg shadow-sm">
              <Counter 
                end={stat.value} 
                prefix={stat.prefix || ''} 
                suffix={stat.suffix || ''} 
                className="text-2xl md:text-3xl font-bold text-primary mb-2"
                duration={2000 + (index * 300)}
              />
              <p className="text-gray font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Mentors and Advisory Board - Now clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {communityData.categories.map((category) => (
            <Link 
              to={category.path} 
              key={category.id} 
              className="bg-light rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{category.name}</h3>
              <div className="text-4xl font-bold text-accent mb-2">{category.count}</div>
              <p className="text-gray">Industry professionals providing guidance and expertise</p>
            </Link>
          ))}
        </div>
        
        {/* Partner Logos - more responsive grid */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Our Partners
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-center">
            {communityData.partnerLogos.map((partner) => (
              <div key={partner.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-32">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CommunitySection;