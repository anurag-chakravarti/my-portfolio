import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled glass-nav' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo">
          <Code2 size={28} color="var(--primary-accent)" />
          <span>Portfolio</span>
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button 
            className="glow-btn header-btn" 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </button>
        </nav>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="glow-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hire Me
          </button>
        </nav>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .header.scrolled {
          padding: 1rem 0;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.5rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          transition: var(--transition-smooth);
          font-size: 0.95rem;
        }

        .nav-link:hover {
          color: var(--primary-accent);
        }

        .header-btn {
          padding: 0.6rem 1.5rem;
          font-size: 0.9rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          height: 100vh;
          background: var(--bg-color);
          border-left: 1px solid var(--border-color);
          z-index: 999;
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
