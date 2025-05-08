import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  const [activeNav, setActiveNav] = useState('home');

  // Effect to handle section visibility and update activeNav state
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id); // Set active nav item when section is in view
          }
        });
      },
      { threshold: 0.5 } // Consider section visible when 50% is in view
    );

    sections.forEach((section) => observer.observe(section)); // Observe all sections

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <main >
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
