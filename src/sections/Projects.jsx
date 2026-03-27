import { motion } from 'framer-motion';
import { ExternalLink, Globe, Layers, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Defendia',
    category: 'Mobile Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    description: 'A robust Password Manager with secure encryption and cross-device sync. Available on Google Play Store.',
    tech: ['Flutter', 'Supabase', 'Clean Architecture', 'Biometrics'],
    links: { github: 'https://github.com/anurag-chakravarti', live: '#' }
  },
  {
    title: 'Arentzo (Rental App)',
    category: 'Full Stack Mobile',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    description: 'Comprehensive multi-module Rental Application using Supabase and Flutter with Vendor and Customer modules.',
    tech: ['Flutter', 'Supabase', 'Edge Functions', 'Provider'],
    links: { github: 'https://github.com/anurag-chakravarti', live: '#' }
  },
  {
    title: 'AIYUH (Wellness)',
    category: 'AI / Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
    description: 'Personalized wellness and fitness plans generated via AI chatbot inputs. Built with Google Maps integration.',
    tech: ['Flutter', 'Chatbot API', 'Firebase', 'Google Maps'],
    links: { github: 'https://github.com/anurag-chakravarti', live: '#' }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="subtitle"
          >
            A curated selection of my core engineering work and experiments.
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="project-card glass"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                   <div className="overlay-links">
                      <a href={project.links.github} className="icon-link"><Code2 size={20} /></a>
                      <a href={project.links.live} className="icon-link"><ExternalLink size={20} /></a>
                   </div>
                </div>
              </div>
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          padding: var(--section-padding);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .project-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-links {
          display: flex;
          gap: 1.5rem;
        }

        .icon-link {
          width: 45px;
          height: 45px;
          background: white;
          color: black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: var(--transition-smooth);
        }

        .icon-link:hover {
          background: var(--primary-accent);
          color: white;
          transform: rotate(10deg);
        }

        .project-info {
          padding: 1.5rem;
        }

        .project-category {
          color: var(--primary-accent);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .project-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tech-tag {
          font-size: 0.75rem;
          padding: 0.3rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 2rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};

export default Projects;
