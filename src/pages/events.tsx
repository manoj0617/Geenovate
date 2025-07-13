import { lazy, Suspense } from 'react';
import SEO from '../utils/SEO';

// Lazy-loaded components
const EventsSection = lazy(() => import('../components/sections/EventsSection'));

const EventsPage = () => {
  return (
    <>
      <SEO
        title="Events | Geenovate Foundation"
        description="Join Geenovate Foundation's workshops, hackathons, demo days, and networking events designed for student entrepreneurs and innovators."
      />
      
      {/* Page Banner */}
      <div className="h-64 md:h-72 bg-primary relative flex items-center">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">Events</h1>
          <p className="text-light text-lg mt-2">Workshops, hackathons, and networking opportunities</p>
        </div>
        <div className="absolute inset-0 bg-dark opacity-40"></div>
      </div>
      
      {/* Events Section */}
      <Suspense fallback={<div className="h-96 bg-light animate-pulse" />}>
        <EventsSection />
      </Suspense>
      
      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Featured Event
            </h2>
            <p className="text-lg text-gray max-w-3xl mx-auto">
              Mark your calendar for our biggest event of the year
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-light rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gray-300 relative">
                  {/* TODO: Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray">
                    [Featured Event Image]
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">
                    Annual Event
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                    Innovation Summit 2025
                  </h3>
                  <div className="flex items-center mb-4 text-gray">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    June 15-16, 2025
                  </div>
                  <div className="flex items-center mb-6 text-gray">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    University Main Conference Center
                  </div>
                  <p className="text-gray mb-6">
                    Join industry leaders, investors, and student entrepreneurs for our flagship two-day event featuring keynote speakers, startup showcases, workshops, and networking opportunities.
                  </p>
                  <div className="flex space-x-3">
                    <button className="bg-accent hover:bg-accent/90 text-white py-2 px-6 rounded font-medium transition-colors">
                      Register Now
                    </button>
                    <button className="border border-primary text-primary hover:bg-primary hover:text-white py-2 px-6 rounded font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Calendar */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Event Calendar
            </h2>
            <p className="text-lg text-gray max-w-3xl mx-auto">
              Plan ahead with our upcoming events schedule
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
            {/* TODO: Replace with interactive calendar component */}
            <div className="h-96 flex items-center justify-center border border-gray-200 rounded">
              <p className="text-gray">
                [Interactive Calendar Component Placeholder]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;