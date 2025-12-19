import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Shield,
  Sparkles,
  LogIn,
  KeyRound
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setError(t('login.loginInfoMessage'));
    }, 1500);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <div className="min-h-screen bg-[#fffbf7] font-sans selection:bg-brand-orange selection:text-white pb-0 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden pt-24 lg:pt-28">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-30%] right-[-20%] w-[70%] h-[70%] bg-brand-orange/10 blur-[150px] rounded-full mix-blend-screen animate-float-slow transform-gpu"></div>
          <div className="absolute bottom-[-20%] left-[-15%] w-[60%] h-[60%] bg-brand-teal/10 blur-[120px] rounded-full mix-blend-screen animate-float-medium transform-gpu"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] opacity-20 transform-gpu"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Branding */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              
              <Logo className="h-12 mb-10 mx-auto lg:mx-0 brightness-0 invert opacity-80" />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6 animate-fade-up">
                {t('login.welcomeBack')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-200">
                  {t('login.back')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-up [animation-delay:200ms]">
                {t('login.description')}
              </p>

              {/* Features */}
              <div className="space-y-4 animate-fade-up [animation-delay:400ms]">
                {[
                  { icon: <Sparkles size={18} />, text: t('login.feature1') },
                  { icon: <Shield size={18} />, text: t('login.feature2') },
                  { icon: <KeyRound size={18} />, text: t('login.feature3') }
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

            {/* Right Side - Login Card */}
            <div className="relative order-1 lg:order-2 animate-fade-up [animation-delay:200ms]">
              
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/20 via-transparent to-brand-teal/20 rounded-[3rem] blur-2xl opacity-50 pointer-events-none"></div>
              
              {/* The Card */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Card Header */}
                <div className="relative px-8 py-6 border-b border-white/10">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-teal to-brand-orange"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <LogIn size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{t('login.signIn')}</h2>
                      <p className="text-slate-500 text-sm">{t('login.accountAccess')}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Error Message */}
                    {error && (
                      <div className="p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm">
                        {error}
                      </div>
                    )}

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        {t('login.emailLabel')}
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 outline-none transition-all text-white placeholder:text-slate-600"
                          placeholder={t('login.emailPlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {t('login.passwordLabel')}
                        </label>
                        <button 
                          type="button"
                          onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                          className="text-xs text-brand-orange hover:underline font-medium"
                        >
                          {t('login.forgotPassword')}
                        </button>
                      </div>
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
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="remember"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                        className="w-5 h-5 rounded bg-white/5 border-white/20 text-brand-orange focus:ring-brand-orange/50"
                      />
                      <label htmlFor="remember" className="text-sm text-slate-400">
                        {t('login.rememberMe')}
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 mt-6
                        bg-brand-orange hover:bg-[#e08c45] shadow-[0_0_30px_rgba(239,157,86,0.3)]
                        ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 active:scale-[0.98]'}
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          {t('login.loggingIn')}
                        </>
                      ) : (
                        <>
                          {t('login.loginButton')} <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Register Link */}
                  <div className="text-center pt-6 border-t border-white/10 mt-6">
                    <p className="text-sm text-slate-500">
                      {t('login.noAccount')}{' '}
                      <a 
                        href="#/register" 
                        onClick={(e) => handleNavClick(e, '#/register')}
                        className="text-brand-orange font-bold hover:underline"
                      >
                        {t('login.registerNow')}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust indicators below card */}
              <div className="flex items-center justify-center gap-6 mt-8 animate-fade-up [animation-delay:600ms]">
                <div className="flex items-center gap-2 text-slate-500">
                  <Shield size={16} className="text-green-400" />
                  <span className="text-xs font-medium">{t('login.ssl')}</span>
                </div>
                <div className="w-px h-4 bg-white/10"></div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Lock size={16} className="text-green-400" />
                  <span className="text-xs font-medium">{t('login.gdpr')}</span>
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
