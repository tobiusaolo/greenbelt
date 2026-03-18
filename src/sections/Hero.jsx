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
          <span className="hero-tag">Empowering Communities</span>
          <h1>GreenBelt <br /> <span className="text-accent">Empowerment Hub</span></h1>
          <p>
            Join a multi-sector community development organization focused on poverty reduction, 
            human rights, and sustainable restoration of our natural environment.
          </p>
          <div className="hero-btns">
            <a href="#about" className="btn btn-primary">Our Mission</a>
            <a href="#programs" className="btn btn-outline" style={{ border: '2px solid white', color: 'white' }}>View Programs</a>
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-stats"
        >
          <div className="stat-item">
            <div className="stat-number">1,000+</div>
            <div className="stat-label">Trees Planted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">75+</div>
            <div className="stat-label">House Helps Trained</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Women Trained & Employed</div>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1b4d3e 0%, #2e7d32 100%);
          color: var(--white);
          overflow: hidden;
          padding-top: 80px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 40%, rgba(27, 77, 62, 0.4) 0%, transparent 60%);
        }

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
          margin-bottom: 4rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 900px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.9;
        }

        @media (max-width: 991px) {
          .hero h1 { font-size: 3.5rem; }
          .hero-stats { gap: 2rem; }
          .stat-number { font-size: 2rem; }
        }

        @media (max-width: 768px) {
          .hero { height: auto; padding: 10rem 0 6rem; }
          .hero h1 { font-size: 2.8rem; }
          .hero-btns { flex-direction: column; margin-bottom: 3rem; }
          .hero-bg { background-position: right; }
          .hero-stats { grid-template-columns: 1fr; gap: 1.5rem; border-top: none; padding-top: 0; }
          .stat-item { border-left: 3px solid var(--accent); padding-left: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
