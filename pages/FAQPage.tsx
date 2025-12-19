
import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { FAQSection } from '../components/FAQSection';
import { useTranslation } from 'react-i18next';
import { MessageSquare, HelpCircle, Building2, Users } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'unternehmen' | 'fachkraefte'>('unternehmen');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Company FAQ items
  const COMPANY_FAQ = [
    { question: t('faq.companyQ1'), answer: t('faq.companyA1') },
    { question: t('faq.companyQ2'), answer: t('faq.companyA2') },
    { question: t('faq.companyQ3'), answer: t('faq.companyA3') },
    { question: t('faq.companyQ4'), answer: t('faq.companyA4') },
    { question: t('faq.companyQ5'), answer: t('faq.companyA5') },
    { question: t('faq.companyQ6'), answer: t('faq.companyA6') },
    { question: t('faq.companyQ7'), answer: t('faq.companyA7') }
  ];

  // Talent FAQ items
  const TALENT_FAQ = [
    { question: t('faq.talentQ1'), answer: t('faq.talentA1') },
    { question: t('faq.talentQ2'), answer: t('faq.talentA2') },
    { question: t('faq.talentQ3'), answer: t('faq.talentA3') },
    { question: t('faq.talentQ4'), answer: t('faq.talentA4') },
    { question: t('faq.talentQ5'), answer: t('faq.talentA5') },
    { question: t('faq.talentQ6'), answer: t('faq.talentA6') },
    { question: t('faq.talentQ7'), answer: t('faq.talentA7') }
  ];

  return (
    <div className="min-h-screen bg-[#fffbf7] font-sans flex flex-col">
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <div className="bg-brand-dark py-20 lg:py-32 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/10 blur-[120px] rounded-full pointer-events-none"></div>
           
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-8 animate-fade-up">
                 <HelpCircle size={16} />
                 {t('faq.helpCenter')}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                 {t('faq.questionsAnswers')} <br/> <span className="text-brand-orange">{t('faq.answers')}</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium mb-12">
                 {t('faq.faqDescription')}
              </p>
              
              {/* Category Toggle Switch */}
              <div className="inline-flex items-center p-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                 <button
                    onClick={() => setActiveTab('unternehmen')}
                    className={`
                       flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300
                       ${activeTab === 'unternehmen' 
                          ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' 
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                       }
                    `}
                 >
                    <Building2 size={18} />
                    {t('faq.forCompanies')}
                 </button>
                 <button
                    onClick={() => setActiveTab('fachkraefte')}
                    className={`
                       flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300
                       ${activeTab === 'fachkraefte' 
                          ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/30' 
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                       }
                    `}
                 >
                    <Users size={18} />
                    {t('faq.forTalents')}
                 </button>
              </div>
           </div>
        </div>

        {/* FAQ Content - Conditional Rendering based on activeTab */}
        <div className="relative">
           {activeTab === 'unternehmen' && (
              <div className="animate-fade-in">
                 <FAQSection 
                    id="unternehmen-faq"
                    title={t('faq.forCompanies')}
                    subtitle={t('faq.companyFaqSubtitle')}
                    items={COMPANY_FAQ}
                    variant="orange"
                 />
              </div>
           )}
           
           {activeTab === 'fachkraefte' && (
              <div className="animate-fade-in">
                 <FAQSection 
                    id="fachkraefte-faq"
                    title={t('faq.forTalents')}
                    subtitle={t('faq.talentFaqSubtitle')}
                    items={TALENT_FAQ}
                    variant="teal"
                 />
              </div>
           )}
        </div>

        {/* Contact CTA */}
        <section className="py-24 bg-white border-t border-slate-100">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="w-20 h-20 bg-brand-orange/10 rounded-3xl flex items-center justify-center text-brand-orange mx-auto mb-8">
                 <MessageSquare size={36} />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">{t('faq.stillQuestions')}</h2>
              <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
                 {t('faq.stillQuestionsDesc')}
              </p>
              <a 
                href="#/" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#/';
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-orange transition-all shadow-xl hover:-translate-y-1"
              >
                {t('faq.contactNow')}
              </a>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
