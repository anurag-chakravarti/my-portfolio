import Header from './components/Header';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer glass-nav">
        <div className="container footer-container">
          <p className="copyright">© 2026 Anurag. Built with 💜 and React.</p>
          <div className="footer-links">
             <a href="#home">Back to top</a>
          </div>
        </div>
      </footer>

      <style>{`
        .layout {
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }

        .footer {
          margin-top: 5rem;
          padding: 3rem 0;
          text-align: center;
        }

        .footer-container {
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding: 0 1.5rem;
        }

        .copyright {
           color: var(--text-secondary);
           font-size: 0.9rem;
        }

        .footer-links a {
           color: var(--text-secondary);
           text-decoration: none;
           font-size: 0.9rem;
           font-weight: 500;
           transition: var(--transition-smooth);
        }

        .footer-links a:hover {
           color: var(--primary-accent);
        }

        @media (max-width: 640px) {
           .footer-container {
              flex-direction: column;
              gap: 1.5rem;
           }
        }
      `}</style>
    </div>
  );
}

export default App;
