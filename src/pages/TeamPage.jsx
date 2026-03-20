import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import headPrograms from '../assets/team/WhatsApp Image 2026-03-19 at 11.32.26.jpeg';
import headHealth from '../assets/team/WhatsApp Image 2026-03-19 at 11.57.00.jpeg';

const TeamPage = () => {
  const team = [
    {
      name: "Binti Majiid",
      role: "Head of Programs",
      image: headPrograms,
      bio: "Leading our strategic initiatives and community programs to ensure sustainable impact across Uganda.",
      email: "binti@greenbelt.org"
    },
    {
      name: "Dr. Sarah Namasoke",
      role: "Head of Health Department",
      image: headHealth,
      bio: "Overseeing all health-related outreach and specialized medical support services for vulnerable communities.",
      email: "sarah@greenbelt.org"
    }
  ];

  return (
    <div className="page-container">
      <Helmet>
        <title>Our Team | GreenBelt Empowerment Hub</title>
      </Helmet>

      {/* Header */}
      <section className="page-header bg-light">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-center"
          >
            Meet Our <span className="text-secondary">Leadership</span>
          </motion.h1>
          <p className="text-center">The dedicated individuals driving change and empowerment.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="team-card"
              >
                <div className="team-img-wrapper">
                  <img src={member.image} alt={member.name} className="team-img" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p>{member.bio}</p>
                  <div className="team-socials">
                    <a href={`mailto:${member.email}`} className="social-icon"><Mail size={18} /></a>
                    <a href="#" className="social-icon"><Linkedin size={18} /></a>
                    <a href="#" className="social-icon"><Twitter size={18} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .page-header {
          padding: 10rem 0 5rem;
          text-align: center;
        }
        .page-header h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        .text-accent { color: var(--accent); }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .team-card {
          background: white;
          border-radius: 25px;
          padding: 2.5rem 1.5rem;
          text-align: center;
          box-shadow: var(--shadow);
          transition: var(--transition);
          border: 1px solid var(--gray-100);
          position: relative;
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }

        .team-img-wrapper {
          width: 160px;
          height: 160px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid var(--gray-100);
          box-shadow: var(--shadow);
        }

        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .team-card:hover .team-img {
          transform: scale(1.1);
        }

        .team-info h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 0.4rem;
        }

        .role {
          display: inline-block;
          background: var(--gray-100);
          color: var(--primary-light);
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.2rem;
        }

        .team-info p {
          color: var(--gray-700);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .team-socials {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gray-100);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: var(--transition);
        }

        .social-icon:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr; }
          .team-card { padding: 2.5rem 1.2rem; }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
