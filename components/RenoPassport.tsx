import React from 'react';

const RenoPassport: React.FC = () => {
  return (
    <div className="w-full bg-[#f4f3ee] text-toolBlack py-24 overflow-hidden relative border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-8">
           <div className="inline-block px-3 py-1 bg-blueprint/10 text-blueprint font-mono text-[10px] font-bold uppercase tracking-widest">Standard powyżej normy</div>
           <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none">
              Daję Ci <br/><span className="text-blueprint">Paszport Remontu.</span>
           </h2>
           <p className="text-stone-600 text-lg leading-relaxed">
              Kiedy skończę pracę, nie zostawiam Cię z pustymi ścianami. Otrzymasz dokumentację z dokładną listą użytych materiałów.
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Farby', val: 'Marka, numery NCS/RAL, połysk' },
                { label: 'Chemia', val: 'Grunty, kleje, hydroizolacje' },
                { label: 'Instalacje', val: 'Zdjęcia przewodów przed tynkiem' },
                { label: 'Konserwacja', val: 'Instrukcja mycia podłóg i ścian' }
              ].map(item => (
                <div key={item.label} className="border-l-2 border-blueprint/20 pl-4 py-1">
                   <p className="text-toolBlack font-bold uppercase text-xs mb-1">{item.label}</p>
                   <p className="text-[12px] text-stone-500 font-medium leading-tight">{item.val}</p>
                </div>
              ))}
           </div>
           <p className="text-sm text-stone-500 italic pt-6 border-t border-stone-200">
              "Za 2 lata, gdy dziecko porysuje ścianę, będziesz wiedzieć dokładnie, jaką farbę dokupić. To Twój spokój."
           </p>
        </div>
        
        <div className="lg:w-1/3 relative transform rotate-1 hover:rotate-0 transition-all duration-700">
           {/* The "Tactile" Passport Card */}
           <div className="bg-[#fcfaf7] p-10 shadow-[0_10px_50px_rgba(0,0,0,0.1)] border border-stone-200 relative aspect-[3/4.2] flex flex-col before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/felt.png')] before:opacity-20 before:pointer-events-none">
              
              {/* Specialized Paper Feel (Subtle Embossing effect on card edges) */}
              <div className="absolute inset-0 border-[1px] border-white/50 m-1 pointer-events-none shadow-inner"></div>
              
              <div className="flex justify-between items-start border-b-[3px] border-toolBlack pb-8 mb-8">
                 <div>
                    <h4 className="font-display text-2xl uppercase tracking-tighter mix-blend-multiply opacity-90">FixBuddy</h4>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-stone-400 mt-1">Rafał Walczyński • Rzemiosło</p>
                 </div>
                 {/* The "Stamp" */}
                 <div className="w-14 h-14 border-4 border-blueprint/20 rounded-full flex items-center justify-center -rotate-12 bg-white shadow-sm ring-1 ring-blueprint/5">
                    <i data-lucide="award" className="w-7 h-7 text-blueprint opacity-60"></i>
                 </div>
              </div>

              <div className="space-y-8 flex-1">
                 <div className="space-y-1 group">
                    <p className="text-[8px] uppercase text-stone-400 font-bold tracking-widest">LOKALIZACJA PROJEKTU</p>
                    <p className="font-mono text-xs font-bold border-b border-stone-200/60 pb-2 text-stone-700 shadow-[inset_0_-1px_0_white]">BIBICE / KRAKÓW</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[8px] uppercase text-stone-400 font-bold tracking-widest">PROTOKÓŁ ZDAWCZY</p>
                    <p className="font-mono text-xs font-bold border-b border-stone-200/60 pb-2 text-stone-700 shadow-[inset_0_-1px_0_white]">SEZON 2024 / 2025</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[8px] uppercase text-stone-400 font-bold tracking-widest">STATUS GWARANCJI</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blueprint text-white text-[10px] font-bold font-mono tracking-tighter shadow-md">
                       <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
                       AKTYWNA (24M)
                    </div>
                 </div>
              </div>

              <div className="mt-auto pt-8 border-t border-stone-100 flex justify-between items-end">
                 <div className="text-[7px] uppercase font-black tracking-[0.3em] text-stone-300 leading-tight">
                    PHYSICAL_COPY<br/>TECH_DOC_v2.0
                 </div>
                 <div className="text-right">
                    <p className="font-mono text-[8px] text-stone-400 uppercase mb-2">Podpis rzemieślnika</p>
                    <div className="font-display text-lg italic text-toolBlack border-b border-toolBlack/20 px-2 opacity-60">
                       R. Walczyński
                    </div>
                 </div>
              </div>

              {/* Crease line to simulate folded paper */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-stone-100/50 -translate-y-1/2 pointer-events-none"></div>
           </div>
           
           {/* Realistic stacked paper shadows */}
           <div className="absolute top-1 left-1 w-full h-full bg-stone-200/40 -z-10 shadow-sm border border-stone-300/20"></div>
           <div className="absolute top-2 left-2 w-full h-full bg-stone-200/20 -z-20 shadow-sm border border-stone-300/10"></div>
        </div>
      </div>
    </div>
  );
};

export default RenoPassport;