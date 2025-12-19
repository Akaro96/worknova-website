import React, { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { Home, HelpCircle, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <div className="min-h-screen bg-[#fffbf7] font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden flex flex-col">
      
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center bg-[#0f172a] pt-24 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-orange/10 blur-[150px] rounded-full mix-blend-screen animate-float-slow transform-gpu"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-teal/10 blur-[120px] rounded-full mix-blend-screen animate-float-medium transform-gpu"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] opacity-20 transform-gpu"></div>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-8 animate-fade-up">
            <HelpCircle size={16} />
            {t('notFound.badge')}
          </div>

          {/* Large 404 */}
          <div className="relative mb-8 animate-fade-up [animation-delay:100ms]">
            <h1 className="text-[10rem] md:text-[14rem] font-black text-white/5 leading-none tracking-tighter">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                {t('notFound.title')} <br />
                <span className="text-brand-orange">{t('notFound.titleLine2')}</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed animate-fade-up [animation-delay:200ms]">
            {t('notFound.description')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
            <a 
              href="#/" 
              onClick={(e) => handleNavClick(e, '#/')}
              className="group flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#e08c45] transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5"
            >
              <Home size={20} />
              {t('notFound.toHome')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#/faq" 
              onClick={(e) => handleNavClick(e, '#/faq')}
              className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              <HelpCircle size={20} />
              {t('notFound.helpFaq')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
