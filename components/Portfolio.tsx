
import React, { useState, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  tag: string;
  description: string;
  details: string[];
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "p1",
      title: "Gładź w Węgrzcach",
      location: "Węgrzce, Os. Wojskowe",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800",
      tag: "LEVEL_5_FINISH",
      description: "Prace w domu jednorodzinnym. Wyzwanie polegało na wyprowadzeniu idealnych płaszczyzn na klatce schodowej.",
      details: ["Szlifowanie bezpyłowe Festool", "Wzmocnienie narożników taśmą Tuff-Tape", "Malowanie farbą ceramiczną"]
    },
    {
      id: "p2",
      title: "Podłogi Jodełka",
      location: "Bibice, ul. Spacerowa",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
      tag: "PERFECT_ALIGN",
      description: "Montaż paneli w układzie jodełki. Kluczowe było idealne połączenie podłogi z płytkami w aneksie kuchennym.",
      details: ["Podkład wyciszający kwarcowy", "Dylatacje korkowe", "Listwy MDF klejone"]
    },
    {
      id: "p3",
      title: "Metamorfoza Salonu",
      location: "Kraków, Górka Narodowa",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800",
      tag: "COLOR_MATCH",
      description: "Odświeżenie mieszkania deweloperskiego po 5 latach. Naprawa pęknięć skurczowych.",
      details: ["Akrylowanie pęknięć", "Gruntowanie głęboko penetrujące", "Farba Beckers"]
    }
  ];

  useEffect(() => {
    // @ts-ignore
    if (window.lucide) window.lucide.createIcons();
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="py-12">
      <div className="mb-16">
        <div className="font-mono text-[10px] text-blueprint font-bold mb-4 uppercase tracking-[0.3em]">Portfolio</div>
        <h2 className="font-display text-4xl md:text-5xl text-toolBlack uppercase tracking-tighter">Detale mają <span className="text-blueprint">znaczenie.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((work) => (
          <div 
            key={work.id} 
            onClick={() => setSelectedProject(work)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-stone-200">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-blueprint/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[9px] bg-toolBlack text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                KLIKNIJ PO DETALE
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] bg-safetyYellow text-toolBlack px-2 py-1">
                {work.tag}
              </div>
            </div>
            
            <div className="mt-6 space-y-1">
              <h3 className="font-display text-xl text-toolBlack uppercase tracking-tight group-hover:text-blueprint transition-colors">{work.title}</h3>
              <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">{work.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal (Warstwa Głębi) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="absolute inset-0 bg-toolBlack/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row shadow-2xl rounded-sm">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white text-toolBlack flex items-center justify-center z-20 hover:bg-safetyYellow transition-colors"
            >
              <i data-lucide="x" className="w-6 h-6"></i>
            </button>
            
            <div className="md:w-1/2 h-[300px] md:h-auto bg-stone-100">
              <img src={selectedProject.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt={selectedProject.title} />
            </div>
            
            <div className="md:w-1/2 p-8 md:p-16 space-y-8">
              <div>
                <p className="font-mono text-[10px] text-blueprint font-bold uppercase tracking-widest mb-2">{selectedProject.location}</p>
                <h3 className="font-display text-4xl md:text-5xl uppercase text-toolBlack leading-none">{selectedProject.title}</h3>
              </div>
              
              <p className="text-stone-600 text-lg leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="space-y-4">
                <p className="font-mono text-[10px] text-stone-400 font-bold uppercase border-b border-stone-100 pb-2">Specyfikacja Techniczna:</p>
                <ul className="space-y-3">
                  {selectedProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-stone-700">
                      <span className="w-1.5 h-1.5 bg-safetyYellow flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 flex gap-4">
                <a href="tel:+485213401564" className="flex-1 bg-toolBlack text-white py-4 text-center font-display text-sm uppercase tracking-widest hover:bg-blueprint transition-colors">
                  ZAPYTAJ O PODOBNY PROJEKT
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 border-t border-concrete pt-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
            <p className="text-stone-500 max-w-lg leading-relaxed italic">
              "Jakość pamięta się dłużej niż cenę. W Bibicach i okolicach pracuję od lat, dbając o to, by każda realizacja była moją wizytówką."
            </p>
            <p className="mt-4 font-display text-toolBlack uppercase tracking-widest text-sm">— Rafał Walczyński</p>
        </div>
        <div className="flex gap-4">
           <a href="https://www.gowork.pl/rafal-walczynski-fixbuddy,27131162" target="_blank" className="w-16 h-16 border border-concrete flex items-center justify-center text-stone-300 hover:text-safetyYellow hover:border-safetyYellow transition-all">
              <i data-lucide="external-link" className="w-6 h-6"></i>
           </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
