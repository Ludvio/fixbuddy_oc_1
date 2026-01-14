
import React, { useState, useEffect, useCallback } from 'react';
import { Section } from '../types';

interface HeaderProps {
  activeSection: Section;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  const navItems = [
    { label: 'Start', value: Section.HERO },
    { label: 'Usługi', value: Section.SERVICES },
    { label: 'O mnie', value: Section.ABOUT },
    { label: 'Kontakt', value: Section.CONTACT },
  ];

  // Inicjalizacja klucza tylko raz przy starcie
  useEffect(() => {
    const initKey = async () => {
      try {
        // @ts-ignore
        if (window.aistudio?.hasSelectedApiKey) {
          // @ts-ignore
          const selected = await window.aistudio.hasSelectedApiKey();
          setHasKey(selected);
        }
      } catch (e) {
        // Ciche pominięcie w środowisku bez dostępu
      }
    };
    initKey();
  }, []);

  // Odświeżanie ikon Lucide bez przeładowywania całej logiki
  useEffect(() => {
    // @ts-ignore
    if (window.lucide) window.lucide.createIcons();
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleSelectKey = async (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (window.aistudio?.openSelectKey) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-[100] border-b border-stone-200 h-20">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <button 
          onClick={(e) => handleNavClick(e, Section.HERO)} 
          className="flex items-center gap-4 z-[110] transition-opacity hover:opacity-80"
        >
          <div className="w-10 h-10 bg-toolBlack text-safetyYellow flex items-center justify-center font-display text-xl font-bold shadow-sm">FB</div>
          <div className="flex flex-col text-left">
            <span className="font-display text-xl text-toolBlack tracking-tighter leading-none">FIXBUDDY</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 font-bold">Rafał Walczyński</span>
          </div>
        </button>
        
        <ul className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <li key={item.value}>
              <button
                onClick={(e) => handleNavClick(e, item.value)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${
                  activeSection === item.value ? 'text-blueprint' : 'text-stone-400 hover:text-toolBlack'
                }`}
              >
                {item.label}
                {activeSection === item.value && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-safetyYellow animate-fade-in"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleSelectKey}
            className={`p-2 rounded-full transition-all ${hasKey ? 'text-green-500 bg-green-50' : 'text-stone-300 hover:text-safetyYellow bg-stone-50'}`}
          >
            <i data-lucide="key" className="w-4 h-4"></i>
          </button>
          <a 
            href="tel:+485213401564"
            className="bg-toolBlack text-white px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-blueprint transition-all shadow-[4px_4px_0px_#FACC15] active:translate-y-0.5"
          >
            ZADZWOŃ
          </a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-[110] p-3 text-toolBlack hover:bg-stone-50 rounded-full transition-all"
        >
          <i data-lucide={isMenuOpen ? "x" : "menu"} className="w-6 h-6"></i>
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-[100] flex flex-col pt-32 px-8 md:hidden transition-all duration-300 ${
        isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
      }`}>
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.value}>
              <button
                onClick={(e) => handleNavClick(e, item.value)}
                className={`text-4xl font-display uppercase tracking-tighter block text-left ${
                  activeSection === item.value ? 'text-blueprint' : 'text-toolBlack'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-auto pb-12 space-y-6">
          <button onClick={handleSelectKey} className="flex items-center justify-between w-full p-4 bg-stone-50 rounded-xl border border-stone-100">
             <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">Wyszukiwanie AI (Search)</span>
             <span className={`text-xs font-bold ${hasKey ? 'text-green-600' : 'text-blueprint'}`}>
                {hasKey ? 'POŁĄCZONO' : 'USTAW KLUCZ'}
             </span>
          </button>
          <a href="tel:+485213401564" className="block w-full bg-toolBlack text-white text-center py-5 font-display text-2xl uppercase tracking-widest shadow-[6px_6px_0px_#FACC15]">
            Zadzwoń Teraz
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
