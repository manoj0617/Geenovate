import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaCheckCircle, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import SEO from '../../utils/SEO';
import { programsData } from '../../data/siteContent';

interface ProgramDetailProps {
  // Props can be extended as needed
}

const ProgramDetail = (props: ProgramDetailProps) => {
  const { program } = useParams<{ program: string }>();
  const [programDetail, setProgramDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulating a data fetch
    const timer = setTimeout(() => {
      const foundProgram = programsData.find(
        p => p.id === program
      );
      
      setProgramDetail(foundProgram || null);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [program]);

  // Function to navigate to external URL
  const visitExternalUrl = () => {
    if (programDetail?.externalUrl) {
      window.open(programDetail.externalUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }
  
  if (!programDetail) {
    return (
      <>
        <SEO
          title="Program Not Found | Geenovate Foundation"
          description="The program you're looking for could not be found."
        />
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Program Not Found</h1>
          <p className="text-lg text-gray mb-8">
            The program you're looking for doesn't exist or may have been moved.
          </p>
          <Link 
            to="/programs" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
          >
            View All Programs
          </Link>
        </div>
      </>
    );
  }
  
  return (
    <>
      <SEO
        title={`${programDetail.title} | Geenovate Foundation Programs`}
        description={programDetail.description}
      />
      
      {/* Program Hero */}
      <div className="h-80 md:h-96 bg-primary relative flex items-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-accent text-white px-3 py-1 rounded text-sm font-medium mb-3">
              Geenovate Program
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              {programDetail.title}
            </h1>
            <p className="text-light text-xl max-w-2xl">
              {programDetail.shortDesc}
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-dark opacity-50"></div>
      </div>
      
      {/* Program Content */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white shadow-md rounded-lg p-8"
              >
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  Program Overview
                </h2>
                <p className="text-gray mb-6">
                  {programDetail.detailedDescription || programDetail.description}
                </p>
                
                {programDetail.highlights && (
                  <div className="mb-8">
                    <h3 className="text-xl font-heading font-bold text-dark mb-4">
                      Program Highlights
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {programDetail.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <h3 className="text-xl font-heading font-bold text-dark mb-4">
                  Program Structure
                </h3>
                {programDetail.programStructure ? (
                  <div className="space-y-4 mb-8">
                    {programDetail.programStructure.map((phase, idx) => (
                      <div key={idx} className="border-l-4 border-accent pl-4">
                        <h4 className="font-bold text-dark">{phase.phase}</h4>
                        <p className="text-gray">{phase.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-bold text-dark">Foundation</h4>
                      <p className="text-gray">Establishing core concepts and kickstarting your project</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-bold text-dark">Development</h4>
                      <p className="text-gray">Deepening knowledge and advancing your project</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-bold text-dark">Refinement</h4>
                      <p className="text-gray">Polishing your work and preparing for showcase</p>
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-heading font-bold text-dark mb-4">
                  What You'll Learn
                </h3>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                  {programDetail.features.map((feature, idx) => (
                    <li key={idx} className="text-gray">{feature}</li>
                  ))}
                </ul>
                
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-bold text-dark mb-4">
                    Expected Outcomes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programDetail.outcomes?.map((outcome, idx) => (
                      <div key={idx} className="flex items-start">
                        <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-bold text-dark mb-4">
                    Application Process
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    {programDetail.applicationProcess?.map((step, idx) => (
                      <li key={idx} className="text-gray">{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <Link
                    to="/apply" 
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors text-center"
                  >
                    Apply to This Program
                  </Link>
                  {programDetail.externalUrl && (
                    <button
                      onClick={visitExternalUrl}
                      className="flex items-center justify-center bg-primary/10 hover:bg-primary/20 text-primary px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                      Visit Program Page <FaExternalLinkAlt className="ml-2" size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white shadow-md rounded-lg p-6 sticky top-24"
              >
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Program Details
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <FaClock className="text-primary mr-3" />
                    <div>
                      <span className="font-semibold text-dark block">Duration:</span>
                      <span className="text-gray">{programDetail.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="text-primary mr-3" />
                    <div>
                      <span className="font-semibold text-dark block">Eligibility:</span>
                      <span className="text-gray">{programDetail.eligibility}</span>
                    </div>
                  </div>
                  {programDetail.nextCohortDate && (
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-primary mr-3" />
                      <div>
                        <span className="font-semibold text-dark block">Next cohort:</span>
                        <span className="text-gray">{programDetail.nextCohortDate}</span>
                      </div>
                    </div>
                  )}
                  {programDetail.applicationDeadline && (
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-primary mr-3" />
                      <div>
                        <span className="font-semibold text-dark block">Application deadline:</span>
                        <span className="text-gray">{programDetail.applicationDeadline}</span>
                      </div>
                    </div>
                  )}
                  <div className="pt-4 border-t border-gray-200">
                    <span className="font-semibold text-dark block mb-2">Status:</span>
                    {programDetail.isApplicationOpen ? (
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Applications Open
                      </span>
                    ) : (
                      <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        Applications Closed
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-8 pt-6 border-t border-gray-200">
                  Related Programs
                </h3>
                <div className="space-y-3">
                  {programsData
                    .filter(p => p.id !== programDetail.id)
                    .slice(0, 2)
                    .map((p, idx) => (
                      <Link 
                        key={idx}
                        to={`/programs/${p.id}`} 
                        className="block p-3 hover:bg-light rounded transition-colors"
                      >
                        <h4 className="font-bold text-dark">{p.title}</h4>
                        <p className="text-sm text-gray">{p.shortDesc.substring(0, 60)}...</p>
                      </Link>
                    ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    to="/programs"
                    className="block text-center bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    View All Programs
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetail;