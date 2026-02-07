import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Logs from './components/Logs';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<'en' | 'tr'>((i18n.language || 'tr') as 'en' | 'tr');
  const [activeSection, setActiveSection] = useState('home');

  const handleLanguageChange = (newLang: 'en' | 'tr') => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const sectionIds = ['home', 'specs', 'projects', 'experience', 'logs', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.3;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Elements managed via index.html CSS classes, but we add structure here */}
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>

      <SEOHead />
      <Header lang={lang} onLanguageChange={handleLanguageChange} activeSection={activeSection} />
      
      <main className="pt-24 pb-12">
        <Hero />
        <Dashboard />
        <Projects />
        <Experience />
        <Logs />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;