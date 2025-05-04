import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      // name: 'Sarah Johnson',
      // title: 'CTO, TechGrowth Inc.',
      // image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      content: 'LastStopIT has been instrumental in modernizing our IT infrastructure. Their cloud migration service helped us reduce costs by 30% while improving system performance and reliability.',
      // rating: 5,
    },
    {
      // name: 'Michael Rodriguez',
      // title: 'Operations Director, GlobalRetail',
      // image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      content: 'The cybersecurity assessment conducted by LastStopIT identified several vulnerabilities in our system. Their prompt remediation saved us from potentially devastating data breaches.',
      // rating: 5,
    }
    // ,
    // {
    //   name: 'Jennifer Chen',
    //   title: 'CEO, InnovateHealth',
    //   image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    //   content: 'We partnered with LastStopIT for a complex custom software development project. Their team delivered a solution that exceeded our expectations and has completely transformed our business processes.',
    //   rating: 5,
    // },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-3">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from some of our satisfied clients about their experience working with LastStopIT.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Testimonial Card */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* <div className="shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-accent-100"
                  />
                </div> */}
                <div>
                  {/* <div className="flex mb-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning-500 fill-warning-500" />
                    ))}
                  </div> */}
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                  {/* <div className="font-medium text-primary-950">{testimonials[activeIndex].name}</div> */}
                  {/* <div className="text-sm text-gray-500">{testimonials[activeIndex].title}</div> */}
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full bg-white shadow-md hover:bg-accent-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-primary-900" />
              </button>
              
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeIndex === index ? 'bg-accent-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-white shadow-md hover:bg-accent-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-primary-900" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;