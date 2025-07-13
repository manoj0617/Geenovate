import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SEO from '../utils/SEO';
import { startupPortfolio } from '../data/siteContent';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStartups = startupPortfolio.filter(startup => {
    const matchesFilter = filter === 'all' || startup.program.includes(filter);
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const programFilters = [
    { id: 'all', label: 'All Programs' },
    { id: 'Pre-Incubation', label: 'Pre-Incubation' },
    { id: 'Arambh', label: 'Arambh Incubation' },
    { id: 'Social', label: 'Social Innovation' },
    { id: 'Pragati', label: 'Pragati Acceleration' },
  ];

  return (
    <>
      <SEO 
        title="Startup Portfolio | Geenovate Foundation"
        description="Discover the innovative startups and entrepreneurs emerging from Geenovate Foundation's incubation programs."
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
              Our Startup Portfolio
            </h1>
            <p className="text-lg text-gray">
              Innovative ventures and entrepreneurs emerging from the Geenovate ecosystem
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          {/* Search and Filter Controls */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search startups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {programFilters.map(filterOption => (
                  <button
                    key={filterOption.id}
                    onClick={() => setFilter(filterOption.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filter === filterOption.id 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray hover:bg-gray-200'
                    }`}
                  >
                    {filterOption.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Startups Grid */}
          {filteredStartups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStartups.map((startup, index) => (
                <motion.div 
                  key={startup.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-52 bg-gray-200 overflow-hidden">
                    <img 
                      src={startup.image} 
                      alt={startup.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">
                        {startup.stage}
                      </span>
                      <span className="inline-block ml-2 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {startup.program}
                      </span>
                    </div>
                    <h2 className="text-xl font-heading font-bold text-primary mb-2">
                      {startup.name}
                    </h2>
                    <p className="text-gray text-sm mb-4 line-clamp-3">
                      {startup.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/portfolio/${startup.id}`}
                        className="inline-flex items-center text-accent font-medium hover:underline"
                      >
                        Learn more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-heading font-medium text-gray mb-2">No startups found</h3>
              <p className="text-gray">Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              Are You Ready to Join Our Portfolio?
            </h2>
            <p className="text-gray text-center mb-8">
              We're always looking for innovative ideas and passionate entrepreneurs to join our incubation programs. 
              If you have a promising startup or an idea with potential, we'd love to hear from you.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/programs"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors mr-4"
              >
                Explore Our Programs
              </Link>
              <Link 
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;