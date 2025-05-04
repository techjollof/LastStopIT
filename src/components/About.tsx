import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: <Users className="h-8 w-8 text-accent-600" />, value: '500+', label: 'Clients' },
    { icon: <Trophy className="h-8 w-8 text-accent-600" />, value: '15+', label: 'Years Experience' },
    { icon: <CheckCircle className="h-8 w-8 text-accent-600" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Clock className="h-8 w-8 text-accent-600" />, value: '24/7', label: 'Support' },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl blur-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="About LastStopIT" 
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-medium text-accent-600 mb-2">ABOUT US</div>
            <h2 className="mb-6">Excellence in IT Solutions Since 2020</h2>
            <p className="text-gray-600 mb-6">
              LastStopIT was founded with a clear mission: to provide businesses with reliable, innovative IT solutions 
              that drive growth and efficiency. We've built our reputation on delivering exceptional service and 
              technical expertise to clients across multiple industries.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of certified IT professionals is committed to understanding your unique business challenges 
              and providing tailored solutions that help you achieve your goals. We pride ourselves on building 
              long-term partnerships with our clients, serving as their trusted technology advisor.
            </p>

            {/* Core Values */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                <span className="font-medium">Excellence in every project we undertake</span>
              </div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                <span className="font-medium">Innovation driving our solutions and approach</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                <span className="font-medium">Partnership focused on your long-term success</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary-950">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;