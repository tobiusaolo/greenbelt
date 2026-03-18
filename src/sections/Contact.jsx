import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info-panel"
          >
            <span className="section-tag">Get In Touch</span>
            <h2>Let's Build a <br /> <span className="text-primary">Greener Future</span></h2>
            <p>
              Have questions about our programs or want to partner with us? 
              Reach out to our team.
            </p>

            <div className="contact-details">
              <div className="detail-card">
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Plot 922536, Kisaasi-kyanja road, P.O Box Kampala</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>0777696389</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>empowerhub@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-panel"
          >
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Kito Everest" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="kito.everest@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '1rem' }}>
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .contact-info-panel h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .contact-info-panel p {
          color: var(--gray-800);
          margin-bottom: 3rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .detail-card {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .icon-box {
          width: 55px;
          height: 55px;
          background: var(--white);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: var(--shadow);
          flex-shrink: 0;
        }

        .detail-card h4 {
          margin-bottom: 0.2rem;
          font-size: 1.1rem;
        }

        .detail-card p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .contact-form-panel {
          background: var(--white);
          padding: 3rem;
          border-radius: 30px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-200);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-group input, 
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          font-family: var(--font-main);
          transition: var(--transition);
        }

        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(27, 77, 62, 0.1);
        }

        @media (max-width: 991px) {
          .contact-wrapper { grid-template-columns: 1fr; gap: 4rem; }
          .contact-info-panel h2 { font-size: 2.5rem; }
        }

        @media (max-width: 576px) {
          .contact-form-panel { padding: 2rem 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
