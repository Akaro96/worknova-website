
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
// Add missing Button import
import { Button } from '../components/Button';
import {
   Scale,
   Shield,
   FileText,
   UserCheck,
   Lock,
   RefreshCw,
   Clock,
   Globe,
   Activity,
   CreditCard,
   UserCircle,
   Upload,
   Ban,
   AlertTriangle,
   Gavel,
   MapPin,
   Mail,
   ChevronRight,
   Bookmark,
   Info,
   ExternalLink,
   ShieldCheck,
   CheckCircle2,
   // Add missing icons Building2 and CornerDownRight
   Building2,
   CornerDownRight
} from 'lucide-react';

export const NutzungsbedingungenPage: React.FC = () => {
   const { t } = useTranslation();
   const [scrollProgress, setScrollProgress] = useState(0);
   const [activeSection, setActiveSection] = useState('1');

   useEffect(() => {
      window.scrollTo(0, 0);

      const handleScroll = () => {
         // Update Progress Bar
         const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
         const progress = (window.scrollY / totalHeight) * 100;
         setScrollProgress(progress);

         // Update Active Section in Nav
         const sectionElements = sections.map(s => document.getElementById(`sec-${s.id}`));
         const currentScroll = window.scrollY + 200;

         for (let i = sectionElements.length - 1; i >= 0; i--) {
            const el = sectionElements[i];
            if (el && el.offsetTop <= currentScroll) {
               setActiveSection(sections[i].id);
               break;
            }
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);



   const sections = [
      { id: '1', label: `§ 1`, titleKey: 'termsPage.sections.sec1.title', icon: <Scale size={14} /> },
      { id: '2', label: `§ 2`, titleKey: 'termsPage.sections.sec2.title', icon: <RefreshCw size={14} /> },
      { id: '3', label: `§ 3`, titleKey: 'termsPage.sections.sec3.title', icon: <UserCheck size={14} /> },
      { id: '4', label: `§ 4`, titleKey: 'termsPage.sections.sec4.title', icon: <FileText size={14} /> },
      { id: '5', label: `§ 5`, titleKey: 'termsPage.sections.sec5.title', icon: <Lock size={14} /> },
      { id: '6', label: `§ 6`, titleKey: 'termsPage.sections.sec6.title', icon: <RefreshCw size={14} /> },
      { id: '7', label: `§ 7`, titleKey: 'termsPage.sections.sec7.title', icon: <Clock size={14} /> },
      { id: '8', label: `§ 8`, titleKey: 'termsPage.sections.sec8.title', icon: <Globe size={14} /> },
      { id: '9', label: `§ 9`, titleKey: 'termsPage.sections.sec9.title', icon: <RefreshCw size={14} /> },
      { id: '10', label: `§ 10`, titleKey: 'termsPage.sections.sec10.title', icon: <Shield size={14} /> },
      { id: '11', label: `§ 11`, titleKey: 'termsPage.sections.sec11.title', icon: <Activity size={14} /> },
      { id: '12', label: `§ 12`, titleKey: 'termsPage.sections.sec12.title', icon: <CreditCard size={14} /> },
      { id: '13', label: `§ 13`, titleKey: 'termsPage.sections.sec13.title', icon: <UserCircle size={14} /> },
      { id: '14', label: `§ 14`, titleKey: 'termsPage.sections.sec14.title', icon: <Upload size={14} /> },
      { id: '15', label: `§ 15`, titleKey: 'termsPage.sections.sec15.title', icon: <FileText size={14} /> },
      { id: '16', label: `§ 16`, titleKey: 'termsPage.sections.sec16.title', icon: <Ban size={14} /> },
      { id: '17', label: `§ 17`, titleKey: 'termsPage.sections.sec17.title', icon: <AlertTriangle size={14} /> },
      { id: '18', label: `§ 18`, titleKey: 'termsPage.sections.sec18.title', icon: <Shield size={14} /> },
      { id: '19', label: `§ 19`, titleKey: 'termsPage.sections.sec19.title', icon: <Gavel size={14} /> },
      { id: '20', label: `§ 20`, titleKey: 'termsPage.sections.sec20.title', icon: <FileText size={14} /> },
      { id: '21', label: `§ 21`, titleKey: 'termsPage.sections.sec21.title', icon: <Scale size={14} /> },
      { id: '22', label: `§ 22`, titleKey: 'termsPage.sections.sec22.title', icon: <Gavel size={14} /> },
      { id: '23', label: `§ 23`, titleKey: 'termsPage.sections.sec23.title', icon: <MapPin size={14} /> },
   ];

   return (
      <div className="min-h-screen bg-[#fffbf7] font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">

         {/* --- READING PROGRESS BAR --- */}
         <div className="fixed top-0 left-0 w-full h-1.5 z-[110] bg-slate-100">
            <div
               className="h-full bg-gradient-to-r from-brand-orange to-red-500 shadow-[0_0_10px_rgba(239,157,86,0.5)] transition-all duration-300 ease-out"
               style={{ width: `${scrollProgress}%` }}
            ></div>
         </div>

         {/* --- HERO HEADER --- */}
         <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 bg-brand-dark overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full"></div>
               <div className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] bg-brand-teal/5 blur-[100px] rounded-full"></div>
               <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
               <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-12 animate-fade-up">
                  <Scale size={14} className="animate-pulse" />
                  {t('termsPage.legalFramework')}
               </div>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-10 animate-fade-up [animation-delay:200ms]">
                  {t('termsPage.titlePart1')}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-white to-brand-teal">
                     {t('termsPage.titlePart2')}
                  </span>
               </h1>
               <div className="flex flex-col items-center gap-4 animate-fade-up [animation-delay:400ms]">
                  <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                     {t('termsPage.subtitle')}
                  </p>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                     {t('termsPage.version')}
                  </p>
               </div>
            </div>

            {/* Decorative Scroll Hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce opacity-40">
               <span className="text-[10px] font-black uppercase tracking-widest">{t('termsPage.scroll')}</span>
               <ChevronRight className="rotate-90" size={16} />
            </div>
         </section>

         {/* --- MAIN CONTENT AREA --- */}
         <section className="py-24 lg:py-40">
            <div className="max-w-[1400px] mx-auto px-6">
               <div className="grid lg:grid-cols-[340px_1fr] gap-20 items-start">

                  {/* STICKY SIDE NAV */}
                  <aside className="hidden lg:block sticky top-32 group/sidebar">
                     <div className="bg-white border border-slate-200 rounded-[3rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-slate-300">
                        <div className="flex items-center justify-between mb-8 px-2">
                           <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{t('termsPage.tableOfContents')}</div>
                           <Bookmark size={14} className="text-brand-orange" />
                        </div>
                        <nav className="space-y-1 max-h-[60vh] overflow-y-auto custom-scrollbar pr-3">
                           {sections.map((item) => (
                              <button
                                 key={item.id}
                                 onClick={() => {
                                    const element = document.getElementById(`sec-${item.id}`);
                                    if (element) {
                                       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                 }}
                                 className={`
                                w-full flex items-center gap-4 p-3.5 rounded-2xl text-[12px] font-bold transition-all duration-300 group/nav text-left
                                ${activeSection === item.id
                                       ? 'bg-brand-orange/10 text-brand-orange shadow-inner'
                                       : 'text-slate-500 hover:bg-slate-50 hover:text-brand-dark'
                                    }
                             `}
                              >
                                 <span className={`
                                shrink-0 transition-colors duration-300 
                                ${activeSection === item.id ? 'text-brand-orange' : 'text-slate-400 group-hover/nav:text-brand-orange'}
                             `}>
                                    {item.icon}
                                 </span>
                                 <span className="truncate">{item.label} {t(item.titleKey).length > 20 ? t(item.titleKey).substring(0, 18) + '...' : t(item.titleKey)}</span>
                                 {activeSection === item.id && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></div>
                                 )}
                              </button>
                           ))}
                        </nav>
                        <div className="mt-10 pt-8 border-t border-slate-100 px-2 text-center space-y-4">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight italic">
                              Morsnova GmbH <br /> Legal Department
                           </p>
                           <Button
                              variant="outline"
                              className="w-full !py-3 !text-[10px] !rounded-xl opacity-60 hover:opacity-100"
                              onClick={() => window.print()}
                           >
                              Als PDF drucken
                           </Button>
                        </div>
                     </div>
                  </aside>

                  {/* VERBATIM TEXT CONTENT */}
                  <div className="space-y-32 max-w-4xl">

                     {/* INTRODUCTION BLOCK */}
                     <div className="bg-white rounded-[3.5rem] p-12 md:p-16 border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.02)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-bl-[120px] -z-0"></div>
                        <div className="relative z-10">
                           <Logo className="h-6 opacity-30 grayscale mb-10" />
                           <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 leading-tight">
                              {t('termsPage.titlePart1')} {t('termsPage.titlePart2')}
                           </h2>
                           <div className="h-1.5 w-24 bg-brand-orange rounded-full mb-10"></div>
                           <div className="flex flex-wrap gap-x-8 gap-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                              <span className="flex items-center gap-2"><Info size={14} className="text-brand-teal" /> Morsnova GmbH</span>
                              <span className="flex items-center gap-2"><Clock size={14} className="text-brand-teal" /> {t('termsPage.version')}</span>
                           </div>
                        </div>
                     </div>

                     {/* § 1 */}
                     <section id="sec-1" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 1
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec1.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-8 text-lg">
                           <p>{t('termsPage.sections.sec1.content.p1')}</p>

                           <div className="grid md:grid-cols-2 gap-8 my-10">
                              <div className="bg-[#fdf9f4] p-8 rounded-[2.5rem] border border-brand-orange/10 relative overflow-hidden group/card shadow-sm hover:shadow-md transition-shadow">
                                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-orange/5 rounded-full"></div>
                                 <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-orange mb-6"><Building2 size={24} /></div>
                                 <h4 className="text-brand-orange font-black text-xs uppercase tracking-widest mb-4">{t('termsPage.sections.sec1.content.companyTitle')}</h4>
                                 <p className="text-sm leading-relaxed">
                                    {t('termsPage.sections.sec1.content.companyText')}
                                 </p>
                              </div>
                              <div className="bg-[#f4f9fa] p-8 rounded-[2.5rem] border border-brand-teal/10 relative overflow-hidden group/card shadow-sm hover:shadow-md transition-shadow">
                                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-teal/5 rounded-full"></div>
                                 <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-teal mb-6"><UserCheck size={24} /></div>
                                 <h4 className="text-brand-teal font-black text-xs uppercase tracking-widest mb-4">{t('termsPage.sections.sec1.content.applicantTitle')}</h4>
                                 <p className="text-sm leading-relaxed">
                                    {t('termsPage.sections.sec1.content.applicantText')}
                                 </p>
                              </div>
                           </div>

                           <p>{t('termsPage.sections.sec1.content.p2')}</p>
                           <p>{t('termsPage.sections.sec1.content.p3')}</p>
                           <p>{t('termsPage.sections.sec1.content.p4')}</p>
                           <div className="p-6 bg-slate-50 border-l-4 border-slate-200 rounded-r-2xl italic text-slate-500 text-base">
                              {t('termsPage.sections.sec1.content.p5')}
                           </div>
                        </div>
                     </section>

                     {/* § 2 */}
                     <section id="sec-2" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 2
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec2.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>{t('termsPage.sections.sec2.content.p1')}</p>
                           <p>{t('termsPage.sections.sec2.content.p2')}</p>
                        </div>
                     </section>

                     {/* § 3 */}
                     <section id="sec-3" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 3
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec3.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>{t('termsPage.sections.sec3.content.p1')}</p>
                           <p>{t('termsPage.sections.sec3.content.p2')}</p>
                        </div>
                     </section>

                     {/* § 4 */}
                     <section id="sec-4" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 4
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec4.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-8 text-lg">
                           <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 flex gap-6 items-start">
                              <Info className="text-blue-500 shrink-0 mt-1" />
                              <p className="text-sm font-bold text-blue-900 leading-relaxed">
                                 {t('termsPage.sections.sec4.content.p1')}
                              </p>
                           </div>
                           <p>{t('termsPage.sections.sec4.content.p2')}</p>
                           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-2 h-full bg-brand-teal/20"></div>
                              <p>{t('termsPage.sections.sec4.content.p3')}</p>
                           </div>
                        </div>
                     </section>

                     {/* § 5 */}
                     <section id="sec-5" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 5
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec5.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>{t('termsPage.sections.sec5.content.p1')}</p>
                           <p>{t('termsPage.sections.sec5.content.p2')}</p>
                           <p>{t('termsPage.sections.sec5.content.p3')}</p>
                           <div className="p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-900 font-bold">
                              <AlertTriangle size={24} className="shrink-0" />
                              <p className="text-sm">{t('termsPage.sections.sec5.content.alert')}</p>
                           </div>
                        </div>
                     </section>

                     {/* § 6 */}
                     <section id="sec-6" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 6
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec6.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium text-lg">
                           <p>{t('termsPage.sections.sec6.content.p1')}</p>
                        </div>
                     </section>

                     {/* § 7 */}
                     <section id="sec-7" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 7
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec7.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-8 text-lg">
                           <div className="grid md:grid-cols-2 gap-8">
                              <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                                 <h4 className="text-brand-teal font-black text-xs uppercase tracking-widest mb-4">{t('termsPage.sections.sec7.content.applicantTitle')}</h4>
                                 <p className="text-sm leading-relaxed">
                                    {t('termsPage.sections.sec7.content.applicantText')}
                                 </p>
                              </div>
                              <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                                 <h4 className="text-brand-orange font-black text-xs uppercase tracking-widest mb-4">{t('termsPage.sections.sec7.content.companyTitle')}</h4>
                                 <p className="text-sm leading-relaxed">
                                    {t('termsPage.sections.sec7.content.companyText')}
                                 </p>
                              </div>
                           </div>
                           <div className="space-y-6">
                              <p>{t('termsPage.sections.sec7.content.p3')}</p>
                              <div className="p-6 bg-slate-900 text-white rounded-3xl flex items-center gap-5">
                                 <Mail className="text-brand-orange shrink-0" size={24} />
                                 <p className="text-sm font-bold">
                                    {t('termsPage.sections.sec7.content.p4')}
                                 </p>
                              </div>
                              <p>{t('termsPage.sections.sec7.content.p5')}</p>
                              <p className="text-slate-400 font-bold border-t border-slate-100 pt-6">
                                 {t('termsPage.sections.sec7.content.p6')}
                              </p>
                           </div>
                        </div>
                     </section>

                     {/* § 8 */}
                     <section id="sec-8" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 8
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec8.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-8 text-lg">
                           <p>{t('termsPage.sections.sec8.content.p1')}</p>
                           <p>{t('termsPage.sections.sec8.content.p2')}</p>
                           <p>{t('termsPage.sections.sec8.content.p3')}</p>
                           <p>{t('termsPage.sections.sec8.content.p4')}</p>
                           <p>{t('termsPage.sections.sec8.content.p5')}</p>

                           <div className="p-10 bg-brand-dark rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
                              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full"></div>
                              <h4 className="text-xl font-black mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
                                 <ShieldCheck className="text-brand-orange" />
                                 {t('termsPage.sections.sec8.content.subtitle')}
                              </h4>
                              <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
                                 <p>{t('termsPage.sections.sec8.content.p6')}</p>
                                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6">
                                    <p className="font-bold text-white text-base">
                                       {t('termsPage.sections.sec8.content.p7')}
                                    </p>
                                    <div className="flex gap-4 p-5 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-300">
                                       <AlertTriangle className="shrink-0" />
                                       <p className="text-xs leading-relaxed">
                                          {t('termsPage.sections.sec8.content.alert')}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     {/* § 9 */}
                     <section id="sec-9" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 9
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec9.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium text-lg">
                           <p>{t('termsPage.sections.sec9.content.p1')}</p>
                        </div>
                     </section>

                     {/* § 10 */}
                     <section id="sec-10" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 10
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec10.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>{t('termsPage.sections.sec10.content.p1')}</p>
                           <p>{t('termsPage.sections.sec10.content.p2')}</p>
                        </div>
                     </section>

                     {/* § 11 */}
                     <section id="sec-11" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 11
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec11.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>{t('termsPage.sections.sec11.content.p1')}</p>
                           <p>{t('termsPage.sections.sec11.content.p2')}</p>
                           <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-6">
                              <Activity className="text-brand-orange shrink-0" />
                              <p className="text-sm font-bold text-slate-500 italic leading-relaxed">
                                 {t('termsPage.sections.sec11.content.p3')}
                              </p>
                           </div>
                        </div>
                     </section>

                     {/* § 12 */}
                     <section id="sec-12" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 12
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec12.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>
                              {t('termsPage.sections.sec12.content.p1')}
                           </p>
                           <p className="font-bold text-brand-dark">
                              {t('termsPage.sections.sec12.content.p2')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec12.content.p3')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec12.content.p4')}
                           </p>
                        </div>
                     </section>

                     {/* § 13 */}
                     <section id="sec-13" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 13
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec13.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>
                              {t('termsPage.sections.sec13.content.p1')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec13.content.p2')}
                           </p>
                        </div>
                     </section>

                     {/* § 14 */}
                     <section id="sec-14" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 14
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec14.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>
                              {t('termsPage.sections.sec14.content.p1')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec14.content.p2')}
                           </p>
                           <ul className="list-none pl-4 space-y-4">
                              <li className="flex items-start gap-4">
                                 <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-1" />
                                 <span>{t('termsPage.sections.sec14.content.li1')}</span>
                              </li>
                              <li className="flex items-start gap-4">
                                 <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-1" />
                                 <span>{t('termsPage.sections.sec14.content.li2')}</span>
                              </li>
                              <li className="flex items-start gap-4">
                                 <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-1" />
                                 <span>{t('termsPage.sections.sec14.content.li3')}</span>
                              </li>
                           </ul>
                           <p className="italic text-slate-500">
                              {t('termsPage.sections.sec14.content.note')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec14.content.p3')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec14.content.p4')}
                           </p>
                        </div>
                     </section>

                     {/* § 15 */}
                     <section id="sec-15" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 15
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec15.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>
                              {t('termsPage.sections.sec15.content.p1')}
                           </p>
                           <ul className="list-none pl-4 space-y-4">
                              <li className="flex items-start gap-4">
                                 <CornerDownRight size={18} className="text-slate-400 shrink-0 mt-1" />
                                 <span>{t('termsPage.sections.sec15.content.li1')}</span>
                              </li>
                              <li className="flex items-start gap-4">
                                 <CornerDownRight size={18} className="text-slate-400 shrink-0 mt-1" />
                                 <span>{t('termsPage.sections.sec15.content.li2')}</span>
                              </li>
                           </ul>
                           <p>
                              {t('termsPage.sections.sec15.content.p2')}
                           </p>
                           <p className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-sm">
                              {t('termsPage.sections.sec15.content.note')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec15.content.p3')}
                           </p>
                        </div>
                     </section>

                     {/* § 16 */}
                     <section id="sec-16" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 16
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec16.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-10 text-lg">
                           <div className="space-y-4">
                              <p>{t('termsPage.sections.sec16.content.p1')}</p>
                              <ul className="list-disc pl-8 space-y-2 text-base">
                                 <li>{t('termsPage.sections.sec16.content.ul1.li1')}</li>
                                 <li>{t('termsPage.sections.sec16.content.ul1.li2')}</li>
                                 <li>{t('termsPage.sections.sec16.content.ul1.li3')}</li>
                              </ul>
                           </div>

                           <div className="bg-red-50 p-10 rounded-[3rem] border border-red-100 relative overflow-hidden group/red">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-bl-full"></div>
                              <p className="font-black text-red-900 mb-6 flex items-center gap-3">
                                 <Ban className="shrink-0" /> {t('termsPage.sections.sec16.content.p2')}
                              </p>
                              <ul className="list-disc pl-8 space-y-3 text-red-800 text-base">
                                 <li>{t('termsPage.sections.sec16.content.ul2.li1')}</li>
                                 <li>{t('termsPage.sections.sec16.content.ul2.li2')}</li>
                                 <li>{t('termsPage.sections.sec16.content.ul2.li3')}</li>
                              </ul>
                           </div>

                           <div className="space-y-4">
                              <p>{t('termsPage.sections.sec16.content.p3')}</p>
                              <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                                 {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <li key={num} className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                                       <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                       {/* @ts-ignore */}
                                       <span className="text-xs font-bold text-slate-500 leading-snug">{t(`termsPage.sections.sec16.content.ul3.li${num}`)}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>

                           <p>
                              {t('termsPage.sections.sec16.content.p4')}
                           </p>
                           <p className="font-black text-brand-dark p-6 bg-slate-100 rounded-2xl">
                              {t('termsPage.sections.sec16.content.p5')}
                           </p>
                        </div>
                     </section>

                     {/* § 17 */}
                     <section id="sec-17" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 17
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec17.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>
                              {t('termsPage.sections.sec17.content.p1')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec17.content.p2')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec17.content.p3')}
                           </p>
                        </div>
                     </section>

                     {/* § 18 */}
                     <section id="sec-18" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 18
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec18.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>
                              {t('termsPage.sections.sec18.content.p1')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec18.content.p2')}
                           </p>
                        </div>
                     </section>

                     {/* § 19 */}
                     <section id="sec-19" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 19
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec19.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>
                              {t('termsPage.sections.sec19.content.p1')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec19.content.p2')}
                           </p>
                           <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full"></div>
                              <p>
                                 {t('termsPage.sections.sec19.content.p3')}
                              </p>
                           </div>
                           <p>
                              {t('termsPage.sections.sec19.content.p4')}
                           </p>
                        </div>
                     </section>

                     {/* § 20 */}
                     <section id="sec-20" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 20
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec20.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium text-lg italic">
                           <p>
                              {t('termsPage.sections.sec20.content.p1')}
                           </p>
                        </div>
                     </section>

                     {/* § 21 */}
                     <section id="sec-21" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 21
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec21.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium text-lg">
                           <p>
                              {t('termsPage.sections.sec21.content.p1')}
                           </p>
                        </div>
                     </section>

                     {/* § 22 */}
                     <section id="sec-22" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 22
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec22.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium space-y-6 text-lg">
                           <p>
                              {t('termsPage.sections.sec22.content.p1')}
                           </p>
                           <p>
                              {t('termsPage.sections.sec22.content.p2')}
                           </p>
                        </div>
                     </section>

                     {/* § 23 */}
                     <section id="sec-23" className="scroll-mt-32 group">
                        <div className="flex items-center gap-6 mb-10">
                           <div className="w-16 h-16 rounded-[1.8rem] bg-brand-orange/5 text-brand-orange flex items-center justify-center font-serif text-3xl font-black italic shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                              § 23
                           </div>
                           <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('termsPage.sections.sec23.title')}</h3>
                        </div>
                        <div className="prose-legal text-slate-600 leading-relaxed font-medium text-lg">
                           <p>
                              {t('termsPage.sections.sec23.content.p1')}
                           </p>
                        </div>
                     </section>

                     {/* SIGNATURE AREA */}
                     <div className="pt-24 border-t border-slate-200">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                           <div>
                              <Logo className="h-10 grayscale opacity-30 mb-10" />
                              <div className="space-y-2 text-base font-bold text-slate-400 leading-relaxed">
                                 <p className="text-brand-dark font-black tracking-tight">Morsnova GmbH</p>
                                 <p>Karlstraße 68, 76137 Karlsruhe</p>
                                 <p>Deutschland</p>
                                 <div className="flex items-center gap-3 text-brand-orange mt-6 pt-6 border-t border-slate-100">
                                    <Mail size={18} />
                                    <span className="font-black">support@worknova.de</span>
                                 </div>
                              </div>
                           </div>
                           <div className="text-left md:text-right">
                              <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Dokument-Validierung</div>
                              <div className="inline-block p-8 border-2 border-slate-100 rounded-[3rem] bg-white shadow-2xl transition-all hover:border-brand-teal/30 hover:scale-[1.02] cursor-default">
                                 <p className="font-mono text-sm text-brand-dark font-black tracking-tighter uppercase mb-4">WN-LEGAL-TOS-V1.0-2025</p>
                                 <div className="h-px w-full bg-slate-100 my-4"></div>
                                 <div className="flex items-center gap-3 justify-end text-brand-teal">
                                    <p className="text-[10px] font-black uppercase tracking-widest">Digitally Verified</p>
                                    <ShieldCheck size={18} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>

         <Footer />

         {/* --- FLOATING ACTIONS --- */}
         <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4">
            <button
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center text-slate-400 hover:text-brand-orange hover:border-brand-orange transition-all duration-300 hover:-translate-y-1"
            >
               <ChevronRight className="-rotate-90" size={20} />
            </button>
         </div>

         <style dangerouslySetInnerHTML={{
            __html: `
        .prose-legal p { margin-bottom: 1.5rem; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ef9d56; }
      `}} />
      </div>
   );
};
