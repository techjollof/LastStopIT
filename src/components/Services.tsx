import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Server, Shield, Code, Database, Cloud, Network, 
  MonitorSmartphone, Users, HardDrive, Laptop, BookOpen,
  Tangent as Exchange, CloudCog, FileKey
} from 'lucide-react';

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainServices = [
    {
      title: 'Managed IT Services',
      description: '24/7 monitoring, maintenance, and support for your IT infrastructure.',
      icon: <HardDrive className="h-8 w-8 text-accent-600" />,
      details: [
        'Proactive Monitoring',
        'Help Desk & User Support',
        'Infrastructure Management',
        'Disaster Recovery Planning'
      ]
    },
    {
      title: 'Infrastructure and Deployment',
      description: 'Expert deployment of Microsoft technologies, including Windows Server, Exchange, and Azure services.',
      icon: <Server className="h-8 w-8 text-accent-600" />,
      details: [
        'Windows and Exchange Servers',
        'Hybrid Deployments',
        'Identity Management',
        'System Design and Architecture'
      ]
    },
    {
      title: 'Modern Workspace & Cloud',
      description: 'Comprehensive cloud solutions across Microsoft 365, GSuite, and AWS environments.',
      icon: <Cloud className="h-8 w-8 text-accent-600" />,
      details: [
        'Microsoft 365 Migration',
        'GSuite Administration',
        'AWS Environment Management',
        'Cloud Architecture Design'
      ]
    },
    {
      title: 'Security and Compliance',
      description: 'Advanced security solutions ensuring data protection and regulatory compliance.',
      icon: <Shield className="h-8 w-8 text-accent-600" />,
      details: [
        'Information Barrier',
        'Data Loss Prevention',
        'Sensitivity Labels',
        'Azure Information Protection'
      ]
    }
    // ,
    // {
    //   title: 'Data Analytics',
    //   description: 'Business intelligence, data visualization, and predictive analytics solutions.',
    //   icon: <Database className="h-8 w-8 text-accent-600" />, 
    //   details: [
    //     'Business Intelligence',
    //     'Data Visualization',
    //     'Predictive Analytics',
    //     'Custom Reporting Solutions'
    //   ]
    // },
    // {
    //   title: 'Software Development',
    //   description: 'Custom enterprise applications and digital transformation solutions.',
    //   icon: <Code className="h-8 w-8 text-accent-600" />,
    //   details: [
    //     'Custom Enterprise Applications',
    //     'Web & Mobile Development',
    //     'API Integration',
    //     'Legacy System Modernization'
    //   ]
    // }
  ];

  const additionalServices = [
    {
      title: 'Network & Cloud Infrastructure',
      description: 'Enterprise networking, VPN solutions, network security, and comprehensive Azure cloud services.',
      icon: <Network className="h-8 w-8 text-accent-600" />
    },
    {
      title: 'Digital Workplace & Collaboration',
      description: 'Modern workplace solutions including productivity platforms and collaboration tools.',
      icon: <MonitorSmartphone className="h-8 w-8 text-accent-600" />
    },
    {
      title: 'Support & Professional Services',
      description: 'End-to-end technical support and professional development services.',
      icon: <Users className="h-8 w-8 text-accent-600" />
    },
    {
      title: 'Data Protection & Security',
      description: 'Advanced data backup, recovery, protection strategies, and infrastructure management.',
      icon: <FileKey className="h-8 w-8 text-accent-600" />
    }
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
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-3">Comprehensive IT Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge IT solutions and expert services 
            to drive digital transformation and growth in the modern digital landscape.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16 mt-12"
        >
          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-accent-50 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <BookOpen className="h-4 w-4 text-accent-600 mr-2" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:border-l-4 hover:border-accent-500 group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;