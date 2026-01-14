import React, { useState } from 'react';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleDetails = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(expanded === id ? null : id);
  };

  const getTechSpecs = (id: string) => {
    switch(id) {
      case 'paint': return ["Gruntowanie systemowe", "Naprawa pęknięć siatką", "Dwie warstwy farby premium", "Zabezpieczenie narożników"];
      case 'floors': return ["Poziomowanie podłoża", "Mata wyciszająca", "Listwy montowane na klipsy/klej", "Akrylowanie przy ościeżnicach"];
      case 'assembly': return ["Poziomowanie szafek", "Wycięcia pod media", "Montaż AGD do zabudowy", "Regulacja frontów"];
      default: return ["Czyste narzędzia", "Punktualność", "Płynna komunikacja"];
    }
  };

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <div className="font-mono text-[10px] text-blueprint font-bold mb-4 uppercase tracking-[0.3em]">Specjalizacje</div>
          <h2 className="font-display text-4xl md:text-6xl text-toolBlack uppercase tracking-tighter">Konkretnie <br/> i <span className="text-blueprint">na czas.</span></h2>
        </div>
        <div className="font-mono text-[11px] text-stone-400 text-right uppercase leading-loose hidden lg:block">
          Rzemiosło bez drogi na skróty.<br/>
          Czystość w standardzie.<br/>
          Uczciwa wycena.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete border border-concrete">
        {services.map((service, idx) => (
          <div 
            key={service.id} 
            className="bg-white p-10 group hover:bg-homeWarm transition-all relative overflow-hidden flex flex-col min-h-[320px]"
          >
            <div className="relative z-10 flex-1">
              <div className="w-12 h-12 flex items-center justify-center bg-stone-100 text-toolBlack group-hover:bg-safetyYellow transition-colors mb-8">
                {service.icon === 'paint-bucket' && <i data-lucide="paint-bucket" className="w-6 h-6"></i>}
                {service.icon === 'scroll' && <i data-lucide="scroll" className="w-6 h-6"></i>}
                {service.icon === 'layers' && <i data-lucide="layers" className="w-6 h-6"></i>}
                {service.icon === 'package' && <i data-lucide="package" className="w-6 h-6"></i>}
                {service.icon === 'wrench' && <i data-lucide="wrench" className="w-6 h-6"></i>}
              </div>
              <h3 className="font-display text-2xl mb-4 uppercase tracking-tight text-toolBlack">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              
              {expanded === service.id && (
                <div className="mb-8 animate-fade-in bg-white p-4 border border-blueprint/10">
                   <p className="font-mono text-[9px] text-blueprint font-bold uppercase mb-3">Zakres prac:</p>
                   <ul className="space-y-2">
                      {getTechSpecs(service.id).map((spec, i) => (
                        <li key={i} className="text-[11px] font-medium text-stone-500 flex items-center gap-2">
                          <span className="w-1 h-1 bg-blueprint rounded-full"></span> {spec}
                        </li>
                      ))}
                   </ul>
                </div>
              )}

              <div className="flex items-center gap-6">
                <button 
                  onClick={(e) => toggleDetails(service.id, e)}
                  className="text-[10px] font-bold text-blueprint border-b-2 border-blueprint/10 pb-0.5 hover:border-blueprint transition-all uppercase tracking-widest"
                >
                  {expanded === service.id ? 'ZAMKNIJ' : 'ZOBACZ DETALE'}
                </button>
              </div>
            </div>
            <span className="absolute bottom-4 right-4 font-mono text-[40px] text-stone-100 font-bold -z-0">0{idx + 1}</span>
          </div>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-concrete border border-concrete overflow-hidden shadow-sm">
        <div className="bg-toolBlack text-white p-12 flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-safetyYellow border border-white/10">
            <i data-lucide="sparkles" className="w-8 h-8"></i>
          </div>
          <div>
            <h4 className="font-display text-xl uppercase mb-2">Zero Bałaganu</h4>
            <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">Odkurzacz przemysłowy i folie w standardzie.</p>
          </div>
        </div>
        <div className="bg-toolBlack text-white p-12 flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-safetyYellow border border-white/10">
            <i data-lucide="shield-check" className="w-8 h-8"></i>
          </div>
          <div>
            <h4 className="font-display text-xl uppercase mb-2">Gwarancja Pisemna</h4>
            <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">Wystawiam faktury i daję 2 lata rękojmi.</p>
          </div>
        </div>
        <div className="bg-toolBlack text-white p-12 flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-safetyYellow border border-white/10">
            <i data-lucide="truck" className="w-8 h-8"></i>
          </div>
          <div>
            <h4 className="font-display text-xl uppercase mb-2">Logistyka</h4>
            <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">Sam organizuję transport materiałów gabarytowych.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;