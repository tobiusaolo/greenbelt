import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Leaf } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer bg-light" id="footer">
      <div className="container section-padding">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="logo" style={{ marginBottom: '1.5rem', display: 'flex' }}>
              <img src={logoImg} alt="GreenBelt" className="footer-logo-img" />
              <div className="logo-text">
                <span className="brand-name">GreenBelt</span>
                <span className="brand-sub">Empowerment Hub</span>
              </div>
            </Link>
            <p className="footer-desc">
              Dedicated to poverty reduction, human rights, and sustainable development. 
              Join us in our mission to create a greener, more equitable future.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/gallery">Impact Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Departments</h3>
            <ul>
              <li><Link to="/programs/health">Health Department</Link></li>
              <li><Link to="/programs/econ">Economic Empowerment</Link></li>
              <li><Link to="/programs/adv">Advocacy & Social Inclusion</Link></li>
              <li><Link to="/programs/env">Environmental Restoration</Link></li>
              <li><Link to="/programs/edu">Education Support</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <span>Plot 922536, Kisaasi-kyanja road, P.O Box Kampala</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" size={20} />
              <span>+256 777696389</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <span>greenbeltug@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Empowerment Hub Afforestation Initiative Limited. All rights reserved.</p>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          border-top: 1px solid var(--gray-200);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 4rem;
        }

        .footer h3 {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: var(--primary);
        }

        .footer-desc {
          margin-bottom: 2rem;
          color: var(--gray-800);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .social-icon:hover {
          background: var(--primary);
          color: var(--white);
          transform: translateY(-3px);
        }

        .footer-links ul li {
          margin-bottom: 1rem;
        }

        .footer-links ul li a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .footer-bottom {
          padding: 2rem 0;
          background: var(--white);
          text-align: center;
          font-size: 0.9rem;
          color: var(--gray-800);
        }

        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--primary);
        }

        .footer-logo-img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 8px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .brand-sub {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
