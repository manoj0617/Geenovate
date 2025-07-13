import { useState } from 'react';
import Section from '../ui/Section';
import ScrollAnimated from '../ui/ScrollAnimated';
import Button from '../ui/Button';
import { FaCheck } from 'react-icons/fa';

const ApplySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    major: '',
    year: '',
    idea: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would send this data to your backend or a form service
    console.log('Form submitted:', formData);
    
    // For demo purposes, just show success message
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      major: '',
      year: '',
      idea: ''
    });
  };
  
  return (
    <Section id="apply" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollAnimated animation="fade-in">
          <div>
            <h2 className="text-primary mb-6">Apply Now</h2>
            <p className="text-gray-700 mb-8">
              Are you a student with an innovative idea? Apply to join our programs and get the resources, 
              mentorship, and community you need to bring your vision to life.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Who Can Apply</h3>
              <ul className="space-y-3">
                {[
                  'Currently enrolled undergraduate or graduate students',
                  'Alumni (graduated within the last 2 years)',
                  'Student teams with at least one enrolled member',
                  'Faculty members with innovative research projects'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Application Timeline</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-28 font-bold">May 30, 2025</div>
                  <div>Application deadline for Summer cohort</div>
                </div>
                <div className="flex">
                  <div className="w-28 font-bold">June 15, 2025</div>
                  <div>Selected applicants notified</div>
                </div>
                <div className="flex">
                  <div className="w-28 font-bold">July 1, 2025</div>
                  <div>Program start date</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimated>
        
        <ScrollAnimated animation="slide-up">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {!formSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-primary mb-6">Application Form</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="program" className="block text-gray-700 font-medium mb-2">Program Interest *</label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select a program</option>
                        <option value="idea-validation">Idea Validation</option>
                        <option value="startup-bootcamp">Startup Bootcamp</option>
                        <option value="mentor-connect">Mentor Connect</option>
                        <option value="skill-workshops">Skill Workshops</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="major" className="block text-gray-700 font-medium mb-2">Major/Field of Study *</label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        value={formData.major}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Year of Study *</label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select year</option>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="graduate">Graduate Student</option>
                        <option value="alumni">Alumni</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="idea" className="block text-gray-700 font-medium mb-2">
                      Briefly describe your business idea or why you want to join *
                    </label>
                    <textarea
                      id="idea"
                      name="idea"
                      value={formData.idea}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" variant="secondary" className="w-full">
                      Submit Application
                    </Button>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      * Required fields
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="mb-4 text-5xl text-primary">
                  <FaCheck className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying to Geenovate Foundation programs. We'll review your application and 
                  get back to you within 2 weeks.
                </p>
                <Button variant="primary" onClick={() => setFormSubmitted(false)}>
                  Submit Another Application
                </Button>
              </div>
            )}
          </div>
        </ScrollAnimated>
      </div>
    </Section>
  );
};

export default ApplySection;