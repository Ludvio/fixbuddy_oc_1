import React from 'react';

const LocalContext: React.FC = () => {
  const localWorks = [
    {
      place: "Bibice, ul. Spacerowa",
      desc: "Remont poddasza w domu jednorodzinnym",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
    },
    {
      place: "Węgrzce, Osiedle Wojskowe",
      desc: "Gładzie i malowanie 120m2",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
    },
    {
      place: "Zielonki, ul. Krakowskie Przedmieście",
      desc: "Montaż paneli winylowych",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"
    },
    {
      place: "Michałowice",
      desc: "Wykończenie stanu deweloperskiego",
      img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
             <span className="font-mono text-[10px] text-blueprint font-bold uppercase tracking-[0.3em] bg-blue-50 px-2 py-1">Lokalność</span>
             <h2 className="mt-4 font-display text-4xl text-toolBlack uppercase tracking-tighter">Sąsiedzkie <br/><span className="text-blueprint">Realizacje.</span></h2>
           </div>
           <p className="text-stone-500 text-sm max-w-xs text-right">
             Nie jestem anonimową firmą z sieci. Codziennie mijamy się w lokalnych sklepach. Oto efekty moich prac w najbliższej okolicy:
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {localWorks.map((work, idx) => (
             <div key={idx} className="group relative aspect-[4/5] overflow-hidden bg-stone-100 cursor-default shadow-sm hover:shadow-xl transition-all duration-500">
                <img 
                  src={work.img} 
                  alt={`Remont FixBuddy w miejscowości ${work.place}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-toolBlack/90 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-safetyYellow rounded-full animate-pulse"></div>
                      <p className="font-mono text-[9px] text-safetyYellow uppercase font-bold tracking-widest">{work.place}</p>
                   </div>
                   <p className="font-display text-white text-lg leading-tight">{work.desc}</p>
                </div>
             </div>
           ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-stone-50 border border-stone-200 px-6 py-3 rounded-full text-xs text-stone-500 font-bold uppercase tracking-wider">
               <i data-lucide="truck" className="w-4 h-4 text-blueprint" aria-hidden="true"></i>
               Doradzam w wyborze i transporcie materiałów z okolicznych składów.
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocalContext;