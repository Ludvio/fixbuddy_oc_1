import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-20 py-12">
      <div className="flex-1 relative order-2 lg:order-1">
        <div className="safety-border p-2 bg-white inline-block border-b-4 border-safetyYellow">
          <img 
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800" 
            alt="Rafał Walczyński przy pracy rzemieślniczej" 
            className="w-full grayscale brightness-110 contrast-100"
            loading="lazy"
          />
        </div>
        <div className="absolute top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-blueprint/30 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute bottom-10 -right-10 w-20 h-20 border-r-2 border-b-2 border-blueprint/30 hidden lg:block" aria-hidden="true"></div>
      </div>

      <div className="flex-1 order-1 lg:order-2 space-y-8">
        <div className="font-mono text-[10px] text-blueprint font-bold uppercase tracking-[0.3em]">Poznajmy się</div>
        <h2 className="font-display text-5xl md:text-6xl text-toolBlack uppercase tracking-tighter leading-none">
          Fachowiec, <br/>
          <span className="text-blueprint">z Twojej ulicy.</span>
        </h2>
        
        <div className="text-stone-600 space-y-6 text-lg leading-relaxed font-medium">
          <p>
            Dzień dobry. Nazywam się Rafał i mam 45 lat. Mieszkam w Bibicach. FixBuddy to moja jednoosobowa firma. Co to oznacza dla Ciebie? Że rozmawiasz z właścicielem i wykonawcą w jednej osobie.
          </p>
          <p>
            Dlaczego Bibice i okolice? Bo szanuję Twój i swój czas. Nie stoję w korkach na Alejach, więc u Ciebie jestem zawsze punktualnie. Znam też specyfikę lokalnego budownictwa i tutejsze składy budowlane.
          </p>
        </div>

        <div className="flex gap-12 pt-8 border-t border-concrete">
          <div>
            <p className="text-4xl font-display text-toolBlack">20Y</p>
            <p className="font-mono text-[10px] text-stone-400 uppercase font-bold tracking-widest">Doświadczenia</p>
          </div>
          <div>
            <p className="text-4xl font-display text-blueprint">100%</p>
            <p className="font-mono text-[10px] text-stone-400 uppercase font-bold tracking-widest">Osobiste wykonanie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;