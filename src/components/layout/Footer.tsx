import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo1.png" alt="Geenovate Logo" className="h-16 mr-1" />
              <h3 className="text-2xl font-heading font-bold text-white">Geenovate</h3>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Empowering students to innovate and build sustainable solutions through entrepreneurship.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" 
                className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" 
                className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" 
                className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6 text-white">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3">
              <Link to="/" className="text-white hover:text-accent transition-colors duration-300 flex items-center">
                <span className="bg-white/20 h-1.5 w-1.5 rounded-full mr-2"></span>Home
              </Link>
              <Link to="/about" className="text-white hover:text-accent transition-colors duration-300 flex items-center">
                <span className="bg-white/20 h-1.5 w-1.5 rounded-full mr-2"></span>About
              </Link>
              <Link to="/programs" className="text-white hover:text-accent transition-colors duration-300 flex items-center">
                <span className="bg-white/20 h-1.5 w-1.5 rounded-full mr-2"></span>Programs
              </Link>
              <Link to="/facilities" className="text-white hover:text-accent transition-colors duration-300 flex items-center">
                <span className="bg-white/20 h-1.5 w-1.5 rounded-full mr-2"></span>Facilities
              </Link>
              <Link to="/community" className="text-white hover:text-accent transition-colors duration-300 flex items-center">
                <span className="bg-white/20 h-1.5 w-1.5 rounded-full mr-2"></span>Community
              </Link>
              <Link to="/events" className="text-white hover:text-accent transition-colors duration-300 flex items-center">
                <span className="bg-white/20 h-1.5 w-1.5 rounded-full mr-2"></span>Events
              </Link>
              <Link to="/contact" className="text-white hover:text-accent transition-colors duration-300 flex items-center">
                <span className="bg-white/20 h-1.5 w-1.5 rounded-full mr-2"></span>Contact
              </Link>
              <Link to="/apply" className="text-accent hover:text-white transition-colors duration-300 font-medium">
                Apply Now →
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6 text-white">Contact Us</h4>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-accent mt-1.5 mr-3 flex-shrink-0" />
                <p className="text-white">Geenovate Foundation, Block - V, GCET, Cheeryal Village, Keesara Mandal, Hyderabad, Telangana 501301</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-accent mr-3 flex-shrink-0" />
                <a href="mailto:hello.geenovate@gcet.edu.in" className="text-white hover:text-accent transition-colors duration-300">
                  hello.geenovate@gcet.edu.in
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-accent mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white hover:text-accent transition-colors duration-300">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-white text-sm">
            &copy; {year} Geenovate Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;