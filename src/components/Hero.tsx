import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Server, Clock, Award, CheckCircle } from 'lucide-react';
import front_banner from '../images/front_banner.png';


const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary-950 to-primary-800 pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-accent-500/20 px-4 py-2 rounded-full mb-6">
              <Award className="h-5 w-5 text-accent-400 mr-2" />
              <span className="text-accent-400 text-sm font-medium">Leading IT Solutions Provider</span>
            </div>
            <h1 className="text-white mb-6 leading-tight">
              Transforming Businesses Via <span className="text-accent-400">Technology Innovation</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Partner with us to leverage cutting-edge technology solutions that drive efficiency, security, and growth for your business in today's digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Schedule Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="btn-outline border-white text-white hover:bg-white/10">
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-accent-500/20 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-accent-400" />
                </div>
                <span className="text-white text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent-500/20 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-accent-400" />
                </div>
                <span className="text-white text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent-500/20 p-2 rounded-full">
                  <Server className="h-5 w-5 text-accent-400" />
                </div>
                <span className="text-white text-sm">Cloud Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent-500/20 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-accent-400" />
                </div>
                <span className="text-white text-sm">24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-500/20 rounded-xl blur-xl"></div>
              <img
                src={front_banner}
                alt="IT Professional Team"
                className="relative w-full h-auto rounded-xl shadow-2xl"
              />
              {/* <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="IT Professional Team" 
                className="relative w-full h-auto rounded-xl shadow-2xl"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;