import { useState } from 'react';
import { ReactTyped } from 'react-typed';
import { Mail, User, MessageSquare, Send, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
      Aos.init({
        duration: 1500,
      });
    }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form Submitted', formData);
    setStatus('Your message has been sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-5xl mx-auto mt-12" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-tertiary text-center mb-12">
          <ReactTyped 
            strings={["Let's Connect 👋", "Get in Touch ✨", "Say Hello 🌟"]} 
            typeSpeed={50} 
            backSpeed={50} 
            loop
          />
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 border border-tertiary/20">
            <h2 className="text-2xl font-bold text-tertiary mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-lg font-medium text-kuning mb-2">
                  <User className="w-5 h-5" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2 border-secondary/50 bg-white/5 text-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-lg font-medium text-kuning mb-2">
                  <Mail className="w-5 h-5" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2 border-secondary/50 bg-white/5 text-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-lg font-medium text-kuning mb-2">
                  <MessageSquare className="w-5 h-5" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2 border-secondary/50 bg-white/5 text-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary"
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-kuning text-xl py-3 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-tertiary transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {status && (
              <div className="mt-6 text-center text-tertiary bg-green-500/10 p-4 rounded-lg">
                <p>{status}</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 border border-tertiary/20">
            <h2 className="text-2xl font-bold text-tertiary mb-6 flex items-center gap-2">
              <Phone className="w-6 h-6" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-tertiary">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:tresnamada@gmail.com" className="hover:text-kuning transition-colors">
                    tresnamada@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-tertiary">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="font-medium">Location</p>
                  <p>Semarang, Indonesia</p>
                </div>
              </div>

              <div className="pt-6 border-t border-tertiary/20">
                <h3 className="text-xl font-bold text-tertiary mb-4">Social Media</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/tresnamada" className="text-tertiary hover:text-kuning transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="" className="text-tertiary hover:text-kuning transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/tresnamada/" className="text-tertiary hover:text-kuning transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-tertiary">
          <p>© erlangga 2024. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;