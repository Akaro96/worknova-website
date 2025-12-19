import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
   ShieldCheck,
   Users,
   FileText,
   Languages,
   Plane,
   HeartHandshake,
   ArrowRight,
   CheckCircle2,
   Layers,
   Cpu,
   CornerDownRight,
   MousePointer2,
   Maximize2,
   Sparkles
} from 'lucide-react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

// --- DATA SOURCE (translated via function) ---
const getModules = (t: (key: string) => string) => [
   {
      id: 'admin',
      category: t('servicesPage.hardSkill'),
      title: t('servicesPage.adminSupport'),
      description: t('servicesPage.adminSupportDesc'),
      specialNote: t('servicesPage.adminSupportNote'),
      icon: <ShieldCheck />,
      color: '#ef9d56', // Orange
      subPoints: [
         t('servicesPage.adminSub1'),
         t('servicesPage.adminSub2'),
         t('servicesPage.adminSub3'),
         t('servicesPage.adminSub4')
      ],
      short: t('servicesPage.adminShort')
   },
   {
      id: 'onboarding',
      category: t('servicesPage.softSkill'),
      title: t('servicesPage.preOnboarding'),
      description: t('servicesPage.preOnboardingDesc'),
      specialNote: null,
      icon: <Users />,
      color: '#74a6af', // Teal
      subPoints: [
         t('servicesPage.preSub1'),
         t('servicesPage.preSub2'),
         t('servicesPage.preSub3')
      ],
      short: t('servicesPage.onboardingShort')
   },
   {
      id: 'translation',
      category: t('servicesPage.hardSkill'),
      title: t('servicesPage.translation'),
      description: t('servicesPage.translationDesc'),
      specialNote: null,
      icon: <FileText />,
      color: '#ef9d56', // Orange
      subPoints: [
         t('servicesPage.translationSub1'),
         t('servicesPage.translationSub2'),
         t('servicesPage.translationSub3'),
         t('servicesPage.translationSub4')
      ],
      short: t('servicesPage.translationShort')
   },
   {
      id: 'language',
      category: t('servicesPage.softSkill'),
      title: t('servicesPage.languageCourses'),
      description: t('servicesPage.languageCoursesDesc'),
      specialNote: null,
      icon: <Languages />,
      color: '#74a6af', // Teal
      subPoints: [
         t('servicesPage.langSub1'),
         t('servicesPage.langSub2'),
         t('servicesPage.langSub3')
      ],
      short: t('servicesPage.languageShort')
   },
   {
      id: 'arrival',
      category: t('servicesPage.hardSkill'),
      title: t('servicesPage.arrivalService'),
      description: t('servicesPage.arrivalServiceDesc'),
      specialNote: null,
      icon: <Plane />,
      color: '#ef9d56', // Orange
      subPoints: [
         t('servicesPage.arrivalSub1'),
         t('servicesPage.arrivalSub2'),
         t('servicesPage.arrivalSub3')
      ],
      short: t('servicesPage.arrivalShort')
   },
   {
      id: 'integration',
      category: t('servicesPage.softSkill'),
      title: t('servicesPage.integrationService'),
      description: t('servicesPage.integrationDesc'),
      specialNote: null,
      icon: <HeartHandshake />,
      color: '#74a6af', // Teal
      subPoints: [
         t('servicesPage.integrationSub1'),
         t('servicesPage.integrationSub2'),
         t('servicesPage.integrationSub3')
      ],
      short: t('servicesPage.integrationShort')
   }
];

// --- 3D ORBIT SYSTEM ---
const OrbitSystem = ({ t }: { t: (key: string) => string }) => {
   const [activeId, setActiveId] = useState<string | null>(null);
   const [rotation, setRotation] = useState(0);
   const [isPaused, setIsPaused] = useState(false);

   const MODULES = getModules(t);

   useEffect(() => {
      let frameId: number;
      const animate = () => {
         if (!isPaused) {
            setRotation(prev => (prev + 0.04) % 360);
         }
         frameId = requestAnimationFrame(animate);
      };
      animate();
      return () => cancelAnimationFrame(frameId);
   }, [isPaused]);

   // Responsive dimensions - smaller for better fit
   const width = 800;
   const height = 600;
   const cx = 400; // Centered X
   const cy = height / 2;
   const rx = 280; // Radius X (reduced)
   const ry = 180; // Radius Y (reduced)

   const ORBIT_NODES = MODULES.map(m => ({
      id: m.id,
      title: m.title,
      icon: m.icon,
      color: m.color,
      gradient: m.color === '#ef9d56' ? 'from-[#ef9d56] to-[#e08c45]' : 'from-[#74a6af] to-[#5d8a93]',
      short: m.short
   }));

   return (
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] flex items-center justify-center overflow-visible z-10 perspective-[1000px] transform-gpu scale-[0.85] md:scale-[0.9] lg:scale-95 xl:scale-100">
         <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] bg-brand-teal/5 blur-3xl rounded-full pointer-events-none transform rotate-x-60"></div>

         <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
         >
            <defs>
               <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#334155" stopOpacity="0.05" />
                  <stop offset="20%" stopColor="#94a3b8" stopOpacity="0.4" />
                  <stop offset="80%" stopColor="#94a3b8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#334155" stopOpacity="0.05" />
               </linearGradient>
               <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                     <feMergeNode in="coloredBlur" />
                     <feMergeNode in="SourceGraphic" />
                  </feMerge>
               </filter>
            </defs>

            <ellipse
               cx={cx} cy={cy} rx={rx} ry={ry}
               fill="none"
               stroke="url(#orbitGrad)"
               strokeWidth="1.5"
               strokeDasharray="4 4"
               className="opacity-40"
            />

            {ORBIT_NODES.map((s, i) => {
               // Offset by -90 degrees so index 0 is at Top (12 o'clock)
               const angleDeg = (i * 60) + rotation - 90;
               const angleRad = (angleDeg * Math.PI) / 180;
               const x = cx + rx * Math.cos(angleRad);
               const y = cy + ry * Math.sin(angleRad);
               const isActive = activeId === s.id;

               if (!isActive) return null;

               return (
                  <g key={`beam-${i}`}>
                     <line
                        x1={cx} y1={cy}
                        x2={x} y2={y}
                        stroke={s.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="opacity-60"
                        filter="url(#glowEffect)"
                     />
                     <circle cx={x} cy={y} r="3" fill={s.color} filter="url(#glowEffect)" className="animate-ping" />
                  </g>
               );
            })}
         </svg>

         {/* Central Hub Logo & Text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 flex items-center justify-center">
               <div className="absolute inset-0 bg-brand-orange/10 blur-2xl rounded-full"></div>
               <div className="absolute inset-[-8px] md:inset-[-12px] rounded-full border border-slate-700/50 border-t-brand-teal/50 border-b-transparent"></div>
               <div className="absolute inset-[-2px] md:inset-[-4px] rounded-full border border-slate-700/50 border-r-brand-orange/50 border-l-transparent"></div>
               <div className="w-24 h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 xl:w-32 xl:h-32 bg-[#0f172a] rounded-full border border-slate-600 shadow-[inset_0_0_40px_rgba(0,0,0,1)] flex flex-col items-center justify-center relative overflow-hidden z-20">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                  <div className="relative z-10 flex flex-col items-center">
                     <div className="w-16 h-auto flex items-center justify-center opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-1">
                        <img
                           src="/Worknova_Logo.webp"
                           alt="Worknova"
                           className="w-full h-full object-contain brightness-0 invert"
                        />
                     </div>
                     <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center leading-tight">Relocation<br />Service</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full pointer-events-none"></div>
               </div>
            </div>
         </div>

         <div className="absolute inset-0 pointer-events-none">
            {ORBIT_NODES.map((s, i) => {
               // Offset by -90 degrees so index 0 is at Top
               const angleDeg = (i * 60) + rotation - 90;
               const angleRad = (angleDeg * Math.PI) / 180;

               // Calculate position - adjusted for smaller dimensions
               const cxPct = 50; // Center is 50%
               const rxPct = 38; // Radius X in %
               const ryPct = 32; // Radius Y in %

               const x = cxPct + (rxPct * Math.cos(angleRad));
               const y = 50 + (ryPct * Math.sin(angleRad));

               const isFront = Math.sin(angleRad) > 0;
               const zIndex = isFront ? 50 : 5;
               const scale = 0.85 + (0.3 * Math.sin(angleRad));
               const opacity = 0.6 + (0.4 * Math.sin(angleRad));
               const isActive = activeId === s.id;
               const isBottomHalf = y > 50;

               return (
                  <div
                     key={s.id}
                     className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-0 ease-linear pointer-events-auto"
                     style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        zIndex: isActive ? 100 : zIndex,
                        transform: `translate(-50%, -50%) scale(${isActive ? 1.15 : scale})`,
                        opacity: isActive ? 1 : opacity
                     }}
                     onMouseEnter={() => { setIsPaused(true); setActiveId(s.id); }}
                     onMouseLeave={() => { setIsPaused(false); setActiveId(null); }}
                     onClick={() => { setIsPaused(true); setActiveId(s.id); }}
                  >
                     <div className={`
                     group relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500
                     ${isActive ? 'scale-110' : 'hover:scale-105'}
                  `}>
                        <div className={`absolute -inset-3 rounded-full border border-dashed border-white/30 animate-spin-slow transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className={`
                          relative w-full h-full rounded-full bg-[#0f172a]/90 backdrop-blur-md border shadow-2xl flex items-center justify-center overflow-hidden transition-colors duration-300
                          ${isActive ? 'border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'border-slate-600/50 hover:border-white/30'}
                      `}>
                           <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-20' : 'group-hover:opacity-10'}`}></div>
                           <div className={`relative z-10 transition-all duration-300 ${isActive ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-slate-400 group-hover:text-white'}`} style={{ color: isActive ? s.color : undefined }}>
                              {React.cloneElement(s.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
                           </div>
                           <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-full"></div>
                        </div>
                        {!isActive && (
                           <div className={`
                            absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-black/60 backdrop-blur text-[10px] font-bold text-slate-300 tracking-widest uppercase border border-white/5 transition-all duration-300
                            ${isBottomHalf ? 'top-full mt-3' : 'bottom-full mb-3'}
                         `}>
                              {s.short}
                           </div>
                        )}
                     </div>

                     {/* DETAIL POPUP */}
                     <div className={`
                     absolute left-1/2 -translate-x-1/2 w-[240px] md:w-[280px] lg:w-[300px] pointer-events-none transition-all duration-500 ease-out origin-center perspective-[1000px] z-[200]
                     ${isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}
                     ${isBottomHalf ? 'bottom-[120%] mb-1' : 'top-[120%] mt-1'} 
                  `}>
                        <div className={`absolute left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent ${isBottomHalf ? 'top-full' : 'bottom-full'}`}></div>
                        <div className="bg-[#0f172a] border border-slate-700 rounded-xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] relative transform-gpu">
                           <div className={`h-1 w-full bg-gradient-to-r ${s.gradient}`}></div>
                           <div className="p-5 relative z-10 text-left">
                              <div className="flex justify-between items-start mb-3">
                                 <div>
                                    <h3 className="text-lg font-bold text-white leading-tight">{s.title}</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export const ServicesPage: React.FC = () => {
   const { t } = useTranslation();
   const MODULES = getModules(t);
   const [activeModuleId, setActiveModuleId] = useState('admin');
   const [isAnimating, setIsAnimating] = useState(false);

   const handleModuleChange = (id: string) => {
      if (id === activeModuleId) return;
      setIsAnimating(true);
      setTimeout(() => {
         setActiveModuleId(id);
         setIsAnimating(false);
      }, 200);
   };

   const activeModule = MODULES.find(m => m.id === activeModuleId) || MODULES[0];

   return (
      <div className="min-h-screen bg-[#0f172a] font-sans selection:bg-brand-orange selection:text-white pb-0 overflow-x-hidden">

         {/* --- HERO SECTION WITH ORBIT SYSTEM (Split Layout) --- */}
         <section className="relative pt-28 pb-8 md:pt-32 md:pb-12 xl:pt-36 xl:pb-16 bg-[#0f172a] overflow-hidden">

            {/* Background Effects - Optimized */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-3xl rounded-full transform-gpu"></div>
               <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-orange/5 blur-3xl rounded-full transform-gpu"></div>
               <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] opacity-15"></div>
            </div>

            <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative z-10 w-full">
               <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center">

                  {/* LEFT COLUMN: TEXT */}
                  <div className="text-center xl:text-left order-1">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 animate-fade-up backdrop-blur-md">
                        <Layers size={14} className="fill-current" />
                        {t('servicesPage.badge')}
                     </div>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white leading-[1.08] tracking-tight mb-6 md:mb-8 animate-fade-up [animation-delay:200ms] drop-shadow-2xl">
                        {t('servicesPage.heroTitle1')} <br />
                        {t('servicesPage.heroTitle2')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-white to-brand-teal">
                           {t('servicesPage.heroTitle3')}
                        </span>
                     </h1>
                     <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto xl:mx-0 leading-relaxed animate-fade-up [animation-delay:400ms]">
                        {t('servicesPage.heroDescription')}
                     </p>

                     <div className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center xl:justify-start animate-fade-up [animation-delay:600ms]">
                        <Button
                           variant="primary"
                           className="!px-8 !py-3 !text-base"
                           icon={<ArrowRight size={18} />}
                           onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                        >
                           {t('servicesPage.inquireNow')}
                        </Button>
                     </div>
                  </div>

                  {/* RIGHT COLUMN: ORBIT ANIMATION */}
                  <div className="order-2 flex items-center justify-center animate-fade-in [animation-delay:600ms]">
                     <OrbitSystem t={t} />
                  </div>

               </div>
            </div>
         </section>

         {/* --- SERVICE MATRIX SECTION --- */}
         <section className="py-24 lg:py-32 bg-[#0b1120] relative overflow-hidden border-t border-white/5">
            {/* Background Ambience - Optimized */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0f172a] to-transparent pointer-events-none"></div>
            <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-teal/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>

            <div className="max-w-[1500px] mx-auto px-6 relative z-10">
               {/* Header */}
               <div className="text-center mb-16 lg:mb-24">
                  <div className="inline-flex items-center gap-2 text-brand-teal font-bold uppercase tracking-widest text-xs mb-3">
                     <Cpu size={16} /> {t('servicesPage.matrix.badge')}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                     {t('servicesPage.matrix.title')}
                  </h2>
                  <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                     {t('servicesPage.matrix.description')}
                     <br /> <span className="text-sm opacity-60">{t('servicesPage.matrix.hint')}</span>
                  </p>
               </div>

               {/* --- THE CONTROL CENTER LAYOUT --- */}
               <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 min-h-[600px] bg-[#151f32] rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden relative">

                  {/* LEFT SIDE: VERTICAL TABS */}
                  <div className="w-full lg:w-[320px] bg-[#0f172a] border-r border-white/5 flex flex-col relative z-20">
                     <div className="p-6 border-b border-white/5">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Navigation</span>
                     </div>

                     <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {MODULES.map((module) => {
                           const isActive = activeModuleId === module.id;
                           return (
                              <button
                                 key={module.id}
                                 onClick={() => handleModuleChange(module.id)}
                                 className={`w-full text-left p-5 transition-all duration-300 relative group border-b border-white/5 hover:bg-white/5
                                     ${isActive ? 'bg-white/5' : ''}
                                  `}
                              >
                                 {isActive && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                                 )}

                                 <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                                        ${isActive ? 'bg-white text-[#0f172a] shadow-lg scale-110' : 'bg-[#1e293b] text-slate-500 group-hover:text-slate-300'}
                                     `}>
                                       {React.cloneElement(module.icon as React.ReactElement<any>, { size: 20 })}
                                    </div>

                                    <div>
                                       <div className={`text-[9px] font-bold uppercase tracking-wider mb-0.5 transition-colors
                                           ${isActive ? 'text-white' : 'text-slate-500'}
                                        `} style={{ color: isActive ? module.color : undefined }}>
                                          {module.category}
                                       </div>
                                       <div className={`font-bold text-sm leading-tight transition-colors
                                           ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}
                                        `}>
                                          {module.title}
                                       </div>
                                    </div>

                                    {isActive && (
                                       <ArrowRight size={16} className="ml-auto text-white animate-pulse" />
                                    )}
                                 </div>
                              </button>
                           );
                        })}
                     </div>
                  </div>

                  {/* RIGHT SIDE: DETAIL VIEW */}
                  <div className="flex-1 relative bg-gradient-to-br from-[#151f32] to-[#0b1120] p-6 md:p-12 lg:p-16 flex flex-col justify-center">

                     <div
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 transition-colors duration-700 pointer-events-none transform-gpu"
                        style={{ backgroundColor: activeModule.color }}
                     ></div>

                     <div className={`transition-all duration-300 ease-out transform ${isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>

                        <div className="flex items-start justify-between mb-8 pb-8 border-b border-white/5">
                           <div>
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4">
                                 <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeModule.color }}></span>
                                 Modul Active
                              </div>
                              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">
                                 {activeModule.title}
                              </h3>
                           </div>
                           <div className="hidden md:block opacity-5 transform rotate-12 scale-150 text-white">
                              {React.cloneElement(activeModule.icon as React.ReactElement<any>, { size: 120 })}
                           </div>
                        </div>

                        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 mb-12">
                           <div>
                              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                                 {activeModule.description}
                              </p>
                           </div>

                           {activeModule.specialNote && (
                              <div className="relative group">
                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                 <div className="relative bg-[#0f172a] border-l-4 p-6 rounded-r-xl shadow-xl" style={{ borderColor: activeModule.color }}>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                                       <Sparkles size={12} style={{ color: activeModule.color }} />
                                       Highlight
                                    </div>
                                    <p className="text-white font-bold text-lg whitespace-pre-line leading-snug">
                                       {activeModule.specialNote}
                                    </p>
                                 </div>
                              </div>
                           )}
                        </div>

                        <div>
                           <div className="flex items-center gap-2 mb-6">
                              <CornerDownRight className="text-slate-500" size={18} />
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Enthaltene Leistungen</span>
                           </div>

                           <div className="grid md:grid-cols-2 gap-4">
                              {activeModule.subPoints.map((point, idx) => (
                                 <div
                                    key={idx}
                                    className="group/chip relative bg-[#0f172a] border border-white/5 hover:border-white/20 p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default overflow-hidden"
                                 >
                                    <div
                                       className="absolute inset-0 opacity-0 group-hover/chip:opacity-10 transition-opacity duration-300"
                                       style={{ backgroundColor: activeModule.color }}
                                    ></div>

                                    <div
                                       className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover/chip:bg-white group-hover/chip:text-[#0f172a] transition-all duration-300"
                                    >
                                       <CheckCircle2 size={16} />
                                    </div>

                                    <span className="text-sm font-bold text-slate-300 group-hover/chip:text-white transition-colors">
                                       {point}
                                    </span>

                                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 rounded-tr-md opacity-0 group-hover/chip:opacity-100 transition-opacity"></div>
                                 </div>
                              ))}
                           </div>
                        </div>

                     </div>

                     <div className="absolute bottom-6 right-6 flex gap-2 opacity-20">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                     </div>

                  </div>
               </div>

            </div>
         </section>

         {/* --- CTA SECTION --- */}
         <section className="py-20 md:py-24 bg-gradient-to-b from-[#0b1120] to-[#0f172a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
               <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                  {t('servicesPage.readyToStart')}
               </h2>
               <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                  {t('servicesPage.ctaDescription')}
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button
                     variant="primary"
                     className="!px-12 !py-4 !text-lg !rounded-full shadow-[0_0_40px_rgba(239,157,86,0.3)]"
                     icon={<ArrowRight size={20} />}
                     onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  >
                     {t('servicesPage.inquireNow')}
                  </Button>
                  <Button
                     variant="outline"
                     className="!px-12 !py-4 !text-lg !rounded-full border-white/20 text-white hover:bg-white/10"
                     onClick={() => { window.location.hash = '#/unternehmen'; }}
                  >
                     {t('common.learnMore')}
                  </Button>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   );
};