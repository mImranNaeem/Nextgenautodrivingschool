import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin, CheckCircle2, Star, ChevronRight, ChevronLeft, Car } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm text-brand-dark border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-secondary p-2 rounded-lg">
              <Car className="text-brand-dark w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">Next Gen <span className="text-secondary">Auto</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-secondary transition-colors">Home</a>
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#contact" className="bg-secondary text-brand-dark px-6 py-2 rounded-full font-semibold hover:bg-brand-dark hover:text-white transition-all">Book Now</a>
          </div>
          <div className="md:hidden">
            <Phone className="w-6 h-6 text-secondary" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://picsum.photos/seed/driving/800/600",
    "https://picsum.photos/seed/speed/800/600",
    "https://picsum.photos/seed/instructor/800/600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-panel text-brand-dark min-h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Static Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-brand-dark">
              Master the Road with <span className="text-secondary italic">Confidence</span>
            </h1>
            <p className="text-xl text-brand-dark/80 mb-8 max-w-lg">
              Next Gen Auto Driving School provides expert automatic driving lessons tailored to your pace. Get your license faster with our professional instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform text-center shadow-lg">
                Start Learning Today
              </a>
              <a href="#services" className="border border-brand-dark/20 text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark/5 transition-colors text-center">
                View Our Courses
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Student" className="w-12 h-12 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                ))}
              </div>
              <div>
                <div className="flex text-secondary mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-brand-dark/70">500+ Happy Students</p>
              </div>
            </div>
          </motion.div>
          
          {/* Image Carousel */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={images[currentSlide]} 
                  alt="Driving Lesson" 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover absolute inset-0"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <CheckCircle2 className="text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark">DVSA Approved</h3>
                    <p className="text-sm text-brand-dark/70">Fully certified professional instructors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls - Side Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-brand-dark hover:text-secondary transition-all z-30"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-brand-dark hover:text-secondary transition-all z-30"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Beginner Lessons",
      description: "Perfect for those who have never been behind the wheel. We start with the basics in a calm environment.",
      icon: <Car className="w-8 h-8" />
    },
    {
      title: "Intensive Courses",
      description: "Need your license fast? Our crash courses are designed to get you test-ready in just a few weeks.",
      icon: <ChevronRight className="w-8 h-8" />
    },
    {
      title: "Refresher Courses",
      description: "Haven't driven in a while? Regain your confidence with a few hours of expert guidance.",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Mock Driving Tests",
      description: "Experience the real test environment with our mock exams to ensure you're fully prepared.",
      icon: <CheckCircle2 className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-brand-dark">Tailored Driving Lessons</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-dark/10 hover:shadow-xl transition-all"
            >
              <div className="bg-brand-dark/5 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-dark mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-brand-dark/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Socials = () => {
  return (
    <section className="py-12 bg-panel text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
            <p className="text-brand-dark/70">Follow us for driving tips, success stories, and updates.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/nextgenautodrivingschool/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-brand-dark/10 flex items-center justify-center hover:bg-secondary hover:text-brand-dark transition-all">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/photo/?fbid=122104166253228381&set=a.122104057371228381" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-brand-dark/10 flex items-center justify-center hover:bg-secondary hover:text-brand-dark transition-all">
              <Facebook size={24} />
            </a>
            <a href="https://wa.me/447547460088" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-brand-dark/10 flex items-center justify-center hover:bg-secondary hover:text-brand-dark transition-all">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-brand-dark">Get In Touch</h2>
            <p className="text-brand-dark/70 text-lg mb-12">
              Ready to start your journey? Fill out the form below and our team will contact you to schedule your first lesson.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-dark/5 p-4 rounded-2xl text-brand-dark">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">Call Us</h4>
                  <p className="text-brand-dark/70">+44 7700 900000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-dark/5 p-4 rounded-2xl text-brand-dark">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">Email Us</h4>
                  <p className="text-brand-dark/70">info@nextgenauto.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-dark/5 p-4 rounded-2xl text-brand-dark">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">Location</h4>
                  <p className="text-brand-dark/70">Serving London and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-brand-dark/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-dark/80">Full Name</label>
                  <input name="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-brand-dark/20 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-dark/80">Phone Number</label>
                  <input name="phone" required type="tel" className="w-full px-4 py-3 rounded-xl border border-brand-dark/20 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all" placeholder="07700 900000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-dark/80">Email Address</label>
                <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-brand-dark/20 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-dark/80">Message</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-brand-dark/20 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button 
                disabled={status === 'loading'}
                type="submit" 
                className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark/90 transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 text-center">
                  {message}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-center">
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-panel text-brand-dark py-12 border-t border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-secondary p-2 rounded-lg">
              <Car className="text-brand-dark w-5 h-5" />
            </div>
            <span className="font-bold text-lg">Next Gen <span className="text-secondary">Auto</span></span>
          </div>
          <p className="text-brand-dark/50 text-sm">
            © {new Date().getFullYear()} Next Gen Auto Driving School. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-dark/70">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
