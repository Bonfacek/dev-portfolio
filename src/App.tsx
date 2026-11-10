// App.tsx
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Testimonials from './components/Testmonials';
import Contact from './components/Contact';
import Footer from './components/footer';
import Payrates from './rates/payrates';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState<'portfolio' | 'rates'>('portfolio');

  useEffect(() => {
    // Only observe sections while the portfolio view is showing
    if (currentView !== 'portfolio') return;

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
  }, [currentView]);

  if (currentView === 'rates') {
    return <Payrates onBack={() => setCurrentView('portfolio')} />;
  }

  return (
    <div className="bg-black dark:bg-black-900">
      <Header activeSection={activeSection} />
      <Hero onViewRates={() => setCurrentView('rates')} />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer onViewRates={() => setCurrentView('rates')} />
    </div>
  );
}

export default App;