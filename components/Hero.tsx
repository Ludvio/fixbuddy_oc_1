import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-toolBlack text-white rounded-full text-[10px] font-mono font-bold uppercase tracking-tighter">
            <span className="w-2 h-2 bg-safetyYellow rounded-full animate-pulse" aria-hidden="true"></span>
            Twoje Sąsiedztwo: Bibice • Zielonki • Kraków Północ
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter text-toolBlack uppercase">
            Twoje mieszkanie <br/>
            w <span className="text-blueprint">dobrych</span> rękach.
          </h1>

          <p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed">
            Nazywam się <span className="text-toolBlack font-bold underline decoration-safetyYellow decoration-4 underline-offset-4">Rafał Walczyński</span>. 
            Mieszkam w Bibicach. Nie tracę czasu na dojazdy przez całe miasto, dlatego u Ciebie jestem zawsze punktualnie. Solidne wykończenia bez krakowskiego "kombinowania".
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="tel:+485213401564" className="bg-safetyYellow text-toolBlack px-10 py-5 font-display text-xl uppercase font-bold hover:bg-toolBlack hover:text-white transition-all shadow-[8px_8px_0px_#3D3935] active:translate-y-1 active:shadow-none">
              Zadzwoń: 521 340 1564
            </a>
            <div className="flex items-center gap-3 bg-white border border-concrete px-4 py-2 rounded-lg">
               <div className="w-8 h-8 bg-green-50 text-green-600 flex items-center justify-center rounded-full">
                  <i data-lucide="map-pin" className="w-5 h-5" aria-hidden="true"></i>
               </div>
               <p className="font-mono text-[9px] text-stone-500 uppercase leading-tight font-bold">
                  Dojazd Gratis<br/><span className="text-toolBlack">Gmina Zielonki</span>
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-10 border-t border-concrete">
            <div className="flex gap-4">
              <div className="text-blueprint" aria-hidden="true"><i data-lucide="shield-check" className="w-6 h-6"></i></div>
              <div>
                <h4 className="font-bold text-sm uppercase">Czysta robota</h4>
                <p className="text-xs text-stone-500">Zabezpieczam podłogi. Sprzątam po sobie. Wiem, jak kurzy się lessowa ziemia w naszej okolicy.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blueprint" aria-hidden="true"><i data-lucide="users" className="w-6 h-6"></i></div>
              <div>
                <h4 className="font-bold text-sm uppercase">Etyka sąsiedzka</h4>
                <p className="text-xs text-stone-500">Dbam o ciszę. Nie blokuję uliczek dojazdowych swoim autem.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="blueprint-detail p-3 bg-white shadow-xl rotate-1">
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800" 
              alt="Realizacja FixBuddy - precyzyjne wykończenie wnętrz w Bibicach" 
              className="w-full grayscale brightness-110 contrast-90"
              loading="eager"
            />
            <div className="absolute -bottom-6 -right-6 bg-toolBlack text-white p-6 hidden lg:block shadow-lg">
              <p className="font-mono text-[10px] text-safetyYellow mb-1">STANDARD_BIBICE:</p>
              <p className="font-display text-lg leading-none uppercase">Rzemiosło<br/>Blisko Domu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;