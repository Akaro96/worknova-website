
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ChevronLeft,
  Paperclip,
  Send,
  User,
  Clock,
  Sparkles,
  Check,
  ArrowRight
} from 'lucide-react';

// --- ANIMATED ICONS ---

// 1. FOLDER (Document Insertion)
const IconFolder = () => (
  <div className="flex items-center justify-center w-full h-full">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M20 20v-5.6a.5.5 0 0 0-.21-.41L15 10" />
      <path d="M20 20H6" />
      <rect x="10" y="4" width="10" height="12" rx="1" className="fill-white/20 animate-doc-slide" stroke="currentColor" />
    </svg>
  </div>
);

// 2. SHIELD (Radar Scan)
const IconShield = () => (
  <div className="flex items-center justify-center w-full h-full overflow-hidden relative rounded-full">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
       <div className="w-[80%] h-[2px] bg-white/50 blur-[1px] animate-radar-scan"></div>
    </div>
  </div>
);

// 3. ID CARD (Swaying)
const IconIDCard = () => (
    <div className="flex items-center justify-center w-full h-full">
       <div className="animate-pendulum origin-top">
           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
               <path d="M12 2v2" />
               <path d="M12 4h-2a2 2 0 0 0-2 2v2" className="opacity-50" />
               <path d="M12 4h2a2 2 0 0 1 2 2v2" className="opacity-50" />
               <rect x="6" y="8" width="12" height="14" rx="2" fill="currentColor" className="text-white/10" />
               <circle cx="12" cy="13" r="3" />
               <path d="M9 19h6" strokeWidth="1.5" opacity="0.6" />
           </svg>
       </div>
    </div>
);

// 4. STAR (Rotating Glow)
const IconStar = () => (
    <div className="flex items-center justify-center w-full h-full">
        <div className="relative animate-star-glow">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="absolute inset-0 bg-white blur-md opacity-30 animate-pulse"></div>
        </div>
    </div>
);


// --- PHONE MOCKUP ---
type Message = { id: string; text: string; sender: 'user' | 'bot'; timestamp: string; };

const InteractivePhone = () => {
  const { t } = useTranslation();
  
  const INITIAL_MESSAGES: Message[] = [
    { id: '1', text: t('process.chatGreeting'), sender: 'user', timestamp: '10:42' },
  ];
  const QUICK_REPLIES = [t('process.quickReply1'), t('process.quickReply2'), t('process.quickReply3')];

  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setMessages(INITIAL_MESSAGES), 800);
          setTimeout(() => {
             setIsTyping(true);
             setTimeout(() => {
                setIsTyping(false);
                addMessage(t('process.chatResponse1'), 'bot');
             }, 2000);
          }, 1800);
        }
      }, { threshold: 0.4 }
    );
    if (phoneRef.current) observer.observe(phoneRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current?.parentElement) {
      messagesEndRef.current.parentElement.scrollTo({ top: messagesEndRef.current.parentElement.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(), text, sender, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    addMessage(text, 'user');
    setInputValue('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let response = t('process.chatDefault');
      if (text.includes("Visum") || text.includes("📄") || text.includes("visa")) response = t('process.chatVisaApproved');
      else if (text.includes("Arbeitsbeginn") || text.includes("📅") || text.includes("work") || text.includes("start")) response = t('process.chatWorkStart');
      else if (text.includes("Dokumente") || text.includes("📤") || text.includes("upload") || text.includes("document")) response = t('process.chatUploadDocs');
      addMessage(response, 'bot');
    }, 1500 + Math.random() * 1000);
  };

  return (
    <div ref={phoneRef} className="relative mx-auto w-[320px] h-[650px] bg-[#0f172a] rounded-[55px] shadow-2xl overflow-hidden border-[6px] border-[#334155] transform-gpu z-20">
       <div className="absolute top-0 inset-x-0 h-8 z-50 flex justify-center pointer-events-none">
          <div className="w-[120px] h-[35px] bg-black rounded-b-[20px] flex items-center justify-center gap-3 px-3 mt-0.5">
             <div className="w-2 h-2 rounded-full bg-[#1e293b]"></div><div className="w-12 h-1.5 rounded-full bg-[#1e293b]"></div>
          </div>
       </div>
       <div className="w-full h-full bg-[#f1f5f9] flex flex-col pt-12 relative overflow-hidden font-sans">
          <div className="px-4 py-3 bg-white border-b border-slate-200 flex justify-between items-center sticky top-0 z-20 shadow-sm">
              <div className="flex items-center gap-2 text-brand-dark">
                 <ChevronLeft size={24} className="text-brand-orange -ml-2" />
                 <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-sm">WN</div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                 </div>
                 <div className="flex flex-col ml-1">
                    <span className="text-sm font-bold leading-none">{t('process.worknova')}</span>
                    <span className="text-[10px] text-brand-teal font-medium">{t('process.respondsImmediately')}</span>
                 </div>
              </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#eef1f6] relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              <div className="text-center py-4"><span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">{t('process.today')}</span></div>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm relative group ${msg.sender === 'user' ? 'bg-brand-orange text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'}`}>
                    {msg.text}
                    <div className={`text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/70' : 'text-slate-400'}`}>{msg.timestamp}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                   <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
          </div>
          <div className="bg-white border-t border-slate-200 p-3 pb-8 relative z-20">
             <div className="flex gap-2 overflow-x-auto pb-3 mb-1 mask-linear-fade [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
               {QUICK_REPLIES.map((reply, i) => (
                 <button key={i} onClick={() => handleSend(reply)} className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-brand-orange/10 hover:text-brand-orange text-slate-600 rounded-full text-xs font-semibold border border-slate-200 transition-colors active:scale-95 flex-shrink-0">{reply}</button>
               ))}
             </div>
             <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-[20px] border border-slate-200 focus-within:ring-2 focus-within:ring-brand-orange/20 transition-all">
                <button className="p-2 text-slate-400 hover:text-brand-dark transition-colors"><Paperclip size={18} /></button>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)} placeholder={t('process.writeMessage')} className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none min-w-0"/>
                <button onClick={() => handleSend(inputValue)} className="p-2 bg-brand-orange text-white rounded-full hover:bg-brand-dark transition-colors shadow-sm active:scale-90"><Send size={16} fill="currentColor" className="ml-0.5" /></button>
             </div>
          </div>
       </div>
    </div>
  );
};

export const ProcessTimeline: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Timeline data with translations
  const STEPS = [
    { 
      id: 1, 
      title: t('process.step1Title'), 
      tooltip: t('process.step1Tooltip'),
      color: 'orange',
      icon: <IconFolder />
    },
    { 
      id: 2, 
      title: t('process.step2Title'), 
      tooltip: t('process.step2Tooltip'),
      color: 'orange',
      icon: <IconShield />
    },
    { 
      id: 3, 
      title: t('process.step3Title'), 
      tooltip: t('process.step3Tooltip'),
      color: 'orange',
      icon: <IconIDCard />
    },
    { 
      id: 4, 
      title: t('process.step4Title'), 
      tooltip: t('process.step4Tooltip'),
      color: 'teal',
      icon: <IconStar />
    }
  ];

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if(!email) return;
    setStatus('loading');
    setTimeout(() => {
        setStatus('success');
        setEmail('');
    }, 1500);
  };

  return (
    <>
    {/* --- PART 1: PROCESS MONITOR (DESKTOP CARD STYLE) --- */}
    <section className="py-24 bg-[#fffbf7] relative overflow-hidden">
       
       <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-multiply transform-gpu"></div>
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>

       <div className="max-w-[1350px] mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-left mb-10 pl-2 lg:pl-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-bold uppercase tracking-wider mb-4">
                <Sparkles size={16} />
                <span>{t('process.liveTracking')}</span>
             </div>
             <h2 className="text-3xl font-extrabold text-brand-dark mb-3">
                {t('process.processMonitoring')}
             </h2>
             <p className="text-slate-500 text-lg">
                {t('process.processDesc')}
             </p>
          </div>

          {/* DASHBOARD CARD (Horizontal Layout) */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] p-0 flex flex-col xl:flex-row items-stretch relative overflow-visible w-full border border-slate-100/80">
             
             {/* SECTION 1: PROFILE (Left) */}
             <div className="flex items-center gap-6 w-full xl:w-[25%] p-8 xl:p-10 border-b xl:border-b-0 xl:border-r border-slate-100">
                 <div className="w-[5rem] h-[5rem] rounded-[1.2rem] bg-[#fcd34d] flex items-center justify-center text-white shadow-lg shadow-yellow-200/50 flex-shrink-0">
                     <User size={34} strokeWidth={2.5} />
                 </div>
                 
                 <div className="flex flex-col">
                     <h3 className="font-extrabold text-[1.1rem] text-brand-dark leading-tight mb-1.5">Sarah Muster</h3>
                     <p className="text-[13px] text-slate-500 font-bold mb-1.5 leading-snug">
                       {t('process.assistant')} – {t('process.informatics')} <br/> ({t('process.softwareTech')})
                     </p>
                     <p className="text-[11px] text-slate-400 font-mono font-medium tracking-wide">{t('process.reference')}: JB114</p>
                 </div>
             </div>

             {/* SECTION 2: TIMELINE (Middle) */}
             <div className="w-full xl:w-[55%] relative p-8 xl:p-10 flex flex-col justify-center">
                 {/* Horizontal Connecting Line */}
                 <div className="absolute top-[3.75rem] xl:top-[4.25rem] left-16 right-16 h-[2px] bg-slate-100 rounded-full z-0 hidden md:block"></div>
                 
                 <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0 px-2">
                     {STEPS.map((step) => {
                         let nodeClass = "bg-[#ef9d56] border-[#ef9d56] text-white shadow-lg shadow-orange-200";
                         if (step.color === 'teal') {
                             nodeClass = "bg-brand-teal border-brand-teal text-white shadow-lg shadow-teal-200 scale-110 ring-4 ring-brand-teal/20";
                         }

                         return (
                             <div 
                                key={step.id} 
                                className="flex flex-row md:flex-col items-center gap-4 md:gap-0 group cursor-default relative flex-1 last:flex-none justify-center"
                                onMouseEnter={() => setHoveredStep(step.id)}
                                onMouseLeave={() => setHoveredStep(null)}
                             >
                                 {/* ICON NODE */}
                                 <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 relative z-20 flex-shrink-0 ${nodeClass}`}>
                                     {step.icon}
                                 </div>
                                 
                                 {/* LABEL BELOW */}
                                 <div className="md:mt-6 text-left md:text-center w-full md:w-36">
                                     <span className={`text-[12px] font-bold block leading-tight transition-colors ${step.color === 'teal' ? 'text-brand-teal' : 'text-brand-dark'}`}>
                                         {step.title}
                                     </span>
                                 </div>

                                 {/* HOVER TOOLTIP */}
                                 <div className={`
                                     absolute bottom-full mb-5 left-1/2 -translate-x-1/2 w-72 bg-brand-dark/95 backdrop-blur-md text-white text-[13px] p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] pointer-events-none transition-all duration-300 z-50 origin-bottom border border-white/10
                                     ${hoveredStep === step.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}
                                 `}>
                                     <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-dark/95 border-r border-b border-white/10 rotate-45"></div>
                                     
                                     <div className="relative z-10">
                                         <span className="block font-bold text-brand-orange text-[10px] uppercase tracking-widest mb-2">{t('process.phase')} 0{step.id}</span>
                                         <p className="font-medium leading-relaxed text-slate-200">
                                            {step.tooltip}
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         );
                     })}
                 </div>
             </div>

             {/* SECTION 3: STATUS (Right) */}
             <div className="w-full xl:w-[20%] flex flex-row xl:flex-col items-center xl:items-center justify-between xl:justify-center gap-2 border-t xl:border-t-0 xl:border-l border-slate-100 p-8 xl:p-10">
                 <div className="px-6 py-3 bg-[#e6f4f1] text-[#4a7a85] rounded-full text-[11px] font-extrabold uppercase tracking-wide flex items-center justify-center shadow-sm w-auto whitespace-nowrap">
                     {t('process.workStart')}
                 </div>
                 <div className="text-slate-400 text-[11px] font-bold flex items-center gap-1.5 tabular-nums mt-1">
                     <Clock size={12} className="text-slate-300" />
                     <span>06.02.2024, 14:10:24</span>
                 </div>
             </div>

          </div>
       </div>
    </section>

    {/* --- PART 2: MOBILE APP SECTION (DARK) --- */}
    <section className="bg-[#0f172a] py-32 lg:py-40 relative overflow-visible border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 transform-gpu"></div>
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none transform-gpu"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            
            <div className="order-2 lg:order-1 flex flex-col justify-center">
                
                <div className="flex items-center gap-4 mb-8">
                   <div className="h-[2px] w-12 bg-gradient-to-r from-brand-orange to-transparent"></div>
                   <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs">{t('process.mobileApp')}</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                   {t('process.pocketTitle')} <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-teal">
                      {t('process.pocketHighlight')}
                   </span>
                </h2>
                
                <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
                   {t('process.pocketDesc')}
                </p>

                <div className="w-full max-w-md">
                    <p className="text-white text-sm font-bold mb-4 flex items-center gap-2">
                       <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
                        </span>
                       {t('process.releaseNotify')}
                    </p>
                    <div className="flex gap-3">
                        {status === 'success' ? (
                            <div className="w-full bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3.5 rounded-xl flex items-center justify-center gap-2 animate-fade-in">
                                <Check size={18} />
                                <span className="text-sm font-bold">{t('process.weWillContact')}</span>
                            </div>
                        ) : (
                            <>
                                <div className="relative flex-1 group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Sparkles size={16} className="text-slate-500 group-focus-within:text-brand-orange transition-colors" />
                                    </div>
                                    <input 
                                        type="email" 
                                        required
                                        placeholder={t('process.emailPlaceholder')}
                                        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 pl-10 pr-4 py-3.5 rounded-xl focus:ring-1 focus:ring-brand-orange focus:border-brand-orange/50 outline-none transition-all hover:bg-white/10 text-sm font-medium"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <button 
                                    onClick={(e) => handleWaitlist(e)}
                                    disabled={status === 'loading'}
                                    className="bg-white text-brand-dark px-6 rounded-xl font-bold hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? '...' : <ArrowRight size={20} />}
                                </button>
                            </>
                        )}
                    </div>
                </div>

            </div>

            <div className="order-1 lg:order-2 flex justify-center perspective-[2000px] relative z-20">
                <InteractivePhone />
            </div>

        </div>
    </section>
    </>
  );
};
