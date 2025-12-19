
import React, { useState } from 'react';
import { ArrowRight, User, Building2, CheckCircle2, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export const TargetGroups: React.FC = () => {
  const { t } = useTranslation();
  // Single state for both - they expand/collapse together
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0f172a] relative overflow-hidden">
      
      {/* Background Ambience - Reduced blur for performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Section Headline */}
        <div className="text-center max-w-5xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] tracking-tight mb-8">
            {t('targetGroups.headline')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-teal">
              {t('targetGroups.headlineHighlight')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t('targetGroups.description')}
          </p>
        </div>

        {/* The Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: BEWERBER */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group transition-all duration-300 flex flex-col">
             <div className="absolute top-0 left-0 w-full h-2 bg-brand-teal"></div>
             
             <div className="flex items-start justify-between mb-8">
                <div>
                   <h3 className="text-4xl font-extrabold text-brand-dark mb-2 group-hover:text-brand-teal transition-colors duration-300">{t('targetGroups.applicants')}</h3>
                   <div className="h-1 w-12 bg-brand-teal rounded-full"></div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 group-hover:rotate-12 shadow-inner transform-gpu">
                   <User size={28} strokeWidth={2} />
                </div>
             </div>

             <div className="space-y-6 text-slate-600 leading-relaxed flex-1">
                <p className="text-xl font-bold text-brand-dark leading-snug">
                  {t('targetGroups.applicantsIntroStart')} <span className="text-brand-teal">{t('targetGroups.applicantsHighlight')}</span>{t('targetGroups.applicantsIntroEnd')}
                </p>

                <button 
                  onClick={toggleExpand}
                  className="flex items-center gap-2 text-brand-teal font-black text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  {isExpanded ? t('targetGroups.showLess') : t('targetGroups.learnMore')}
                  <ChevronDown 
                    className="transform-gpu transition-transform duration-200 ease-out" 
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    size={18} 
                  />
                </button>

                {/* Expandable Content - CSS-based animation (no Framer Motion) */}
                <div 
                  className="overflow-hidden transform-gpu transition-all duration-200 ease-out"
                  style={{
                    maxHeight: isExpanded ? '500px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <div className="space-y-6 pt-2">
                    <p className="text-base font-medium">
                      {t('targetGroups.applicantsText1')}
                    </p>

                    <p className="text-base font-medium">
                      {t('targetGroups.applicantsText2')}
                    </p>

                    <div className="flex items-start gap-4 p-5 bg-brand-teal/5 rounded-2xl border border-brand-teal/10 shadow-sm">
                      <CheckCircle2 className="text-brand-teal flex-shrink-0 mt-0.5" size={22} />
                      <p className="text-sm font-bold text-brand-dark leading-relaxed">
                        {t('targetGroups.applicantsHighlightBox')}
                      </p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="mt-12">
               <Button 
                  variant="secondary" 
                  className="w-full md:w-auto !py-5 !px-10 !text-lg shadow-brand-teal/20" 
                  icon={<ArrowRight size={22} />}
                  onClick={() => { window.location.hash = '#/talent'; }}
               >
                 {t('targetGroups.toTalentPage')}
               </Button>
             </div>
          </div>

          {/* RIGHT COLUMN: UNTERNEHMEN */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group transition-all duration-300 flex flex-col">
             <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange"></div>
             
             <div className="flex items-start justify-between mb-8">
                <div>
                   <h3 className="text-4xl font-extrabold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors duration-300">{t('targetGroups.companies')}</h3>
                   <div className="h-1 w-12 bg-brand-orange rounded-full"></div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 group-hover:-rotate-12 shadow-inner transform-gpu">
                   <Building2 size={28} strokeWidth={2} />
                </div>
             </div>

             <div className="space-y-6 text-slate-600 leading-relaxed flex-1">
                <p className="text-xl font-bold text-brand-dark leading-snug">
                  {t('targetGroups.companiesIntroStart')} <span className="text-brand-orange">{t('targetGroups.companiesHighlight')}</span>{t('targetGroups.companiesIntroEnd')}
                </p>

                <button 
                  onClick={toggleExpand}
                  className="flex items-center gap-2 text-brand-orange font-black text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  {isExpanded ? t('targetGroups.showLess') : t('targetGroups.learnMore')}
                  <ChevronDown 
                    className="transform-gpu transition-transform duration-200 ease-out" 
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    size={18} 
                  />
                </button>

                {/* Expandable Content - CSS-based animation (no Framer Motion) */}
                <div 
                  className="overflow-hidden transform-gpu transition-all duration-200 ease-out"
                  style={{
                    maxHeight: isExpanded ? '500px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <div className="space-y-6 pt-2">
                    <p className="text-base font-medium">
                      {t('targetGroups.companiesText1')}
                    </p>

                    <p className="text-base font-medium">
                      {t('targetGroups.companiesText2')}
                    </p>

                    <div className="flex items-start gap-4 p-5 bg-brand-orange/5 rounded-2xl border border-brand-orange/10 shadow-sm">
                      <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-0.5" size={22} />
                      <p className="text-sm font-bold text-brand-dark leading-relaxed">
                        {t('targetGroups.companiesHighlightBox')}
                      </p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="mt-12 flex flex-col sm:flex-row gap-4">
               <Button 
                  variant="primary" 
                  className="flex-1 !py-5 !px-8 !text-lg justify-center shadow-brand-orange/20"
                  onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
               >
                 {t('targetGroups.requestDemo')}
               </Button>
               <Button 
                  variant="outline" 
                  className="flex-1 !py-5 !px-8 !text-lg justify-center hover:bg-slate-50 border-slate-200 text-slate-600"
                  onClick={() => { window.location.hash = '#/unternehmen'; }}
               >
                 {t('targetGroups.learnMore')}
               </Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
