
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-mesh">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Values />
        <Services />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
