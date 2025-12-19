
import React, { useState } from 'react';
import { ContainerScroll } from './ContainerScroll';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  Building2, 
  UserCheck, 
  Users, 
  BrainCircuit, 
  Search,
  Bell,
  Activity,
  Plus,
  Zap,
  Settings,
  TrendingUp,
  BarChart3,
  Globe,
  MoreHorizontal,
  ChevronRight,
  ShieldCheck,
  MousePointer2
} from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();
  const [activeCTA, setActiveCTA] = useState<'talent' | 'employer' | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  // Mini Sparkline für Dashboard
  const Sparkline = ({ color }: { color: string }) => (
    <svg width="40" height="15" viewBox="0 0 40 15" fill="none" className="opacity-60">
      <path d="M1 14L8 10L15 12L22 4L29 7L39 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section className="bg-brand-cream overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center lg:items-start w-full max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-100 text-brand-orange text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-4 sm:mb-5 md:mb-6 shadow-sm">
               <Zap size={12} fill="currentColor" className="animate-pulse" /> {t('hero.badge')}
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
                <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-brand-dark leading-[1.1] tracking-tight mb-1">
                    {t('hero.titleLine1')} <br />
                    {t('hero.titleLine2')}
                </h1>
                <div className="relative inline-block">
                    <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-brand-orange leading-[1.1] tracking-tight">
                        {t('hero.subtitleLine1')} <br />
                        {t('hero.subtitleLine2')}
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -bottom-1 left-0 h-1 bg-brand-orange/20 rounded-full"
                    />
                </div>
            </div>

            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-md mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                {t('hero.description')}
            </p>

            {/* Compact CTA Row */}
            <div className="flex items-stretch gap-3 sm:gap-4 w-full max-w-lg">
                {/* UNTERNEHMER */}
                <a 
                  href="#/unternehmen" 
                  onClick={(e) => handleNavClick(e, '#/unternehmen')}
                  onMouseEnter={() => setActiveCTA('employer')}
                  onMouseLeave={() => setActiveCTA(null)}
                  className={`
                    flex-1 group relative bg-white p-4 sm:p-5 rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300
                    ${activeCTA === 'employer' ? 'border-brand-orange/40 shadow-xl scale-[1.02]' : 'border-slate-100 shadow-sm'}
                  `}
                >
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-500 ${activeCTA === 'employer' ? 'bg-brand-orange text-white -rotate-12' : 'bg-slate-50 text-slate-400 group-hover:-rotate-12'}`}>
                            <Building2 size={18} />
                        </div>
                        <div className="bg-orange-50 text-brand-orange text-[7px] sm:text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest">
                            {t('hero.forCompanies')}
                        </div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-black text-brand-dark mb-0.5">{t('hero.startAsCompany')}</h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium mb-2">{t('hero.findTalents')}</p>
                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-black text-brand-orange">
                        {t('hero.startNow')} <ArrowRight size={12} />
                    </div>
                </a>

                {/* FACHKRAFT */}
                <a 
                   href="#/talent" 
                   onClick={(e) => handleNavClick(e, '#/talent')}
                   onMouseEnter={() => setActiveCTA('talent')}
                   onMouseLeave={() => setActiveCTA(null)}
                   className={`
                    flex-1 group relative bg-white p-4 sm:p-5 rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300
                    ${activeCTA === 'talent' ? 'border-brand-teal/40 shadow-xl scale-[1.02]' : 'border-slate-100 shadow-sm'}
                   `}
                >
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-500 ${activeCTA === 'talent' ? 'bg-brand-teal text-white rotate-12' : 'bg-slate-50 text-slate-400 group-hover:rotate-12'}`}>
                            <UserCheck size={18} />
                        </div>
                        <div className="bg-teal-50 text-brand-teal text-[7px] sm:text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest">
                            {t('hero.forApplicants')}
                        </div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-black text-brand-dark mb-0.5">{t('hero.startAsTalent')}</h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium mb-2">{t('hero.secureDreamJob')}</p>
                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-black text-brand-teal">
                        {t('hero.applyNow')} <ArrowRight size={12} />
                    </div>
                </a>
            </div>
          </div>
        }
      >
        {/* --- HIGH-FIDELITY DASHBOARD (DENSITY UPGRADE) --- */}
        <div className="w-full h-full flex flex-col font-sans text-brand-dark bg-white select-none overflow-hidden text-[10px]">
          
          {/* App Header */}
          <div className="h-10 md:h-14 border-b border-slate-100 flex items-center justify-between px-4 md:px-8 bg-white shrink-0 z-50">
             <div className="flex items-center gap-4 md:gap-8">
                <Logo className="h-3 md:h-4 opacity-80" />
                <div className="hidden md:flex items-center gap-6 text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">
                   <span className="text-brand-dark border-b-2 border-brand-orange py-5">{t('dashboard.overview')}</span>
                   <span className="hover:text-brand-dark transition-colors cursor-pointer">{t('dashboard.pipeline')}</span>
                   <span className="hover:text-brand-dark transition-colors cursor-pointer">{t('dashboard.documents')}</span>
                </div>
             </div>
             <div className="flex items-center gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400"><Search size={14}/></div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white shadow-sm overflow-hidden ring-1 ring-slate-100">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" className="w-full h-full object-cover grayscale opacity-80" alt="User" />
                </div>
             </div>
          </div>

          <div className="flex-1 flex min-h-0 overflow-hidden relative">
             {/* Sidebar (Slimmer on mobile) */}
             <div className="w-10 md:w-16 border-r border-slate-50 flex flex-col items-center py-4 md:py-8 gap-5 md:gap-8 shrink-0 bg-white z-40">
                <div className="p-2 md:p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl"><Zap size={16} fill="currentColor"/></div>
                <div className="text-slate-200"><Activity size={18} /></div>
                <div className="text-slate-200"><Users size={18} /></div>
                <div className="text-slate-200 mt-auto"><Settings size={18} /></div>
             </div>

             {/* Dynamic Content Scroll Area */}
             <div className="flex-1 bg-[#fcfdfe] p-4 md:p-8 overflow-y-auto hide-scrollbar relative">
                
                {/* Visual Data Layer */}
                <div className="flex justify-between items-end mb-6 md:mb-10 relative z-10">
                   <div>
                      <h3 className="text-sm md:text-xl font-black tracking-tight text-slate-800">{t('dashboard.recruitingCentral')}</h3>
                      <p className="text-[7px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> {t('dashboard.globalTalentFeed')}
                      </p>
                   </div>
                   <button 
                      onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                      className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-dark text-white text-[7px] md:text-[9px] font-black rounded-lg md:rounded-xl uppercase tracking-widest shadow-lg hover:shadow-brand-orange/20 hover:bg-brand-orange transition-all"
                   >
                      <Plus size={10}/> {t('dashboard.startDemo')}
                   </button>
                </div>

                {/* Performance Widgets Grid */}
                <div className="grid grid-cols-12 gap-3 md:gap-6 mb-6">
                   {[
                      { label: t('dashboard.activePipeline'), val: '1,420', change: '+12%', color: 'text-brand-dark', trend: '#ef9d56' },
                      { label: t('dashboard.aiMatchRate'), val: '98%', change: t('dashboard.optimal'), color: 'text-brand-teal', trend: '#74a6af' },
                      { label: t('dashboard.integrations'), val: '142', change: t('dashboard.live'), color: 'text-brand-orange', trend: '#ef9d56' }
                   ].map((stat, i) => (
                      <div key={i} className="col-span-4 bg-white p-3 md:p-5 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                         <div className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 md:mb-2 flex justify-between items-center">
                            {stat.label} <Sparkline color={stat.trend} />
                         </div>
                         <div className={`text-base md:text-2xl font-black tracking-tighter ${stat.color}`}>{stat.val}</div>
                         <div className="mt-1 text-[6px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest">{stat.change}</div>
                         <div className="absolute bottom-0 left-0 h-0.5 bg-brand-orange/30 w-0 group-hover:w-full transition-all duration-700"></div>
                      </div>
                   ))}
                </div>

                <div className="grid grid-cols-12 gap-4 md:gap-6 h-full min-h-0">
                   {/* AI Sourcing Visual (Enhanced) */}
                   <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                      <div className="bg-brand-dark rounded-[1.5rem] md:rounded-[2rem] shadow-2xl p-4 md:p-6 flex-1 flex flex-col relative overflow-hidden group">
                         <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                         
                         <div className="flex items-center justify-between mb-6 md:mb-8 relative z-10">
                            <div className="font-black text-[7px] md:text-[9px] uppercase tracking-[0.25em] flex items-center gap-2 text-white/50">
                               <BrainCircuit size={14} className="text-brand-teal animate-spin-slow" /> {t('dashboard.intelligentSourcing')}
                            </div>
                            <BarChart3 size={14} className="text-white/20" />
                         </div>

                         <div className="space-y-4 md:space-y-6 relative z-10">
                            <div className="flex gap-3 md:gap-4 items-start">
                               <div className="w-8 h-8 rounded-lg md:rounded-xl bg-white/10 border border-white/10 flex-shrink-0 flex items-center justify-center text-white/40"><MousePointer2 size={12}/></div>
                               <div className="bg-white/5 backdrop-blur-md p-3 md:p-4 rounded-xl rounded-tl-none border border-white/10 text-[9px] md:text-[11px] font-bold text-slate-300 max-w-[85%] leading-relaxed">
                                  "{t('dashboard.searchQuery')}"
                               </div>
                            </div>
                            
                            <div className="flex gap-3 md:gap-4 items-start flex-row-reverse">
                               <div className="w-8 h-8 rounded-lg md:rounded-xl bg-brand-orange text-white flex items-center justify-center text-[8px] md:text-[10px] font-black shrink-0 shadow-[0_0_15px_rgba(239,157,86,0.4)]">AI</div>
                               <div className="bg-white/[0.03] p-4 md:p-5 rounded-xl rounded-tr-none border border-white/5 text-[9px] md:text-[11px] font-medium text-white max-w-[90%] shadow-2xl leading-relaxed">
                                  {t('dashboard.foundCandidates')} <span className="text-brand-orange font-black">{t('dashboard.verifiedVisa')}</span>
                                  <div className="mt-4 md:mt-5 flex gap-2">
                                     <div className="px-2 py-1 md:px-3 md:py-1.5 bg-brand-orange rounded-lg text-[7px] md:text-[9px] font-black uppercase tracking-widest cursor-pointer hover:bg-orange-400">{t('dashboard.viewMatches')}</div>
                                     <div className="px-2 py-1 md:px-3 md:py-1.5 bg-white/10 rounded-lg text-[7px] md:text-[9px] font-black uppercase tracking-widest cursor-pointer hover:bg-white/20">{t('dashboard.analyzeScore')}</div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Activity Pipeline (Enhanced) */}
                   <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                      <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm p-4 md:p-6 flex flex-col flex-1 relative">
                         <div className="flex justify-between items-center mb-6 shrink-0">
                            <div className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] flex items-center gap-2">
                               <Globe size={14} className="text-brand-orange" /> {t('dashboard.realTimeUpdates')}
                            </div>
                            <MoreHorizontal size={14} className="text-slate-200" />
                         </div>
                         
                         <div className="space-y-3 overflow-y-auto hide-scrollbar">
                            {[
                              { name: 'Sarah M.', status: t('dashboard.visaRequest'), val: 85, color: 'bg-brand-orange' },
                              { name: 'Mateo S.', status: t('dashboard.interview'), val: 100, color: 'bg-brand-teal' },
                              { name: 'Elena K.', status: t('dashboard.docCheck'), val: 40, color: 'bg-blue-400' },
                              { name: 'Julia C.', status: t('dashboard.matching'), val: 12, color: 'bg-slate-300' }
                            ].map((item, i) => (
                              <div key={i} className="p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 cursor-pointer group">
                                 <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                       <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center font-black text-[7px] text-slate-400">{item.name[0]}</div>
                                       <span className="text-[9px] md:text-[11px] font-black text-slate-800">{item.name}</span>
                                    </div>
                                    <span className="text-[7px] md:text-[8px] font-black text-slate-400 uppercase tracking-widest">{item.status}</span>
                                 </div>
                                 <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color} transition-all duration-[2s]`} style={{ width: `${item.val}%`, transitionDelay: `${i * 100}ms` }}></div>
                                 </div>
                              </div>
                            ))}
                         </div>

                         {/* Mini System Health */}
                         <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between text-slate-300">
                             <div className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest">
                                <ShieldCheck size={10} /> {t('dashboard.complianceSecured')}
                             </div>
                             <div className="text-[8px] font-bold">{t('dashboard.latency')}: 12ms</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};
