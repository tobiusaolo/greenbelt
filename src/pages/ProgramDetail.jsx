import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import healthImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 17.36.18.jpeg';
import envImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.15 (1).jpeg';
import advocacyImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.30.34.jpeg';
import econImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.16 (1).jpeg';
import eduImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.16.jpeg';
import resilienceImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.15.jpeg';

const programData = {
  health: { 
    title: 'Health Department', 
    img: healthImg, 
    desc: 'Our health programs bring specialized medical services to remote areas, focusing on maternal health, immunization, and disease prevention. We work closely with local volunteers to ensure sustainable health outcomes.' 
  },
  env: { 
    title: 'Environmental Restoration', 
    img: envImg, 
    desc: 'The core of our mission: large-scale afforestation and ecosystem protection. We manage community nurseries, distribute seedlings, and provide technical training on land restoration and sustainable forest management.' 
  },
  adv: { 
    title: 'Advocacy & Rights', 
    img: advocacyImg, 
    desc: 'We advocate for the rights of the marginalized, providing legal awareness, social inclusion programs, and championing the rights of women and children in vulnerability.' 
  },
  econ: { 
    title: 'Economic Empowerment', 
    img: econImg, 
    desc: 'Through micro-finance, vocational training, and cooperative support, we empower community members to build resilient livelihoods and break the cycle of poverty.' 
  },
  edu: { 
    title: 'Education Support', 
    img: eduImg, 
    desc: 'We believe education is growth. Our programs support school infrastructure, provide learning materials, and advocate for universal access to quality education for every child.' 
  },
  res: { 
    title: 'Disaster Resilience', 
    img: resilienceImg, 
    desc: 'Equipping communities with the tools and knowledge to anticipate, prepare for, and recover from shocks—including climate -induced disasters and economic stressors.' 
  },
};

const ProgramDetail = () => {
  const { id } = useParams();
  const program = programData[id] || programData.env;

  return (
    <div className="page-container">
      <Helmet>
        <title>{program.title} | GreenBelt Program Detail</title>
      </Helmet>

      <section className="detail-hero" style={{ backgroundImage: `url(${program.img})` }}>
        <div className="header-overlay"></div>
        <div className="container">
          <Link to="/programs" className="back-link">&larr; Back to Programs</Link>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {program.title}
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="detail-content">
            <div className="main-text">
              <h2>Impact & Implementation</h2>
              <p>{program.desc}</p>
              <p>
                Our multi-sectoral approach ensures that {program.title.toLowerCase()} is 
                not just a standalone project, but a part of a larger, integrated 
                strategy for sustainable development. We prioritize local 
                leadership and community ownership in every step.
              </p>
              
              <div className="impact-stats">
                <div className="stat">
                  <h3>15+</h3>
                  <p>Districts Covered</p>
                </div>
                <div className="stat">
                  <h3>10k+</h3>
                  <p>Beneficiaries</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Local Ownership</p>
                </div>
              </div>
            </div>
            
            <div className="side-panel">
              <div className="card-cta bg-primary">
                <h3>Support this Program</h3>
                <p>Your contribution directly funds our work on the ground.</p>
                <button className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', width: '100%' }}>Donate Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .detail-hero {
          height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          color: white;
        }
        .header-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(8, 28, 21, 0.9) 0%, rgba(8, 28, 21, 0.4) 100%); }
        .detail-hero .container { z-index: 1; }
        .back-link { color: var(--accent); font-weight: 600; margin-bottom: 2rem; display: block; }

        .detail-hero h1 { font-size: 4rem; max-width: 600px; line-height: 1.1; }

        .detail-content {
          display: grid;
          grid-template-columns: 2.5fr 1fr;
          gap: 6rem;
        }

        .main-text h2 { margin-bottom: 2rem; font-size: 2.5rem; }
        .main-text p { margin-bottom: 1.5rem; font-size: 1.1rem; color: var(--gray-800); }

        .impact-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--gray-200);
        }
        .stat h3 { font-size: 3rem; color: var(--primary); margin-bottom: 0.5rem; }
        .stat p { font-size: 0.9rem; font-weight: 600; text-transform: uppercase; color: var(--gray-800); }
        
        .card-cta {
          padding: 3rem;
          border-radius: 30px;
          color: white;
          position: sticky;
          top: 120px;
        }
        .card-cta h3 { margin-bottom: 1.5rem; }
        .card-cta p { margin-bottom: 2.5rem; opacity: 0.9; }

        @media (max-width: 991px) {
          .detail-content { grid-template-columns: 1fr; }
          .detail-hero h1 { font-size: 3rem; }
          .card-cta { position: static; }
        }
      `}</style>
    </div>
  );
};

export default ProgramDetail;
