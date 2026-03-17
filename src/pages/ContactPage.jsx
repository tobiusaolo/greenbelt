import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Contact from '../sections/Contact';

const ContactPage = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Contact Us | Get Involved with GreenBelt</title>
      </Helmet>
      
      <section className="page-header" style={{ backgroundColor: 'var(--gray-800)', color: 'white', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Contact Our Team
          </motion.h1>
          <p>We're here to answer your questions and explore partnerships.</p>
        </div>
      </section>

      <Contact />

      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2>Visit Our HQ</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
            Our main office is located in the heart of Kampala, where we coordinate 
            our nationwide afforestation and community development initiatives.
          </p>
          <div style={{ background: '#ddd', height: '400px', borderRadius: '30px', marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>Interactive Map Placeholder (Plot 922536, Kisaasi-kyanja road)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
