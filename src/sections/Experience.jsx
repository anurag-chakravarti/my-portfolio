import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Koders',
    period: '01/2026 – Present',
    description: 'Leading the development of Defendia, a high-security password manager available on Play Store. Focused on secure encryption and performance optimization.'
  },
  {
    role: 'Software Engineer',
    company: 'Veloria Tech | Bangalore',
    period: '09/2025 – 01/2026',
    description: 'Developed "Arentzo", a multi-module Rental Application. Engineered Provider and Customer modules, integrated Supabase, and handled complex split payout logic via Edge Functions.'
  },
  {
    role: 'Software Engineer',
    company: 'UNHOX | Pune',
    period: '04/2025 – 09/2025',
    description: 'Led end-to-end development of AIYUH, a wellness app. Integrated AI chatbot inputs to generate personalized plans, Firebase Auth, and real-time UI components.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <p className="subtitle">My journey as a software engineer and mobile specialist.</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-node primary-glow-box">
                 <Briefcase size={20} />
              </div>
              <div className="timeline-content glass">
                 <div className="timeline-header">
                    <h3>{exp.role}</h3>
                    <span className="badge"><Calendar size={14} /> {exp.period}</span>
                 </div>
                 <h4 className="company">{exp.company}</h4>
                 <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience {
          padding: var(--section-padding);
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline::before {
           content: '';
           position: absolute;
           left: 20px;
           top: 0;
           bottom: 0;
           width: 2px;
           background: var(--border-color);
           z-index: 1;
        }

        .timeline-item {
          position: relative;
          padding-left: 60px;
          z-index: 2;
        }

        .timeline-node {
          position: absolute;
          left: 0;
          top: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 5;
        }

        .timeline-content {
          padding: 2rem;
          transition: var(--transition-smooth);
        }

        .timeline-content:hover {
           border-color: var(--primary-accent);
           transform: translateX(10px);
        }

        .timeline-header {
           display: flex;
           justify-content: space-between;
           align-items: flex-start;
           margin-bottom: 0.5rem;
           flex-wrap: wrap;
           gap: 1rem;
        }

        .timeline-header h3 {
           font-family: var(--font-heading);
           font-size: 1.25rem;
           margin: 0;
        }

        .badge {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           background: var(--primary-glow);
           color: var(--primary-accent);
           padding: 0.4rem 1rem;
           border-radius: 2rem;
           font-size: 0.8rem;
           font-weight: 600;
        }

        .company {
           color: var(--text-secondary);
           margin-bottom: 1rem;
           font-weight: 500;
           font-size: 1rem;
        }

        .timeline-content p {
           color: var(--text-secondary);
           line-height: 1.6;
           font-size: 0.95rem;
        }

        @media (max-width: 640px) {
           .timeline-header {
              flex-direction: column;
              align-items: flex-start;
           }
        }
      `}</style>
    </section>
  );
};

export default Experience;
