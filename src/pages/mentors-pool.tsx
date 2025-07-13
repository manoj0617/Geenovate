import { useEffect, useState } from 'react';
import SEO from '../utils/SEO';
import { mentorsPool } from '../data/siteContent';
import Button from '../components/ui/Button';

// Mentor expertise categories
const expertiseCategories = [
  "All",
  "Technology",
  "Business Strategy",
  "Marketing",
  "Research",
  "Product Development",
  "Industry Specific"
];

const MentorsPoolPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter mentors based on expertise and search query
  const filteredMentors = mentorsPool.filter(mentor => {
    const matchesExpertise = filter === "All" || mentor.expertise.includes(filter);
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          mentor.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          mentor.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesExpertise && matchesSearch;
  });
  
  return (
    <>
      <SEO
        title="Mentors Pool | Geenovate Foundation"
        description="Connect with our diverse pool of industry mentors who provide guidance and expertise to Geenovate startups."
      />
      
      {/* Page Banner */}
      <div className="h-64 md:h-72 bg-primary relative flex items-center">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Mentors Pool</h1>
          <p className="text-light text-lg mt-2">Expert guidance for startups at every stage</p>
        </div>
        <div className="absolute inset-0 bg-dark opacity-40"></div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Meet Our Mentors
            </h2>
            <p className="text-lg text-gray">
              Our mentors bring industry expertise and practical experience to help guide startups through challenges and opportunities.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search mentors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
              {expertiseCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mentors Grid */}
          {filteredMentors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMentors.map((mentor) => (
                <div key={mentor.id} className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="h-64 bg-gray-200 relative">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-primary mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      {mentor.expertise}
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">
                        {mentor.organization}
                      </span>
                    </div>
                    <p className="text-gray mb-4">
                      {mentor.bio}
                    </p>
                    <a 
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"></path>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-heading font-medium text-gray mb-2">No mentors found</h3>
              <p className="text-gray">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Become a Mentor CTA */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              Interested in Becoming a Mentor?
            </h2>
            <p className="text-gray text-center mb-8">
              Share your expertise and help shape the next generation of innovators. Join our mentorship program and make an impact on emerging startups.
            </p>
            <div className="flex justify-center">
              <Button 
                href="/contact"
                variant="primary"
              >
                Apply to Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorsPoolPage;