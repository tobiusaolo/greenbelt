import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import healthImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 17.36.18.jpeg';
import envImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.15 (1).jpeg';
import advocacyImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.30.34.jpeg';
import econImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.16 (1).jpeg';
import eduImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.16.jpeg';
import resilienceImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.15.jpeg';

const programs = [
  { id: 'health', title: 'Health Department', img: healthImg, cat: 'Medical', desc: 'Promoting health and well-being through community outreach and specialized services.' },
  { id: 'env', title: 'Environmental Restoration', img: envImg, cat: 'Sustain', desc: 'Comprehensive afforestation and land restoration initiatives to combat climate change.' },
  { id: 'adv', title: 'Advocacy & Rights', img: advocacyImg, cat: 'Social', desc: 'Championing human rights and social inclusion for vulnerable communities.' },
  { id: 'econ', title: 'Economic Empowerment', img: econImg, cat: 'Growth', desc: 'Creating opportunities for sustainable livelihoods and poverty reduction.' },
  { id: 'edu', title: 'Education Support', img: eduImg, cat: 'Learning', desc: 'Integrating education as a pillar for long-term community development.' },
  { id: 'res', title: 'Disaster Resilience', img: resilienceImg, cat: 'Safety', desc: 'Building community capacity to withstand and recover from environmental disasters.' },
];

const ProgramsPage = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Programs | Our Multi-sector Approach</title>
      </Helmet>

      <section className="page-header" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Programs
          </motion.h1>
          <p>Integrated solutions for complex challenges.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="program-catalog">
            {programs.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="catalog-item"
              >
                <div className="item-img">
                  <img src={p.img} alt={p.title} />
                  <span className="item-cat">{p.cat}</span>
                </div>
                <div className="item-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <Link to={`/programs/${p.id}`} className="read-more">Learn More &rarr;</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .page-header {
          padding: 8rem 0 4rem;
          color: white;
          text-align: center;
        }
        .page-header h1 { font-size: 3.5rem; }
        
        .program-catalog {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .catalog-item {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        .catalog-item:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }

        .item-img { position: relative; height: 250px; }
        .item-img img { width: 100%; height: 100%; object-fit: cover; }
        .item-cat {
          position: absolute; top: 15px; left: 15px;
          background: var(--primary); color: white;
          padding: 0.3rem 0.8rem; border-radius: 50px;
          font-size: 0.7rem; font-weight: 700;
        }

        .item-content { padding: 2rem; }
        .item-content h3 { margin-bottom: 0.8rem; color: var(--primary); }
        .item-content p { color: var(--gray-800); font-size: 0.95rem; margin-bottom: 1.5rem; }
        .read-more { color: var(--primary); font-weight: 700; font-size: 0.9rem; }

        @media (max-width: 576px) {
          .program-catalog { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ProgramsPage;
