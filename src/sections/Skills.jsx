import { motion } from 'framer-motion';
import { Code2, Smartphone, Layout, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 />,
    skills: ['Dart', 'Java', 'Swift', 'Kotlin', 'JavaScript', 'C', 'C++']
  },
  {
    title: 'Frameworks',
    icon: <Smartphone />,
    skills: ['Flutter', 'Firebase SDK', 'SwiftUI', 'Android SDK', 'Ionic', 'React', 'Tailwind CSS']
  },
  {
    title: 'State Management',
    icon: <Layout />,
    skills: ['Bloc', 'GetX', 'Provider', 'Riverpod']
  },
  {
    title: 'Backend & APIs',
    icon: <Server />,
    skills: ['REST API', 'GraphQL', 'Supabase', 'Edge Functions', 'AWS']
  },
  {
    title: 'Database',
    icon: <Database />,
    skills: ['MySQL', 'SQLite', 'Hive', 'Firestore', 'Hive', 'Shared Preferences']
  },
  {
    title: 'Platforms & Tools',
    icon: <Wrench />,
    skills: ['Android', 'iOS', 'Web', 'Fastlane', 'Jenkins', 'Figma', 'Git']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technical <span className="gradient-text">Expertise</span>
          </motion.h2>
          <p className="subtitle">Extensive skill set in mobile app development and scalable architectures.</p>
        </div>

        <div className="skills-grid">
           {skillCategories.map((cat, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.4, delay: index * 0.1 }}
               className="skill-card glass"
             >
                <div className="skill-icon primary-glow-box">
                   {cat.icon}
                </div>
                <h3>{cat.title}</h3>
                <div className="skill-badges">
                   {cat.skills.map((skill, skIndex) => (
                     <span key={skIndex} className="skill-badge">{skill}</span>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>
      </div>

      <style>{`
        .skills {
          padding: var(--section-padding);
        }

        .skills-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
           gap: 2rem;
        }

        .skill-card {
           padding: 2.5rem;
           transition: var(--transition-smooth);
           display: flex;
           flex-direction: column;
           align-items: center;
           text-align: center;
        }

        .skill-card:hover {
           border-color: var(--primary-accent);
           transform: translateY(-8px);
        }

        .skill-icon {
           width: 50px;
           height: 50px;
           border-radius: 12px;
           margin-bottom: 1.5rem;
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
        }

        .skill-card h3 {
           font-family: var(--font-heading);
           font-size: 1.25rem;
           margin-bottom: 1.5rem;
        }

        .skill-badges {
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
           gap: 0.75rem;
        }

        .skill-badge {
           padding: 0.5rem 1rem;
           background: rgba(255, 255, 255, 0.03);
           border: 1px solid var(--border-color);
           border-radius: 2rem;
           font-size: 0.85rem;
           color: var(--text-secondary);
           transition: var(--transition-smooth);
        }

        .skill-badge:hover {
           color: white;
           background: var(--primary-accent);
           border-color: var(--primary-accent);
        }
      `}</style>
    </section>
  );
};

export default Skills;
