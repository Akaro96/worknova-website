
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
   Heart,
   MapPin,
   Globe,
   CheckCircle2,
   ArrowRight,
   Briefcase,
   Zap,
   ShieldCheck,
   BrainCircuit,
   TrendingUp,
   Search,
   Filter,
   Sparkles,
   Users,
   FileText,
   Clock,
   Layout,
   Check,
   Settings,
   Target,
   BarChart3,
   Lock,
   Eye,
   Menu,
   Bell,
   MoreHorizontal,
   FileCheck,
   Plane,
   Building2,
   ChevronRight,
   Briefcase as BriefcaseIcon
} from 'lucide-react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Footer } from '../components/Footer';
import { FAQSection } from '../components/FAQSection';

// --- MOCK DATA ---
const CANDIDATES = [
   {
      id: 1,
      name: "Toni Sample",
      role: "Anlagenmechaniker SHK",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      origin: "Serbien",
      match: 98,
      status: "Verfügbar",
      skills: ["Montage", "Wartung", "Rohrleitungsbau"]
   },
   {
      id: 2,
      name: "Derya Numune",
      role: "Senior Architektin",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      origin: "Türkei",
      match: 94,
      status: "Im Gespräch",
      skills: ["CAD", "Bauleitung", "BIM"]
   },
   {
      id: 3,
      name: "Kardelen Icen",
      role: "Ingenieurin",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      origin: "Deutschland",
      match: 89,
      status: "Verfügbar",
      skills: ["Projektmanagement", "Statik"]
   }
];

// Features and FAQ will be defined inside the component to use translations

// --- COMPONENT: Candidate Card (High End) ---
const EnterpriseCandidateCard: React.FC<{ candidate: typeof CANDIDATES[0], index: number }> = ({ candidate, index }) => (
   <div
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 150}ms` }}
   >
      {/* Match Badge */}
      <div className="absolute top-4 right-4 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full border border-green-100 flex items-center gap-1 shadow-sm">
         <Zap size={10} className="fill-current" />
         {candidate.match}% Match
      </div>

      <div className="flex gap-4 mb-4">
         <div className="relative">
            <img src={candidate.image} alt={candidate.name} className="w-14 h-14 rounded-xl object-cover shadow-md" />
            <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 border-2 border-white rounded-full ${candidate.status === 'Verfügbar' ? 'bg-green-500' : 'bg-orange-400'}`}></div>
         </div>
         <div>
            <h4 className="font-bold text-slate-800 text-lg leading-tight">{candidate.name}</h4>
            <p className="text-xs text-brand-orange font-bold uppercase tracking-wide mt-1">{candidate.role}</p>
            <div className="flex items-center gap-1 mt-1 text-slate-400 text-[11px]">
               <Globe size={10} />
               {candidate.origin}
            </div>
         </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
         {candidate.skills.map(skill => (
            <span key={skill} className="px-2 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-medium rounded-md">
               {skill}
            </span>
         ))}
      </div>

      <div className="flex gap-2">
         <button className="flex-1 bg-brand-dark text-white text-xs font-bold py-2.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            {/* Decorative - not translated */}
            View Profile
         </button>
         <button className="w-10 flex items-center justify-center border border-slate-200 rounded-lg hover:border-red-200 hover:bg-red-50 text-slate-300 hover:text-red-500 transition-colors">
            <Heart size={16} />
         </button>
      </div>
   </div>
);

// --- VISUAL: SMART ECOSYSTEM NODE ---
const EcosystemNode: React.FC<{
   position: { top: string; left: string };
   delay: string;
   name: string;
   role: string;
   match: string;
   image: string;
   isActive?: boolean;
}> = ({ position, delay, name, role, match, image, isActive }) => {
   const { t } = useTranslation();
   return (
      <div
         className={`absolute z-20 flex items-center gap-3 transition-all duration-700 animate-float-medium`}
         style={{ top: position.top, left: position.left, animationDelay: delay }}
      >
         {/* The Node/Avatar */}
         <div className={`relative w-12 h-12 rounded-2xl p-0.5 transition-all duration-500 ${isActive ? 'scale-110 shadow-[0_0_30px_rgba(116,166,175,0.3)]' : 'scale-100 shadow-lg'}`}>
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${isActive ? 'from-brand-teal to-brand-teal/50' : 'from-slate-200 to-slate-100'} -z-10`}></div>
            <img src={image} alt={name} className="w-full h-full rounded-[14px] object-cover bg-white" />

            {/* Status Dot */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 border-2 border-white rounded-full ${isActive ? 'bg-green-500' : 'bg-slate-300'}`}></div>
         </div>

         {/* The Card (Visible on Active or Hover) */}
         <div className={`
           bg-white/90 backdrop-blur-md border border-white/50 p-3 rounded-xl shadow-xl min-w-[140px]
           transition-all duration-500 origin-left
           ${isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-4 scale-95 pointer-events-none'}
        `}>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{t('unternehmenPage.matchFound')}</div>
            <div className="font-bold text-sm text-brand-dark leading-tight">{name}</div>
            <div className="text-[10px] text-brand-teal font-medium truncate max-w-[120px]">{role}</div>
            <div className="mt-2 flex items-center gap-1.5">
               <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-teal w-[90%] rounded-full"></div>
               </div>
               <span className="text-[9px] font-bold text-brand-dark">{match}%</span>
            </div>
         </div>
      </div>
   );
};

// --- VISUAL: SMART ECOSYSTEM CORE ---
const SmartEcosystemVisual = () => {
   const { t } = useTranslation();
   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((prev) => (prev + 1) % 3);
      }, 4000); // Switch every 4 seconds
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center select-none pointer-events-none lg:pointer-events-auto">

         {/* 1. Ambient Background Layer */}
         <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-orange/5 rounded-full blur-3xl opacity-50"></div>

         {/* 2. Orbital Rings (Static but subtle) */}
         <div className="absolute inset-[10%] border border-slate-100/50 rounded-full border-dashed opacity-50"></div>
         <div className="absolute inset-[25%] border border-slate-100/80 rounded-full"></div>

         {/* 3. Central Intelligence Hub */}
         <div className="relative z-30 flex items-center justify-center">
            {/* Outer Ripple */}
            <div className="absolute w-40 h-40 bg-brand-teal/5 rounded-full animate-pulse-ring"></div>
            <div className="absolute w-40 h-40 bg-brand-teal/5 rounded-full animate-pulse-ring [animation-delay:1s]"></div>

            {/* Main Core */}
            <div className="w-24 h-24 bg-white rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center relative z-20 border border-slate-50">
               <Logo className="h-6 w-auto" />

               {/* Spinning Processing Ring */}
               <div className="absolute -inset-1 rounded-full border-t-2 border-brand-teal/20 border-r-2 border-brand-teal/0 animate-spin-slow"></div>
            </div>
         </div>

         {/* 4. Connections & Nodes */}
         <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-visible">
            <defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#74a6af" stopOpacity="0" />
                  <stop offset="50%" stopColor="#74a6af" stopOpacity="1" />
                  <stop offset="100%" stopColor="#74a6af" stopOpacity="0" />
               </linearGradient>
            </defs>

            {/* Connection Lines (Curved Beziers) */}
            <path
               d="M 300 300 Q 400 300 450 180"
               fill="none"
               stroke="url(#grad1)"
               strokeWidth="2"
               className={`transition-all duration-1000 ${activeIndex === 0 ? 'opacity-100 stroke-dasharray-100 animate-draw-line' : 'opacity-10'}`}
            />
            <path
               d="M 300 300 Q 200 350 150 420"
               fill="none"
               stroke="url(#grad1)"
               strokeWidth="2"
               className={`transition-all duration-1000 ${activeIndex === 1 ? 'opacity-100 stroke-dasharray-100 animate-draw-line' : 'opacity-10'}`}
            />
            <path
               d="M 300 300 Q 200 200 120 150"
               fill="none"
               stroke="url(#grad1)"
               strokeWidth="2"
               className={`transition-all duration-1000 ${activeIndex === 2 ? 'opacity-100 stroke-dasharray-100 animate-draw-line' : 'opacity-10'}`}
            />
         </svg>

         <EcosystemNode
            position={{ top: '25%', left: '70%' }}
            delay="0s"
            name="Derya Numune"
            role="Senior Architect"
            match="98"
            image={CANDIDATES[1].image}
            isActive={activeIndex === 0}
         />
         <EcosystemNode
            position={{ top: '65%', left: '20%' }}
            delay="1.5s"
            name="Toni Sample"
            role="Engineer SHK"
            match="95"
            image={CANDIDATES[0].image}
            isActive={activeIndex === 1}
         />
         <EcosystemNode
            position={{ top: '20%', left: '15%' }}
            delay="0.5s"
            name="Kardelen Icen"
            role="Civil Engineer"
            match="92"
            image={CANDIDATES[2].image}
            isActive={activeIndex === 2}
         />

         <div className="absolute top-[80%] right-[20%] w-3 h-3 bg-brand-orange/20 rounded-full animate-float-slow"></div>
         <div className="absolute bottom-[10%] left-[50%] w-2 h-2 bg-brand-teal/20 rounded-full animate-float-medium"></div>

         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur px-5 py-2 rounded-full border border-slate-100 shadow-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('unternehmenPage.liveMatching')}</span>
         </div>
      </div>
   );
};

// --- COMPONENT: Process Monitor Dashboard (Refined & Branded) ---
const ProcessMonitor = () => {
   const { t } = useTranslation();
   return (
      <div className="relative w-full max-w-6xl mx-auto perspective-[2000px]">
         {/* Browser/App Window */}
         <div className="bg-[#f8fafc] rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-700/50 overflow-hidden transform transition-all duration-700 hover:rotate-x-1 hover:scale-[1.005] flex h-[600px]">

            {/* 1. Sidebar (Brand Dark with Strong Orange Identity) */}
            <div className="hidden md:flex w-24 bg-brand-dark flex-col items-center py-6 border-r border-white/5 relative z-20">
               <div className="mb-10 p-2">
                  <Logo className="h-6 w-auto brightness-0 invert opacity-90" />
               </div>

               <div className="flex flex-col gap-6 w-full">
                  {/* Active Item: Dashboard (Orange Highlight) */}
                  <div className="relative w-full px-4 group cursor-pointer">
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-brand-orange rounded-r-full shadow-[0_0_10px_#ef9d56]"></div>
                     <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 text-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/10 border border-brand-orange/20">
                        <Layout size={22} />
                     </div>
                     <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-brand-dark px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-4 whitespace-nowrap z-50">
                        {t('unternehmenPage.dashboard.processes')}
                     </div>
                  </div>

                  {/* Inactive Items */}
                  {[
                     { icon: <Users size={22} />, label: t('unternehmenPage.dashboard.candidates') },
                     { icon: <FileText size={22} />, label: t('unternehmenPage.dashboard.documents') },
                     { icon: <BriefcaseIcon size={22} />, label: t('unternehmenPage.dashboard.jobs') },
                     { icon: <Settings size={22} />, label: t('unternehmenPage.dashboard.settings') }
                  ].map((item, idx) => (
                     <div key={idx} className="relative w-full px-4 group cursor-pointer">
                        <div className="w-12 h-12 mx-auto rounded-xl text-slate-500 hover:bg-white/5 hover:text-white flex items-center justify-center transition-all duration-300">
                           {item.icon}
                        </div>
                        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-brand-dark px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-4 whitespace-nowrap z-50">
                           {item.label}
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mt-auto flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-slate-700 cursor-pointer hover:border-brand-orange transition-colors" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60")' }}></div>
               </div>
            </div>

            {/* 2. Main Content Area */}
            <div className="flex-1 flex flex-col bg-slate-50/50 relative">
               {/* Top Bar */}
               <div className="h-20 bg-white border-b border-slate-200/60 flex items-center justify-between px-8 sticky top-0 z-10 backdrop-blur-xl bg-white/90">
                  <div>
                     <h3 className="text-lg font-bold text-slate-800">{t('unternehmenPage.processMonitoring')}</h3>
                     <p className="text-[11px] text-slate-400 font-medium mt-0.5">{t('unternehmenPage.realTimeStatus')}</p>
                  </div>

                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2 bg-brand-orange/5 px-3 py-1.5 rounded-full border border-brand-orange/10">
                        <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                        <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wide">{t('unternehmenPage.liveUpdated')}</span>
                     </div>
                     <div className="h-8 w-px bg-slate-200"></div>
                     <Bell size={20} className="text-slate-400 hover:text-brand-dark cursor-pointer transition-colors" />
                  </div>
               </div>

               {/* Content Scroll Area */}
               <div className="flex-1 p-8 overflow-y-auto">

                  {/* Header Labels (Aligned Grid) */}
                  <div className="hidden md:grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr_0.8fr] gap-4 px-6 pb-4 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                     <div>{t('unternehmenPage.skilledWorker')}</div>
                     <div className="text-center">{t('unternehmenPage.contracts')}</div>
                     <div className="text-center">{t('unternehmenPage.visa')}</div>
                     <div className="text-center">{t('unternehmenPage.onboarding')}</div>
                     <div className="text-center">{t('unternehmenPage.integration')}</div>
                     <div className="text-right">{t('unternehmenPage.currentStatus')}</div>
                  </div>

                  {/* ROWS CONTAINER */}
                  <div className="space-y-4 mt-6">

                     {/* ROW 1: SUCCESS (Elena) - All Done */}
                     <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:grid md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr_0.8fr] gap-4 items-center group relative overflow-hidden">
                        {/* Left accent for success */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal"></div>

                        {/* Profile */}
                        <div className="flex items-center gap-4 w-full pl-2">
                           <div className="relative">
                              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60" alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm" />
                              <div className="absolute -bottom-1 -right-1 bg-brand-teal text-white rounded-full p-0.5 border-2 border-white"><Check size={8} strokeWidth={4} /></div>
                           </div>
                           <div className="min-w-0">
                              <div className="font-bold text-slate-800 text-[15px]">Elena Markovic</div>
                              <div className="text-xs text-slate-500 font-medium">Architektin (M.Sc.)</div>
                              <div className="text-[10px] text-slate-400 mt-0.5">Ref: #EM-2024</div>
                           </div>
                        </div>

                        {/* Timeline Logic: All Teal (Done) */}
                        {[1, 2, 3, 4].map((step, i) => (
                           <div key={i} className="flex flex-col items-center justify-center w-full relative">
                              {/* Connecting Line (Behind) */}
                              {i < 3 && <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-[2px] bg-brand-teal -z-10"></div>}
                              {/* Icon */}
                              <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center shadow-md shadow-brand-teal/20 transition-transform hover:scale-110">
                                 <Check size={14} strokeWidth={3} />
                              </div>
                           </div>
                        ))}

                        {/* Status */}
                        <div className="flex items-center justify-end w-full">
                           <div className="bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-xl text-xs font-bold border border-brand-teal/20 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                              {t('unternehmenPage.workStart')}
                           </div>
                        </div>
                     </div>

                     {/* ROW 2: IN PROGRESS (Mateo) - The Focus */}
                     <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-lg shadow-slate-200/50 flex flex-col md:grid md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr_0.8fr] gap-4 items-center group relative z-10 scale-[1.02]">
                        {/* Left accent for active */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"></div>

                        {/* Profile */}
                        <div className="flex items-center gap-4 w-full pl-2">
                           <div className="relative">
                              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60" alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm" />
                              <div className="absolute -bottom-1 -right-1 bg-brand-orange text-white rounded-full p-0.5 border-2 border-white"><Building2 size={8} strokeWidth={4} /></div>
                           </div>
                           <div className="min-w-0">
                              <div className="font-bold text-slate-800 text-[15px]">Mateo Silva</div>
                              <div className="text-xs text-slate-500 font-medium">Mechatroniker</div>
                              <div className="text-[10px] text-brand-orange mt-0.5 font-bold">{t('unternehmenPage.actionRequired')}</div>
                           </div>
                        </div>

                        {/* Step 1: Done */}
                        <div className="flex flex-col items-center justify-center w-full relative">
                           <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-[2px] bg-brand-orange -z-10"></div>
                           <div className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/20 flex items-center justify-center">
                              <Check size={14} strokeWidth={3} />
                           </div>
                        </div>

                        {/* Step 2: ACTIVE (The Breathing Effect) */}
                        <div className="flex flex-col items-center justify-center w-full relative">
                           {/* Dotted Line forward */}
                           <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-[2px] border-t-2 border-dashed border-slate-200 -z-10"></div>

                           {/* The Node */}
                           <div className="relative w-10 h-10 flex items-center justify-center">
                              {/* Custom Breathing Ring */}
                              <div className="absolute inset-0 bg-brand-orange/20 rounded-full animate-breathe"></div>

                              <div className="relative w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/30 z-10 border-2 border-white">
                                 <Building2 size={14} strokeWidth={2.5} />
                              </div>
                           </div>
                           <div className="absolute -bottom-6 text-[9px] font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-full">{t('unternehmenPage.inProgress')}</div>
                        </div>

                        {/* Step 3 & 4: Pending */}
                        {[3, 4].map((step, i) => (
                           <div key={i} className="flex flex-col items-center justify-center w-full relative opacity-40">
                              {i < 1 && <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-[2px] border-t-2 border-dashed border-slate-300 -z-10"></div>}
                              <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 text-slate-300 flex items-center justify-center font-bold text-xs">
                                 {step}
                              </div>
                           </div>
                        ))}

                        {/* Status */}
                        <div className="flex items-center justify-end w-full">
                           <div className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-xl text-xs font-bold border border-brand-orange/20 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                              {t('unternehmenPage.authorityCheck')}
                           </div>
                        </div>
                     </div>

                     {/* ROW 3: STARTING (Sarah) - Early Stage */}
                     <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:grid md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr_0.8fr] gap-4 items-center group relative overflow-hidden opacity-90 hover:opacity-100">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 group-hover:bg-brand-orange transition-colors"></div>

                        {/* Profile */}
                        <div className="flex items-center gap-4 w-full pl-2">
                           <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm">SC</div>
                           <div className="min-w-0">
                              <div className="font-bold text-slate-800 text-[15px]">Sarah Chen</div>
                              <div className="text-xs text-slate-500 font-medium">Software Engineer</div>
                              <div className="text-[10px] text-slate-400 mt-0.5">Ref: #SC-9921</div>
                           </div>
                        </div>

                        {/* Step 1: Active (Start) */}
                        <div className="flex flex-col items-center justify-center w-full relative">
                           <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-[2px] border-t-2 border-dashed border-slate-200 -z-10"></div>

                           <div className="relative w-10 h-10 flex items-center justify-center">
                              {/* Breathing Ring */}
                              <div className="absolute inset-0 bg-brand-orange/20 rounded-full animate-breathe"></div>
                              <div className="relative w-8 h-8 rounded-full bg-white border-2 border-brand-orange text-brand-orange flex items-center justify-center shadow-sm z-10">
                                 <FileCheck size={14} strokeWidth={2.5} />
                              </div>
                           </div>
                        </div>

                        {/* Steps 2-4: Pending */}
                        {[2, 3, 4].map((step, i) => (
                           <div key={i} className="flex flex-col items-center justify-center w-full relative opacity-30">
                              {i < 2 && <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-[2px] border-t-2 border-dashed border-slate-300 -z-10"></div>}
                              <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 text-slate-300 flex items-center justify-center font-bold text-xs">
                                 {step}
                              </div>
                           </div>
                        ))}

                        {/* Status */}
                        <div className="flex items-center justify-end w-full">
                           <div className="bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 flex items-center gap-2 group-hover:border-brand-orange/30 group-hover:text-brand-orange transition-colors">
                              <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-brand-orange transition-colors"></div>
                              {t('unternehmenPage.contractCreation')}
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>

         {/* Feature Pills Under Visual */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-12">
            {[
               { icon: <Layout size={18} />, label: t('unternehmenPage.overviewStructured') },
               { icon: <Lock size={18} />, label: t('unternehmenPage.documentsSecure') },
               { icon: <Eye size={18} />, label: t('unternehmenPage.statusVisible') },
               { icon: <CheckCircle2 size={18} />, label: t('unternehmenPage.reliableTraceability') }
            ].map((item, i) => (
               <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:bg-white/10 transition-colors group">
                  <div className="text-brand-teal group-hover:text-brand-orange transition-colors">{item.icon}</div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
               </div>
            ))}
         </div>
      </div>
   );
};


export const UnternehmenPage: React.FC = () => {
   const { t } = useTranslation();

   const FEATURES = [
      {
         icon: <BrainCircuit size={24} />,
         title: t('unternehmenPage.aiMatching'),
         desc: t('unternehmenPage.aiMatchingDesc'),
         color: "text-brand-orange"
      },
      {
         icon: <ShieldCheck size={24} />,
         title: t('unternehmenPage.legalSecurity'),
         desc: t('unternehmenPage.legalSecurityDesc'),
         color: "text-brand-teal"
      },
      {
         icon: <Zap size={24} />,
         title: t('unternehmenPage.speedRecruiting'),
         desc: t('unternehmenPage.speedRecruitingDesc'),
         color: "text-yellow-500"
      }
   ];

   const FAQ_ITEMS = [
      { question: t('unternehmenPage.companyFaqQ1'), answer: t('unternehmenPage.companyFaqA1') },
      { question: t('unternehmenPage.companyFaqQ2'), answer: t('unternehmenPage.companyFaqA2') },
      { question: t('unternehmenPage.companyFaqQ3'), answer: t('unternehmenPage.companyFaqA3') },
      { question: t('unternehmenPage.companyFaqQ4'), answer: t('unternehmenPage.companyFaqA4') },
      { question: t('unternehmenPage.companyFaqQ5'), answer: t('unternehmenPage.companyFaqA5') },
      { question: t('unternehmenPage.companyFaqQ6'), answer: t('unternehmenPage.companyFaqA6') },
      { question: t('unternehmenPage.companyFaqQ7'), answer: t('unternehmenPage.companyFaqA7') }
   ];

   return (
      <div className="min-h-screen bg-[#fffbf7] font-sans selection:bg-brand-orange selection:text-white pb-0 overflow-x-hidden">

         {/* --- HERO SECTION --- */}
         <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0f172a] overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl z-20">
            <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-orange/20 blur-[120px] rounded-full mix-blend-screen animate-float-slow"></div>
               <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-brand-teal/10 blur-[100px] rounded-full mix-blend-screen animate-float-medium"></div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-8 animate-fade-up">
                  <Zap size={14} className="fill-current" />
                  {t('unternehmenPage.badge')}
               </div>
               <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] tracking-tight mb-8 animate-fade-up [animation-delay:200ms]">
                  {t('unternehmenPage.heroTitle1')} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-200">
                     {t('unternehmenPage.heroTitle2')}
                  </span>
               </h1>
               <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up [animation-delay:400ms]">
                  {t('unternehmenPage.heroDescription')}
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:600ms]">
                  <Button
                     variant="primary"
                     className="w-full sm:w-auto !py-4 !px-10 !text-lg !rounded-2xl shadow-[0_0_30px_rgba(239,157,86,0.3)]"
                     onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  >
                     {t('unternehmenPage.findTalentsNow')}
                  </Button>
                  <Button
                     variant="outline"
                     className="w-full sm:w-auto !py-4 !px-10 !text-lg !rounded-2xl border-white/20 text-white hover:bg-white/10"
                     onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  >
                     {t('unternehmenPage.scheduleDemo')}
                  </Button>
               </div>
               <div className="mt-20 -mb-48 lg:-mb-64 relative z-20 animate-fade-up [animation-delay:800ms] perspective-[2000px]">
                  <div className="relative bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl max-w-5xl mx-auto transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000">
                     <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-white/5 relative aspect-[16/9] md:aspect-[21/9]">
                        <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                           <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                           </div>
                           <div className="ml-4 w-64 h-5 bg-white/5 rounded-full"></div>
                        </div>
                        <div className="p-6 grid grid-cols-3 gap-6">
                           <div className="col-span-2 space-y-4">
                              <div className="flex gap-4">
                                 <div className="w-1/3 h-32 bg-brand-teal/5 border border-brand-teal/20 rounded-xl"></div>
                                 <div className="w-1/3 h-32 bg-brand-orange/5 border border-brand-orange/20 rounded-xl"></div>
                                 <div className="w-1/3 h-32 bg-white/5 border border-white/10 rounded-xl"></div>
                              </div>
                              <div className="h-40 bg-white/5 border border-white/10 rounded-xl w-full"></div>
                           </div>
                           <div className="h-full bg-white/5 border border-white/10 rounded-xl"></div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                           <div className="flex items-center gap-3 bg-brand-dark/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-xl">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-xs font-mono text-green-400">System Active • 98% Match Rate</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* --- STATS STRIP --- */}
         <section className="pt-40 lg:pt-56 pb-20">
            <div className="max-w-[1200px] mx-auto px-6">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200/50">
                  {[
                     { val: "ca. 12 Wochen", label: t('unternehmenPage.timeToHire') },
                     { val: "98%", label: t('unternehmenPage.successfulMatches') },
                     { val: "100+", label: t('unternehmenPage.partnersWorldwide') },
                     { val: "24/7", label: t('unternehmenPage.digitalProcess') },
                  ].map((stat, i) => (
                     <div key={i} className="text-center px-4">
                        <div className="text-3xl lg:text-4xl font-black text-brand-dark mb-1">{stat.val}</div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wide">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* --- FEATURE GRID --- */}
         <section className="py-20 relative">
            <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
               <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
                     {t('unternehmenPage.smarterRecruit')} <br />
                     <span className="text-brand-orange">{t('unternehmenPage.betterGrow')}</span>
                  </h2>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                     {t('unternehmenPage.featureDescription')}
                  </p>
                  <div className="space-y-6">
                     {FEATURES.map((feature, i) => (
                        <div key={i} className="flex gap-5 group cursor-default">
                           <div className={`w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-md flex items-center justify-center flex-shrink-0 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                              {feature.icon}
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-orange transition-colors">{feature.title}</h4>
                              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-teal/5 rounded-full blur-3xl"></div>
                  <div className="relative z-10 grid gap-5">
                     <div className="flex items-center justify-between mb-2 px-1">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                           <Filter size={16} /> Filter: Aktiv
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-brand-teal">
                           <Search size={16} /> Live Suche
                        </div>
                     </div>
                     {CANDIDATES.map((candidate, idx) => (
                        <EnterpriseCandidateCard key={candidate.id} candidate={candidate} index={idx} />
                     ))}
                     <div className="absolute -right-6 top-1/3 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce flex items-center gap-3 max-w-[200px] z-20 hidden lg:flex">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="text-xs font-bold text-slate-700">
                           Neuer Kandidat matcht zu 99% mit Ihrer Suche!
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* --- TECH DEEP DIVE (Smart Ecosystem) --- */}
         <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-30"></div>
            <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1 relative">
                  <SmartEcosystemVisual />
               </div>
               <div className="order-1 lg:order-2">
                  <div className="inline-block text-brand-teal font-bold tracking-widest uppercase text-xs mb-4 bg-brand-teal/10 px-3 py-1 rounded-md">
                     {t('unternehmenPage.deepLearning')}
                  </div>
                  <h2 className="text-4xl font-extrabold text-brand-dark mb-6">
                     {t('unternehmenPage.weSeeTitlePart1')} <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-500">
                        {t('unternehmenPage.weSeeTitlePart2')}
                     </span>
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                     {t('unternehmenPage.weSeeDescription')}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="text-2xl font-black text-brand-teal mb-1">20+</div>
                        <div className="text-xs font-bold text-slate-500 uppercase">{t('unternehmenPage.dataPoints')}</div>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="text-2xl font-black text-brand-teal mb-1">0.2s</div>
                        <div className="text-xs font-bold text-slate-500 uppercase">{t('unternehmenPage.analysisTime')}</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* --- NEW SECTION: PROCESS MONITORING (Dark Mode) --- */}
         <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
               {/* Header */}
               <div className="text-center max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                     {t('unternehmenPage.fullTransparency')} <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-teal">
                        {t('unternehmenPage.realTime')}
                     </span>
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                     {t('unternehmenPage.transparencyDescription')}
                  </p>
               </div>

               {/* The Dashboard Visual */}
               <ProcessMonitor />
            </div>
         </section>

         {/* --- NEW SECTION: BENEFITS (Light Mode) --- */}
         <section className="py-24 bg-[#fffbf7] border-t border-slate-100 relative">
            <div className="max-w-[1400px] mx-auto px-6">
               <div className="text-center mb-16">
                  <div className="inline-block bg-brand-orange/10 text-brand-orange font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                     {t('unternehmenPage.whyWorknova')}
                  </div>
                  <h2 className="text-4xl font-extrabold text-brand-dark">{t('unternehmenPage.yourBenefits')}</h2>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                     {
                        icon: <Users size={24} />,
                        title: t('unternehmenPage.sustainableEmployment'),
                        desc: t('unternehmenPage.sustainableEmploymentDesc')
                     },
                     {
                        icon: <FileText size={24} />,
                        title: t('unternehmenPage.adminRelief'),
                        desc: t('unternehmenPage.adminReliefDesc')
                     },
                     {
                        icon: <Settings size={24} />,
                        title: t('unternehmenPage.professionalProcess'),
                        desc: t('unternehmenPage.professionalProcessDesc')
                     },
                     {
                        icon: <Target size={24} />,
                        title: t('unternehmenPage.reliablePlanning'),
                        desc: t('unternehmenPage.reliablePlanningDesc')
                     },
                     {
                        icon: <Briefcase size={24} />,
                        title: t('unternehmenPage.focusCore'),
                        desc: t('unternehmenPage.focusCoreDesc')
                     },
                     {
                        icon: <BarChart3 size={24} />,
                        title: t('unternehmenPage.clearProcesses'),
                        desc: t('unternehmenPage.clearProcessesDesc')
                     }
                  ].map((benefit, i) => (
                     <div key={i} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-brand-dark group-hover:text-brand-orange transition-all duration-300 mb-6">
                           {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                           {benefit.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                           {benefit.desc}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* --- FAQ SECTION --- */}
         <FAQSection
            title={t('unternehmenPage.faqTitle')}
            subtitle={t('unternehmenPage.faqSubtitle')}
            items={FAQ_ITEMS}
            variant="orange"
         />

         {/* --- FINAL CTA --- */}
         <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto bg-brand-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
               {/* Ambient Glow */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/20 blur-[100px] rounded-full"></div>
               <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/20 blur-[100px] rounded-full"></div>

               <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                     {t('unternehmenPage.readyForUpgrade')}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                     {t('unternehmenPage.ctaDescription')}
                  </p>

                  <div className="flex flex-col items-center gap-8 mt-8">
                     <Button
                        variant="primary"
                        className="!py-5 !px-16 !text-xl !font-bold !rounded-full shadow-[0_20px_60px_-15px_rgba(239,157,86,0.6)] hover:shadow-[0_30px_80px_-15px_rgba(239,157,86,0.8)] hover:-translate-y-1 w-full sm:w-auto transition-all duration-300 relative group overflow-hidden"
                        onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                     >
                        <span className="relative z-10 flex items-center gap-3">
                           {t('unternehmenPage.startFreeNow')}
                           <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                     </Button>

                     <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-400/80">
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                           <CheckCircle2 size={14} className="text-brand-teal" />
                           {t('unternehmenPage.cancelAnytime')}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   );
};
