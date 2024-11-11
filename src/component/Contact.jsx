import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for form submission logic
    // Here we can integrate an email service like EmailJS or backend server to send emails.
    console.log('Form Submitted', formData);
    setStatus('Your message has been sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-8 px-4 sm:px-4 lg:px-6 bg-primary md:mt-16">
       <h1 className="text-3xl md:text-4xl font-bold text-tertiary text-center mb-8 ">
            <ReactTyped strings={["Contact Me_"]} typeSpeed={50} backSpeed={50} loop></ReactTyped> 
          </h1>

      <div className="max-w-xl mx-auto border-2 md:border-3 text-tertiary rounded-lg shadow-lg p-8" >
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-kuning">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2 p-3 w-full  border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-1 focus:ring-offset-tertiary text-primary font-bold"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-kuning">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-2 p-3 w-full border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-1 focus:ring-offset-tertiary text-primary font-bold"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-kuning">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-2 p-3 w-full border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-1 focus:ring-offset-tertiary font-bold text-primary"
              rows="4"
              required
              placeholder="Enter your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-kuning text-xl py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-1 focus:ring-offset-tertiary"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div className="mt-6 text-center text-tertiary">
            <p>{status}</p>
          </div>
        )}
      </div>

      {/* Contact Info */}
      <div className="mt-8 text-center text-tertiary">
        <h3 className="text-xl font-bold">Or contact directly:</h3>
        <p>Email: <a className="text-tertiary">tresnamada@gmail.com</a></p>
        <p>erlangga 2024</p>
      </div>
    </div>
  );
};

export default ContactPage;
