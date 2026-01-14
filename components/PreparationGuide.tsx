import React, { useState } from 'react';

const PreparationGuide: React.FC = () => {
  const [completed, setCompleted] = useState<number[]>([]);

  const steps = [
    { id: 1, title: "Drobne przedmioty", desc: "Jeśli możesz, zdejmij obrazy i pamiątki. To przyspieszy moją pracę, a Ty będziesz spokojniejszy." },
    { id: 2, title: "Dostęp do prądu", desc: "Potrzebuję jednego sprawnego gniazdka do podłączenia oświetlenia i szlifierki." },
    { id: 3, title: "Szafy i komody", desc: "Wystarczy, że usuniesz rzeczy z wierzchu. Ciężkie meble przesunę sam i zabezpieczę folią." },
    { id: 4, title: "Klucze", desc: "Możemy umówić się na przekazanie kluczy lub kod do domofonu. Jak Ci wygodniej." }
  ];

  const toggle = (id: number) => {
    setCompleted(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="bg-white border-y border-concrete py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="font-mono text-[10px] text-blueprint font-bold mb-4 uppercase tracking-[0.3em]">Współpraca</div>
            <h2 className="font-display text-4xl md:text-5xl text-toolBlack uppercase tracking-tighter mb-8 leading-none">
              Jak przygotować <br/><span className="text-blueprint">Mieszkanie?</span>
            </h2>
            <p className="text-stone-500 mb-10 text-lg">
              Szanuję Twój dom. Aby remont przebiegł sprawnie i czysto, oto kilka wskazówek, które nam pomogą. Nie musisz robić wszystkiego – resztę ogarnę ja.
            </p>
            <div className="space-y-4">
              {steps.map(step => (
                <button 
                  key={step.id}
                  onClick={() => toggle(step.id)}
                  aria-pressed={completed.includes(step.id)}
                  className={`w-full text-left p-6 border transition-all flex gap-5 items-center group ${
                    completed.includes(step.id) ? 'bg-stone-50 border-concrete opacity-60' : 'bg-white border-stone-200 hover:border-blueprint'
                  }`}
                >
                  <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center font-mono text-sm border ${
                    completed.includes(step.id) ? 'bg-blueprint text-white border-blueprint' : 'border-stone-200 text-stone-400 group-hover:border-blueprint'
                  }`} aria-hidden="true">
                    {completed.includes(step.id) ? '✓' : step.id}
                  </div>
                  <div>
                    <p className={`font-bold uppercase text-sm ${completed.includes(step.id) ? 'line-through text-stone-400' : 'text-toolBlack'}`}>{step.title}</p>
                    <p className="text-xs text-stone-400 mt-1">{step.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-concrete overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800" 
                  className="w-full h-full object-cover" 
                  alt="Zabezpieczone mieszkanie przygotowane do remontu" 
                  loading="lazy"
                />
                <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" aria-hidden="true"></div>
             </div>
             <div className="absolute -bottom-10 -right-10 bg-safetyYellow p-10 text-toolBlack shadow-2xl hidden md:block">
                <p className="font-display text-3xl uppercase leading-none mb-2">Bez Stresu</p>
                <p className="font-mono text-[10px] uppercase font-bold tracking-widest">Pomogę Ci w zabezpieczeniu</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationGuide;