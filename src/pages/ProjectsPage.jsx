import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Leaf, Shield, Book, Zap } from 'lucide-react';
import projectImg from '../assets/gallery/WhatsApp Image 2026-03-19 at 11.30.34.jpeg';

const ProjectsPage = () => {
  const activityCategories = [
    {
      dept: "Health & Wellbeing",
      icon: <Heart />,
      color: "#e63946",
      activities: [
        { title: "Maternal Health Workshops", desc: "Providing prenatal and postnatal care education in rural communities.", status: "Ongoing" },
        { title: "Mobile Immunization Clinics", desc: "Expanding vaccine access to remote villages to reduce childhood mortality.", status: "Active" },
        { title: "Nutrition Support Program", desc: "Providing essential nutrition kits and training to vulnerable households.", status: "Strategic" }
      ]
    },
    {
      dept: "Environmental Restoration",
      icon: <Leaf />,
      color: "#2d6a4f",
      activities: [
        { title: "Community Tree Nurseries", desc: "Establishing and managing local nurseries focused on indigenous species.", status: "Active" },
        { title: "Nationwide Afforestation Drive", desc: "Targeting the restoration of 5,000 hectares of degraded forest land.", status: "Key Project" },
        { title: "Environmental Education", desc: "Interactive programs in primary schools to foster mindset change early.", status: "Ongoing" }
      ]
    },
    {
      dept: "Advocacy & Human Rights",
      icon: <Shield />,
      color: "#457b9d",
      activities: [
        { title: "Child Protection Initiative", desc: "Engaging communities in identifying and preventing child exploitation.", status: "High Priority" },
        { title: "Domestic Violence Prevention", desc: "Counseling and support systems for survivors and community awareness.", status: "Continuous" },
        { title: "Legal Awareness Clinics", desc: "Empowering communities with knowledge of their fundamental human rights.", status: "Monthly" }
      ]
    },
    {
      dept: "Economic Empowerment",
      icon: <Zap />,
      color: "#fdb813",
      activities: [
        { title: "Vocational Skills Training", desc: "Empowering youth and women with tailoring, crafts, and agricultural skills.", status: "Active" },
        { title: "Micro-Finance Cooperatives", desc: "Supporting the formation of local savings and credit groups.", status: "Ongoing" },
        { title: "Market Linkage Program", desc: "Helping rural farmers access better markets for their sustainable produce.", status: "New Launch" }
      ]
    },
    {
      dept: "Education Support",
      icon: <Book />,
      color: "#8338ec",
      activities: [
        { title: "School Infrastructure Support", desc: "Renovating classrooms and providing essential furniture for rural schools.", status: "Continuous" },
        { title: "Learning Materials Drive", desc: "Distributing textbooks, stationery, and uniforms to underprivileged children.", status: "Seasonal" },
        { title: "Teacher Capacity Building", desc: "Workshops on inclusive education and pupil-centered learning.", status: "Ongoing" }
      ]
    },
    {
      dept: "Disaster Resilience",
      icon: <Zap />,
      color: "#fb5607",
      activities: [
        { title: "Early Warning Systems", desc: "Community-led climate monitoring and disaster alert training.", status: "Active" },
        { title: "Emergency Response Kits", desc: "Maintaining readiness with essential medical and relief supplies.", status: "Standing Group" },
        { title: "Community Resilience Training", desc: "Workshops on disaster risk reduction and environmental safety.", status: "Quarterly" }
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
            Holistic solutions for empowerment and resilience across Uganda.
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
