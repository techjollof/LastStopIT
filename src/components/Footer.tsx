import React from 'react';
import { Server, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import logo from '../images/LastStopITLogo2.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
            <div className="bg-white p-1 rounded-md shadow-sm">
              <img
                src={logo}
                alt="LastStopIT Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
              {/* <Server className="w-8 h-8 text-accent-500" /> */}
              <span className="text-xl font-bold">LastStopIT</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your premier IT solutions partner, delivering innovative technology services tailored to your business needs.
            </p>
            {/* <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-accent-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-accent-500 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">Managed IT Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">Security and Compliance</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">Support & Professional Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">IT Consulting</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">Network & Cloud Infrastructure</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                <span className="text-gray-400">support@laststopit.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                <span className="text-gray-400">+233 243003223 </span>
              </li>
              <li className="flex items-start">
                <Server className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                <span className="text-gray-400">Ghana | Hong Kong</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LastStopIT. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;