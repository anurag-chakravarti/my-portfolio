import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology: Computer Science Engineering',
    school: 'Lovely Professional University (LPU)',
    period: '06/2021 – 06/2025',
    location: 'Phagwara, Punjab',
    score: 'Percentage: 57%'
  },
  {
    degree: 'Intermediate',
    school: 'Srichaitanya Techno School',
    period: '05/2019 – 05/2021',
    location: 'Vishakapatnam, Andhra Pradesh',
    score: 'Percentage: 73.8%'
  },
  {
    degree: '10th Standard',
    school: 'Narayana Hr. Sec. Eng. Med School',
    period: 'Until 05/2019',
    location: 'Vishakapatnam, Andhra Pradesh',
    score: 'Percentage: 71.5%'
  }
];

const certifications = [
  'DSA Master - Udemy',
  'Android App Development - Udemy',
  'Flutter App Development - Udemy',
  'Flutter App Development - Skill up',
  'Black Box & White Box Testing',
  'Data Structures & Algorithms - GeeksforGeeks'
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Academic & <span className="gradient-text">Certifications</span>
          </motion.h2>
          <p className="subtitle">My educational background and professional achievements.</p>
        </div>

        <div className="education-grid">
           <div className="edu-timeline">
              <h3 className="sub-title"><GraduationCap size={24} /> Education</h3>
              <div className="edu-list">
                 {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="edu-item glass"
                    >
                       <span className="edu-period">{edu.period}</span>
                       <h4>{edu.degree}</h4>
                       <p className="school">{edu.school}</p>
                       <div className="edu-footer">
                          <span>{edu.location}</span>
                          <span className="score-badge">{edu.score}</span>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>

           <div className="cert-section">
              <h3 className="sub-title"><Award size={24} /> Certifications</h3>
              <div className="cert-grid">
                 {certifications.map((cert, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="cert-card glass"
                    >
                       <CheckCircle size={18} className="cert-check" />
                       <span>{cert}</span>
                    </motion.div>
                 ))}
              </div>
              
              <div className="honor-section">
                 <h3 className="sub-title">Activities & Honors</h3>
                 <ul className="honor-list">
                    <li>Member of blood donation camp</li>
                    <li>Member of Toastmaster Club</li>
                    <li>Member of dance club in university</li>
                 </ul>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        .education {
          padding: var(--section-padding);
        }

        .education-grid {
           display: grid;
           grid-template-columns: 1.2fr 0.8fr;
           gap: 4rem;
           margin-top: 2rem;
        }

        .sub-title {
           display: flex;
           align-items: center;
           gap: 0.75rem;
           font-family: var(--font-heading);
           margin-bottom: 2rem;
           font-size: 1.5rem;
        }

        .edu-list {
           display: flex;
           flex-direction: column;
           gap: 1.5rem;
        }

        .edu-item {
           padding: 1.5rem 2rem;
           transition: var(--transition-smooth);
        }

        .edu-item:hover {
           border-color: var(--primary-accent);
           transform: translateX(10px);
        }

        .edu-period {
           color: var(--primary-accent);
           font-size: 0.85rem;
           font-weight: 600;
           display: block;
           margin-bottom: 0.5rem;
        }

        .edu-item h4 {
           font-family: var(--font-heading);
           margin-bottom: 0.25rem;
           font-size: 1.1rem;
        }

        .school {
           color: var(--text-secondary);
           margin-bottom: 1rem;
           font-size: 0.95rem;
        }

        .edu-footer {
           display: flex;
           justify-content: space-between;
           color: var(--text-secondary);
           font-size: 0.85rem;
           align-items: center;
        }

        .score-badge {
           background: rgba(255, 255, 255, 0.05);
           padding: 0.3rem 0.75rem;
           border-radius: 1rem;
           font-weight: 500;
           border: 1px solid var(--border-color);
        }

        .cert-grid {
           display: grid;
           grid-template-columns: 1fr;
           gap: 1rem;
        }

        .cert-card {
           padding: 1rem 1.5rem;
           display: flex;
           align-items: center;
           gap: 1rem;
           font-size: 0.95rem;
           transition: var(--transition-smooth);
        }

        .cert-card:hover {
           border-color: var(--secondary-accent);
           transform: scale(1.02);
        }

        .cert-check {
           color: var(--secondary-accent);
           flex-shrink: 0;
        }

        .honor-section {
           margin-top: 3rem;
        }

        .honor-list {
           list-style: none;
           padding: 0;
        }

        .honor-list li {
           color: var(--text-secondary);
           padding: 0.5rem 0;
           padding-left: 1.5rem;
           position: relative;
           font-size: 0.95rem;
        }

        .honor-list li::before {
           content: '•';
           position: absolute;
           left: 0;
           color: var(--primary-accent);
           font-weight: bold;
           font-size: 1.2rem;
        }

        @media (max-width: 968px) {
           .education-grid {
              grid-template-columns: 1fr;
              gap: 4rem;
           }
        }
      `}</style>
    </section>
  );
};

export default Education;
