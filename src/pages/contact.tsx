import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import SEO from '../utils/SEO';
import { contactInfo, formSections } from '../data/siteContent';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to your backend
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thanks for your message! We will get back to you within 24-48 hours.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // After 5 seconds, reset the form status
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: '',
      });
    }, 5000);
  };

  return (
    <>
      <SEO 
        title="Contact Us | Geenovate Foundation" 
        description="Get in touch with Geenovate Foundation. We'd love to hear from you and answer any questions about our programs and facilities."
      />

      <section className="pt-24 pb-12 bg-primary/5">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-base md:text-lg text-gray">
              {formSections.contact.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-light p-5 md:p-8 rounded-lg shadow-sm">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-6">{formSections.contact.title}</h2>
                {formStatus.submitted ? (
                  <div className={`p-4 mb-6 rounded-md ${formStatus.error ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                    {formStatus.message}
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full md:w-auto btn-primary px-6 py-3 rounded-md text-white bg-primary hover:bg-primary/90 font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-light p-5 md:p-8 rounded-lg shadow-sm mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-4 md:mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <FaMapMarkerAlt className="h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600 mt-1">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <FaEnvelope className="h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-sm text-primary hover:underline mt-1">{contactInfo.email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <FaPhone className="h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-sm text-primary hover:underline mt-1">{contactInfo.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-light p-5 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-4 md:mb-6">Connect With Us</h3>
                <div className="grid grid-cols-4 gap-2">
                  <a href={contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-colors">
                    <FaTwitter className="h-4 w-4" />
                  </a>
                  <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-colors">
                    <FaFacebookF className="h-4 w-4" />
                  </a>
                  <a href={contactInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-colors">
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                  <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-colors">
                    <FaInstagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full width map section */}
      <section className="py-12 bg-light">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 md:mb-8 text-center">Find Us</h2>
        <div className="w-full h-96 md:h-[500px] shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.724489016407!2d78.62844571936347!3d17.52066048189559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d3704b16971%3A0x522242e0977760ef!2sGeethanjali%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1746170727873!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Geenovate Foundation Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;