import { useState } from 'react';
import Section from '../ui/Section';
import ScrollAnimated from '../ui/ScrollAnimated';
import Button from '../ui/Button';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

// Event data
const events = [
  {
    id: 1,
    title: 'Innovation Pitch Day',
    date: 'May 15, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Main Campus Auditorium',
    image: '/images/events/event1.jpg',
    description: 'Student entrepreneurs showcase their innovative ideas to a panel of judges and potential investors.',
    category: 'Competition',
  },
  {
    id: 2,
    title: 'Startup Workshop Series: Business Model Canvas',
    date: 'May 22, 2025',
    time: '3:00 PM - 5:00 PM',
    location: 'Innovation Lab, Room 203',
    image: '/images/events/event2.jpg',
    description: 'Learn how to develop a comprehensive business model for your startup idea using the Business Model Canvas framework.',
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'Entrepreneurs Networking Night',
    date: 'June 5, 2025',
    time: '6:00 PM - 8:30 PM',
    location: 'Student Center, Ground Floor',
    image: '/images/events/event3.jpg',
    description: 'Connect with fellow entrepreneurs, mentors, and industry professionals in this casual networking event.',
    category: 'Networking',
  },
  {
    id: 4,
    title: 'Tech Hackathon: Sustainable Solutions',
    date: 'June 18-20, 2025',
    time: 'All Day',
    location: 'Engineering Building, Labs 101-105',
    image: '/images/events/event4.jpg',
    description: '48-hour hackathon focused on developing technological solutions for environmental sustainability challenges.',
    category: 'Hackathon',
  },
];

// Event filtering categories
const categories = ['All', 'Workshop', 'Competition', 'Networking', 'Hackathon'];

const EventsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory);
    
  return (
    <Section id="events" background="primary">
      <div className="text-center mb-12">
        <ScrollAnimated animation="fade-in">
          <h2 className="text-white mb-4">Upcoming Events</h2>
        </ScrollAnimated>
        <ScrollAnimated animation="fade-in" delay={200}>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Join us for exciting events designed to inspire innovation, foster connections, 
            and develop entrepreneurial skills.
          </p>
        </ScrollAnimated>
      </div>
      
      {/* Category filter */}
      <ScrollAnimated animation="fade-in" delay={300}>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-white text-primary' 
                  : 'bg-primary-dark text-white hover:bg-primary-light'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollAnimated>
      
      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredEvents.map((event, index) => (
          <ScrollAnimated 
            key={event.id} 
            animation="slide-up" 
            delay={index * 100}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
              {/* Lazy-loaded image */}
              <div className="md:w-2/5">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 md:h-full object-cover"
                  loading="lazy" // Native lazy loading
                />
              </div>
              
              <div className="p-6 md:w-3/5">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full 
                    ${event.category === 'Workshop' && 'bg-blue-100 text-blue-800'}
                    ${event.category === 'Competition' && 'bg-purple-100 text-purple-800'}
                    ${event.category === 'Networking' && 'bg-green-100 text-green-800'}
                    ${event.category === 'Hackathon' && 'bg-red-100 text-red-800'}
                  `}>
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <Button variant="outline" size="sm">
                  Register Now
                </Button>
              </div>
            </div>
          </ScrollAnimated>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="secondary">
          View All Events
        </Button>
      </div>
    </Section>
  );
};

export default EventsSection;