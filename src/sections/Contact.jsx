import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Actual EmailJS IDs for your account
    const SERVICE_ID = 'service_7obyx7s'; 
    const TEMPLATE_ID = 'template_9zsar76';
    const PUBLIC_KEY = '305mjXxgllIQOnEAs';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSending(false);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 5000);
          form.current.reset();
      }, (error) => {
          console.error('Failed to send email:', error.text);
          setIsSending(false);
          alert('Something went wrong. Please try again or email me directly.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <p className="subtitle">Let's build something extraordinary together.</p>
        </div>

        <div className="contact-grid">
           <div className="contact-info">
              <div className="info-card glass">
                 <div className="info-icon primary-glow-box"><Mail size={24} /></div>
                 <div>
                    <h4>Email Me</h4>
                    <p>anuragchakravarthy2001@gmail.com</p>
                 </div>
              </div>

              <div className="info-card glass">
                 <div className="info-icon secondary-glow-box"><Phone size={24} /></div>
                 <div>
                    <h4>Call Me</h4>
                    <p>+91 88395 80092</p>
                 </div>
              </div>

              <div className="info-card glass">
                 <div className="info-icon primary-glow-box"><MapPin size={24} /></div>
                 <div>
                    <h4>Location</h4>
                    <p>Bangalore, Karnataka 560064</p>
                 </div>
              </div>

              <div className="social-connect">
                 <p>Connect with me on social media:</p>
                 <div className="social-icons">
                    <a href="https://github.com/anurag-chakravarti" target="_blank" rel="noopener noreferrer"><Globe size={22} /></a>
                    <a href="mailto:anuragchakravarthy2001@gmail.com"><Mail size={22} /></a>
                    <a href="https://linkedin.com/in/anuragchakravarti/" target="_blank" rel="noopener noreferrer"><Phone size={22} /></a>
                 </div>
              </div>
           </div>

           <form className="contact-form glass" ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                 <label>Full Name</label>
                 <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                 <label>Email Address</label>
                 <input type="email" name="email" placeholder="example@gmail.com" required />
              </div>
              <div className="form-group">
                 <label>Subject</label>
                 <input type="text" name="title" placeholder="Project Inquiry" required />
              </div>
              <div className="form-group">
                 <label>Message</label>
                 <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              
              {isSent ? (
                <div className="success-message glass">
                   <CheckCircle color="var(--secondary-accent)" size={20} />
                   <span>Message sent! I'll get back to you soon.</span>
                </div>
              ) : (
                <button type="submit" className="glow-btn" disabled={isSending}>
                   {isSending ? (
                     <>Sending... <Loader2 className="animate-spin" size={20} /></>
                   ) : (
                     <>Send Message <Send size={20} /></>
                   )}
                </button>
              )}
           </form>
        </div>
      </div>

      <style>{`
        .contact {
          padding: var(--section-padding);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
          margin-top: 2rem;
        }

        .contact-info {
           display: flex;
           flex-direction: column;
           gap: 2rem;
        }

        .info-card {
           display: flex;
           align-items: center;
           gap: 1.5rem;
           padding: 1.5rem;
           transition: var(--transition-smooth);
        }

        .info-card:hover {
           transform: translateX(10px);
           border-color: var(--primary-accent);
        }

        .info-icon {
           width: 50px;
           height: 50px;
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
        }

        .primary-glow-box {
           background: var(--primary-accent);
           box-shadow: 0 0 15px var(--primary-glow);
        }

        .secondary-glow-box {
           background: var(--secondary-accent);
           box-shadow: 0 0 15px var(--secondary-glow);
        }

        .info-card h4 {
           font-family: var(--font-heading);
           margin-bottom: 0.25rem;
        }

        .info-card p {
           color: var(--text-secondary);
           font-size: 0.95rem;
        }

        .social-connect {
           margin-top: 1rem;
        }

        .social-connect p {
           color: var(--text-secondary);
           margin-bottom: 1rem;
           font-size: 1.1rem;
        }

        .social-icons {
           display: flex;
           gap: 1.5rem;
        }

        .social-icons a {
           color: var(--text-secondary);
           transition: var(--transition-smooth);
        }

        .social-icons a:hover {
           color: var(--primary-accent);
           transform: translateY(-5px);
        }

        .contact-form {
           padding: 3rem;
           display: flex;
           flex-direction: column;
           gap: 1.5rem;
        }

        .form-group {
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
        }

        .form-group label {
           font-weight: 500;
           font-size: 0.9rem;
           color: var(--text-secondary);
        }

        .form-group input, .form-group textarea {
           background: rgba(255, 255, 255, 0.03);
           border: 1px solid var(--border-color);
           padding: 1rem;
           border-radius: 0.75rem;
           color: white;
           font-family: inherit;
           transition: var(--transition-smooth);
        }

        .form-group input:focus, .form-group textarea:focus {
           outline: none;
           border-color: var(--primary-accent);
           background: rgba(255, 255, 255, 0.05);
           box-shadow: 0 0 0 4px var(--primary-glow);
        }

        .contact-form button {
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 0.75rem;
           margin-top: 1rem;
        }

        @media (max-width: 968px) {
           .contact-grid {
              grid-template-columns: 1fr;
              gap: 4rem;
           }
           .contact-form {
              padding: 2rem;
           }
        }
      `}</style>
    </section>
  );
};

export default Contact;
