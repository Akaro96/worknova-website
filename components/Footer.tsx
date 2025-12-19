import React from 'react';
import { Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 relative z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 flex flex-col items-start pr-8">
            <Logo className="h-8 md:h-9 mb-6" />
            <div className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              <strong className="text-brand-dark block mb-1">Morsnova GmbH</strong>
              {t('footer.address')}<br />
              {t('footer.city')}<br />
              {t('footer.country')}
            </div>
            <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider hover:text-brand-dark transition-colors"
            >
                {t('footer.scrollToTop')}
                <div className="w-6 h-6 rounded-full bg-brand-orange/10 group-hover:bg-brand-dark/10 flex items-center justify-center transition-colors">
                    <ArrowUp size={14} />
                </div>
            </button>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-brand-dark mb-6">{t('footer.platform')}</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#/unternehmen" onClick={(e) => handleNavClick(e, '#/unternehmen')} className="hover:text-brand-orange transition-colors">{t('footer.aboutWorknova')}</a></li>
              <li><a href="#/impressum" onClick={(e) => handleNavClick(e, '#/impressum')} className="hover:text-brand-orange transition-colors">{t('footer.imprint')}</a></li>
              <li><a href="#/datenschutz" onClick={(e) => handleNavClick(e, '#/datenschutz')} className="hover:text-brand-orange transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#/agb" onClick={(e) => handleNavClick(e, '#/agb')} className="hover:text-brand-orange transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#/zahlungsinformationen" onClick={(e) => handleNavClick(e, '#/zahlungsinformationen')} className="hover:text-brand-orange transition-colors">{t('footer.paymentInfo')}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-brand-dark mb-6">{t('footer.links')}</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#/" onClick={(e) => { handleNavClick(e, '#/'); setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-brand-orange transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#/faq" onClick={(e) => handleNavClick(e, '#/faq')} className="hover:text-brand-orange transition-colors">{t('footer.faq')}</a></li>
              <li><a href="#/" onClick={(e) => { handleNavClick(e, '#/'); setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-brand-orange transition-colors">{t('footer.requestDemo')}</a></li>
              <li>
                <a 
                  href="#/app" 
                  onClick={(e) => handleNavClick(e, '#/app')}
                  className="hover:text-brand-orange transition-colors flex items-center gap-2"
                >
                  {t('footer.appVersion')} 
                  <span className="text-[10px] bg-brand-teal text-white px-1.5 py-0.5 rounded font-bold animate-pulse shadow-sm shadow-brand-teal/20">{t('footer.comingSoon')}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-brand-dark mb-6">{t('footer.socialMedia')}</h4>
            <div className="flex gap-3" role="list" aria-label={t('footer.socialMedia')}>
              <a href="https://www.linkedin.com/company/worknova.com/about/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.visitLinkedin')} className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"><Linkedin size={16} /></a>
              <a href="https://www.instagram.com/worknova_de" target="_blank" rel="noopener noreferrer" aria-label={t('footer.visitInstagram')} className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300 focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"><Instagram size={16} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} {t('footer.copyright')}</div>
          <div>{t('footer.madeWith')}</div>
        </div>
      </div>
    </footer>
  );
};
