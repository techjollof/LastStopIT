import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, submit the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-accent-600" />,
      title: 'Our Locations',
      details: 'Ghana, Accra | Hong Kong',
    },
    {
      icon: <Phone className="h-6 w-6 text-accent-600" />,
      title: 'Phone Number',
      details: '+233 243003223',
    },
    {
      icon: <Mail className="h-6 w-6 text-accent-600" />,
      title: 'Email Address',
      details: 'support@laststopit.com',
    },
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-3">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to discuss your IT needs? Reach out to us today and our team will get back to you promptly.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12"
        >
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-950">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-primary-950 mb-3">Office Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-success-50 border border-success-200 text-success-800 p-4 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We've received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary flex items-center justify-center w-full md:w-auto"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;