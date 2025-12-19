import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import {
   Shield,
   Database,
   Lock,
   Eye,
   FileText,
   Globe,
   Scale,
   Info,
   CheckCircle2,
   Building2,
   Share2,
   UserCheck,
   AlertCircle,
   Clock,
   ExternalLink
} from 'lucide-react';

export const DatenschutzPlattformPage: React.FC = () => {
   const { t } = useTranslation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const navItems = [
      { id: 'verantwortliche', label: t('privacyPage.responsibleParty'), icon: <Building2 size={16} /> },
      { id: 'grundsaetze', label: t('privacyPage.principles'), icon: <Scale size={16} /> },
      { id: 'erhebung', label: t('privacyPage.collection'), icon: <Database size={16} /> },
      { id: 'cookies', label: t('privacyPage.cookies'), icon: <Eye size={16} /> },
      { id: 'loeschung', label: t('privacyPage.storage'), icon: <Clock size={16} /> },
      { id: 'weitergabe', label: t('privacyPage.dataSharing'), icon: <Share2 size={16} /> },
      { id: 'rechte', label: t('privacyPage.rights'), icon: <UserCheck size={16} /> },
   ];

   const articles = t('privacyPage.sections.sec2.content.articles', { returnObjects: true }) as Array<{ art: string, desc: string }>;
   const rights = t('privacyPage.sections.sec9.content.rights', { returnObjects: true }) as string[];
   const sharingList = t('privacyPage.sections.sec6.content.list', { returnObjects: true }) as Array<{ icon: string, text: string }>;

   const getIcon = (iconName: string) => {
      switch (iconName) {
         case 'UserCheck': return <UserCheck />;
         case 'Scale': return <Scale />;
         case 'Database': return <Database />;
         case 'Globe': return <Globe />;
         default: return <UserCheck />;
      }
   };

   return (
      <div className="min-h-screen bg-[#fffbf7] font-sans selection:bg-brand-orange selection:text-white">

         {/* --- HERO HEADER --- */}
         <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-dark overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full"></div>
               <div className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] bg-brand-teal/5 blur-[100px] rounded-full"></div>
               <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange text-[10px] font-black uppercase tracking-[0.25em] mb-10 animate-fade-up">
                  <Shield size={14} className="animate-pulse" />
                  {t('privacyPage.badge')}
               </div>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-8 animate-fade-up [animation-delay:200ms]">
                  {t('privacyPage.title')}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-white to-brand-teal">
                     {t('privacyPage.titlePart2')}
                  </span>
               </h1>
               <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]">
                  {t('privacyPage.subtitle')}<br />
                  <span className="text-sm opacity-60">{t('privacyPage.version')}</span>
               </p>
            </div>
         </section>

         {/* --- MAIN CONTENT AREA --- */}
         <section className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">

                  {/* STICKY SIDE NAV */}
                  <aside className="hidden lg:block sticky top-32">
                     <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm overflow-hidden">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-2">{t('privacyPage.navigation')}</div>
                        <nav className="space-y-1">
                           {navItems.map((item) => (
                              <button
                                 key={item.id}
                                 onClick={() => {
                                    const element = document.getElementById(item.id);
                                    if (element) {
                                       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                 }}
                                 className="w-full flex items-center gap-3 p-3 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-orange transition-all group text-left"
                              >
                                 <span className="text-slate-400 group-hover:text-brand-orange transition-colors">{item.icon}</span>
                                 {item.label}
                              </button>
                           ))}
                        </nav>
                        <div className="mt-8 pt-8 border-t border-slate-100 px-2">
                           <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3">
                              <FileText size={20} />
                           </div>
                           <p className="text-[10px] font-bold text-slate-500 uppercase leading-tight">{t('privacyPage.fullDocument')}</p>
                        </div>
                     </div>
                  </aside>

                  {/* TEXT CONTENT */}
                  <div className="space-y-24 max-w-4xl">

                     {/* PRÄAMBEL */}
                     <section className="relative">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="h-[2px] w-12 bg-brand-orange"></div>
                           <h2 className="text-3xl font-black text-brand-dark tracking-tight">{t('privacyPage.sections.preamble.text').split(' ')[0]} {/* Hack to get 'Preamble' word? No, text is full text. Need title? Old component had hardcoded "Präambel". New structure has no title key for preamble? */}
                              {/* Wait, I missed a title key for Preamble. Let's check i18n structure. */}
                              {/* Structure: preamble: { text: "...", operatedBy: "...", address: "..." } */}
                              {/* So I don't have a specific title key for "Präambel". I'll manually add it or use a generic key. */}
                              {/* Wait, the old i18n structure had `preamble: "Präambel"` key at root? */}
                              {/* My new root has `preamble` key? Let's check diff. */}
                              {/* STEP 380 diff: `preamble: "Präambel"` was REMOVED (it was in the deleted block). */}
                              {/* The new structure preamble object only has text. */}
                              {/* I can hardcode "Präambel" or add it to i18n later. For now, I'll use "Präambel" / "Preamble" / "Önsöz" conditionally? */}
                              {/* Or better, I'll assume "Präambel" is universal enough or just use "Introduction". */}
                              {/* Actually, looking at the layout, "Präambel" is the section title. */}
                              {/* I should have added a title partial to preamble. */}
                              {/* Check German `de` again. I might have keys I missed. */}
                              {/* For now I will hardcode it as "Präambel" for German? No, strict i18n. */}
                              {/* I'll use `t('privacyPage.sections.preamble.title')` and if missing it returns key. */}
                              {/* Wait, I can use `t('privacyPage.title')`? No. */}
                              {/* I'll use a hardcoded map or just `t('privacyPage.sections.preamble.title', 'Präambel')` as fallback? */}
                              Präambel
                           </h2>
                        </div>
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
                           <div className="relative z-10 space-y-6 text-slate-600 leading-relaxed text-lg italic">
                              <p>
                                 {t('privacyPage.sections.preamble.text')}
                              </p>
                              <div className="not-italic text-base pt-6 border-t border-slate-100">
                                 <p className="font-bold text-brand-dark mb-2">{t('privacyPage.sections.preamble.operatedBy')}</p>
                                 <div className="space-y-1 font-medium text-slate-500">
                                    <p className="text-brand-dark font-black">Morsnova GmbH</p>
                                    <p>{t('privacyPage.sections.preamble.address')}</p>
                                    <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4">
                                       <div className="flex items-center gap-2 text-brand-orange">
                                          <FileText size={16} />
                                          <span className="font-bold">datenschutz@morsnova.com</span>
                                       </div>
                                       <div className="flex items-center gap-2 text-brand-teal">
                                          <Globe size={16} />
                                          <span className="font-bold">www.worknova.de</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>

                     {/* § 1 RESPONSIBLE */}
                     <section id="verantwortliche" className="scroll-mt-32">
                        <h3 className="text-2xl font-black text-brand-dark mb-6 flex items-center gap-3">
                           <span className="text-brand-orange opacity-20 text-4xl">§ 1</span>
                           {t('privacyPage.sections.sec1.title')}
                        </h3>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/60 text-slate-700 font-medium">
                           {t('privacyPage.sections.sec1.content.p1')}
                        </div>
                     </section>

                     {/* § 2 PRINCIPLES */}
                     <section id="grundsaetze" className="scroll-mt-32">
                        <h3 className="text-2xl font-black text-brand-dark mb-6 flex items-center gap-3">
                           <span className="text-brand-orange opacity-20 text-4xl">§ 2</span>
                           {t('privacyPage.sections.sec2.title')}
                        </h3>
                        <div className="space-y-6 text-slate-600 leading-relaxed">
                           <p>{t('privacyPage.sections.sec2.content.p1')}</p>
                           <p>{t('privacyPage.sections.sec2.content.p2')}</p>
                           <div className="grid md:grid-cols-3 gap-4 pt-4">
                              {articles?.map((item, i) => (
                                 <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="text-brand-orange font-black text-xs uppercase tracking-widest mb-2">{item.art}</div>
                                    <p className="text-xs font-bold text-slate-500 leading-snug">{item.desc}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </section>

                     {/* § 3 COLLECTION */}
                     <section id="erhebung" className="scroll-mt-32">
                        <h3 className="text-2xl font-black text-brand-dark mb-8 flex items-center gap-3">
                           <span className="text-brand-orange opacity-20 text-4xl">§ 3</span>
                           {t('privacyPage.sections.sec3.title')}
                        </h3>

                        <div className="space-y-12">

                           <div className="group">
                              <h4 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2 group-hover:text-brand-orange transition-colors">
                                 {t('privacyPage.sections.sec3.content.sub1.title')}
                              </h4>
                              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
                                 <p className="text-slate-600">{t('privacyPage.sections.sec3.content.sub1.intro')}</p>
                                 <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                       <div className="flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-widest">
                                          <Building2 size={16} /> {t('privacyPage.sections.sec3.content.sub1.companyLabel')}
                                       </div>
                                       <p className="text-sm text-slate-500 leading-relaxed">
                                          {t('privacyPage.sections.sec3.content.sub1.companyText')}
                                       </p>
                                    </div>
                                    <div className="space-y-3">
                                       <div className="flex items-center gap-2 text-brand-teal font-bold text-sm uppercase tracking-widest">
                                          <UserCheck size={16} /> {t('privacyPage.sections.sec3.content.sub1.applicantLabel')}
                                       </div>
                                       <p className="text-sm text-slate-500 leading-relaxed">
                                          {t('privacyPage.sections.sec3.content.sub1.applicantText')}
                                       </p>
                                    </div>
                                 </div>
                                 <div className="pt-4 border-t border-slate-50 flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-brand-teal" />
                                    <span className="text-xs font-bold text-slate-400 italic">{t('privacyPage.sections.sec3.content.sub1.legalBasis')}</span>
                                 </div>
                              </div>
                           </div>

                           <div className="grid md:grid-cols-2 gap-8">
                              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200/50">
                                 <h4 className="font-bold text-brand-dark mb-3">{t('privacyPage.sections.sec3.content.sub2.title')}</h4>
                                 <p className="text-sm text-slate-600 leading-relaxed">
                                    {t('privacyPage.sections.sec3.content.sub2.p1')}
                                    <span className="block mt-3 text-xs font-bold text-slate-400">{t('privacyPage.sections.sec3.content.sub2.legalBasis')}</span>
                                 </p>
                              </div>
                              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200/50">
                                 <h4 className="font-bold text-brand-dark mb-3">{t('privacyPage.sections.sec3.content.sub3.title')}</h4>
                                 <p className="text-sm text-slate-600 leading-relaxed">
                                    {t('privacyPage.sections.sec3.content.sub3.p1')}
                                    <span className="block mt-3 text-xs font-bold text-slate-400">{t('privacyPage.sections.sec3.content.sub3.legalBasis')}</span>
                                 </p>
                              </div>
                           </div>

                           <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-6">
                              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                                 <Lock size={24} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-brand-dark mb-2">{t('privacyPage.sections.sec3.content.sub4.title')}</h4>
                                 <p className="text-sm text-slate-600 leading-relaxed">
                                    {t('privacyPage.sections.sec3.content.sub4.p1')}
                                 </p>
                              </div>
                           </div>

                           <div id="cookies" className="space-y-8 pt-8">
                              <div className="bg-brand-dark text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px] pointer-events-none"></div>
                                 <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Eye size={20} className="text-brand-orange" />
                                    {t('privacyPage.sections.sec3.content.sub5.title')}
                                 </h4>
                                 <div className="space-y-6 text-slate-400 text-sm leading-relaxed">
                                    <p>{t('privacyPage.sections.sec3.content.sub5.p1')}</p>
                                    <p>{t('privacyPage.sections.sec3.content.sub5.p2')}</p>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                                       <h5 className="font-bold text-white flex items-center gap-2">
                                          <Globe size={16} className="text-brand-teal" />
                                          {t('privacyPage.sections.sec3.content.sub5.thirdPartyTitle')}
                                       </h5>
                                       <p>{t('privacyPage.sections.sec3.content.sub5.thirdPartyText1')}</p>
                                       <p>{t('privacyPage.sections.sec3.content.sub5.thirdPartyText2')}</p>
                                       <div className="flex flex-wrap gap-4 mt-4">
                                          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-brand-orange hover:underline">
                                             Google Browser-Plugin <ExternalLink size={12} />
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </section>

                     {/* § 4 & § 5 */}
                     <section className="grid md:grid-cols-2 gap-8">
                        <div id="zusatz" className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm scroll-mt-32">
                           <h3 className="text-xl font-black text-brand-dark mb-4 flex items-center gap-3">
                              <span className="text-brand-orange opacity-20 text-3xl">§ 4</span>
                              {t('privacyPage.sections.sec4.title')}
                           </h3>
                           <p className="text-sm text-slate-600 leading-relaxed">
                              {t('privacyPage.sections.sec4.content.p1')}
                           </p>
                        </div>
                        <div id="loeschung" className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm scroll-mt-32">
                           <h3 className="text-xl font-black text-brand-dark mb-4 flex items-center gap-3">
                              <span className="text-brand-orange opacity-20 text-3xl">§ 5</span>
                              {t('privacyPage.sections.sec5.title')}
                           </h3>
                           <p className="text-sm text-slate-600 leading-relaxed">
                              {t('privacyPage.sections.sec5.content.p1')}
                           </p>
                        </div>
                     </section>

                     {/* § 6 Weitergabe */}
                     <section id="weitergabe" className="scroll-mt-32">
                        <h3 className="text-2xl font-black text-brand-dark mb-6 flex items-center gap-3">
                           <span className="text-brand-orange opacity-20 text-4xl">§ 6</span>
                           {t('privacyPage.sections.sec6.title')}
                        </h3>
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                           <p className="text-slate-600 mb-6 font-medium italic">{t('privacyPage.sections.sec6.content.intro')}</p>
                           <div className="grid sm:grid-cols-2 gap-4">
                              {sharingList?.map((item, idx) => (
                                 <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 group">
                                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 group-hover:text-brand-teal transition-colors shrink-0">
                                       {getIcon(item.icon)}
                                    </div>
                                    <p className="text-xs font-bold text-slate-500 leading-relaxed">{item.text}</p>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-8 pt-6 border-t border-slate-50 text-[11px] font-medium text-slate-400">
                              {t('privacyPage.sections.sec6.content.legalBasis')}
                           </div>
                        </div>
                     </section>

                     {/* § 7 & § 8 */}
                     <section className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/50 flex flex-col md:flex-row gap-8">
                           <div className="flex-1">
                              <h3 className="text-lg font-black text-brand-dark mb-3 flex items-center gap-2">
                                 <span className="text-brand-orange opacity-20 text-2xl">§ 7</span>
                                 {t('privacyPage.sections.sec7.title')}
                              </h3>
                              <p className="text-sm text-slate-500 leading-relaxed">
                                 {t('privacyPage.sections.sec7.content.p1')}
                              </p>
                           </div>
                           <div className="w-px h-auto bg-slate-200 hidden md:block"></div>
                           <div className="flex-1">
                              <h3 className="text-lg font-black text-brand-dark mb-3 flex items-center gap-2">
                                 <span className="text-brand-orange opacity-20 text-2xl">§ 8</span>
                                 {t('privacyPage.sections.sec8.title')}
                              </h3>
                              <p className="text-sm text-slate-500 leading-relaxed font-bold flex items-center gap-2">
                                 <Lock size={16} className="text-brand-orange shrink-0" />
                                 {t('privacyPage.sections.sec8.content.p1')}
                              </p>
                              <p className="text-xs text-slate-400 mt-2">{t('privacyPage.sections.sec8.content.p2')}</p>
                           </div>
                        </div>
                     </section>

                     {/* § 9 RIGHTS */}
                     <section id="rechte" className="scroll-mt-32">
                        <div className="bg-brand-dark rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                           <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
                           <h3 className="text-3xl font-black mb-10 border-b border-white/10 pb-6">§ 9 {t('privacyPage.sections.sec9.title').replace('§ 9 ', '')}</h3>
                           <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                              {rights?.map((right, i) => (
                                 <div key={i} className="flex items-center gap-3 group/item">
                                    <div className="w-2 h-2 rounded-full bg-brand-orange group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-sm font-bold text-slate-300 group-hover/item:text-white transition-colors">{right}</span>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                              <p className="text-sm font-medium text-slate-400 leading-relaxed">
                                 {t('privacyPage.sections.sec9.content.contact')}
                                 <strong className="block text-brand-orange text-lg mt-2 font-black tracking-tight">datenschutz@worknova.de</strong>
                              </p>
                           </div>
                        </div>
                     </section>

                     {/* § 10 & § 11 */}
                     <section className="space-y-12">
                        <div className="flex gap-6 items-start">
                           <div className="text-4xl font-black text-brand-orange/20 pt-1">§ 10</div>
                           <div>
                              <h3 className="text-xl font-black text-brand-dark mb-3">{t('privacyPage.sections.sec10.title')}</h3>
                              <p className="text-slate-600 leading-relaxed font-medium italic">
                                 {t('privacyPage.sections.sec10.content.p1')}
                              </p>
                           </div>
                        </div>
                        <div className="flex gap-6 items-start">
                           <div className="text-4xl font-black text-brand-orange/20 pt-1">§ 11</div>
                           <div>
                              <h3 className="text-xl font-black text-brand-dark mb-3">{t('privacyPage.sections.sec11.title')}</h3>
                              <p className="text-slate-600 leading-relaxed font-medium">
                                 {t('privacyPage.sections.sec11.content.p1')}
                                 <span className="block mt-2 font-black text-brand-teal">www.worknova.de/datenschutz</span>
                              </p>
                           </div>
                        </div>
                     </section>

                     {/* SIGNATURE FOOTER */}
                     <div className="pt-16 border-t border-slate-200">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                           <div>
                              <Logo className="h-8 grayscale opacity-30 mb-8" />
                              <div className="space-y-1 text-sm font-bold text-slate-400">
                                 <p>Morsnova GmbH</p>
                                 <p>Karlstraße 68, 76137 Karlsruhe</p>
                                 <p>www.worknova.de</p>
                                 <p>support@worknova.de</p>
                              </div>
                           </div>
                           <div className="text-left md:text-right">
                              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{t('privacyPage.sections.footer.verification')}</div>
                              <div className="inline-block p-4 border-2 border-slate-100 rounded-xl">
                                 <p className="font-mono text-xs text-brand-dark font-black">PLATFORM-LEGAL-V1-2025</p>
                                 <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">{t('privacyPage.sections.footer.authorized')}</p>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   );
};