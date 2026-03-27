import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, MessageSquare } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.p variants={itemVariants} className="hero-tag">
            <span>👋</span> Digital Craftsmanship
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Flutter Developer & <br />
            <span className="gradient-text">Software Engineer</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description">
            Hi, I'm <span className="highlight">Anurag Chakravarthy</span>. I specialize in building high-performance, 
            pixel-perfect cross-platform applications using <span className="highlight">Dart and Flutter</span>. 
            Currently engineering secure solutions at <span className="highlight">Koders</span>.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <button className="glow-btn" onClick={() => window.location.href = '#projects'}>
              Explore Projects <ArrowRight size={20} />
            </button>
            <button className="secondary-btn glass" style={{ border: '1px solid var(--border-color)', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', fontWeight: '600', color: 'var(--text-primary)', cursor: 'pointer' }} onClick={() => window.open('https://github.com/anurag-chakravarti', '_blank')}>
              Download CV
            </button>
            <div className="social-links">
              <a href="https://github.com/anurag-chakravarti" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Code2 size={24} />
              </a>
              <a href="https://linkedin.com/in/anuragchakravarti/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Globe size={24} />
              </a>
              <a href="mailto:anuragchakravarthy2001@gmail.com" className="social-icon">
                <MessageSquare size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-media"
        >
          <div className="profile-container">
            <div className="glow-circle primary-glow"></div>
            <div className="glow-circle secondary-glow"></div>
            <div className="profile-image">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" alt="Anurag" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 2rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          font-weight: 800;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .hero-description .highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .hero-actions button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .social-icon:hover {
          color: var(--primary-accent);
          transform: translateY(-3px);
        }

        .hero-media {
          position: relative;
          justify-self: center;
        }

        .profile-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 2rem;
          overflow: hidden;
          border: 1px solid var(--border-color);
          z-index: 10;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .glow-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
        }

        .primary-glow {
          background: var(--primary-accent);
          bottom: -50px;
          right: -50px;
          opacity: 0.3;
        }

        .secondary-glow {
          background: var(--secondary-accent);
          top: -50px;
          left: -50px;
          opacity: 0.2;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 5rem;
          }
          .hero-content {
            order: 2;
          }
          .hero-media {
            order: 1;
          }
          .hero-tag, .hero-actions {
            justify-content: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .profile-container {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
