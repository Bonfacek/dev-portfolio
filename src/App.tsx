// App.tsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/footer'; 
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-50px 0px -50px 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black dark:bg-black-900">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />      
    </div>
  );
}

export default App;