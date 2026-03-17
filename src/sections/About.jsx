import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, BookOpen } from 'lucide-react';
import aboutImage from '../assets/WhatsApp Image 2026-03-12 at 14.21.57.jpeg';

const About = () => {
  const departments = [
    {
      title: "Health Department",
      desc: "Promoting health and well-being through community outreach and specialized services.",
      icon: <Heart size={24} />,
      color: "#e63946"
    },
    {
      title: "Advocacy & Rights",
      desc: "Championing human rights and social inclusion for vulnerable communities in Uganda.",
      icon: <Shield size={24} />,
      color: "#457b9d"
    },
    {
      title: "Economic Empowerment",
      desc: "Creating opportunities for sustainable livelihoods and poverty reduction.",
      icon: <Users size={24} />,
      color: "#fdb813"
    },
    {
      title: "Education Support",
      desc: "Integrating education as a pillar for long-term community development.",
      icon: <BookOpen size={24} />,
      color: "#2a9d8f"
    }
  ];

  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-wrapper">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <img src={aboutImage} alt="Community Development" className="main-img" />
            <div className="experience-box">
              <span className="years">Comprehensive</span>
              <span className="exp-text">Development Framework</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-info"
          >
            <span className="section-tag">Who We Are</span>
            <h2>Unified for <br /> <span className="text-primary">Sustainable Growth</span></h2>
            <p>
              Green Belt Afforestation Initiative is a multi-sector community development organization 
              focused on poverty reduction and human rights. We integrate economic empowerment, 
              health, protection, and advocacy into one comprehensive framework.
            </p>
            
            <div className="dept-grid">
              {departments.map((dept, index) => (
                <div key={index} className="dept-item">
                  <div className="dept-icon" style={{ backgroundColor: `${dept.color}15`, color: dept.color }}>
                    {dept.icon}
                  </div>
                  <div className="dept-text">
                    <h4>{dept.title}</h4>
                    <p>{dept.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        .about-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-image {
          position: relative;
        }

        .main-img {
          border-radius: 20px;
          box-shadow: var(--shadow-lg);
          object-fit: cover;
          height: 600px;
          width: 100%;
        }

        .experience-box {
          position: absolute;
          bottom: 30px;
          right: -20px;
          background: var(--primary);
          color: var(--white);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .years {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .exp-text {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .section-tag {
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 1rem;
        }

        .about-info h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .about-info p {
          margin-bottom: 2.5rem;
          color: var(--gray-800);
        }

        .dept-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .dept-item {
          display: flex;
          gap: 1.2rem;
        }

        .dept-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dept-text h4 {
          margin-bottom: 0.4rem;
          font-size: 1.1rem;
        }

        .dept-text p {
          font-size: 0.9rem;
          margin-bottom: 0;
          line-height: 1.4;
        }

        @media (max-width: 991px) {
          .about-wrapper { grid-template-columns: 1fr; gap: 4rem; }
          .main-img { height: 400px; }
          .experience-box { right: 20px; }
        }

        @media (max-width: 576px) {
          .dept-grid { grid-template-columns: 1fr; }
          .about-info h2 { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
