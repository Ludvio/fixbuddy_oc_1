
import React, { useState } from 'react';

const TimeCalculator: React.FC = () => {
  const [area, setArea] = useState(25);
  const [type, setType] = useState<'paint' | 'floors' | 'details'>('paint');

  const calculateTime = () => {
    let baseDays = 1;
    if (type === 'paint') baseDays = Math.ceil(area / 15);
    if (type === 'floors') baseDays = Math.ceil(area / 25);
    if (type === 'details') baseDays = Math.ceil(area / 10) + 1;
    return baseDays;
  };

  const days = calculateTime();

  return (
    <div className="w-full bg-homeWarm border-y border-concrete py-24">
       <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-2xl border border-stone-100 rounded-3xl overflow-hidden flex flex-col md:flex-row">
             <div className="p-8 md:p-12 flex-1 space-y-10">
                <div>
                   <h3 className="font-display text-2xl uppercase text-toolBlack mb-2">Szanuję Twój Czas</h3>
                   <p className="text-stone-500 text-sm">Sprawdź orientacyjnie, ile dni będę potrzebował na Twoje zlecenie.</p>
                </div>

                <div className="space-y-8">
                    <div>
                        <div className="flex justify-between mb-4 items-end">
                            <label className="font-mono text-[10px] uppercase font-bold text-stone-400 tracking-widest">Powierzchnia</label>
                            <span className="font-display text-2xl text-blueprint">{area} m²</span>
                        </div>
                        <input 
                            type="range" min="5" max="100" value={area} 
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-blueprint"
                        />
                    </div>

                    <div>
                        <label className="font-mono text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-4 block">Rodzaj Pracy</label>
                        <div className="grid grid-cols-3 gap-3">
                            {(['paint', 'floors', 'details'] as const).map((t) => (
                              <button 
                                key={t}
                                onClick={() => setType(t)}
                                className={`py-4 px-2 text-[10px] md:text-xs font-bold uppercase tracking-widest border-2 rounded-xl transition-all active:scale-95 ${
                                  type === t 
                                    ? 'bg-toolBlack text-white border-toolBlack shadow-lg' 
                                    : 'bg-white text-stone-500 border-stone-100 hover:border-stone-300'
                                }`}
                              >
                                {t === 'paint' ? 'Malowanie' : t === 'floors' ? 'Podłogi' : 'Detale'}
                              </button>
                            ))}
                        </div>
                    </div>
                </div>
             </div>

             <div className="bg-toolBlack text-white p-8 md:p-12 md:w-[340px] flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blueprint/5 z-0"></div>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-4 relative z-10">Estymowany Czas</p>
                <div className="relative z-10 flex items-baseline gap-2">
                    <span className="font-display text-9xl leading-none text-safetyYellow">{days}</span>
                    <span className="text-lg font-bold text-stone-400">DNI</span>
                </div>
                <p className="mt-8 text-[11px] text-stone-400 leading-relaxed italic relative z-10 border-t border-white/10 pt-6">
                    "Dokładny termin potwierdzę po wizycie, ale na 90% zmieścimy się w tym czasie."
                </p>
             </div>
          </div>
       </div>
    </div>
  );
};

export default TimeCalculator;
