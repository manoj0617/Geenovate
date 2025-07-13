import { motion } from 'framer-motion';
import { useEffect } from 'react';
import TeamSection from '../components/sections/TeamSection';
import SEO from '../utils/SEO';
import { aboutSection } from '../data/siteContent';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="About Us | Geenovate Foundation" 
        description="Learn about Geenovate Foundation, a Section 8 Company dedicated to fostering innovation and entrepreneurship at Geethanjali College of Engineering and Technology." 
      />
      
      <section className="pt-32 pb-24 bg-primary/90 bg-opacity-90 bg-blend-overlay relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero-bg.jpg" 
            alt="Geenovate Foundation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              About Geenovate Foundation
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-white/90 leading-relaxed">
              Building tomorrow's innovators and entrepreneurs through mentorship, resources, and community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-32"
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                  Our Story
                </h2>
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl mb-6">
                  <img 
                    src="/images/about/about-image.jpg" 
                    alt="Geenovate Foundation Campus" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-light rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray">12,000 sq. ft. incubation space</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray">State-of-the-art laboratories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray">Located in Cheriyal village, Telangana</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray">Section 8 Company with focus on innovation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-gray">Plug-and-play coworking facilities</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  Geenovate Foundation, a Section 8 Company, serves as a dynamic hub for innovation and entrepreneurship. Nestled within Geethanjali College of Engineering and Technology in Cheeryala (V), Keesara (M), Medchal District, Telangana, Geenovate is dedicated to building a robust ecosystem that supports innovators and entrepreneurs.
                </p>
                
                <p className="text-lg leading-relaxed text-gray mb-8">
                  Through meticulously designed pre-incubation and incubation programs, financial assistance, expert mentorship, and fostering industry-academia collaboration, Geenovate empowers individuals to transform their ideas into impactful ventures.
                </p>
                
                <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-light p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                    <div className="text-accent text-3xl font-bold mb-2">25+</div>
                    <p className="text-gray">Startups Incubated</p>
                  </div>
                  <div className="bg-light p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                    <div className="text-accent text-3xl font-bold mb-2">₹25L+</div>
                    <p className="text-gray">Funding Facilitated</p>
                  </div>
                  <div className="bg-light p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                    <div className="text-accent text-3xl font-bold mb-2">1000+</div>
                    <p className="text-gray">Student Innovators</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-gray mb-8">
                  Located in the picturesque Cheriyal village, the foundation offers a sprawling 12,000 sq. ft. incubation space, equipped with state-of-the-art facilities, plug-and-play coworking setups, and advanced laboratories to bring visionary ideas to life.
                </p>
                
                <div className="bg-light p-8 rounded-lg border-l-4 border-primary my-10">
                  <blockquote className="text-xl italic text-gray-700">
                    At Geenovate Foundation, we are passionate about nurturing changemakers and driving innovation that leads to meaningful change. Join us in shaping a future fueled by creativity and entrepreneurial spirit.
                  </blockquote>
                </div>
                
                <p className="text-lg leading-relaxed text-gray">
                  Our comprehensive ecosystem includes technical resources, business development support, funding connections, and a valuable network of industry mentors and experts. We believe in the transformative power of innovation and are committed to helping the next generation of entrepreneurs succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="bg-white p-10 rounded-lg shadow-md h-full border-t-4 border-primary">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  {aboutSection.vision.title}
                </h2>
                <p className="text-lg text-gray mb-6">
                  {aboutSection.vision.text}
                </p>
                <div className="mt-auto pt-6">
                  <img src="/images/about/vision-icon.svg" alt="Vision" className="h-16 w-16 mx-auto opacity-40" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white p-10 rounded-lg shadow-md h-full border-t-4 border-accent">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  {aboutSection.mission.title}
                </h2>
                <ul className="list-disc pl-5 space-y-4 text-gray">
                  <li>
                    To empower aspiring entrepreneurs with the tools, mentorship, and funding necessary 
                    to transform ideas into scalable ventures, while nurturing grassroots innovations 
                    that address local and societal challenges.
                  </li>
                  <li>
                    To foster collaboration between academia, industry, and innovators, creating a 
                    vibrant ecosystem for groundbreaking and inclusive solutions.
                  </li>
                  <li>
                    To champion sustainable pathways for employment generation and economic growth through 
                    knowledge-driven innovation, rooted in real-world, grassroots impact.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              {aboutSection.values.title}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray">
              We are guided by our core values that shape everything we do at Geenovate Foundation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {aboutSection.values.items.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b-4 border-primary"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                  {index === 0 && <span className="text-xl">💡</span>}
                  {index === 1 && <span className="text-xl">✨</span>}
                  {index === 2 && <span className="text-xl">🤝</span>}
                  {index === 3 && <span className="text-xl">⚖️</span>}
                  {index === 4 && <span className="text-xl">🌱</span>}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3 text-center">{value}</h3>
                <p className="text-gray text-center text-sm">
                  {index === 0 && "We foster a culture of creative thinking and innovative problem-solving, encouraging new approaches to address complex challenges."}
                  {index === 1 && "We strive for excellence in all our endeavors, maintaining high standards and continuous improvement."}
                  {index === 2 && "We believe in the power of partnerships between academia, industry, and innovators to create vibrant ecosystems for groundbreaking solutions."}
                  {index === 3 && "We operate with honesty, transparency, and ethical conduct in all our interactions and decisions."}
                  {index === 4 && "We are committed to driving sustainable employment and economic growth through innovations that have meaningful impact at local and national levels."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
};

export default About;