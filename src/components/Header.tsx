import React, { useState, useEffect } from 'react';
import { Menu, X, Server, Shield, Terminal, Settings, Code, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/LastStopITLogo2.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
            {/* <Server className="w-8 h-8 text-accent-600" /> */}

          <a href="#" className="flex items-center space-x-2">
            {/* Logo with white background */}
            <div className="bg-white p-1 rounded-md shadow-sm">
              <img
                src={logo}
                alt="LastStopIT Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-primary-500 text-[#fff]">LastStopIT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${scrolled ? 'text-primary-900 hover:text-accent-600' : 'text-primary-900 hover:text-accent-600'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-primary-900 hover:text-accent-600 font-medium py-2"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="btn-primary w-full text-center"
                  onClick={toggleMenu}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;