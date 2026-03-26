import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Leaf, Shield, Book, Zap } from 'lucide-react';
import projectImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.30.34.jpeg';

const ProjectsPage = () => {
  const activityCategories = [
    {
      dept: "Completed Projects (2025–2026)",
      icon: <Heart />,
      color: "#2d6a4f",
      activities: [
        { title: "Elderly Support Program (Busoga, Northern and Central Regions)", desc: "Green Belt successfully implemented an elderly support program in Busoga, Northern, and Central regions of Uganda aimed at improving the welfare and quality of life of older persons through community outreach, care support, and access to essential services.", status: "Completed" },
        { title: "Medical Camp (Busoga, Northern and Central Regions)", desc: "Green Belt conducted community medical camps in Busoga, Northern, and Central regions in collaboration with medical intern students to provide free health services, basic treatment, and medical awareness to underserved communities, improving access to healthcare and early diagnosis. Also distributed 100 Mamakits to expecting mothers, and provided post birth medication that mothers in rural areas lack.", status: "Completed" }
      ]
    },
    {
      dept: "Ongoing Projects",
      icon: <Leaf />,
      color: "#fdb813",
      activities: [
        { title: "Tree Planting Initiative", desc: "Green Belt continues to promote environmental conservation through large-scale tree planting activities aimed at restoring ecosystems, combating climate change, and improving community livelihoods.", status: "Ongoing" },
        { title: "Creating Green Jobs", desc: "The organization is actively creating green employment opportunities for youth and communities through environmental projects, sustainable practices, and climate-friendly economic activities.", status: "Active" }
      ]
    },
    {
      dept: "Pending Project",
      icon: <Zap />,
      color: "#e63946",
      activities: [
        { title: "National Stakeholders Dialogue for Institutional Solar", desc: "Green Belt is preparing to organize a national stakeholders dialogue to promote institutional solar energy adoption. The dialogue will bring together government agencies, private sector players, development partners, and civil society to discuss policies, partnerships, and strategies for expanding solar energy use in institutions.", status: "Pending" }
      ]
    }
  ];

  return (
    <div className="page-container">
      <Helmet>
        <title>Projects | GreenBelt Hub</title>
      </Helmet>

      <section className="page-header" style={{ position: 'relative', overflow: 'hidden', padding: '10rem 0 5rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            Our <span style={{ color: 'var(--secondary)' }}>Projects</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--gray-800)' }}>
            Green Belt Projects Update (2025–2026)
          </p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="activities-container">
            {activityCategories.map((cat, i) => (
              <div key={i} className="dept-activities-group" style={{ marginBottom: '5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', borderBottom: `2px solid ${cat.color}30`, paddingBottom: '1rem' }}>
                  <div className="cat-icon" style={{ color: cat.color }}>{cat.icon}</div>
                  <h2 style={{ color: 'var(--primary)', margin: 0 }}>{cat.dept}</h2>
                </div>
                
                <div className="activities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                  {cat.activities.map((activity, j) => (
                    <div 
                      key={j}
                      className="activity-card"
                      style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow)', borderTop: `4px solid ${cat.color}` }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                        <h4 style={{ margin: 0, color: 'var(--primary)', fontSize: '1.2rem' }}>{activity.title}</h4>
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: cat.color, background: `${cat.color}15`, padding: '0.4rem 0.8rem', borderRadius: '50px' }}>{activity.status}</span>
                      </div>
                      <p style={{ color: 'var(--gray-800)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>{activity.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .cat-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 12px;
          box-shadow: var(--shadow);
        }
        .activity-card {
          transition: transform 0.3s ease;
        }
        .activity-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 768px) {
          .page-header h1 { font-size: 2.5rem; }
          .activities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
