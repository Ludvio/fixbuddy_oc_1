import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

interface ChatBuddyMessage extends ChatMessage {
  groundingLinks?: { title: string; uri: string; type: 'web' | 'maps' }[];
}

const ChatBuddy: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatBuddyMessage[]>([
    { role: 'model', text: 'Cześć! Tu Rafał. Masz usterkę w Bibicach lub okolicy? Wyślij mi zdjęcie lub opisz problem, a postaram się wstępnie ocenić co trzeba zrobić.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    // @ts-ignore
    if (window.lucide) window.lucide.createIcons();
  }, [messages, isOpen, isLoading, selectedImage]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return;
    
    const userMsg = input.trim();
    const currentImage = selectedImage;
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    setInput('');
    setSelectedImage(null);
    setMessages(prev => [...prev, { role: 'user', text: userMsg || "[Zdjęcie usterki]" }]);
    setIsLoading(true);

    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'model', text: "Brak połączenia z AI. Proszę o kontakt telefoniczny pod numerem 521 340 1564." }]);
      setIsLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const parts: any[] = [];
      
      if (currentImage) {
        parts.push({ inlineData: { mimeType: "image/jpeg", data: currentImage.split(',')[1] } });
      }
      parts.push({ text: userMsg || "Przeanalizuj to zdjęcie i oceń problem jako fachowiec od remontów." });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts }],
        config: { 
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ googleSearch: {} }, { googleMaps: {} }]
        }
      });

      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const links: any[] = [];
      
      chunks.forEach((c: any) => {
        if (c.web) links.push({ title: c.web.title, uri: c.web.uri, type: 'web' });
        if (c.maps) links.push({ title: c.maps.title || "Zobacz lokalizację", uri: c.maps.uri, type: 'maps' });
      });

      setMessages(prev => [...prev, { 
        role: 'model', 
        text: response.text || "Trochę mnie przycięło. Spróbuj jeszcze raz lub zadzwoń: 521 340 1564",
        groundingLinks: links.length > 0 ? links : undefined
      }]);
    } catch (error: any) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Wystąpił błąd połączenia. Najlepiej zadzwoń do mnie bezpośrednio: 521 340 1564." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[340px] md:w-[420px] h-[600px] bg-white border border-stone-200 shadow-2xl flex flex-col mb-4 rounded-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-toolBlack text-white p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-safetyYellow rounded-lg flex items-center justify-center text-toolBlack shadow-inner">
                <i data-lucide="hammer" className="w-5 h-5"></i>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold leading-none">Rafał | FixBuddy</p>
                <p className="text-[10px] text-stone-400 font-mono mt-1 uppercase tracking-widest">Bibice / Zielonki</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <i data-lucide="x" className="w-5 h-5"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' ? 'bg-blueprint text-white rounded-tr-none' : 'bg-white text-stone-700 border border-stone-100 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
                {msg.groundingLinks && (
                  <div className="mt-2 flex flex-col gap-1 w-[85%]">
                    {msg.groundingLinks.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.uri} 
                        target="_blank" 
                        rel="noopener" 
                        className={`text-[10px] p-2 rounded-lg truncate flex items-center gap-2 transition-colors ${
                          link.type === 'maps' ? 'bg-safetyYellow/10 text-toolBlack border border-safetyYellow/20 hover:bg-safetyYellow/20' : 'bg-blue-50 text-blueprint hover:bg-blue-100'
                        }`}
                      >
                        <i data-lucide={link.type === 'maps' ? "map" : "external-link"} className="w-3 h-3 flex-shrink-0"></i>
                        <span className="truncate font-bold uppercase">{link.title || "Link zewnętrzny"}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 p-4 bg-white border border-stone-100 rounded-xl rounded-tl-none w-20">
                <div className="w-1.5 h-1.5 bg-blueprint rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-blueprint rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-blueprint rounded-full animate-bounce"></div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-stone-100">
            {selectedImage && (
              <div className="mb-3 relative inline-block">
                <img src={selectedImage} className="w-20 h-20 object-cover rounded-lg border-2 border-safetyYellow" />
                <button onClick={() => setSelectedImage(null)} className="absolute -top-2 -right-2 bg-toolBlack text-white rounded-full p-1"><i data-lucide="x" className="w-3 h-3"></i></button>
              </div>
            )}
            <div className="flex items-center gap-2">
              <button onClick={() => fileInputRef.current?.click()} className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center hover:bg-stone-200 transition-all">
                <i data-lucide="camera" className="w-6 h-6 text-stone-400"></i>
                <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={handleImageSelect} />
              </button>
              <div className="flex-1 relative">
                <input 
                  type="text" value={input} 
                  onChange={e => setInput(e.target.value)} 
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Gdzie kupię farbę? Co to za pęknięcie?"
                  className="w-full bg-stone-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blueprint/20 font-medium"
                />
                <button onClick={handleSend} disabled={isLoading} className="absolute right-2 top-1.5 w-9 h-9 bg-toolBlack text-white rounded-lg flex items-center justify-center disabled:opacity-30 hover:bg-blueprint transition-all">
                  <i data-lucide="send" className="w-4 h-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-safetyYellow text-toolBlack rounded-full flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 active:scale-95 transition-all group">
        <div className="relative">
           {isOpen ? <i data-lucide="chevron-down" className="w-8 h-8"></i> : <i data-lucide="message-square" className="w-8 h-8"></i>}
           {!isOpen && <span className="absolute -top-1 -right-1 w-4 h-4 bg-blueprint rounded-full border-2 border-white animate-pulse"></span>}
        </div>
      </button>
    </div>
  );
};

export default ChatBuddy;