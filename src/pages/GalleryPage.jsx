import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import img1 from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.15 (1).jpeg';
import img2 from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.15.jpeg';
import img3 from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.16 (1).jpeg';
import img4 from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.16.jpeg';
import img5 from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.30.34.jpeg';
import img6 from '../assets/gallery/WhatsApp Image 2026-03-19 at 17.36.18.jpeg';
import img7 from '../assets/gallery/WhatsApp Image 2026-03-12 at 14.21.57.jpeg';
import img8 from '../assets/gallery/WhatsApp Image 2026-03-12 at 14.21.58.jpeg';
import img9 from '../assets/gallery/WhatsApp Image 2026-03-19 at 09.54.27 (1).jpeg';
import img10 from '../assets/gallery/WhatsApp Image 2026-03-19 at 09.54.27.jpeg';

const GalleryPage = () => {
  const images = [
    { src: img1, title: 'Community Support' },
    { src: img2, title: 'Health Outreach' },
    { src: img3, title: 'Environmental Restoration' },
    { src: img4, title: 'Field Training' },
    { src: img5, title: 'Project Overview' },
    { src: img6, title: 'Advocacy Meeting' },
    { src: img7, title: 'Project Focus' },
    { src: img8, title: 'Ecosystem Protection' },
    { src: img9, title: 'Community Engagement' },
    { src: img10, title: 'Team Work' },
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

        .gallery-item:hover img { transform: scale(1.05); }

        @media (max-width: 991px) { .gallery-masonry { columns: 2; } }
        @media (max-width: 576px) { .gallery-masonry { columns: 1; } }
      `}</style>
    </div>
  );
};

export default GalleryPage;
