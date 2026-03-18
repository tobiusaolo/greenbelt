import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import sustainableImg from '../assets/ngo_sustainable_farming_uganda_1773776205462.png';
import healthImg from '../assets/ngo_health_outreach_uganda_1773776224094.png';
import advocacyImg from '../assets/ngo_advocacy_meeting_uganda_1773776560989.png';
import treeImg1 from '../assets/WhatsApp Image 2026-03-12 at 14.21.57.jpeg';
import treeImg2 from '../assets/WhatsApp Image 2026-03-12 at 14.21.57 (1).jpeg';

const GalleryPage = () => {
  const images = [
    { src: sustainableImg, title: 'Sustainable Farming' },
    { src: healthImg, title: 'Health Outreach' },
    { src: advocacyImg, title: 'Community Advocacy' },
    { src: treeImg1, title: 'Afforestation Phase 1' },
    { src: treeImg2, title: 'Project Location' },
  ];

  return (
    <div className="page-container">
      <Helmet>
        <title>Impact Gallery | GreenBelt in Action</title>
      </Helmet>

      <section className="page-header bg-light">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-center"
          >
            Impact Gallery
          </motion.h1>
          <p className="text-center">Visualizing our footprint across the communities we serve.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="gallery-masonry">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gallery-item"
              >
                <img src={img.src} alt={img.title} />
                <div className="gallery-hover">
                  <span>{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .page-header { padding: 10rem 0 5rem; }
        .page-header h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        
        .gallery-masonry {
          columns: 3;
          column-gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          margin-bottom: 1.5rem;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
        }

        .gallery-item img {
          width: 100%;
          display: block;
          transition: var(--transition);
        }

        .gallery-hover {
          position: absolute;
          inset: 0;
          background: rgba(27, 77, 62, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          opacity: 0;
          transition: var(--transition);
        }

        .gallery-item:hover .gallery-hover { opacity: 1; }
        .gallery-item:hover img { transform: scale(1.05); }

        @media (max-width: 991px) { .gallery-masonry { columns: 2; } }
        @media (max-width: 576px) { .gallery-masonry { columns: 1; } }
      `}</style>
    </div>
  );
};

export default GalleryPage;
