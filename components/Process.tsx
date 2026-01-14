
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      phase: "KONTAKT & WIZJA",
      title: "Ustalenie Faktów",
      desc: "Dzwonisz, opisujesz potrzeby. Przyjeżdżam do Ciebie (Bibice i okolice), oceniam stan ścian i podłóg. To moment na szczerość co do budżetu.",
      icon: "phone-call"
    },
    {
      id: "02",
      phase: "LOGISTYKA & MATERIAŁY",
      title: "Gwarancja Ceny",
      desc: "Otrzymujesz kosztorys. Jeśli go akceptujesz, cena nie wzrośnie. Ustalamy listę materiałów – znam lokalne składy, pomogę w zakupach.",
      icon: "calculator"
    },
    {
      id: "03",
      phase: "REALIZACJA (OPERACJA)",
      title: "Czysty Plac Boju",
      desc: "Pracuję systemowo. Najpierw zabezpieczenie (folie, tektury), potem praca właściwa. Każdego dnia po sobie sprzątam odkurzaczem przemysłowym.",
      icon: "hammer"
    },
    {
      id: "04",
      phase: "ODBIÓR & PASZPORT",
      title: "Przekazanie Kluczy",
      desc: "Sprawdzamy wszystko pod światło. Zdejmuję zabezpieczenia. Dostajesz Paszport Remontu z kodami farb. Dom jest gotowy do zamieszkania.",
      icon: "key"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    const contactInput = document.getElementById('contact-name');
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Lekkie opóźnienie, żeby fokus nie przerwał animacji przewijania
      setTimeout(() => {
        contactInput?.focus();
      }, 800);
    }
  };

  return (
    <div className="py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blueprint/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-safetyYellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
            <span className="font-mono text-[10px] text-blueprint font-bold uppercase tracking-[0.4em] mb-4">Workflow_Protocol</span>
            <h2 className="font-display text-5xl md:text-6xl text-toolBlack uppercase tracking-tighter leading-none mb-6">
                Droga do <br/><span className="text-blueprint">Twojego Spokoju.</span>
            </h2>
            <div className="w-20 h-1 bg-safetyYellow"></div>
        </div>

        <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-[120px] left-0 w-full h-0.5 bg-stone-100 z-0">
               <div className="absolute top-0 left-0 h-full bg-blueprint w-1/3 animate-pulse opacity-20"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col group">
                        <div className="flex items-center gap-4 mb-8 lg:flex-col lg:items-start lg:gap-6">
                           <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white border-2 border-stone-200 text-stone-300 rounded-2xl flex items-center justify-center group-hover:border-blueprint group-hover:text-blueprint transition-all shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 duration-500 bg-white relative">
                               <div className="absolute -top-3 -left-3 font-mono text-xs font-bold text-blueprint bg-stone-50 px-2 py-1 border border-stone-100">{step.id}</div>
                               {step.icon === 'phone-call' && <i data-lucide="phone-call" className="w-8 h-8"></i>}
                               {step.icon === 'calculator' && <i data-lucide="calculator" className="w-8 h-8"></i>}
                               {step.icon === 'hammer' && <i data-lucide="hammer" className="w-8 h-8"></i>}
                               {step.icon === 'key' && <i data-lucide="key" className="w-8 h-8"></i>}
                           </div>
                           <div className="flex flex-col">
                              <span className="font-mono text-[10px] font-bold text-blueprint uppercase tracking-widest">{step.phase}</span>
                              <h3 className="font-display text-xl uppercase text-toolBlack lg:mt-2">{step.title}</h3>
                           </div>
                        </div>
                        
                        <div className="pl-20 lg:pl-0">
                           <p className="text-stone-500 text-sm leading-relaxed border-l-2 lg:border-l-0 lg:border-t lg:pt-8 border-stone-100 pl-6 lg:pl-0 group-hover:border-blueprint transition-colors">
                               {step.desc}
                           </p>
                           <div className="mt-6 flex items-center gap-2 lg:hidden">
                              <span className="w-2 h-2 bg-stone-200 rounded-full"></span>
                              <span className="w-2 h-2 bg-stone-200 rounded-full"></span>
                              <span className="w-10 h-0.5 bg-stone-100"></span>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-32 p-10 bg-homeWarm border border-concrete rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-inner">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-toolBlack text-safetyYellow rounded-full flex items-center justify-center flex-shrink-0 animate-bounce">
                 <i data-lucide="info" className="w-8 h-8"></i>
              </div>
              <div>
                 <p className="font-display text-xl uppercase text-toolBlack">Chcesz zobaczyć postępy na żywo?</p>
                 <p className="text-sm text-stone-500">Przy każdym zleceniu oferuję codzienną fotorelację na WhatsApp.</p>
              </div>
           </div>
           <button 
             onClick={scrollToContact}
             className="bg-toolBlack text-white px-8 py-4 font-display text-sm uppercase tracking-widest hover:bg-blueprint transition-all whitespace-nowrap shadow-[4px_4px_0px_#FACC15] active:translate-y-1 active:shadow-none"
           >
              ZACZNIJMY PROJEKT
           </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
