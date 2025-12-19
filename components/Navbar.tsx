
import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight, X, LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavItem } from '../types';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  currentRoute?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute = '#/' }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items with translation keys
  const NAV_ITEMS: NavItem[] = [
    { label: t('nav.home'), href: '#/' },
    { label: t('nav.companies'), href: '#/unternehmen' },
    { label: t('nav.talents'), href: '#/talent' },
    { label: t('nav.services'), href: '#/services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '#/') return currentRoute === '#/' || currentRoute === '' || currentRoute === '#';
    const cleanHref = href.replace('#', '');
    const cleanRoute = currentRoute.replace('#', '');
    return cleanRoute.includes(cleanHref);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-brand-dark/5 py-4' 
            : 'bg-white/30 backdrop-blur-md border-b border-white/10 py-6'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <a href="#/" onClick={(e) => handleNavClick(e, '#/')} className="group flex-shrink-0">
            <Logo className={`transition-all duration-500 ${isScrolled ? 'h-9' : 'h-10'}`} />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
             {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    text-sm font-bold transition-all duration-300 relative py-1
                    ${isActive(item.href) ? 'text-brand-orange' : 'text-brand-dark/70 hover:text-brand-orange'}
                  `}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0'}`}></span>
                </a>
             ))}
          </nav>

          <div className="flex items-center gap-3">
             {/* Language Switcher - Desktop */}
             <div className="hidden sm:block">
               <LanguageSwitcher variant="desktop" isScrolled={isScrolled} />
             </div>

             <a 
               href="#/login"
               onClick={(e) => handleNavClick(e, '#/login')}
               className={`
                 hidden sm:flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/50 backdrop-blur-sm border transition-all
                 ${isScrolled ? 'border-slate-200 text-slate-600' : 'border-white/40 text-brand-dark/70'}
                 hover:text-brand-orange hover:border-brand-orange/30 hover:bg-white text-sm font-bold
               `}
               aria-label={t('nav.signIn')}
             >
                <LogIn size={16} strokeWidth={2.5} />
                <span className="hidden md:inline">{t('nav.login')}</span>
             </a>

             <a 
               href="#/"
               onClick={(e) => { handleNavClick(e, '#/'); setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
               className={`
                 group relative flex items-center gap-2 bg-brand-dark text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/20 active:scale-95
                 ${isScrolled ? 'px-6 py-2.5 text-xs' : 'px-8 py-3.5 text-sm'}
               `}
             >
                <span>{t('nav.contact')}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
             </a>
             
             <button 
                className="lg:hidden p-2 text-brand-dark hover:bg-white/50 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
             >
                <Menu size={24} />
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[110] bg-brand-dark/40 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
         <div 
            className={`absolute top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-2xl transition-transform duration-500 ease-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
         >
            <div className="p-8 flex flex-col h-full">
               <div className="flex items-center justify-between mb-12">
                  <Logo className="h-8" />
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-brand-dark">
                    <X size={24} />
                  </button>
               </div>
               
               <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => (
                     <a 
                       key={item.href}
                       href={item.href}
                       onClick={(e) => handleNavClick(e, item.href)}
                       className={`p-4 rounded-xl text-lg font-bold transition-all ${isActive(item.href) ? 'bg-brand-orange/10 text-brand-orange' : 'text-slate-700 hover:bg-slate-50'}`}
                     >
                        {item.label}
                     </a>
                  ))}
               </div>

               {/* Language Switcher - Mobile */}
               <div className="mt-8 pt-6 border-t border-slate-100">
                 <LanguageSwitcher variant="mobile" />
               </div>
               
               <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col gap-4">
                  <a 
                    href="#/register" 
                    onClick={(e) => handleNavClick(e, '#/register')} 
                    className="w-full text-center py-4 bg-brand-orange text-white rounded-2xl font-bold"
                  >
                    {t('nav.register')}
                  </a>
                  <a 
                    href="#/login" 
                    onClick={(e) => handleNavClick(e, '#/login')} 
                    className="w-full py-4 border border-slate-200 text-slate-600 rounded-2xl font-bold text-center"
                  >
                    {t('nav.signIn')}
                  </a>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};
