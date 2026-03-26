import React from 'react';
import { motion } from 'framer-motion';
import sustainableImg from '../assets/WhatsApp Image 2026-03-12 at 14.21.58.jpeg';
import healthImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 17.36.18.jpeg';
import advocacyImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.30.34.jpeg';

const Departments = () => {
  const programs = [
    {
      title: "Environmental Restoration",
      category: "Sustainability",
      image: sustainableImg,
      desc: "Comprehensive afforestation and land restoration initiatives to combat climate change."
    },
    {
      title: "Health & Wellbeing",
      category: "Medical Outreach",
      image: healthImg,
      desc: "Bringing essential healthcare services and health education to remote communities."
    },
    {
      title: "Advocacy & Human Rights",
      category: "Social Justice",
      image: advocacyImg,
      desc: "Empowering the vulnerable and advocating for systemic change and inclusion."
    }
  ];

  return (
    <section className="departments section-padding bg-light" id="programs">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Our Programs</span>
          <h2>Integrated <span className="text-primary">Development Impact</span></h2>
          <p className="section-desc">
            Our multi-sector approach ensures that every intervention supports long-term resilience 
            and sustainable prosperity for the communities we serve.
          </p>
        </div>

        <div className="program-grid">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="program-card"
            >
              <div className="card-image">
                <img src={program.image} alt={program.title} />
                <span className="card-category">{program.category}</span>
              </div>
              <div className="card-content">
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
                <a href="#contact" className="read-more">Learn More &rarr;</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .section-header {
          margin-bottom: 4rem;
        }

        .section-desc {
          max-width: 700px;
          margin: 1rem auto;
          color: var(--gray-800);
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .program-card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .program-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }

        .card-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .program-card:hover .card-image img {
          transform: scale(1.1);
        }

        .card-category {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--primary);
          color: var(--white);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .card-content {
          padding: 2rem;
        }

        .card-content h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .card-content p {
          color: var(--gray-800);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .read-more {
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .read-more:hover {
          gap: 0.8rem;
        }

        @media (max-width: 991px) {
          .program-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .program-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Departments;
