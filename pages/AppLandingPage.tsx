
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Smartphone, 
  Bell, 
  Zap, 
  MessageSquare, 
  Scan, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Fingerprint,
  Layers,
  Search,
  ShieldCheck,
  Globe,
  Activity,
  FileText,
  Brain,
  Send,
  Check
} from 'lucide-react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';

// --- AI WORKFLOW: ELEGANT TRANSFORMATION VISUAL ---
const AIWorkflowSection = () => {
  const { t } = useTranslation();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/[0.03] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header - Minimal & Elegant */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {t('appLanding.intelligentAutomation')}
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-dark leading-tight tracking-tight">
            {t('appLanding.docsToProfile')} 
            <span className="text-slate-400"> {t('appLanding.inUnder2Min')}</span>
          </h2>
        </div>

        {/* The Journey - Elegant Cards */}
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-4">
          
          {/* Step 01 - Fotografieren */}
          <div
            onMouseEnter={() => setHoveredStep(0)}
            onMouseLeave={() => setHoveredStep(null)}
            className="group relative"
          >
            <div className="hidden lg:block absolute top-16 -right-2 w-4 h-px bg-slate-200 z-0">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            </div>
            <div className={`
              relative h-full p-8 rounded-3xl transition-all duration-500 cursor-default
              ${hoveredStep === 0 
                ? 'bg-brand-dark text-white shadow-2xl -translate-y-2' 
                : 'bg-slate-50 hover:bg-slate-100'
              }
            `}>
              <div className={`text-6xl font-black mb-6 transition-colors duration-500 ${hoveredStep === 0 ? 'text-white/20' : 'text-slate-200'}`}>{t('appLanding.step01')}</div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${hoveredStep === 0 ? 'bg-brand-teal text-white shadow-lg' : 'bg-brand-teal/10 text-brand-teal'}`}>
                <Scan size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${hoveredStep === 0 ? 'text-white' : 'text-brand-dark'}`}>{t('appLanding.photograph')}</h3>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${hoveredStep === 0 ? 'text-white/70' : 'text-slate-500'}`}>{t('appLanding.photographDesc')}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transition-all duration-500 ${hoveredStep === 0 ? 'bg-brand-teal' : 'bg-transparent'}`}></div>
            </div>
          </div>

          {/* Step 02 - Erkennen */}
          <div
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
            className="group relative"
          >
            <div className="hidden lg:block absolute top-16 -right-2 w-4 h-px bg-slate-200 z-0">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            </div>
            <div className={`
              relative h-full p-8 rounded-3xl transition-all duration-500 cursor-default
              ${hoveredStep === 1 
                ? 'bg-brand-dark text-white shadow-2xl -translate-y-2' 
                : 'bg-slate-50 hover:bg-slate-100'
              }
            `}>
              <div className={`text-6xl font-black mb-6 transition-colors duration-500 ${hoveredStep === 1 ? 'text-white/20' : 'text-slate-200'}`}>{t('appLanding.step02')}</div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${hoveredStep === 1 ? 'bg-brand-orange text-white shadow-lg' : 'bg-brand-orange/10 text-brand-orange'}`}>
                <Brain size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${hoveredStep === 1 ? 'text-white' : 'text-brand-dark'}`}>{t('appLanding.recognize')}</h3>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${hoveredStep === 1 ? 'text-white/70' : 'text-slate-500'}`}>{t('appLanding.recognizeDesc')}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transition-all duration-500 ${hoveredStep === 1 ? 'bg-brand-orange' : 'bg-transparent'}`}></div>
            </div>
          </div>

          {/* Step 03 - Erstellen */}
          <div
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
            className="group relative"
          >
            <div className="hidden lg:block absolute top-16 -right-2 w-4 h-px bg-slate-200 z-0">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            </div>
            <div className={`
              relative h-full p-8 rounded-3xl transition-all duration-500 cursor-default
              ${hoveredStep === 2 
                ? 'bg-brand-dark text-white shadow-2xl -translate-y-2' 
                : 'bg-slate-50 hover:bg-slate-100'
              }
            `}>
              <div className={`text-6xl font-black mb-6 transition-colors duration-500 ${hoveredStep === 2 ? 'text-white/20' : 'text-slate-200'}`}>{t('appLanding.step03')}</div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${hoveredStep === 2 ? 'bg-brand-teal text-white shadow-lg' : 'bg-brand-teal/10 text-brand-teal'}`}>
                <Sparkles size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${hoveredStep === 2 ? 'text-white' : 'text-brand-dark'}`}>{t('appLanding.create')}</h3>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${hoveredStep === 2 ? 'text-white/70' : 'text-slate-500'}`}>{t('appLanding.createDesc')}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transition-all duration-500 ${hoveredStep === 2 ? 'bg-brand-teal' : 'bg-transparent'}`}></div>
            </div>
          </div>

          {/* Step 04 - Matchen */}
          <div
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
            className="group relative"
          >
            <div className={`
              relative h-full p-8 rounded-3xl transition-all duration-500 cursor-default
              ${hoveredStep === 3 
                ? 'bg-brand-dark text-white shadow-2xl -translate-y-2' 
                : 'bg-slate-50 hover:bg-slate-100'
              }
            `}>
              <div className={`text-6xl font-black mb-6 transition-colors duration-500 ${hoveredStep === 3 ? 'text-white/20' : 'text-slate-200'}`}>{t('appLanding.step04')}</div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${hoveredStep === 3 ? 'bg-brand-orange text-white shadow-lg' : 'bg-brand-orange/10 text-brand-orange'}`}>
                <Zap size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${hoveredStep === 3 ? 'text-white' : 'text-brand-dark'}`}>{t('appLanding.match')}</h3>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${hoveredStep === 3 ? 'text-white/70' : 'text-slate-500'}`}>{t('appLanding.matchDesc')}</p>
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transition-all duration-500 ${hoveredStep === 3 ? 'bg-brand-orange' : 'bg-transparent'}`}></div>
            </div>
          </div>
        </div>

        {/* Bottom Visual - The Result */}
        <div className="mt-16 lg:mt-20 relative">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-xl">
            
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              
              {/* Left: Message */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={20} className="text-green-600" />
                  </div>
                  <span className="text-sm font-bold text-green-600 uppercase tracking-wider">{t('appLanding.result')}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-brand-dark mb-4">
                  {t('appLanding.profileExcites')}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-xl">
                  {t('appLanding.noManualInput')}
                </p>
              </div>

              {/* Right: Stats */}
              <div className="flex gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-black text-brand-orange mb-1">98%</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t('appLanding.accuracy')}</div>
                </div>
                <div className="w-px bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-black text-brand-teal mb-1">2 Min</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t('appLanding.profileTime')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- VISUAL: APP WORKFLOW SHOWCASE ---
const AppWorkflowShowcase = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const workflows = [
    {
      id: 0,
      title: t('appLanding.scanDocument'),
      subtitle: t('appLanding.aiRecognition'),
      icon: <Scan size={28} />,
      color: "brand-teal",
      preview: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal">
              <Scan size={24} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-slate-800 mb-1">Zeugnis_2024.pdf</div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-brand-teal rounded-full animate-pulse"></div>
                </div>
                <span className="text-[10px] font-bold text-brand-teal">{t('appLanding.beingAnalyzed')}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-green-50 rounded-xl border border-green-100">
              <div className="text-[9px] font-bold text-green-600 uppercase tracking-wider mb-1">{t('appLanding.format')}</div>
              <div className="text-sm font-black text-green-700">✓ {t('appLanding.valid')}</div>
            </div>
            <div className="p-3 bg-green-50 rounded-xl border border-green-100">
              <div className="text-[9px] font-bold text-green-600 uppercase tracking-wider mb-1">{t('appLanding.quality')}</div>
              <div className="text-sm font-black text-green-700">✓ {t('appLanding.optimal')}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: t('appLanding.receiveMatch'),
      subtitle: t('appLanding.findJobs'),
      icon: <Zap size={28} />,
      color: "brand-orange",
      preview: (
        <div className="space-y-3">
          {[
            { company: "Hanseatic Bau AG", role: "Ingenieur", match: 98, img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop" },
            { company: "TechPro GmbH", role: "Entwickler", match: 94, img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=60&h=60&fit=crop" }
          ].map((job, i) => (
            <div key={i} className={`p-4 bg-white rounded-2xl border shadow-sm transition-all ${i === 0 ? 'border-brand-orange/30 scale-[1.02]' : 'border-slate-100 opacity-70'}`}>
              <div className="flex items-center gap-4">
                <img src={job.img} alt={job.company} className="w-12 h-12 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-800 truncate">{job.company}</div>
                  <div className="text-xs text-slate-400">{job.role}</div>
                </div>
                <div className="flex items-center gap-1 bg-brand-orange/10 text-brand-orange px-3 py-1.5 rounded-full">
                  <Zap size={12} fill="currentColor" />
                  <span className="text-xs font-black">{job.match}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 2,
      title: t('appLanding.trackStatus'),
      subtitle: t('appLanding.realTimeUpdates'),
      icon: <Activity size={28} />,
      color: "brand-teal",
      preview: (
        <div className="space-y-4">
          <div className="p-4 bg-brand-dark rounded-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">Visa-Antrag #DE-4429</div>
              <div className="flex items-center gap-1.5 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-[10px] font-bold">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                {t('appLanding.active')}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[t('appLanding.submitted'), t('appLanding.inProgress'), t('appLanding.approved')].map((step, i) => (
                <div key={i} className="flex-1">
                  <div className={`h-1.5 rounded-full mb-2 ${i <= 1 ? 'bg-brand-teal' : 'bg-white/10'}`}></div>
                  <div className={`text-[9px] font-bold ${i <= 1 ? 'text-white' : 'text-white/40'}`}>{step}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-brand-teal/10 rounded-xl border border-brand-teal/20">
            <Bell size={16} className="text-brand-teal" />
            <span className="text-xs font-bold text-brand-teal">{t('appLanding.newNotification')}</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative">
      {/* Main Phone Frame */}
      <div className="relative w-[300px] md:w-[340px] mx-auto">
        <div className="relative bg-[#0f172a] rounded-[3rem] p-3 shadow-2xl">
          <div className="bg-white rounded-[2.5rem] overflow-hidden">
            {/* Phone Header */}
            <div className="h-14 bg-white border-b border-slate-100 flex items-center justify-between px-6 relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              <Logo className="h-4 opacity-70 mt-2" />
              <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mt-2">
                <Bell size={14} />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 bg-slate-50 min-h-[380px]">
              {/* Active Step Header */}
              <div className="mb-5">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-3 ${
                  workflows[activeStep].color === 'brand-orange' ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-teal/10 text-brand-teal'
                }`}>
                  {workflows[activeStep].icon && React.cloneElement(workflows[activeStep].icon as React.ReactElement<any>, { size: 12 })}
                  {workflows[activeStep].subtitle}
                </div>
                <h4 className="text-xl font-black text-slate-800">{workflows[activeStep].title}</h4>
              </div>

              {/* Dynamic Preview Content */}
              <div className="transition-all duration-500">
                {workflows[activeStep].preview}
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="h-16 bg-white border-t border-slate-100 flex items-center justify-around px-6">
              {[
                { icon: <Layers size={20} />, active: true },
                { icon: <Search size={20} />, active: false },
                { icon: <MessageSquare size={20} />, active: false },
                { icon: <Smartphone size={20} />, active: false }
              ].map((item, i) => (
                <div key={i} className={item.active ? 'text-brand-orange' : 'text-slate-300'}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {workflows.map((w, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-xs font-bold ${
              activeStep === i 
                ? 'bg-brand-dark text-white shadow-lg' 
                : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
            }`}
          >
            {React.cloneElement(w.icon as React.ReactElement<any>, { size: 14 })}
            <span className="hidden sm:inline">{w.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export const AppLandingPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 4;
      const y = (e.clientY / window.innerHeight - 0.5) * 4;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <div className="min-h-screen bg-brand-cream font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section id="app-hero" className="relative pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-5%] right-[-5%] w-[500px] md:w-[700px] lg:w-[900px] h-[500px] md:h-[700px] lg:h-[900px] bg-brand-orange/[0.07] blur-[100px] lg:blur-[150px] rounded-full transform-gpu"></div>
          <div className="absolute bottom-[5%] left-[-5%] w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-brand-teal/[0.05] blur-[100px] lg:blur-[150px] rounded-full transform-gpu"></div>
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Messaging */}
            <div className="text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-brand-orange text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
                <Smartphone size={12} />
                {t('appLanding.badge')}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-dark leading-[0.95] tracking-tighter mb-5 md:mb-6">
                {t('appLanding.heroTitle1')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-[#cd7f32]">
                   {t('appLanding.heroTitle2')}
                </span>
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg text-slate-500 mb-6 md:mb-8 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
                {t('appLanding.heroDescription')}
              </p>
              
              <div id="app-email-form" className="max-w-md mx-auto lg:mx-0">
                {status === 'success' ? (
                  <div className="flex items-center gap-4 bg-green-50 border border-green-200 text-green-700 px-6 py-5 rounded-2xl shadow-sm animate-fade-in">
                    <CheckCircle2 size={22} />
                    <div className="text-left">
                      <span className="font-bold block">{t('appLanding.onTheList')}</span>
                      <span className="text-sm opacity-80">{t('appLanding.notifyRelease')}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                      <Bell size={12} /> {t('appLanding.earlyAccess')}
                    </p>
                    <form onSubmit={handleRegister} className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder={t('appLanding.enterEmail')} 
                        className="flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium shadow-sm text-base placeholder:text-slate-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button variant="primary" className="!rounded-xl !py-4 !px-8 shadow-xl shadow-brand-orange/25" disabled={status === 'loading'}>
                        {status === 'loading' ? '...' : <ArrowRight size={20} />}
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            {/* Right Content: Optimized iPhone Mockup */}
            <div className="relative flex justify-center items-center py-6 md:py-8 lg:py-12 px-4">
               <div className="absolute inset-0 bg-brand-teal/5 blur-[100px] lg:blur-[180px] rounded-full scale-90 pointer-events-none transform-gpu"></div>

               <div 
                 className="relative w-[260px] h-[530px] md:w-[280px] md:h-[580px] lg:w-[300px] lg:h-[620px] bg-[#020617] rounded-[50px] md:rounded-[55px] lg:rounded-[60px] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)] lg:shadow-[0_60px_120px_-30px_rgba(15,23,42,0.45)] border-[9px] md:border-[10px] lg:border-[11px] border-[#1e293b] transition-transform duration-700 ease-out will-change-transform z-10"
                 style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
               >
                  <div className="w-full h-full bg-white rounded-[49px] overflow-hidden flex flex-col relative">
                     <div className="absolute top-0 inset-x-0 h-9 flex justify-center z-[100] pointer-events-none">
                        <div className="w-[120px] h-[32px] bg-black rounded-b-[20px]"></div>
                     </div>
                     
                     <div className="pt-11 px-8 pb-4 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between sticky top-0 z-50">
                        <div className="opacity-80 scale-90 origin-left">
                            <Logo className="h-4" />
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-orange border border-slate-100">
                          <Bell size={18} strokeWidth={2.5} />
                        </div>
                     </div>

                     <div className="flex-1 overflow-y-auto bg-[#fafafa] p-6 space-y-6 hide-scrollbar">
                        <div className="bg-brand-dark rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/15 rounded-full -mr-12 -mt-12"></div>
                           <div className="text-[10px] font-black text-brand-orange uppercase tracking-[0.25em] mb-4 flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                              {t('appLanding.validationActive')}
                           </div>
                           <div className="font-bold text-[13px] mb-4 leading-snug">{t('appLanding.visaProcess')} <br/>#DE-4429</div>
                           
                           <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-brand-orange to-orange-300 w-3/4"></div>
                           </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-3 group">
                              <div className="w-11 h-11 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all"><Scan size={22} /></div>
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('appLanding.scanner')}</span>
                           </div>
                           <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-3 group">
                              <div className="w-11 h-11 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all"><MessageSquare size={22} /></div>
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('appLanding.support')}</span>
                           </div>
                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 group">
                           <div className="flex items-center justify-between mb-5">
                              <span className="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em]">{t('appLanding.topMatch')}</span>
                              <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                                 <Zap size={11} fill="currentColor" /> 98%
                              </div>
                           </div>
                           <div className="flex items-center gap-4">
                              <div className="w-14 h-14 rounded-2xl bg-slate-50 overflow-hidden border border-slate-200">
                                 <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop" alt="Hanseatic Bau AG" className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="text-[14px] font-black text-brand-dark truncate leading-tight">Hanseatic Bau AG</div>
                                 <div className="text-[11px] text-slate-400 font-bold truncate mt-1 uppercase tracking-wider">Engineering</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                     <div className="h-16 bg-white border-t border-slate-100 flex items-center justify-around px-8 relative z-50">
                        <div className="text-brand-orange"><Layers size={22} strokeWidth={2.5} /></div>
                        <div className="text-slate-300"><Search size={22} /></div>
                        <div className="text-slate-300"><MessageSquare size={22} /></div>
                        <div className="text-slate-300"><Smartphone size={22} /></div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-100 rounded-full"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE GRID --- */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              {
                icon: <Fingerprint size={34} />,
                title: t('appLanding.featureSecurity'),
                desc: t('appLanding.featureSecurityDesc'),
                color: "text-brand-teal",
                bg: "bg-teal-50"
              },
              {
                icon: <Globe size={34} />,
                title: t('appLanding.featureNetwork'),
                desc: t('appLanding.featureNetworkDesc'),
                color: "text-brand-orange",
                bg: "bg-orange-50"
              },
              {
                icon: <ShieldCheck size={34} />,
                title: t('appLanding.featureLegal'),
                desc: t('appLanding.featureLegalDesc'),
                color: "text-slate-700",
                bg: "bg-slate-50"
              }
            ].map((feat, i) => (
              <div key={i} className="group p-8 md:p-12 rounded-[3.5rem] bg-[#f8fafc] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className={`w-16 h-16 ${feat.bg} rounded-2xl flex items-center justify-center ${feat.color} mb-10 shadow-sm group-hover:scale-110 transition-transform mx-auto md:mx-0`}>
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-5 tracking-tight">{feat.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-lg">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SHOWCASE SECTION: APP WORKFLOW --- */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>

        <div className="max-w-[1300px] mx-auto px-6">
          
          {/* Section Header - Centered */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark text-white text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={12} />
              {t('appLanding.howItWorks')}
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-brand-dark mb-6 leading-[1.15] tracking-tighter">
              {t('appLanding.allInOne')} <br/>
              <span className="text-brand-orange block mt-2">{t('appLanding.simpleOverview')}</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              {t('appLanding.allInOneDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
            
            {/* Left: Feature List */}
            <div className="order-2 lg:order-1 space-y-6">
              {[
                { 
                  icon: <Scan size={24} />, 
                  title: t('appLanding.docScanTitle'), 
                  desc: t('appLanding.docScanDesc'),
                  color: "brand-teal"
                },
                { 
                  icon: <Zap size={24} />, 
                  title: t('appLanding.jobMatchTitle'), 
                  desc: t('appLanding.jobMatchDesc'),
                  color: "brand-orange"
                },
                { 
                  icon: <Activity size={24} />, 
                  title: t('appLanding.statusTrackTitle'), 
                  desc: t('appLanding.statusTrackDesc'),
                  color: "brand-teal"
                },
                { 
                  icon: <MessageSquare size={24} />, 
                  title: t('appLanding.directContactTitle'), 
                  desc: t('appLanding.directContactDesc'),
                  color: "brand-orange"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all group cursor-default">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 ${
                    item.color === 'brand-orange' 
                      ? 'bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white' 
                      : 'bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-brand-dark">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Phone Mockup */}
            <div className="order-1 lg:order-2 relative">
              <AppWorkflowShowcase />
            </div>

          </div>
        </div>
      </section>

      {/* --- AI-POWERED WORKFLOW SECTION --- */}
      <AIWorkflowSection />

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 relative bg-white">
         <div className="max-w-[1200px] mx-auto bg-brand-dark rounded-[4rem] md:rounded-[5rem] p-12 md:p-32 text-center shadow-[0_80px_160px_-40px_rgba(15,23,42,0.4)] relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/[0.15] blur-[150px] rounded-full"></div>
            
            <div className="relative z-10">
               <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.92]">{t('appLanding.ctaTitle1')} <br/> {t('appLanding.ctaTitle2')}</h2>
               <p className="text-white/70 text-xl md:text-3xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                  {t('appLanding.ctaDesc')}
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <button 
                     onClick={() => { 
                       const el = document.getElementById('app-email-form'); 
                       if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                     }}
                     className="flex items-center gap-5 bg-white text-brand-dark px-10 md:px-14 py-5 md:py-6 rounded-[1.8rem] font-black hover:scale-105 transition-transform shadow-2xl text-lg md:text-xl group w-full sm:w-auto justify-center"
                  >
                    <Bell size={22} />
                    {t('appLanding.ctaButton')}
                  </button>
               </div>
               <p className="text-white/40 text-sm mt-6">{t('appLanding.ctaNote')}</p>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};
