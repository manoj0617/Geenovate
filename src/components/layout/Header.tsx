import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Programs', to: '/programs' },
  { name: 'Facilities', to: '/facilities' },
  { name: 'Community', to: '/community' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Events', to: '/events' },
  { name: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const textColorClass = (!scrolled && isHomePage) ? 'text-white' : 'text-gray-800';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo1.png" 
            alt="Geenovate Foundation Logo" 
            className="h-10 md:h-12"
          />
          <span className={`ml-3 font-heading font-bold text-xl ${
            scrolled || !isHomePage ? 'text-primary' : 'text-white'
          }`}>
            Geenovate
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) => `
                font-medium cursor-pointer transition-colors hover:text-accent
                ${isActive ? 'text-accent' : textColorClass}
              `}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/apply" 
            className="bg-accent hover:bg-accent/80 text-white hover:text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className={textColorClass} />
          ) : (
            <FaBars className={textColorClass} />
          )}
        </button>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-5 md:hidden">
            <nav className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) => `
                    text-gray-800 font-medium hover:text-accent
                    ${isActive ? 'text-accent' : ''}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/apply" 
                className="bg-accent hover:bg-accent/80 text-white hover:text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
              >
                Apply Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;