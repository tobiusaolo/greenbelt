import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'at-top'}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src="/src/assets/logo.jpeg" alt="GreenBelt" className="logo-img" />
          <div className="logo-text">
            <span className="brand-name">GreenBelt</span>
            <span className="brand-sub">Empowerment Hub</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
          <button className={`btn ${isScrolled ? 'btn-primary' : 'btn-white'}`}>Donate Now</button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-actions">
          <span className="menu-label">MENU</span>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
          Donate Now
        </button>
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
          background: transparent;
        }

        .navbar.scrolled {
          background: var(--white);
          padding: 1rem 0;
          box-shadow: var(--shadow);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar.at-top .logo { color: var(--white); }
        .navbar.scrolled .logo { color: var(--primary); }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .logo-img {
          width: 45px;
          height: 45px;
          object-fit: cover;
          border-radius: 10px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .brand-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: inherit;
        }

        .navbar.at-top .brand-sub { color: rgba(255, 255, 255, 0.8); }
        .navbar.scrolled .brand-sub { color: var(--gray-800); }

        .brand-sub {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .navbar.at-top .nav-link { color: var(--white); }
        .navbar.scrolled .nav-link { color: var(--black); }

        .nav-link {
          font-weight: 600;
          position: relative;
        }
        
        .btn-white {
          background-color: var(--white);
          color: var(--primary);
        }
        
        .btn-white:hover {
          background-color: var(--accent);
          transform: translateY(-2px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: var(--transition);
        }

        .nav-link.active {
          color: var(--primary);
        }
        
        .navbar.at-top .nav-link.active {
          color: var(--accent);
        }

        .navbar.at-top .nav-link.active::after {
          background-color: var(--accent);
        }

        .nav-link.active::after {
          width: 100%;
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 0.8rem;
        }

        .navbar.at-top .menu-label,
        .navbar.at-top .mobile-toggle {
          color: var(--white);
        }

        .navbar.scrolled .menu-label,
        .navbar.scrolled .mobile-toggle {
          color: var(--primary);
        }

        .menu-label {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .mobile-toggle {
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          height: 100vh;
          background: var(--white);
          padding: 6rem 2rem 2rem;
          transition: var(--transition);
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
          z-index: 999;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-menu.active {
          right: 0;
        }

        .mobile-nav-link {
          font-size: 1.2rem;
          font-weight: 600;
          padding: 1rem 0;
          border-bottom: 1px solid var(--gray-200);
        }

        .mobile-nav-link.active {
          color: var(--primary);
          background: var(--gray-100);
          padding-left: 1rem;
        }
          .nav-links {
            display: none;
          }
          
          .mobile-actions {
            display: flex;
          }

          .mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
