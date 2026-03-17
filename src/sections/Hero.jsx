import React from 'react';
import { motion } from 'framer-motion';
import treeImage from '../assets/WhatsApp Image 2026-03-12 at 14.21.57 (1).jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${treeImage})` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-tag">Empowering Uganda</span>
          <h1>Green Belt <br /> <span className="text-accent">Afforestation Initiative</span></h1>
          <p>
            Join a multi-sector community development organization focused on poverty reduction, 
            human rights, and sustainable restoration of our natural environment.
          </p>
          <div className="hero-btns">
            <a href="#about" className="btn btn-primary">Our Mission</a>
            <a href="#programs" className="btn btn-outline" style={{ border: '2px solid white', color: 'white' }}>View Programs</a>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          color: var(--white);
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: -2;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(8, 28, 21, 0.9) 0%,
            rgba(8, 28, 21, 0.4) 100%
          );
          z-index: -1;
        }

        .hero-content {
          z-index: 1;
        }

        .hero-text {
          max-width: 700px;
        }

        .hero-tag {
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--accent);
          display: block;
          margin-bottom: 1rem;
        }

        .hero h1 {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .text-accent {
          color: var(--accent);
        }

        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 991px) {
          .hero h1 { font-size: 3.5rem; }
        }

        @media (max-width: 768px) {
          .hero { height: auto; padding: 10rem 0 6rem; }
          .hero h1 { font-size: 2.8rem; }
          .hero-btns { flex-direction: column; }
          .hero-bg { background-position: right; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
