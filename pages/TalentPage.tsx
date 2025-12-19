
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  UserCircle, 
  Zap, 
  MapPin, 
  UploadCloud,
  FileCheck,
  Bell,
  Star,
  Briefcase,
  Shield,
  Heart,
  Download,
  Hexagon,
  Search,
  Cpu,
  Fingerprint,
  ScanLine,
  Activity,
  Globe,
  Database,
  Layers,
  Sparkles,
  BookOpen,
  Info,
  MessageSquare
} from 'lucide-react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Footer } from '../components/Footer';
import { FAQSection } from '../components/FAQSection';

// --- VISUAL ELEMENTS ---

const GlowingAvatar = () => (
    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl p-[2px] overflow-hidden group flex-shrink-0 shadow-lg shadow-brand-teal/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal via-white to-brand-teal opacity-80"></div>
        <div className="relative w-full h-full bg-[#0f172a] rounded-[14px] flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" className="w-full h-full object-cover opacity-90" alt="Profile" loading="lazy" />
        </div>
    </div>
);

const GlassCardLeft = ({ isMatching, t }: { isMatching: boolean; t: (key: string) => string }) => (
    <div className={`relative w-[260px] md:w-[240px] lg:w-[260px] xl:w-[280px] group z-30 transition-all duration-500 ${isMatching ? 'scale-[1.02]' : 'scale-100 opacity-90'}`}>
        <div className={`absolute -inset-1 bg-brand-teal/20 rounded-[2rem] blur-xl transition-opacity duration-500 transform-gpu ${isMatching ? 'opacity-50' : 'opacity-10'}`}></div>
        <div className={`relative rounded-[1.5rem] md:rounded-[1.5rem] lg:rounded-[1.8rem] p-4 md:p-5 lg:p-6 border transition-all duration-500 bg-slate-900/90 shadow-2xl ${isMatching ? 'border-brand-teal/40' : 'border-white/10'}`}>
            <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-5">
                <GlowingAvatar />
                <div className="min-w-0">
                    <div className="text-white font-bold text-sm md:text-base tracking-tight truncate">Sarah Muster</div>
                    <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-[9px] md:text-[10px] font-black text-brand-teal uppercase tracking-widest mt-1">
                        {t('talentPage.verified')}
                    </div>
                </div>
            </div>
            <div className="space-y-3.5 relative">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{t('talentPage.qualification')}</span>
                    <span className="text-white text-[10px] md:text-xs font-mono font-bold">Eng. B.Sc.</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{t('talentPage.language')}</span>
                    <span className="text-white text-[10px] md:text-xs font-mono font-bold">Deutsch B2</span>
                </div>
            </div>
            <div className={`absolute left-1/2 -bottom-1.5 -translate-x-1/2 md:top-1/2 md:bottom-auto md:left-auto md:-right-1.5 w-3.5 h-3.5 rounded-full border-2 border-white z-50 transition-all duration-700 ${isMatching ? 'bg-brand-teal shadow-[0_0_15px_#74a6af]' : 'bg-slate-700'}`}></div>
        </div>
    </div>
);

const GlassCardRight = ({ isMatching, t }: { isMatching: boolean; t: (key: string) => string }) => (
    <div className={`relative w-[260px] md:w-[240px] lg:w-[260px] xl:w-[280px] group z-30 transition-all duration-500 ${isMatching ? 'scale-[1.02]' : 'scale-100 opacity-90'}`}>
        <div className={`absolute -inset-1 bg-brand-orange/20 rounded-[2rem] blur-xl transition-opacity duration-500 transform-gpu ${isMatching ? 'opacity-50' : 'opacity-10'}`}></div>
        <div className={`relative rounded-[1.5rem] md:rounded-[1.5rem] lg:rounded-[1.8rem] p-4 md:p-5 lg:p-6 border transition-all duration-500 bg-slate-900/90 shadow-2xl ${isMatching ? 'border-brand-orange/40' : 'border-white/10'}`}>
            <div className="flex justify-between items-start mb-5 border-b border-white/5 pb-5">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0 shadow-inner">
                        <Briefcase size={22} strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0">
                        <div className="text-white font-bold text-sm md:text-base leading-none truncate">HanseBau AG</div>
                        <div className="text-[10px] md:text-[11px] text-slate-400 font-bold mt-1.5 flex items-center gap-1">
                           <MapPin size={10} /> Hamburg, DE
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white/5 rounded-2xl p-4 border border-white/5 overflow-hidden group/match">
                <div className={`absolute inset-0 bg-brand-orange/5 ${isMatching ? 'animate-pulse' : ''}`}></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[9px] md:text-[10px] text-brand-orange font-black uppercase tracking-[0.2em]">{t('talentPage.perfectMatch')}</span>
                        <div className={`transition-all duration-700 ${isMatching ? 'bg-green-500/20 text-green-400' : 'bg-slate-700/20 text-slate-500'} p-1 rounded-md`}><CheckCircle2 size={10} /></div>
                    </div>
                    <div className="text-white font-black text-xs md:text-sm truncate mb-3">Mechaniker SHK (m/w/d)</div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-brand-orange to-yellow-400 transition-all duration-[2000ms] ease-out shadow-[0_0_10px_#ef9d56] ${isMatching ? 'w-[98%]' : 'w-0'}`}></div>
                    </div>
                </div>
            </div>
            <div className={`absolute left-1/2 -top-1.5 -translate-x-1/2 md:top-1/2 md:left-auto md:bottom-auto md:-left-1.5 w-3.5 h-3.5 rounded-full border-2 border-white z-50 transition-all duration-700 ${isMatching ? 'bg-brand-orange shadow-[0_0_15px_#ef9d56]' : 'bg-slate-700'}`}></div>
        </div>
    </div>
);

const AI_Core = ({ isMatching }: { isMatching: boolean }) => (
    <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 flex items-center justify-center z-40 transform-gpu">
        <div className={`absolute inset-0 rounded-full border-2 border-brand-teal/20 transition-all duration-500 ${isMatching ? 'border-t-brand-teal' : 'border-slate-800'}`}></div>
        <div className={`absolute inset-4 rounded-full border border-brand-orange/20 transition-all duration-500 ${isMatching ? 'border-b-brand-orange' : 'border-slate-800'}`}></div>
        <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-800/80 border border-white/20 flex items-center justify-center shadow-xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-tr from-brand-teal/40 via-transparent to-brand-orange/40 transition-opacity duration-500 ${isMatching ? 'opacity-100' : 'opacity-20'}`}></div>
            <div className={`relative z-10 text-white transition-all duration-500 ${isMatching ? 'scale-110' : 'scale-90 opacity-40'}`}>
                <Cpu size={32} className="md:w-10 md:h-10" />
            </div>
        </div>
        {isMatching && (
          <>
            <div className="absolute top-[-25%] md:top-auto md:left-[-25%] w-3 h-3 bg-brand-teal rounded-full"></div>
            <div className="absolute bottom-[-25%] md:bottom-auto md:right-[-25%] w-3 h-3 bg-brand-orange rounded-full"></div>
          </>
        )}
    </div>
);

const MatchInterface = () => {
    const { t } = useTranslation();
    const [isMatching, setIsMatching] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsMatching(prev => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[720px] md:h-[650px] xl:h-[600px] flex items-center justify-center overflow-visible mt-0 md:mt-0">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-xl aspect-square bg-brand-orange/10 blur-3xl rounded-full pointer-events-none transition-opacity duration-1000 transform-gpu ${isMatching ? 'opacity-40' : 'opacity-5'}`}></div>
            <div className={`absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-teal/10 blur-3xl rounded-full pointer-events-none -translate-y-1/2 transition-opacity duration-1000 transform-gpu ${isMatching ? 'opacity-40' : 'opacity-5'}`}></div>
            
            {/* Vertical Path for Mobile and Medium Screens */}
            <svg className="absolute w-full h-full z-10 pointer-events-none overflow-visible xl:hidden">
                <path d="M 50% 140 Q 50% 360, 50% 580" fill="none" stroke={isMatching ? "#74a6af" : "#1e293b"} strokeWidth="2" strokeDasharray="8 8" className={`transition-all duration-1000 ${isMatching ? 'opacity-30' : 'opacity-10'}`} />
            </svg>

            {/* Vertical layout for mobile + medium screens, horizontal only for xl+ */}
            <div className="relative z-20 flex flex-col xl:flex-row items-center justify-center w-full gap-6 xl:gap-12 transform scale-[0.85] sm:scale-[0.88] md:scale-[0.9] xl:scale-[0.88] 2xl:scale-100 transition-all duration-500">
                {/* SARAH */}
                <div className={`transition-all duration-500 transform ${isMatching ? 'translate-y-0 xl:translate-x-0' : '-translate-y-4 xl:translate-y-0 xl:-translate-x-4'}`}>
                  <GlassCardLeft isMatching={isMatching} t={t} />
                </div>
                
                {/* CORE */}
                <div className="z-40 relative scale-[0.85] xl:scale-100"><AI_Core isMatching={isMatching} /></div>
                
                {/* HANSEBAU */}
                <div className={`transition-all duration-500 transform ${isMatching ? 'translate-y-0 xl:translate-x-0' : 'translate-y-4 xl:translate-y-0 xl:translate-x-4'}`}>
                  <GlassCardRight isMatching={isMatching} t={t} />
                </div>
            </div>

            {/* Pill Positioned clearly below the last card on mobile */}
            <div className="absolute bottom-0 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-[#0f172a] border border-white/10 rounded-full shadow-xl transition-all duration-500 z-50">
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${isMatching ? 'bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]' : 'bg-slate-600 shadow-none'}`}></div>
                <span className={`text-[11px] font-black uppercase tracking-[0.3em] transition-colors duration-700 ${isMatching ? 'text-white' : 'text-slate-500'}`}>
                   {isMatching ? t('talentPage.aiMatchingActive') : t('talentPage.systemStandby')}
                </span>
            </div>
        </div>
    );
};

// --- COMPONENT: TIMELINE ---
const TimelineDashboard = () => {
    const { t } = useTranslation();
    const [activeStep, setActiveStep] = useState(1);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (activeStep === 1) {
            const timer = setInterval(() => {
                setProgress(old => (old >= 100 ? 100 : old + 2));
            }, 50);
            return () => clearInterval(timer);
        } else {
            setProgress(0);
        }
    }, [activeStep]);

    const steps = [
        {
            id: 1, label: t('talentPage.step01'), title: t('talentPage.smartUpload'),
            desc: t('talentPage.smartUploadDesc'),
            icon: <UploadCloud size={20} />,
            renderUI: () => (
                <div className="w-full h-full flex flex-col p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h4 className="font-bold text-slate-800 text-lg">{t('talentPage.myDocuments')}</h4>
                            <p className="text-xs text-slate-400 font-medium">{t('talentPage.documentsReady')}</p>
                        </div>
                        <button className="bg-brand-dark text-white p-2.5 rounded-xl shadow-lg active:scale-95 transition-transform">
                            <UploadCloud size={18} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white border border-slate-100 p-3 rounded-2xl flex items-center gap-4 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 shadow-inner"><FileCheck size={20} /></div>
                            <div className="flex-1 min-w-0"><div className="text-sm font-black text-slate-800 truncate">Lebenslauf_Final.pdf</div><div className="text-[10px] text-green-600 font-bold uppercase tracking-wider">{t('talentPage.validated')}</div></div>
                            <CheckCircle2 size={16} className="text-green-500" />
                        </div>
                        <div className="bg-white border border-brand-teal/20 p-3 rounded-2xl flex flex-col gap-2 shadow-md">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0"><FileText size={20} /></div>
                                <div className="flex-1 min-w-0"><div className="text-sm font-black text-slate-800 truncate">Diplom_Master.pdf</div><div className="text-[10px] text-brand-teal font-bold">{progress}% {t('talentPage.analyzing')}</div></div>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-brand-teal transition-all duration-100" style={{ width: `${progress}%` }}></div></div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2, label: t('talentPage.step02'), title: t('talentPage.profileBoost'),
            desc: t('talentPage.profileBoostDesc'),
            icon: <UserCircle size={20} />,
            renderUI: () => (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                     <div className="relative w-full max-w-[220px] md:max-w-[280px] flex flex-col items-center">
                        <div className="relative w-36 h-36 md:w-48 md:h-48 mb-6">
                            <svg className="w-full h-full transform rotate-[135deg]" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="42" stroke="#f1f5f9" strokeWidth="10" fill="none" strokeDasharray="198 264" />
                                <circle cx="50" cy="50" r="42" stroke="#74a6af" strokeWidth="10" fill="none" strokeDasharray="165 264" className="transition-all duration-1000" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter">85%</span><span className="text-[10px] font-black text-brand-teal uppercase tracking-[0.2em] mt-1">{t('talentPage.strong')}</span></div>
                        </div>
                        <div className="w-full bg-white rounded-2xl p-4 shadow-xl border border-slate-100 text-left relative overflow-hidden group">
                             <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange"></div>
                             <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{t('talentPage.aiRecommendation')}</div>
                             <p className="text-xs font-bold text-slate-600 leading-snug">{t('talentPage.addCertificate')}</p>
                        </div>
                     </div>
                </div>
            )
        },
        {
            id: 3, label: t('talentPage.step03'), title: t('talentPage.liveMatches'),
            desc: t('talentPage.liveMatchesDesc'),
            icon: <Zap size={20} />,
            renderUI: () => (
                <div className="w-full h-full flex flex-col p-6 bg-slate-50/50">
                    <div className="flex items-center justify-between mb-6"><h4 className="font-black text-slate-800 text-lg uppercase tracking-tight">{t('talentPage.topSuggestions')}</h4><div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div></div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-3xl shadow-xl border-l-[6px] border-brand-teal transform transition-transform hover:scale-[1.02]">
                             <div className="flex justify-between items-start mb-2"><div className="bg-brand-dark text-white text-[9px] font-black px-2 py-0.5 rounded-full">{t('talentPage.newNow')}</div><div className="text-brand-teal font-black text-sm">98% {t('talentPage.match')}</div></div>
                             <h5 className="font-black text-slate-800 text-sm leading-tight mb-1">{t('talentPage.sampleJob1')}</h5><p className="text-[11px] text-slate-500 font-bold">{t('talentPage.sampleCompany1')}</p>
                        </div>
                    </div>
                    <div className="mt-auto bg-brand-dark text-white p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                        <div className="w-10 h-10 rounded-2xl bg-brand-orange flex items-center justify-center shrink-0 shadow-lg shadow-brand-orange/20"><Bell size={18} fill="currentColor" /></div>
                        <div><div className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-0.5">{t('talentPage.pushInfo')}</div><div className="text-xs font-bold leading-tight">{t('talentPage.newInvitation')}</div></div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
                <div className="w-full lg:w-[40%] bg-white p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-100">
                    <div className="mb-10 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">{t('talentPage.userJourney')}</div>
                        <h3 className="text-2xl md:text-4xl font-black text-brand-dark tracking-tight leading-none">{t('talentPage.in3Steps')} <br/> {t('talentPage.toSuccess')}</h3>
                    </div>
                    <div className="space-y-2">
                        {steps.map((step) => (
                            <div key={step.id} className={`p-4 md:p-5 flex items-start gap-5 cursor-pointer rounded-[2rem] transition-all duration-300 ${activeStep === step.id ? 'bg-slate-50 lg:bg-transparent' : 'opacity-50 hover:opacity-100'}`} onClick={() => setActiveStep(step.id)}>
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-[1.5rem] flex-shrink-0 flex items-center justify-center border-2 md:border-[3px] transition-all duration-500 ${activeStep === step.id ? `bg-white border-brand-teal text-brand-teal scale-110 shadow-2xl shadow-brand-teal/20` : 'bg-white border-slate-100 text-slate-400'}`}>{step.icon}</div>
                                <div className="pt-2">
                                    <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest block mb-1.5 ${activeStep === step.id ? 'text-brand-teal' : 'text-slate-400'}`}>{step.label}</span>
                                    <h4 className={`text-base md:text-xl font-black ${activeStep === step.id ? 'text-brand-dark' : 'text-slate-600'}`}>{step.title}</h4>
                                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${activeStep === step.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                        <p className="overflow-hidden text-xs md:text-sm text-slate-500 leading-relaxed font-medium mt-1.5">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-[60%] bg-slate-50 relative flex items-center justify-center p-8 md:p-20 overflow-hidden min-h-[400px] md:min-h-[550px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(116,166,175,0.08),transparent_70%)]"></div>
                    <div className="relative w-full max-w-[280px] md:max-w-md aspect-[4/5] bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[8px] border-white flex flex-col overflow-hidden transform group transition-transform duration-700">
                        <div className="h-14 md:h-16 border-b border-slate-100 bg-white flex items-center justify-between px-6 shrink-0 z-20"><Logo className="h-5 md:h-6" /></div>
                        <div className="flex-1 relative overflow-hidden bg-slate-50/30">{steps.map((step) => (<div key={step.id} className={`absolute inset-0 transition-all duration-700 transform ${activeStep === step.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95 pointer-events-none'}`}>{step.renderUI()}</div>))}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENT: JOB DASHBOARD PREVIEW ---
const JobDashboardSection = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-[#fffbf7] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>
            
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4">
                        {t('talentPage.jobOverview')}
                    </h2>
                    <p className="text-xl text-slate-600 font-medium">
                        {t('talentPage.jobOverviewDesc')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Visual: Job Cards Stack */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        
                        {/* Background Decor */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-brand-teal/5 rounded-full blur-2xl"></div>

                        {/* Card 1: Detail View (Back) */}
                        <div className="absolute top-0 right-0 lg:right-10 w-[280px] md:w-[320px] bg-white rounded-2xl shadow-xl border border-slate-100 p-5 transform rotate-6 scale-90 opacity-60 hover:opacity-100 hover:rotate-2 hover:scale-95 transition-all duration-500 cursor-default">
                             <div className="flex justify-between items-start mb-4">
                                 <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-brand-orange">
                                     <Briefcase size={20} />
                                 </div>
                                 <div className="bg-green-50 text-green-600 px-2 py-1 rounded text-[10px] font-bold">92% Match</div>
                             </div>
                             <div className="h-4 w-3/4 bg-slate-100 rounded mb-2"></div>
                             <div className="h-3 w-1/2 bg-slate-50 rounded mb-6"></div>
                             <div className="space-y-2">
                                 <div className="h-2 w-full bg-slate-50 rounded"></div>
                                 <div className="h-2 w-full bg-slate-50 rounded"></div>
                                 <div className="h-2 w-5/6 bg-slate-50 rounded"></div>
                             </div>
                             <div className="mt-6 flex gap-2">
                                 <div className="h-8 flex-1 bg-brand-orange rounded-lg"></div>
                                 <div className="h-8 w-8 border border-slate-200 rounded-lg"></div>
                             </div>
                        </div>

                        {/* Card 2: Main Card (Front) */}
                        <div className="relative z-10 w-[300px] md:w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-transform hover:-translate-y-2 duration-300">
                             {/* Header Image Area */}
                             <div className="h-32 bg-slate-100 relative">
                                 <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Job" className="w-full h-full object-cover" />
                                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-brand-dark px-2 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1">
                                     <MapPin size={10} /> Hamburg
                                 </div>
                             </div>
                             
                             <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-brand-dark leading-tight">{t('talentPage.sampleJobFull')}</h3>
                                    <button className="text-slate-300 hover:text-red-500 transition-colors">
                                        <Heart size={20} />
                                    </button>
                                </div>
                                <p className="text-sm text-slate-500 font-medium mb-4">{t('talentPage.sampleCompanyFull')}</p>
                                 
                                 <div className="flex flex-wrap gap-2 mb-6">
                                     <span className="bg-slate-50 text-slate-600 px-2 py-1 rounded-md text-[10px] font-bold border border-slate-100">{t('talentPage.fullTime')}</span>
                                     <span className="bg-slate-50 text-slate-600 px-2 py-1 rounded-md text-[10px] font-bold border border-slate-100">{t('talentPage.permanent')}</span>
                                     <span className="bg-green-50 text-green-600 px-2 py-1 rounded-md text-[10px] font-bold border border-green-100 flex items-center gap-1">
                                         <Zap size={10} className="fill-current" /> 98% {t('talentPage.match')}
                                     </span>
                                 </div>

                                 <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                     <div className="text-[10px] text-slate-400 font-bold uppercase">{t('talentPage.salary')}</div>
                                     <button className="text-brand-orange text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                         {t('talentPage.details')} <ArrowRight size={16} />
                                     </button>
                                 </div>
                             </div>
                        </div>

                         {/* Card 3: List Item (Bottom Left) */}
                        <div className="absolute bottom-0 left-0 lg:left-10 w-[280px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 transform -rotate-3 scale-95 opacity-90 hover:opacity-100 hover:rotate-0 hover:scale-100 transition-all duration-500 z-20 cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center">
                                    <Database size={18} />
                                </div>
                               <div className="flex-1 min-w-0">
                                   <div className="text-xs font-bold text-slate-800 truncate">{t('talentPage.sampleJob2')}</div>
                                   <div className="text-[10px] text-slate-400">{t('talentPage.sampleCompany2')}</div>
                               </div>
                                <div className="text-[10px] font-bold text-brand-teal">95%</div>
                            </div>
                        </div>

                    </div>

                    {/* Text Features */}
                    <div className="grid gap-6">
                        {[
                            {
                                title: t('talentPage.markFavorites'),
                                desc: t('talentPage.markFavoritesDesc'),
                                bg: "bg-red-50",
                                icon: <Heart size={20} className="text-red-500" />
                            },
                            {
                                title: t('talentPage.keepOverview'),
                                desc: t('talentPage.keepOverviewDesc'),
                                bg: "bg-brand-orange/10",
                                icon: <Layers size={20} className="text-brand-orange" />
                            },
                            {
                                title: t('talentPage.decideChances'),
                                desc: t('talentPage.decideChancesDesc'),
                                bg: "bg-brand-teal/10",
                                icon: <CheckCircle2 size={20} className="text-brand-teal" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default border border-transparent hover:border-slate-100">
                                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- COMPONENT: SUPPORT BROCHURE SECTION ---
const SupportBrochureSection = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden">
             {/* Background Ambience - Optimized */}
             <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-teal/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>
             <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>

             <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                 <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden relative">
                     
                     {/* Decorative Background inside card */}
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                     
                     {/* LEFT: 3D BOOK COVER VISUAL */}
                     <div className="flex-shrink-0 relative group perspective-[1000px]">
                         {/* The Book Container */}
                         <div className="relative w-[260px] h-[360px] transition-transform duration-500 transform rotate-y-[-15deg] group-hover:rotate-y-0 group-hover:scale-105 preserve-3d shadow-[20px_20px_40px_rgba(0,0,0,0.3)]">
                             
                             {/* Front Cover */}
                             <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-r-lg rounded-l-sm border border-slate-200 overflow-hidden flex flex-col backface-hidden z-20">
                                 {/* Image Area */}
                                 <div className="h-[65%] bg-slate-200 relative overflow-hidden">
                                     <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-1000" alt="Germany" />
                                     <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
                                     <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">{t('talentPage.worknovaGuide')}</div>
                                        <div className="text-xl font-black leading-tight">{t('talentPage.liveAndWork')}</div>
                                    </div>
                                 </div>
                                 {/* Text Area */}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-brand-dark font-black text-lg leading-none mb-1">{t('talentPage.germany')}</h3>
                                        <p className="text-[10px] text-slate-500 font-medium">{t('talentPage.orientationHelp')}</p>
                                    </div>
                                     <div className="flex items-center gap-2">
                                         <Logo className="h-4" />
                                     </div>
                                 </div>
                                 {/* Spine Highlight */}
                                 <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-black/10 to-transparent"></div>
                             </div>

                            {/* Book Spine (3D Effect) */}
                            <div className="absolute top-0 left-0 w-[40px] h-full bg-slate-300 origin-left rotate-y-90 rounded-l-sm border border-slate-400 transform -translate-x-full z-10 flex items-center justify-center">
                                <span className="rotate-90 text-[10px] font-bold text-slate-600 tracking-widest whitespace-nowrap">{t('talentPage.guideSpine')}</span>
                            </div>

                             {/* Pages (3D Effect) */}
                             <div className="absolute top-2 right-2 w-[30px] h-[344px] bg-white border-r border-slate-200 transform translate-z-[-10px] z-0 rounded-r-sm bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#f1f5f9_2px,#f1f5f9_4px)]"></div>
                             
                         </div>
                         
                         {/* Shadow */}
                         <div className="absolute bottom-[-20px] left-10 w-[220px] h-[20px] bg-black/40 blur-xl rounded-[50%] transform rotate-[-5deg] pointer-events-none"></div>
                     </div>

                     {/* RIGHT: CONTENT */}
                     <div className="flex-1 text-center lg:text-left">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark/5 text-brand-dark text-xs font-bold uppercase tracking-widest mb-6 border border-brand-dark/10">
                             <BookOpen size={14} />
                             {t('talentPage.freeMaterial')}
                         </div>
                         
                         <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 leading-tight">
                             {t('talentPage.supportForTalents')} <br/>
                             <span className="text-brand-teal">{t('talentPage.workLiveUnderstand')}</span>
                         </h2>
                         
                         <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                             <p>{t('talentPage.brochureText1')}</p>
                             <p>{t('talentPage.brochureText2')}</p>
                         </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button 
                               variant="primary" 
                               className="!py-4 !px-8 shadow-xl hover:-translate-y-1"
                               onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                            >
                                {t('talentPage.contactNow')}
                            </Button>
                        </div>
                     </div>

                 </div>
                 
                 {/* Bottom info text */}
                 <div className="text-center mt-12 max-w-2xl mx-auto">
                     <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        {t('talentPage.brochureBottom')}
                     </p>
                 </div>
             </div>
        </section>
    );
};

export const TalentPage: React.FC = () => {
  const { t } = useTranslation();

  // --- FAQ DATA FOR TALENT ---
  const FAQ_ITEMS = [
    { question: t('talentPage.talentFaqQ1'), answer: t('talentPage.talentFaqA1') },
    { question: t('talentPage.talentFaqQ2'), answer: t('talentPage.talentFaqA2') },
    { question: t('talentPage.talentFaqQ3'), answer: t('talentPage.talentFaqA3') },
    { question: t('talentPage.talentFaqQ4'), answer: t('talentPage.talentFaqA4') },
    { question: t('talentPage.talentFaqQ5'), answer: t('talentPage.talentFaqA5') },
    { question: t('talentPage.talentFaqQ6'), answer: t('talentPage.talentFaqA6') },
    { question: t('talentPage.talentFaqQ7'), answer: t('talentPage.talentFaqA7') }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-teal selection:text-white pb-0 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-8 xl:pt-40 xl:pb-24 bg-[#0f172a] rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl z-20">
         
         <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none rounded-b-[3rem] lg:rounded-b-[5rem]">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-teal/10 blur-3xl rounded-full mix-blend-screen transform-gpu"></div>
            <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-brand-orange/10 blur-3xl rounded-full mix-blend-screen transform-gpu"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] opacity-15 transform-gpu"></div>
         </div>

         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center">
                
                <div className="text-center xl:text-left flex flex-col items-center xl:items-start">
                    <h1 className="text-5xl md:text-6xl xl:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-8 animate-fade-up [animation-delay:200ms] drop-shadow-lg">
                       {t('talentPage.heroTitle1')} <br />
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-white to-brand-teal animate-shimmer bg-[length:200%_auto]">
                          {t('talentPage.heroTitle2')}
                       </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed animate-fade-up [animation-delay:400ms]">
                       {t('talentPage.heroDescription')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up [animation-delay:600ms] w-full sm:w-auto">
                       <Button 
                          variant="secondary" 
                          className="w-full sm:w-auto !py-4 !px-10 !text-lg !rounded-xl shadow-[0_0_20px_rgba(116,166,175,0.4)] hover:shadow-[0_0_30px_rgba(116,166,175,0.6)]" 
                          icon={<ArrowRight size={20} />}
                          onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                       >
                          {t('talentPage.inquireNow')}
                       </Button>
                       <Button 
                          variant="outline" 
                          className="w-full sm:w-auto !py-4 !px-10 !text-lg !rounded-xl border-white/20 text-white hover:bg-white/10"
                          onClick={() => { window.location.hash = '#/services'; }}
                       >
                          {t('talentPage.howItWorks')}
                       </Button>
                    </div>
                </div>

                <div className="animate-fade-up [animation-delay:400ms] flex justify-center overflow-visible">
                    <MatchInterface />
                </div>
            </div>
         </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="py-16 md:py-24">
         <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:divide-x divide-slate-200">
               {[
                  { val: "100%", label: t('talentPage.free') },
                  { val: "2 Min", label: t('talentPage.setup') },
                  { val: "98%", label: t('talentPage.matchRate') },
                  { val: "24/7", label: t('talentPage.support') },
               ].map((stat, i) => (
                  <div key={i} className="text-center px-4">
                     <div className="text-3xl md:text-5xl font-black text-brand-dark mb-1 tracking-tighter">{stat.val}</div>
                     <div className="text-[10px] md:text-sm font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 md:py-32 bg-white relative border-y border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6">
              <div className="text-center mb-16 md:mb-24">
                  <h2 className="text-3xl md:text-6xl font-black text-brand-dark mb-6 leading-none tracking-tighter">
                      {t('talentPage.yourWayToDE')} <br />
                      <span className="text-brand-teal">{t('talentPage.digitalSecure')}</span>
                  </h2>
                  <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">{t('talentPage.processDescription')}</p>
              </div>
              <TimelineDashboard />
          </div>
      </section>

      <JobDashboardSection />
      <SupportBrochureSection />

      {/* --- BENEFITS GRID --- */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
         <div className="max-w-[1400px] mx-auto px-6">
             <div className="grid md:grid-cols-3 gap-8">
                 {[
                     { icon: <Briefcase size={28} />, title: t('talentPage.exclusiveJobs'), desc: t('talentPage.exclusiveJobsDesc') },
                     { icon: <Shield size={28} />, title: t('talentPage.verifiedCompanies'), desc: t('talentPage.verifiedCompaniesDesc') },
                     { icon: <Heart size={28} />, title: t('talentPage.arrivalSupport'), desc: t('talentPage.arrivalSupportDesc') }
                 ].map((item, i) => (
                     <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 group">
                         <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 group-hover:text-brand-teal group-hover:bg-brand-teal/10 transition-all mb-8 shadow-inner">{item.icon}</div>
                         <h3 className="text-xl md:text-2xl font-black text-brand-dark mb-4 tracking-tight">{item.title}</h3>
                         <p className="text-sm md:text-lg text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      <FAQSection title={t('talentPage.faqTitle')} subtitle={t('talentPage.faqSubtitle')} items={FAQ_ITEMS} variant="teal" />

      <section className="py-20 md:py-32 px-6 relative bg-white">
         <div className="max-w-6xl mx-auto bg-brand-dark rounded-[4rem] p-10 md:p-24 text-center relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(15,23,42,0.4)] group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full"></div>
            <div className="relative z-10">
               <h2 className="text-4xl md:text-[5rem] font-black text-white mb-8 tracking-tighter leading-[0.9]">{t('talentPage.readyForNextStep')}</h2>
               <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">{t('talentPage.ctaDescription')}</p>
               <div className="flex flex-col items-center gap-10 mt-6">
                  <Button 
                     variant="primary" 
                     className="!bg-white !text-brand-dark hover:!bg-slate-100 !py-6 !px-16 !text-xl !font-black !rounded-full shadow-2xl active:scale-95 transition-all"
                     onClick={() => { window.location.hash = '#/'; setTimeout(() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  >
                     <span className="flex items-center gap-4">{t('talentPage.inquireNow')} <ArrowRight className="w-6 h-6" strokeWidth={3} /></span>
                  </Button>
                  <div className="flex items-center gap-8 opacity-40">
                     <Logo className="h-6 brightness-0 invert" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};
