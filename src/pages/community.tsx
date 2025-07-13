import { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../utils/SEO';

// Lazy-loaded components
const CommunitySection = lazy(() => import('../components/sections/CommunitySection'));

const CommunityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Community | Geenovate Foundation"
        description="Join the Geenovate community of student entrepreneurs, mentors, alumni, and industry partners building innovative solutions together."
      />
      
      {/* Page Banner */}
      <div className="h-64 md:h-72 bg-primary relative flex items-center">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Our Community</h1>
          <p className="text-light text-lg mt-2">Meet the innovators, mentors, and partners driving change</p>
        </div>
        <div className="absolute inset-0 bg-dark opacity-40"></div>
      </div>
      
      {/* Community Section */}
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <CommunitySection />
      </Suspense>
      
      
      
      {/* Community Events Calendar */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Community Calendar
            </h2>
            <p className="text-lg text-gray max-w-3xl mx-auto">
              Join us at our upcoming community events, workshops, and gatherings
            </p>
          </div>
          
          {/* Calendar Placeholder - In a real app, this would be an interactive calendar */}
          <div className="max-w-5xl mx-auto bg-light rounded-lg shadow-md p-6">
            <div className="flex flex-col space-y-6">
              {[
                {
                  date: 'May 10, 2025',
                  time: '5:00 PM - 7:00 PM',
                  title: 'Mentor Meetup',
                  location: 'Innovation Hub, Room 101',
                  description: 'Monthly gathering for mentors and mentees to connect and share insights'
                },
                {
                  date: 'May 15, 2025',
                  time: '12:00 PM - 1:30 PM',
                  title: 'Lunch & Learn: Fundraising Fundamentals',
                  location: 'Virtual Event',
                  description: 'Learn the basics of raising capital for your startup from experienced investors'
                },
                {
                  date: 'May 23, 2025',
                  time: '10:00 AM - 4:00 PM',
                  title: 'Community Service Day',
                  location: 'City Park',
                  description: 'Join fellow entrepreneurs for a day of giving back to our local community'
                }
              ].map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
                  <div className="md:w-1/4 mb-3 md:mb-0">
                    <div className="font-heading font-bold text-accent">
                      {event.date}
                    </div>
                    <div className="text-sm text-gray">
                      {event.time}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="font-heading font-bold text-xl mb-1">
                      {event.title}
                    </div>
                    <div className="text-sm text-gray mb-2">
                      <span className="inline-flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray">
                      {event.description}
                    </p>
                    <div className="mt-3">
                      <button className="bg-transparent hover:bg-primary text-primary font-medium hover:text-white py-1 px-4 border border-primary hover:border-transparent rounded transition-colors">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-full font-medium transition-colors">
                View Full Calendar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityPage;