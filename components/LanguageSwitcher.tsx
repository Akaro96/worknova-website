import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark' | 'desktop' | 'mobile';
  isScrolled?: boolean;
}

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  variant = 'desktop',
  isScrolled = false
}) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Mobile variant - horizontal buttons
  if (variant === 'mobile') {
    return (
      <div className="flex items-center justify-center gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all
              ${i18n.language === lang.code
                ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }
            `}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.name}</span>
          </button>
        ))}
      </div>
    );
  }

  // Dark variant for dark backgrounds
  const isDark = variant === 'dark';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300
          ${isDark 
            ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' 
            : isScrolled
              ? 'bg-white/80 border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
              : 'bg-white/50 border border-white/40 text-brand-dark/70 hover:bg-white hover:border-slate-200'
          }
        `}
        aria-label={t('language.select')}
      >
        <Globe size={16} strokeWidth={2.5} className={isDark ? 'text-brand-orange' : 'text-slate-400'} />
        <span className="text-base">{currentLanguage.flag}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`
          absolute right-0 mt-2 w-44 rounded-xl border shadow-xl overflow-hidden z-50
          transition-all duration-200 origin-top-right
          ${isDark 
            ? 'bg-brand-dark/95 backdrop-blur-xl border-white/10' 
            : 'bg-white border-slate-100'
          }
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }
        `}
      >
        <div className="py-1">
          {languages.map((lang) => {
            const isActive = i18n.language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors
                  ${isDark
                    ? isActive 
                      ? 'bg-brand-orange/10 text-brand-orange' 
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    : isActive 
                      ? 'bg-brand-orange/10 text-brand-orange' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }
                `}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1 text-left">{lang.name}</span>
                {isActive && (
                  <Check size={16} className="text-brand-orange" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
