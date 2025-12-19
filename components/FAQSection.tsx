
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  items: FAQItem[];
  variant: 'orange' | 'teal';
  id?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ title, subtitle, items, variant, id = "faq" }) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isOrange = variant === 'orange';
  
  // Dynamic Styling based on variant
  const styles = {
    badgeBg: isOrange ? 'bg-orange-50' : 'bg-teal-50',
    badgeText: isOrange ? 'text-brand-orange' : 'text-brand-teal',
    badgeBorder: isOrange ? 'border-orange-100' : 'border-teal-100',
    accentColor: isOrange ? 'text-brand-orange' : 'text-brand-teal',
    accentBg: isOrange ? 'bg-brand-orange' : 'bg-brand-teal',
    lightBg: isOrange ? 'bg-orange-50/50' : 'bg-teal-50/50',
    borderColor: isOrange ? 'border-brand-orange/20' : 'border-brand-teal/20',
    hoverBorder: isOrange ? 'hover:border-brand-orange' : 'hover:border-brand-teal',
    gradient: isOrange ? 'from-orange-50/50 via-white to-white' : 'from-teal-50/50 via-white to-white',
    shadow: isOrange ? 'shadow-brand-orange/10' : 'shadow-brand-teal/10',
    number: isOrange ? 'text-orange-200' : 'text-teal-200',
    numberActive: isOrange ? 'text-brand-orange' : 'text-brand-teal',
  };

  return (
    <section id={id} className={`py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b ${styles.gradient}`}>
      
      {/* Abstract Background Decor */}
      <div className={`absolute top-0 left-0 w-[600px] h-[600px] ${isOrange ? 'bg-brand-orange/5' : 'bg-brand-teal/5'} blur-[120px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3`}></div>
      <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] ${isOrange ? 'bg-brand-orange/5' : 'bg-brand-teal/5'} blur-[100px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3`}></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Sticky Header & Info */}
          <div className="lg:sticky lg:top-32">
             <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${styles.badgeBg} ${styles.badgeText} border ${styles.badgeBorder} text-xs font-bold uppercase tracking-widest mb-6`}>
                <HelpCircle size={14} />
                <span>{t('faq.badge')}</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-[1.1] mb-6">
                {t('faq.title')} <br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isOrange ? 'from-brand-orange to-red-500' : 'from-brand-teal to-cyan-500'}`}>
                   {t('faq.titleHighlight')}
                </span>
             </h2>
             
             <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-md">
                {subtitle}
             </p>

             {/* Support Card */}
             <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-24 h-24 ${styles.lightBg} rounded-bl-[80px] -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
                
                <h4 className="text-brand-dark font-bold text-lg mb-2 relative z-10">{t('faq.questionNotFound')}</h4>
                <p className="text-sm text-slate-500 mb-6 relative z-10">
                   {t('faq.supportHelp')}
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
                   className={`inline-flex items-center gap-2 text-sm font-bold ${styles.accentColor} hover:underline decoration-2 underline-offset-4 transition-all group-hover:gap-3`}
                >
                   <MessageCircle size={18} />
                   {t('faq.contactUs')}
                   <ArrowRight size={16} />
                </a>
             </div>
          </div>

          {/* RIGHT COLUMN: Accordion List */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const itemNumber = (index + 1).toString().padStart(2, '0');
              
              return (
                <div 
                  key={index}
                  className={`
                    group relative rounded-2xl border transition-all duration-500 ease-out overflow-hidden
                    ${isOpen 
                      ? `bg-white border-transparent shadow-2xl ${styles.shadow} scale-[1.01]` 
                      : `bg-white/60 hover:bg-white border-slate-200 ${styles.hoverBorder} hover:shadow-lg`
                    }
                  `}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${styles.accentBg} transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start gap-6 p-6 md:p-8 text-left focus:outline-none"
                  >
                    {/* Number */}
                    <span className={`text-2xl font-black transition-colors duration-300 hidden md:block ${isOpen ? styles.numberActive : styles.number}`}>
                       {itemNumber}
                    </span>

                    <div className="flex-1 pt-1">
                       <h3 className={`text-lg md:text-xl font-bold leading-snug transition-colors duration-300 ${isOpen ? 'text-brand-dark' : 'text-slate-700 group-hover:text-brand-dark'}`}>
                         {item.question}
                       </h3>
                    </div>

                    {/* Icon */}
                    <div className={`
                       flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 mt-0.5
                       ${isOpen 
                          ? `${styles.accentBg} text-white border-transparent rotate-180 shadow-md` 
                          : 'bg-transparent border-slate-200 text-slate-400 group-hover:border-slate-300'
                       }
                    `}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  {/* Answer Content */}
                  <div 
                    className={`transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 md:px-8 pb-8 md:pl-[5.5rem] pt-0">
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
