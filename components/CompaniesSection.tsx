
import React from 'react';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Globe, 
  Languages, 
  CheckCircle2, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Button } from './Button';

// --- MOCK DATA FOR CANDIDATES ---
const CANDIDATES = [
  {
    id: 1,
    name: "Toni Sample",
    role: "Anlagenmechaniker/in - Sanitär-, Heizungs- und Klimatechnik",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    origin: "Serbien und Montenegro",
    registered: "29.07.2024",
    locations: ["Hamburg", "Hannover"],
    profession: ["Anlagenmechaniker/in"],
    languages: [],
    status: "zugelassen"
  },
  {
    id: 2,
    name: "Derya Numune",
    role: "Architekt/in",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    origin: "Türkei",
    registered: "28.07.2024",
    locations: ["Hamburg", "Hannover"],
    profession: ["Architekt/in"],
    languages: ["Türkisch", "Deutsch"],
    status: "zugelassen"
  },
  {
    id: 3,
    name: "Kardelen Icen",
    role: "Ingenieur/in - Sport",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    origin: "Deutschland",
    registered: "27.04.2024",
    locations: ["Ludwigsburg"],
    profession: ["Ingenieur/in - Sport"],
    languages: ["Deutsch"],
    status: "zugelassen"
  }
];

const BENEFITS = [
  { title: "Passgenaue Kandidaten", desc: "KI-gestützte Vorauswahl für perfekte Matches." },
  { title: "Schnelle Besetzung", desc: "Reduzieren Sie Ihre Time-to-Hire drastisch." },
  { title: "Klare Übersicht", desc: "Alle Bewerber und Status an einem Ort." },
  { title: "Kommunikation mit einem Klick", desc: "Direkter Kontakt ohne Umwege." }
];

const CandidateCard = ({ candidate }: { candidate: typeof CANDIDATES[0] }) => (
  <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex flex-col gap-3 min-w-[280px] hover:shadow-xl transition-shadow duration-300">
    {/* Header */}
    <div className="flex items-start gap-3">
      <img src={candidate.image} alt={candidate.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-slate-800 text-sm truncate">{candidate.name}</h4>
        <p className="text-[10px] text-slate-500 leading-tight line-clamp-2" title={candidate.role}>{candidate.role}</p>
      </div>
      <Heart size={16} className="text-slate-300 hover:text-red-500 cursor-pointer transition-colors" />
    </div>

    {/* Details Grid */}
    <div className="space-y-2 text-[10px] text-slate-500 border-t border-slate-50 pt-3">
       
       <div className="flex items-center gap-2">
          <Globe size={12} className="text-slate-400" />
          <span className="truncate">Herkunftsland / {candidate.origin}</span>
       </div>
       
       <div className="flex items-center gap-2">
          <Calendar size={12} className="text-slate-400" />
          <span>Angemeldet seit / {candidate.registered}</span>
       </div>

       {/* Wunsch Einsatzort */}
       <div className="pt-1">
          <div className="flex items-center gap-1 mb-1 text-slate-400 font-medium">
             <MapPin size={10} /> Wunsch Einsatzort
          </div>
          <div className="flex flex-wrap gap-1">
             {candidate.locations.map(loc => (
               <span key={loc} className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-semibold">{loc}</span>
             ))}
          </div>
       </div>

       {/* Berufsbezeichnung */}
       <div className="pt-1">
          <div className="flex items-center gap-1 mb-1 text-slate-400 font-medium">
             <Briefcase size={10} /> Berufsbezeichnung
          </div>
          <div className="flex flex-wrap gap-1">
             {candidate.profession.map(prof => (
               <span key={prof} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium truncate max-w-full">{prof}</span>
             ))}
          </div>
       </div>

       {/* Languages */}
       {candidate.languages.length > 0 && (
           <div className="pt-1">
              <div className="flex items-center gap-1 mb-1 text-slate-400 font-medium">
                 <Languages size={10} /> Sprachkenntnisse
              </div>
              <div className="flex flex-wrap gap-1">
                 {candidate.languages.map(lang => (
                   <span key={lang} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">{lang}</span>
                 ))}
              </div>
           </div>
       )}
    </div>

    {/* Footer Status */}
    <div className="mt-auto pt-3 border-t border-slate-50 flex items-center gap-1.5 text-green-600 text-[10px] font-bold uppercase tracking-wide">
       <CheckCircle2 size={12} className="fill-current text-white bg-green-600 rounded-full" />
       {candidate.status}
    </div>
  </div>
);

export const CompaniesSection: React.FC = () => {
  return (
    <section id="companies" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-16">
           <h2 className="text-white text-3xl font-bold inline-block border-b-2 border-white pb-1 mb-12">
              Für Unternehmen
           </h2>

           {/* Gradient Box */}
           <div className="bg-gradient-to-r from-[#74a6af] to-[#ef9d56] rounded-[2rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden mb-12">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
              <div className="relative z-10">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2">Für Unternehmen</h3>
                  <p className="text-3xl md:text-5xl font-black text-white tracking-tight">Finden, statt suchen</p>
              </div>
           </div>

           {/* Description Text */}
           <div className="bg-white rounded-xl p-8 shadow-xl max-w-5xl mx-auto -mt-20 relative z-20 border border-slate-100">
              <p className="text-lg md:text-xl font-medium text-brand-dark leading-relaxed">
                 Unsere KI analysiert automatisch Ihr Stellenangebot, vergleicht es mit dem gesamten Bewerberpool und hebt die passendsten Kandidaten für Sie hervor.
                 <br className="hidden md:block" />
                 <span className="block mt-4 text-brand-orange font-bold">
                    Markieren Sie Ihre Favoriten mit nur einem Klick und behalten Sie jederzeit den Überblick.
                 </span>
              </p>
           </div>
        </div>


        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
           
           {/* LEFT: Candidate Visuals */}
           <div className="relative">
              {/* Decorative Background behind cards */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/0 rounded-3xl transform -rotate-2 scale-105 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 relative z-10">
                 {CANDIDATES.map((candidate, idx) => (
                    <div 
                        key={candidate.id} 
                        className={`transform transition-all duration-500 hover:-translate-y-2 ${idx === 2 ? 'hidden xl:block' : ''}`}
                    >
                        <CandidateCard candidate={candidate} />
                    </div>
                 ))}
                 {/* Mobile/Tablet hint for more cards if needed */}
                 <div className="xl:hidden flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white text-sm font-bold p-4 hover:bg-white/10 cursor-pointer transition-colors">
                     + Weitere Kandidaten
                 </div>
              </div>
           </div>

           {/* RIGHT: Benefits & CTA */}
           <div className="flex flex-col gap-4">
              {BENEFITS.map((item, idx) => (
                 <div 
                    key={idx}
                    className="group bg-[#1e293b] hover:bg-[#283547] border border-white/5 p-5 rounded-xl flex items-center justify-between cursor-default transition-all duration-300 shadow-lg"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-2 h-2 rounded-full bg-brand-teal group-hover:bg-brand-orange transition-colors shadow-[0_0_8px_rgba(116,166,175,0.6)]"></div>
                       <div>
                          <h4 className="text-white font-bold text-lg leading-tight group-hover:text-brand-orange transition-colors">{item.title}</h4>
                          <p className="text-slate-400 text-xs mt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-10 transition-all duration-500 overflow-hidden">
                             {item.desc}
                          </p>
                       </div>
                    </div>
                    <ArrowRight className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                 </div>
              ))}

              {/* Main CTA */}
              <div className="mt-8">
                  <Button variant="primary" className="w-full !py-5 !text-xl !font-bold shadow-2xl shadow-brand-orange/20 hover:shadow-brand-orange/40">
                     Jetzt ein Monat kostenlos testen
                  </Button>
                  <p className="text-center text-slate-500 text-sm mt-4 cursor-pointer hover:text-white transition-colors">
                     = Verlinkung zu Registrierung
                  </p>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};
