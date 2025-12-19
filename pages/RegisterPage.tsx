import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  User, 
  ArrowRight, 
  Check, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Sparkles,
  Globe,
  Shield,
  Zap,
  ChevronRight,
  Users,
  Briefcase,
  UserPlus
} from 'lucide-react';

type UserType = 'unternehmen' | 'fachkraft' | null;

export const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  const [userType, setUserType] = useState<UserType>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    agreeTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  const benefits = {
    unternehmen: [
      { icon: <Globe size={18} />, text: t('register.internationalPool') },
      { icon: <Zap size={18} />, text: t('register.aiMatching') },
      { icon: <Shield size={18} />, text: t('register.legallySecure') },
      { icon: <Users size={18} />, text: t('register.personalSupport') }
    ],
    fachkraft: [
      { icon: <Briefcase size={18} />, text: t('register.topEmployers') },
      { icon: <Shield size={18} />, text: t('register.visaSupport') },
      { icon: <Users size={18} />, text: t('register.integrationSupport') },
      { icon: <Sparkles size={18} />, text: t('register.freeOfCharge') }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fffbf7] font-sans selection:bg-brand-orange selection:text-white pb-0 overflow-x-hidden">
      
      {/* --- HERO SECTION (Full screen like LoginPage) --- */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden pt-24 lg:pt-28">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-30%] left-[-20%] w-[70%] h-[70%] bg-brand-teal/10 blur-[150px] rounded-full mix-blend-screen animate-float-slow transform-gpu"></div>
          <div className="absolute bottom-[-20%] right-[-15%] w-[60%] h-[60%] bg-brand-orange/10 blur-[120px] rounded-full mix-blend-screen animate-float-medium transform-gpu"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] opacity-20 transform-gpu"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Branding */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              
              <Logo className="h-12 mb-10 mx-auto lg:mx-0 brightness-0 invert opacity-80" />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6 animate-fade-up">
                {t('register.startToday')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-200">
                  {t('register.today')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-up [animation-delay:200ms]">
                {t('register.description')}
              </p>

              {/* Features */}
              <div className="space-y-4 animate-fade-up [animation-delay:400ms]">
                {[
                  { icon: <Zap size={18} />, text: t('register.feature1') },
                  { icon: <Shield size={18} />, text: t('register.feature2') },
                  { icon: <Sparkles size={18} />, text: t('register.feature3') }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-orange">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Registration Card */}
            <div className="relative order-1 lg:order-2 animate-fade-up [animation-delay:200ms]">
              
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-teal/20 via-transparent to-brand-orange/20 rounded-[3rem] blur-2xl opacity-50 pointer-events-none"></div>
              
              {/* The Card */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Card Header */}
                <div className="relative px-8 py-6 border-b border-white/10">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-orange to-brand-teal"></div>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${userType === 'fachkraft' ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-orange/10 text-brand-orange'}`}>
                      <UserPlus size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {isSuccess ? t('register.welcomeTitle') : userType ? (userType === 'unternehmen' ? t('register.companyAccount') : t('register.talentProfile')) : t('register.registerTitle')}
                      </h2>
                      <p className="text-slate-500 text-sm">
                        {isSuccess ? t('register.successCreated') : userType ? t('register.fillForm') : t('register.chooseAccountType')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  
                  {/* Success State */}
                  {isSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                        <Check size={48} className="text-white" strokeWidth={3} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{t('register.successTitle')}</h3>
                      <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                        {t('register.successMessage')}
                      </p>
                      <a 
                        href="#/" 
                        onClick={(e) => handleNavClick(e, '#/')}
                        className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e08c45] transition-all shadow-lg shadow-brand-orange/30"
                      >
                        {t('register.toHomepage')} <ArrowRight size={18} />
                      </a>
                    </div>
                  ) : !userType ? (
                    /* User Type Selection */
                    <div className="space-y-4">
                      
                      {/* Unternehmen Option */}
                      <button
                        onClick={() => setUserType('unternehmen')}
                        className="w-full p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-brand-orange/10 hover:border-brand-orange/30 transition-all duration-300 group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all shrink-0">
                            <Building2 size={26} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                              {t('register.company')}
                            </h3>
                            <p className="text-sm text-slate-500 truncate">
                              {t('register.companyDesc')}
                            </p>
                          </div>
                          <ChevronRight size={22} className="text-slate-600 group-hover:text-brand-orange group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                      </button>

                      {/* Fachkraft Option */}
                      <button
                        onClick={() => setUserType('fachkraft')}
                        className="w-full p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-brand-teal/10 hover:border-brand-teal/30 transition-all duration-300 group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shrink-0">
                            <User size={26} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
                              {t('register.talent')}
                            </h3>
                            <p className="text-sm text-slate-500 truncate">
                              {t('register.talentDesc')}
                            </p>
                          </div>
                          <ChevronRight size={22} className="text-slate-600 group-hover:text-brand-teal group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                      </button>

                      <div className="text-center pt-6 border-t border-white/10 mt-6">
                        <p className="text-sm text-slate-500">
                          {t('register.alreadyAccount')}{' '}
                          <a 
                            href="#/login" 
                            onClick={(e) => handleNavClick(e, '#/login')}
                            className="text-brand-orange font-bold hover:underline"
                          >
                            {t('register.loginHere')}
                          </a>
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Registration Form */
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Benefits Pills */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {benefits[userType].map((benefit, i) => (
                          <div 
                            key={i} 
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                              userType === 'unternehmen' 
                                ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' 
                                : 'bg-brand-teal/10 text-brand-teal border border-brand-teal/20'
                            }`}
                          >
                            {benefit.icon}
                            {benefit.text}
                          </div>
                        ))}
                      </div>

                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          {userType === 'unternehmen' ? t('register.contactPerson') : t('register.fullName')}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 outline-none transition-all text-white placeholder:text-slate-600"
                          placeholder="Max Mustermann"
                        />
                      </div>

                      {/* Company Field */}
                      {userType === 'unternehmen' && (
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('register.companyName')}</label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 outline-none transition-all text-white placeholder:text-slate-600"
                            placeholder="Muster GmbH"
                          />
                        </div>
                      )}

                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('register.emailLabel')}</label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 outline-none transition-all text-white placeholder:text-slate-600"
                            placeholder={t('register.emailPlaceholder')}
                          />
                        </div>
                      </div>

                      {/* Password Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('register.passwordLabel')}</label>
                        <div className="relative">
                          <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 outline-none transition-all text-white placeholder:text-slate-600"
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-600 mt-2 uppercase tracking-wider">{t('register.minChars')}</p>
                      </div>

                      {/* Terms Checkbox */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          checked={formData.agreeTerms}
                          onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                          className="mt-1 w-5 h-5 rounded bg-white/5 border-white/20 text-brand-orange focus:ring-brand-orange/50"
                        />
                        <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed">
                          {t('register.acceptTerms')}{' '}
                          <a href="#/agb" onClick={(e) => handleNavClick(e, '#/agb')} className="text-brand-orange hover:underline">{t('register.termsLink')}</a>
                          {' '}{t('register.and')}{' '}
                          <a href="#/datenschutz" onClick={(e) => handleNavClick(e, '#/datenschutz')} className="text-brand-orange hover:underline">{t('register.privacyLink')}</a>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`
                          w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 mt-6
                          ${userType === 'unternehmen' 
                            ? 'bg-brand-orange hover:bg-[#e08c45] shadow-[0_0_30px_rgba(239,157,86,0.3)]' 
                            : 'bg-brand-teal hover:bg-[#5a929b] shadow-[0_0_30px_rgba(116,166,175,0.3)]'
                          }
                          ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 active:scale-[0.98]'}
                        `}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            {t('register.creating')}
                          </>
                        ) : (
                          <>
                            {t('register.registerButton')} <ArrowRight size={18} />
                          </>
                        )}
                      </button>

                      {/* Back Button */}
                      <button
                        type="button"
                        onClick={() => setUserType(null)}
                        className="w-full py-3 text-sm font-bold text-slate-500 hover:text-white transition-colors"
                      >
                        {t('register.backToSelection')}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Trust indicators below card */}
              <div className="flex items-center justify-center gap-6 mt-8 animate-fade-up [animation-delay:600ms]">
                <div className="flex items-center gap-2 text-slate-500">
                  <Shield size={16} className="text-green-400" />
                  <span className="text-xs font-medium">{t('register.gdpr')}</span>
                </div>
                <div className="w-px h-4 bg-white/10"></div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Lock size={16} className="text-green-400" />
                  <span className="text-xs font-medium">{t('register.ssl')}</span>
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
