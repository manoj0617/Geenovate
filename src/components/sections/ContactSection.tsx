import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Section from '../ui/Section';
import { contactInfo } from '../../data/siteContent';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <Section id="contact" className="bg-light">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {contactInfo.heading}
          </h2>
          <p className="text-lg text-gray">
            {contactInfo.description}
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray font-medium mb-1">Interested In</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex items-center">
                    <input type="checkbox" name="interest" value="incubation" className="mr-2" />
                    <span>Incubation Programs</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interest" value="mentorship" className="mr-2" />
                    <span>Mentorship</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interest" value="facility" className="mr-2" />
                    <span>Facility Tour</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interest" value="partnership" className="mr-2" />
                    <span>Partnership</span>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-md font-medium transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-dark mb-1">Address</h4>
                    <address className="text-gray not-italic">
                      Geenovate Foundation, Block - V, GCET, Cheeryal Village, Keesara Mandal, Hyderabad, Telangana 501301
                    </address>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-dark mb-1">Email</h4>
                    <a href="mailto:hello.geenovate@gcet.edu.in" className="text-gray hover:text-primary">
                      hello.geenovate@gcet.edu.in
                    </a>
                  </div>
                </div>
                
                {contactInfo.phone && contactInfo.phone !== '(placeholder)' && (
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FaPhone className="text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-dark mb-1">Phone</h4>
                      <a href={`tel:${contactInfo.phone}`} className="text-gray hover:text-primary">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-dark mb-3">Hours of Operation</h4>
                <ul className="text-gray space-y-1">
                  {contactInfo.hoursOfOperation.map((hours, idx) => (
                    <li key={idx}>
                      <strong>{hours.days}:</strong> {hours.hours}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-dark mb-3">Response Time</h4>
                <p className="text-gray">
                  We typically respond to inquiries within {contactInfo.responseTime}.
                </p>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.724489016407!2d78.62844571936347!3d17.52066048189559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d3704b16971%3A0x522242e0977760ef!2sGeethanjali%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1746170727873!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Geenovate Foundation Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactSection;