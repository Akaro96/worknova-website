import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Search, 
  LayoutDashboard, 
  Users, 
  FileText, 
  PlusCircle, 
  Building, 
  FileCheck, 
  MessageSquare, 
  Receipt, 
  Activity, 
  Bell, 
  ChevronDown,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

export const DashboardPreview: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const element = document.getElementById('dashboard-preview');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const actionTiles = [
    { icon: <PlusCircle />, label: t('dashboard.postJob'), active: true },
    { icon: <Building />, label: t('dashboard.companyProfile') },
    { icon: <FileText />, label: t('dashboard.companyDocuments') },
    { icon: <FileCheck />, label: t('dashboard.serviceContracts') },
    { icon: <FileText />, label: t('dashboard.officialTranslations') }, 
    { icon: <MessageSquare />, label: t('dashboard.chat'), badge: 2 },
    { icon: <Receipt />, label: t('dashboard.invoicesPayments') },
    { icon: <Activity />, label: t('dashboard.processMonitoring'), color: 'text-brand-teal' },
  ];

  return (
    <section id="dashboard-preview" className="py-24 lg:py-32 relative overflow-hidden bg-[#fffbf7]">
      
      {/* Background Decor - GPU optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-noise opacity-20 pointer-events-none mix-blend-multiply transform-gpu"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-2xl pointer-events-none transform-gpu"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark leading-normal mb-6">
               <span className="block mb-2 md:mb-4">{t('dashboard.smartDashboard')}</span>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 block pt-2 pb-1">
                 {t('dashboard.maxOverview')}
               </span>
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
               {t('dashboard.dashboardDesc')}
             </p>
          </div>
        </div>

        {/* --- The Dashboard Mockup Container --- */}
        <div className={`relative group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Main Browser Window Frame - Simplified for performance */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform-gpu">
            
            {/* Browser Header / Top Bar - Removed backdrop-blur for performance */}
            <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
              <div className="flex items-center gap-8">
                 <Logo className="h-7 opacity-90 grayscale-[0.5]" />
                 <div className="hidden md:flex items-center gap-1 pl-6 border-l border-slate-100">
                    <button className="px-4 py-2 bg-brand-orange text-white text-sm font-bold rounded-lg shadow-lg shadow-brand-orange/20 flex items-center gap-2 hover:bg-[#e08c45] transition-colors">
                       <LayoutDashboard size={16} /> Dashboard
                    </button>
                    <button className="px-4 py-2 text-slate-500 text-sm font-medium hover:text-brand-dark transition-colors flex items-center gap-2 hover:bg-slate-50 rounded-lg">
                       <Users size={16} /> {t('dashboard.searchTalent')}
                    </button>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-xs font-bold uppercase tracking-wider">DE</span>
                    <Bell size={18} className="text-slate-400 hover:text-brand-orange cursor-pointer transition-colors" />
                 </div>
                 <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                    <div className="text-right hidden sm:block">
                       <div className="text-xs font-bold text-brand-dark">Kerem GmbH</div>
                       <div className="text-[10px] text-slate-400">{t('dashboard.company')}</div>
                    </div>
                    <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 border border-slate-200 shadow-inner">
                       <Building size={16} />
                    </div>
                 </div>
              </div>
            </div>

            {/* Dashboard Content Area */}
            <div className="p-6 md:p-8 bg-slate-50/50 min-h-[600px] relative">
               
               {/* Filter Bar */}
               <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between text-slate-400 text-sm shadow-sm hover:border-slate-300 transition-colors cursor-pointer group/input">
                     <span className="group-hover/input:text-slate-600 transition-colors">{t('dashboard.jobTitle')}</span>
                     <ChevronDown size={16} />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between text-slate-400 text-sm shadow-sm hover:border-slate-300 transition-colors cursor-pointer group/input">
                     <span className="group-hover/input:text-slate-600 transition-colors">{t('dashboard.location')}</span>
                     <ChevronDown size={16} />
                  </div>
                  <button className="bg-slate-800 text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
                     <Search size={18} /> {t('dashboard.search')}
                  </button>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
                  
                  {/* Left Big Card - "Meine Fachkräfte" */}
                  <div className="bg-[#eaf4f6] rounded-2xl p-6 border border-brand-teal/10 relative overflow-hidden group/card hover:shadow-lg transition-all duration-300 cursor-default">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-bl-[100px] transition-transform duration-500 group/card:scale-110"></div>
                     
                     <div className="flex items-center justify-between mb-6 relative z-10">
                        <h3 className="text-xl font-bold text-brand-dark">{t('dashboard.myTalents')}</h3>
                        <div className="p-2 bg-white/50 rounded-lg text-brand-teal"><TrendingUp size={20} /></div>
                     </div>
                     
                     <div className="space-y-3 relative z-10">
                        <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-brand-teal/10 flex items-center gap-3 cursor-pointer hover:translate-x-1 transition-transform group/item">
                           <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                <FileText size={18} />
                           </div>
                           <span className="font-semibold text-brand-dark group-hover/item:text-brand-teal transition-colors">{t('dashboard.documentsCloud')}</span>
                           <ArrowRight size={16} className="ml-auto text-slate-300 group-hover/item:text-brand-teal transition-colors" />
                        </div>
                        <div className="bg-white/50 p-4 rounded-xl border border-transparent flex items-center gap-3 opacity-60 grayscale-[0.5]">
                           <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <FileCheck size={18} />
                           </div>
                           <span className="font-medium">{t('dashboard.powerOfAttorney')}</span>
                        </div>
                        <div className="bg-white/50 p-4 rounded-xl border border-transparent flex items-center gap-3 opacity-60 grayscale-[0.5]">
                           <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <Users size={18} />
                           </div>
                           <span className="font-medium">{t('dashboard.employerQuestionnaire')}</span>
                        </div>
                     </div>
                  </div>

                  {/* Right Grid - Action Tiles */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {actionTiles.map((item, idx) => (
                        <div key={idx} className="aspect-square bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group/tile relative">
                           {item.badge && (
                               <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                                   {item.badge}
                               </div>
                           )}
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${item.active ? 'bg-brand-orange/10 text-brand-orange' : 'bg-[#fffbf7] text-slate-400 group-hover/tile:text-brand-orange group-hover/tile:bg-brand-orange/10'}`}>
                              {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
                           </div>
                           <span className="text-[11px] font-bold text-slate-500 group-hover/tile:text-brand-dark transition-colors leading-tight">
                              {item.label}
                           </span>
                        </div>
                     ))}
                  </div>

               </div>
            </div>

            {/* --- THE FLOATING CTA OVERLAY --- */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white to-transparent flex justify-center items-end h-[250px] z-30 pointer-events-none">
               <div className="relative group/cta pointer-events-auto">
                  {/* Subtle glow - no blur for performance */}
                  <div className="absolute -inset-2 bg-brand-orange/30 rounded-full opacity-0 group-hover/cta:opacity-60 transition duration-300"></div>
                  
                  <Button 
                    variant="primary" 
                    className="relative !text-lg !py-4 !px-10 shadow-2xl hover:shadow-brand-orange/50 active:scale-95 transition-transform"
                    onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  >
                    {t('dashboard.requestDemo')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                  </Button>
               </div>
            </div>

          </div>
        </div>
        
        <div className="text-center mt-6">
           <a 
              href="#/" 
              onClick={(e) => { e.preventDefault(); window.location.hash = '#/unternehmen'; }}
              className="text-sm font-semibold text-slate-400 hover:text-brand-orange transition-colors border-b border-transparent hover:border-brand-orange/50 pb-0.5"
           >
              {t('dashboard.learnMorePlatform')}
           </a>
        </div>

      </div>
    </section>
  );
};
