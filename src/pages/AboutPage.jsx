import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Leaf, Scale, Heart, Lightbulb, ShieldCheck } from 'lucide-react';
import aboutImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 17.36.18.jpeg';
import locationImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.29.15 (1).jpeg';

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
          <p>Empowerment Hub</p>
        </div>
      </section>

      {/* Mission, Vision & Objective */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-feature highlight-card"
            >
              <div className="card-icon"><Target size={32} /></div>
              <h2 className="text-primary">Our Mission</h2>
              <p>
                To empower women, youth, children, people with disabilities, and the elderly by enhancing their access to economic opportunities, improving their health, and providing them with the knowledge, skills, and support they need to overcome challenges and take responsibility for their own futures.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-feature highlight-card"
            >
              <div className="card-icon"><Lightbulb size={32} /></div>
              <h2 className="text-primary">Our Vision</h2>
              <p>
                We envision a world where women, youth, children, people with disabilities, and the elderly are empowered, responsible, and resilient.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-feature highlight-card"
            >
              <div className="card-icon"><ShieldCheck size={32} /></div>
              <h2 className="text-primary">Our Objective</h2>
              <p>
                To create holistic and sustainable solutions that empower marginalized groups to take control of their futures and contribute positively to their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Goal & Commitment */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="goal-section">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="goal-content"
            >
              <h2 className="text-center mb-4">Our <span className="text-primary">Ultimate Goal</span></h2>
              <p className="lead-text text-center">
                Our goal is to create inclusive communities where everyone, regardless of their gender, age, or ability, can access economic opportunities, healthcare, and education, and can live free from the fear of violence and discrimination. 
              </p>
              <p className="text-center mt-3">
                We work to foster a mindset shift that promotes personal responsibility, self-reliance, and a sense of ownership in building resilient families and communities. We are committed to child protection, ending domestic violence, and fostering mindset change across communities, so that people not only survive but thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-tag">Guiding Principles</span>
            <h2>Our Core <span className="text-primary">Values</span></h2>
          </div>
          
          <div className="values-grid">
            {[
              {
                title: "Impact",
                desc: "We are driven by the tangible difference we make. We focus on measurable results that transform lives and restore hope in the communities we serve.",
                icon: <Target className="value-icon" />
              },
              {
                title: "Collaboration",
                desc: "We believe that partnerships are essential for sustainable change. We actively build relationships with local communities, governments, and partners to leverage resources and create collective impact.",
                icon: <Users className="value-icon" />
              },
              {
                title: "Sustainability",
                desc: "We create long-term solutions that promote economic, social, and environmental resilience, ensuring communities can adapt to and withstand future crises.",
                icon: <Leaf className="value-icon" />
              },
              {
                title: "Social Justice",
                desc: "We advance equality by challenging discrimination and advocating for the rights of marginalized groups, including gender equality and disability inclusion.",
                icon: <Scale className="value-icon" />
              },
              {
                title: "Compassion",
                desc: "We approach our work with empathy, ensuring that those we serve feel valued, heard, and encouraged on their journey toward empowerment.",
                icon: <Heart className="value-icon" />
              },
              {
                title: "Innovation",
                desc: "We embrace creativity in addressing complex challenges, fostering a culture of continuous learning to find effective ways to meet evolving community needs.",
                icon: <Lightbulb className="value-icon" />
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon-wrapper">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
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
                GreenBelt Empowerment Hub is designed as a multi-sector 
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
              <img src={locationImg} alt="Mission in action" className="img-rounded" />
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
        
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .highlight-card {
          padding: 2.5rem;
          background: white;
          border-radius: 20px;
          box-shadow: var(--shadow);
          border-top: 5px solid var(--primary);
          text-align: center;
          transition: transform 0.3s ease;
        }
        .highlight-card:hover { transform: translateY(-10px); }
        .card-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .highlight-card h2 { font-size: 1.5rem; margin-bottom: 1rem; }
        .highlight-card p { font-size: 0.95rem; line-height: 1.6; color: var(--gray-700); }

        .goal-section {
          max-width: 900px;
          margin: 0 auto;
        }
        .lead-text {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--gray-900);
          line-height: 1.8;
        }

        .section-tag {
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }
        .value-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .value-card:hover {
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }
        .value-icon-wrapper {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .value-card h3 { margin-bottom: 1rem; color: var(--primary); }
        .value-card p { font-size: 0.9rem; color: var(--gray-600); line-height: 1.6; }

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

        @media (max-width: 1024px) {
          .grid-3, .values-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .grid-3, .values-grid, .about-detailed { grid-template-columns: 1fr; }
          .page-header h1 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
