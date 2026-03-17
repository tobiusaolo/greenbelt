import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import aboutImg from '../assets/WhatsApp Image 2026-03-12 at 14.21.57.jpeg';
import locationImg from '../assets/WhatsApp Image 2026-03-12 at 14.21.57 (1).jpeg';

const AboutPage = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>About Us | GreenBelt Afforestation Initiative</title>
      </Helmet>
      
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url(${aboutImg})` }}>
        <div className="header-overlay"></div>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About GreenBelt
          </motion.h1>
          <p>Rooted in Uganda, growing for the future.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-feature"
            >
              <h2 className="text-primary">Our Mission</h2>
              <p>
                To reduce poverty and champion human rights through an integrated, 
                multi-sector community development framework that restores our environment 
                and empowers the vulnerable.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-feature"
            >
              <h2 className="text-primary">Our Vision</h2>
              <p>
                A resilient and prosperous Uganda where every community enjoys 
                sustainable livelihoods, healthy environments, and full social inclusion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Story */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="about-detailed">
            <div className="about-text">
              <h2>Our Comprehensive <span className="text-primary">Development Model</span></h2>
              <p>
                GreenBelt Afforestation Initiative Uganda Limited is designed as a multi-sector 
                community development organization. Unlike traditional NGOs that focus on 
                a single issue, our structure integrates economic empowerment, health, 
                protection, education, advocacy, and disaster resilience into one unified 
                framework for maximum impact.
              </p>
              <p>
                We believe that environmental restoration and human development are 
                inextricably linked. By planting trees, we create sustainable livelihoods. 
                By improving health, we enable people to protect their environment.
              </p>
            </div>
            <div className="about-img-group">
              <img src={locationImg} alt="Projects in Uganda" className="img-rounded" />
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .page-header {
          height: 400px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }
        .header-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 28, 21, 0.7);
        }
        .page-header .container { z-index: 1; }
        .page-header h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .card-feature {
          padding: 3rem;
          background: white;
          border-radius: 20px;
          box-shadow: var(--shadow);
          border-left: 5px solid var(--primary);
        }
        .card-feature h2 { margin-bottom: 1.5rem; }

        .about-detailed {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .img-rounded {
          border-radius: 30px;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 768px) {
          .grid-2, .about-detailed { grid-template-columns: 1fr; }
          .page-header h1 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
