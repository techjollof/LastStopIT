import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Clock, Users, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: 'Fast Response',
      description: 'Our team responds to critical issues within minutes, not hours.',
      bgColor: 'bg-accent-600',
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support whenever you need assistance.',
      bgColor: 'bg-secondary-600',
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Expert Team',
      description: 'Certified professionals with extensive industry experience.',
      bgColor: 'bg-primary-700',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technologies tailored to your specific needs.',
      bgColor: 'bg-success-600',
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-white" />,
      title: 'Client-Focused',
      description: 'Your business goals drive our technology recommendations.',
      bgColor: 'bg-warning-600',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: 'Security First',
      description: 'Robust security practices integrated into every solution.',
      bgColor: 'bg-error-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="section bg-primary-950 text-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-3 text-white">Why Choose Us</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We deliver exceptional IT services with a focus on reliability, expertise, and client satisfaction.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-primary-900/50 rounded-xl p-6 backdrop-blur-sm border border-primary-800 hover:border-accent-500 transition-all"
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;