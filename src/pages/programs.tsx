import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../utils/SEO';
import { programsData } from '../data/siteContent';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Programs | Geenovate Foundation" 
        description="Explore our comprehensive incubation and acceleration programs designed to support entrepreneurs at different stages of their journey." 
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
              Our Programs
            </h1>
            <p className="text-lg text-gray mb-8">
              Geenovate Foundation offers a range of specialized programs designed to nurture innovation and 
              entrepreneurship at every stage of development, from ideation to scaling.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          {programsData.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-16 ${index !== programsData.length - 1 ? 'pb-16 border-b border-gray-200' : ''}`}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-light h-[300px] rounded-lg flex items-center justify-center">
                    {/* Placeholder for program images */}
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-heading font-bold text-primary mb-2">{program.title}</h3>
                      <p className="text-gray">{program.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                    {program.title}
                  </h2>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent/10 text-accent mr-2">
                      {program.duration}
                    </span>
                  </div>
                  <p className="text-gray mb-6">
                    {program.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Key Benefits:</h3>
                    <ul className="list-disc pl-5 text-gray space-y-2">
                      {program.features && program.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={`/programs/${program.id}`}
                    className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Program Timeline
            </h2>
            <p className="text-lg text-gray">
              Our programs follow a structured timeline to ensure entrepreneurs receive the support they need at every stage
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {[ 
                { 
                  phase: "Application & Selection", 
                  description: "Submit your application online. Our team reviews applications and shortlists candidates for the next round.",
                  duration: "4 weeks"
                },
                { 
                  phase: "Orientation & Goal Setting", 
                  description: "Selected startups undergo orientation about program expectations, resources, and set key milestones.",
                  duration: "1 week"
                },
                { 
                  phase: "Business Development", 
                  description: "Startups work with mentors to refine business models, conduct market validation, and develop MVPs.",
                  duration: "8-12 weeks"
                },
                { 
                  phase: "Mentorship & Networking", 
                  description: "Regular sessions with industry experts, peer learning, and access to Geenovate's partner network.",
                  duration: "Ongoing"
                },
                { 
                  phase: "Funding Support", 
                  description: "Preparation for investor pitches, connecting with potential investors, and funding opportunities.",
                  duration: "Program-dependent"
                },
                { 
                  phase: "Demo Day & Graduation", 
                  description: "Showcase your progress to investors, partners, and the community at our Demo Day event.",
                  duration: "Final week"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} flex-col md:flex-row`}
                >
                  <div className="md:w-1/2 pb-8 md:pb-0 md:pr-8 md:text-right flex-1">
                    {index % 2 === 0 ? (
                      <>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-heading font-bold text-primary mb-2">{item.phase}</h3>
                        <p className="text-gray mb-2">{item.description}</p>
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {item.duration}
                        </span>
                      </>
                    )}
                  </div>
                  
                  <div className="timeline-marker relative md:mx-4 mx-4 z-10">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-8 flex-1">
                    {index % 2 === 1 ? (
                      <>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-heading font-bold text-primary mb-2">{item.phase}</h3>
                        <p className="text-gray mb-2">{item.description}</p>
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {item.duration}
                        </span>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-primary/5 p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 text-center">
              Ready to Take Your Innovation to the Next Level?
            </h2>
            <p className="text-gray text-center mb-8">
              Apply to our programs and join a community of innovators and entrepreneurs 
              dedicated to creating impactful solutions.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/apply"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;