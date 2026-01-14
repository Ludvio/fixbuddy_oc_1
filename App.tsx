import React, { useState, useEffect } from 'react';
import { SERVICES } from './constants';
import { Section } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Process from './components/Process';
import TimeCalculator from './components/TimeCalculator';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import PreparationGuide from './components/PreparationGuide';
import RenoPassport from './components/RenoPassport';
import LocalContext from './components/LocalContext';
import ChatBuddy from './components/ChatBuddy';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header activeSection={activeSection} />

      <main className="w-full">
        <section id={Section.HERO} className="max-w-6xl mx-auto px-6 pt-32 pb-12">
          <Hero />
        </section>

        <section className="w-full">
           <Reviews />
        </section>
        
        {/* Galeria sąsiedzka jako pierwsza po wstępie */}
        <section className="w-full">
           <LocalContext />
        </section>

        <section id={Section.SERVICES} className="w-full bg-stone-50 py-24 border-t border-concrete">
          <div className="max-w-6xl mx-auto px-6">
            <Services services={SERVICES} />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24">
          <Portfolio />
        </section>

        <section className="w-full bg-white border-t border-concrete">
           <Process />
        </section>

        <section className="w-full">
           <TimeCalculator />
        </section>
        
        <section className="w-full">
           <PreparationGuide />
        </section>

        <section className="w-full">
           <RenoPassport />
        </section>

        <section id={Section.ABOUT} className="w-full bg-homeWarm border-y border-concrete py-24">
          <div className="max-w-6xl mx-auto px-6">
            <About />
          </div>
        </section>

        <section id={Section.CONTACT} className="w-full bg-toolBlack text-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <Contact />
          </div>
        </section>
      </main>

      <footer className="w-full bg-toolBlack text-white/40 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-mono uppercase tracking-widest">
          <p>© 2024 Rafał Walczyński | FixBuddy | NIP: 5213401564</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2 text-stone-400"><i data-lucide="map-pin" className="w-3 h-3 text-safetyYellow"></i> Bibice / Kraków</span>
            <a href="https://www.gowork.pl/rafal-walczynski-fixbuddy,27131162" target="_blank" className="hover:text-white transition-colors underline decoration-safetyYellow underline-offset-4">PROFIL GOWORK</a>
          </div>
        </div>
      </footer>

      <ChatBuddy />
    </div>
  );
};

export default App;