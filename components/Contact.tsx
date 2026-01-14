
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Netlify Forms integration
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Add Netlify-specific fields
    formData.append('form-name', 'contact');
    
    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
    .then(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      form.reset();
      // Reset po 5 sekundach
      setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((error) => {
      console.error('Wysyłanie nie powiodło się:', error);
      setIsSubmitting(false);
      alert('Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 521 340 1564');
    });
  };

  return (
    <div className="py-12">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6">
              Masz <span className="text-safetyYellow italic">fuchę?</span>
            </h2>
            <p className="text-stone-400 text-lg">
              Mieszkam blisko, więc wycenę możemy zrobić szybko. Zadzwoń, podjadę wieczorem lub w sobotę rano.
            </p>
          </div>

          <div className="space-y-6">
            <a href="tel:+485213401564" className="flex items-center gap-6 p-8 border border-white/10 hover:border-safetyYellow transition-all bg-white/5 group">
              <div className="w-12 h-12 bg-safetyYellow text-toolBlack flex items-center justify-center">
                <i data-lucide="phone"></i>
              </div>
              <div>
                <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Bezpośredni numer</p>
                <p className="text-2xl font-display uppercase tracking-tight text-white group-hover:text-safetyYellow transition-colors">521 340 1564</p>
              </div>
            </a>
            <div className="flex items-center gap-6 p-8 border border-white/10 bg-white/5">
              <div className="w-12 h-12 bg-white/10 text-white flex items-center justify-center">
                <i data-lucide="map-pin"></i>
              </div>
              <div>
                <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Baza / Dojazd</p>
                <p className="text-2xl font-display uppercase tracking-tight text-white">Bibice / Zielonki / KRK Północ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white text-toolBlack p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-safetyYellow"></div>
            
            {submitted ? (
              <div className="py-20 text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="check-circle" className="w-10 h-10"></i>
                </div>
                <h3 className="font-display text-3xl uppercase mb-2">Wiadomość wysłana!</h3>
                <p className="text-stone-500">Dziękuję. Oddzwonię, gdy tylko zejdę z drabiny.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl uppercase mb-8">Szybka wycena</h3>
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Honeypot field for spam protection */}
                  <input type="hidden" name="bot-field" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase text-stone-400 font-bold tracking-widest">Imię i Nazwisko</label>
                      <input 
                        id="contact-name" 
                        name="name"
                        required 
                        type="text" 
                        className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:border-blueprint outline-none font-medium transition-all" 
                        placeholder="Np. Jan Kowalski" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase text-stone-400 font-bold tracking-widest">Numer Telefonu</label>
                      <input 
                        name="phone"
                        required 
                        type="tel" 
                        className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:border-blueprint outline-none font-medium transition-all" 
                        placeholder="+48 ___ ___ ___" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-stone-400 font-bold tracking-widest">Gdzie mieszkasz?</label>
                    <select 
                      name="location"
                      className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:border-blueprint outline-none font-medium appearance-none cursor-pointer"
                    >
                      <option>Bibice</option>
                      <option>Zielonki / Węgrzce</option>
                      <option>Michałowice</option>
                      <option>Kraków Północ (Prądnik/Górka)</option>
                      <option>Inna lokalizacja</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-stone-400 font-bold tracking-widest">Co mamy zrobić?</label>
                    <textarea 
                      name="message"
                      required 
                      rows={3} 
                      className="w-full bg-stone-50 border-b-2 border-stone-200 p-4 focus:border-blueprint outline-none font-medium transition-all resize-none" 
                      placeholder="Np. Malowanie 2 pokoi, ul. Spacerowa..."
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-toolBlack text-white py-6 font-display text-xl uppercase tracking-widest hover:bg-blueprint transition-all shadow-[8px_8px_0px_#FACC15] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'WYSYŁANIE...' : 'ZAMÓW WYCENĘ'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
