import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "Pan Rafał ratował nam sufit po zalaniu w Węgrzcach. Był na miejscu w 15 minut od telefonu.",
      author: "Marek",
      location: "Węgrzce, ul. Warszawska",
      tag: "SZYBKOŚĆ"
    },
    {
      text: "Gładzie w nowym domu w Bibicach zrobione perfekcyjnie pod oświetlenie LED. Zero poprawek.",
      author: "Pani Joanna",
      location: "Bibice, Rynek",
      tag: "JAKOŚĆ"
    },
    {
      text: "Mieszkamy w Zielonkach, Rafał robił u nas podłogi. Bardzo kulturalny człowiek, co rzadkie w tej branży.",
      author: "Rodzina K.",
      location: "Zielonki",
      tag: "KULTURA"
    },
    {
      text: "Montaż kuchni w Michałowicach. Wszystko docięte idealnie, nawet przy krzywych ścianach dewelopera.",
      author: "Tomek",
      location: "Michałowice",
      tag: "PRECYZJA"
    },
    {
      text: "Super kontakt. Widać, że zależy mu na reputacji w okolicy. Polecam sąsiadom.",
      author: "Krzysztof",
      location: "Kraków, Górka Narodowa",
      tag: "ZAUFANIE"
    }
  ];

  // Duplicate for seamless loop
  const seamlessReviews = [...reviews, ...reviews];

  return (
    <div className="w-full bg-stone-100 border-y border-stone-200 py-12 overflow-hidden relative group">
      <div className="max-w-6xl mx-auto px-6 mb-8 flex items-center justify-between">
         <div className="font-mono text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Opinie z Gminy
         </div>
         <div className="hidden md:block font-mono text-[10px] text-blueprint font-bold uppercase tracking-widest">
            Punktualność • Czysty Montaż • Gwarancja
         </div>
      </div>
      
      <div className="flex w-[200%] animate-marquee group-hover:[animation-play-state:paused]">
        {seamlessReviews.map((review, idx) => (
          <div key={idx} className="w-[300px] md:w-[400px] flex-shrink-0 px-4 md:px-8 border-r border-stone-200">
             <div className="mb-4 text-blueprint">
                <i data-lucide="quote" className="w-6 h-6 fill-current opacity-20"></i>
             </div>
             <p className="text-stone-600 font-medium text-lg leading-relaxed mb-6 italic">
               "{review.text}"
             </p>
             <div className="flex items-start justify-between">
               <div>
                  <p className="font-display text-toolBlack uppercase font-bold">{review.author}</p>
                  <p className="font-mono text-[10px] text-stone-400 uppercase mt-1"><i data-lucide="map-pin" className="w-3 h-3 inline mr-1"></i>{review.location}</p>
               </div>
               <span className="font-mono text-[9px] border border-stone-300 text-stone-400 px-2 py-1 uppercase rounded-full">
                  {review.tag}
               </span>
             </div>
          </div>
        ))}
      </div>
      
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-stone-100 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-stone-100 to-transparent z-10"></div>
    </div>
  );
};

export default Reviews;