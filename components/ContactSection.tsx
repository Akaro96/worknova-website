
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowRight, Building2, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Dynamic labels based on language
  const labels = {
    writeUs: i18n.language === 'de' ? 'Schreiben Sie uns' : i18n.language === 'tr' ? 'Bize yazın' : 'Write to us',
    weAreHere: i18n.language === 'de' ? 'Wir sind für Sie da.' : i18n.language === 'tr' ? 'Sizin için buradayız.' : 'We are here for you.',
    personalDirect: i18n.language === 'de' ? 'Persönlich & Direkt.' : i18n.language === 'tr' ? 'Kişisel & Doğrudan.' : 'Personal & Direct.',
    contactText: i18n.language === 'de' 
      ? 'Ob Sie ein Unternehmen sind, das Fachkräfte sucht, oder eine Fachkraft, die in Deutschland arbeiten möchte: Unser Team berät Sie gerne. Persönlich, kompetent und in Ihrer Sprache.'
      : i18n.language === 'tr'
        ? 'İster uzman arayan bir şirket olun, ister Almanya\'da çalışmak isteyen bir uzman: Ekibimiz size yardımcı olmaktan mutluluk duyar. Kişisel, yetkin ve sizin dilinizde.'
        : 'Whether you are a company looking for skilled workers or a professional who wants to work in Germany: Our team is happy to advise you. Personal, competent and in your language.',
    responseTime: i18n.language === 'de' ? 'Antwort innerhalb von 24 Stunden' : i18n.language === 'tr' ? '24 saat içinde yanıt' : 'Response within 24 hours',
    emailContact: i18n.language === 'de' ? 'E-Mail Kontakt' : i18n.language === 'tr' ? 'E-posta İletişimi' : 'Email Contact',
    headquarters: i18n.language === 'de' ? 'Hauptsitz' : i18n.language === 'tr' ? 'Merkez' : 'Headquarters',
    supportTeam: i18n.language === 'de' 
      ? 'Unser Support-Team spricht' 
      : i18n.language === 'tr' 
        ? 'Destek ekibimiz konuşuyor:' 
        : 'Our support team speaks',
    languages: i18n.language === 'de' ? 'Deutsch, Englisch & Türkisch' : i18n.language === 'tr' ? 'Almanca, İngilizce & Türkçe' : 'German, English & Turkish',
    tellUs: i18n.language === 'de' ? 'Teilen Sie uns Ihr Anliegen mit.' : i18n.language === 'tr' ? 'Talebinizi bize iletin.' : 'Tell us about your request.',
    getBack: i18n.language === 'de' ? 'Wir melden uns schnellstmöglich bei Ihnen zurück.' : i18n.language === 'tr' ? 'En kısa sürede size dönüş yapacağız.' : 'We will get back to you as soon as possible.',
    firstName: t('contact.firstName'),
    lastName: t('contact.lastName'),
    email: t('contact.email'),
    company: t('contact.company'),
    phone: i18n.language === 'de' ? 'Telefonnummer' : i18n.language === 'tr' ? 'Telefon numarası' : 'Phone number',
    subject: i18n.language === 'de' ? 'Betreff' : i18n.language === 'tr' ? 'Konu' : 'Subject',
    subjectPlaceholder: i18n.language === 'de' ? 'Worum geht es?' : i18n.language === 'tr' ? 'Konu nedir?' : 'What is it about?',
    message: t('contact.message'),
    messagePlaceholder: t('contact.messagePlaceholder'),
    privacyText: i18n.language === 'de' 
      ? 'Ich akzeptiere die' 
      : i18n.language === 'tr' 
        ? 'Kabul ediyorum:' 
        : 'I accept the',
    privacyLink: t('contact.privacyPolicy'),
    privacyEnd: i18n.language === 'de' ? 'und stimme der Verarbeitung meiner Daten zu.' : i18n.language === 'tr' ? 've verilerimin işlenmesine izin veriyorum.' : 'and consent to the processing of my data.',
    sendMessage: t('contact.sendMessage'),
    sending: t('contact.sending'),
    successTitle: t('contact.successTitle'),
    successMessage: t('contact.successMessage'),
    newMessage: i18n.language === 'de' ? 'Neue Nachricht' : i18n.language === 'tr' ? 'Yeni mesaj' : 'New message'
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#fffbf7] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
           <h2 className="text-4xl lg:text-6xl font-black text-brand-dark relative inline-block tracking-tight">
              {labels.writeUs}
              <svg className="absolute w-[105%] h-4 -bottom-2 -left-2 text-brand-orange/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
           </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: INFO & CONTEXT */}
          <div className="flex flex-col h-full justify-between">
             <div>
                <h3 className="text-3xl font-bold text-brand-dark mb-6 leading-tight">
                  {labels.weAreHere} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">{labels.personalDirect}</span>
                </h3>
                
                <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed font-medium">
                   <p className="mb-4">{labels.contactText}</p>
                   <p className="font-bold text-brand-dark flex items-center gap-2 bg-white/50 inline-block px-3 py-1 rounded-full border border-slate-100">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      {labels.responseTime}
                   </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                   <a href="mailto:info@worknova.de" className="flex items-center gap-5 p-5 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300 group hover:-translate-y-1">
                      <div className="w-12 h-12 bg-white border border-slate-100 text-brand-teal rounded-xl flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 shadow-sm">
                         <Mail size={22} />
                      </div>
                      <div>
                         <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">{labels.emailContact}</div>
                         <div className="text-lg font-bold text-brand-dark group-hover:text-brand-orange transition-colors">info@worknova.de</div>
                      </div>
                      <ArrowRight className="ml-auto text-slate-300 group-hover:text-brand-orange -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
                   </a>

                   <div className="flex items-center gap-5 p-5 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 cursor-default">
                      <div className="w-12 h-12 bg-white border border-slate-100 text-brand-orange rounded-xl flex items-center justify-center shadow-sm">
                         <MapPin size={22} />
                      </div>
                      <div>
                         <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">{labels.headquarters}</div>
                         <div className="text-base font-bold text-brand-dark leading-snug">
                            Morsnova GmbH <br/>
                            <span className="text-slate-500 font-medium text-sm">Karlstr. 68, 76137 Karlsruhe</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Trust Indicator */}
             <div className="hidden lg:flex items-center gap-4 mt-12 pt-8 border-t border-slate-200/60">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#fffbf7] bg-slate-200 overflow-hidden shadow-sm">
                         <img src={`https://randomuser.me/api/portraits/men/${i*10 + 20}.jpg`} alt="Support Team" className="w-full h-full object-cover" />
                      </div>
                   ))}
                </div>
                <div className="text-sm font-medium text-slate-500">
                   {labels.supportTeam} <span className="text-brand-dark font-bold">{labels.languages}</span>
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] shadow-2xl transform rotate-1 opacity-50 scale-[0.98] z-0 border border-slate-200"></div>
             
             <div className="relative z-10 bg-white rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 overflow-hidden">
                
                {isSent ? (
                   <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-12 animate-fade-in">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                         <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">{labels.successTitle}</h3>
                      <p className="text-slate-500 mb-8">{labels.successMessage}</p>
                      <Button onClick={() => setIsSent(false)} variant="outline">{labels.newMessage}</Button>
                   </div>
                ) : null}

                <div className="mb-8">
                   <h3 className="text-xl font-bold text-brand-dark">{labels.tellUs}</h3>
                   <p className="text-slate-500 text-sm mt-1">{labels.getBack}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                   
                   {/* Row 1: Name */}
                   <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-1.5 group">
                         <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1 group-focus-within:text-brand-orange transition-colors">{labels.firstName} *</label>
                         <input 
                           type="text" 
                           name="name"
                           required
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium placeholder:text-slate-400"
                           placeholder="Max"
                           value={formState.name}
                           onChange={handleChange}
                         />
                      </div>
                      <div className="space-y-1.5 group">
                         <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1 group-focus-within:text-brand-orange transition-colors">{labels.lastName} *</label>
                         <input 
                           type="text" 
                           name="surname"
                           required
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium placeholder:text-slate-400"
                           placeholder="Mustermann"
                           value={formState.surname}
                           onChange={handleChange}
                         />
                      </div>
                   </div>

                   {/* Row 2: Email */}
                   <div className="space-y-1.5 group">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1 group-focus-within:text-brand-orange transition-colors">{labels.email} *</label>
                      <div className="relative">
                         <input 
                           type="email" 
                           name="email"
                           required
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-brand-dark outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium placeholder:text-slate-400"
                           placeholder="name@firma.de"
                           value={formState.email}
                           onChange={handleChange}
                         />
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                      </div>
                   </div>

                   {/* Row 3: Company & Phone */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                       <div className="space-y-1.5 group">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1 group-focus-within:text-brand-orange transition-colors">{labels.company}</label>
                          <div className="relative">
                              <input 
                                type="text" 
                                name="company"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-brand-dark outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium placeholder:text-slate-400"
                                placeholder="Muster GmbH"
                                value={formState.company}
                                onChange={handleChange}
                              />
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                          </div>
                       </div>

                       <div className="space-y-1.5 group">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1 group-focus-within:text-brand-orange transition-colors">{labels.phone}</label>
                          <div className="relative">
                              <input 
                                type="tel" 
                                name="phone"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-brand-dark outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium placeholder:text-slate-400"
                                placeholder="+49 123 456"
                                value={formState.phone}
                                onChange={handleChange}
                              />
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                          </div>
                       </div>
                   </div>

                   {/* Row 4: Subject */}
                   <div className="space-y-1.5 group">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1 group-focus-within:text-brand-orange transition-colors">{labels.subject} *</label>
                      <input 
                        type="text" 
                        name="subject"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium placeholder:text-slate-400"
                        placeholder={labels.subjectPlaceholder}
                        value={formState.subject}
                        onChange={handleChange}
                      />
                   </div>

                   {/* Row 5: Message */}
                   <div className="space-y-1.5 group">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1 group-focus-within:text-brand-orange transition-colors">{labels.message}</label>
                      <textarea 
                        name="message"
                        rows={4}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium placeholder:text-slate-400 resize-none"
                        placeholder={labels.messagePlaceholder}
                        value={formState.message}
                        onChange={handleChange}
                      ></textarea>
                   </div>

                   <div className="flex items-start gap-3 py-2">
                      <div className="relative flex items-center mt-0.5">
                         <input 
                            type="checkbox" 
                            id="privacy" 
                            required 
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-brand-orange checked:bg-brand-orange hover:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 bg-white"
                         />
                         <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                         </span>
                      </div>
                      <label htmlFor="privacy" className="text-sm text-slate-500 cursor-pointer select-none leading-snug">
                         {labels.privacyText} <a href="#/datenschutz" onClick={(e) => { e.preventDefault(); window.location.hash = '#/datenschutz'; }} className="text-brand-orange hover:underline font-bold">{labels.privacyLink}</a> {labels.privacyEnd}
                      </label>
                   </div>

                   <Button 
                      variant="primary" 
                      className="w-full !py-4 !text-lg !rounded-xl shadow-xl mt-2 hover:shadow-2xl hover:shadow-brand-orange/20"
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <Send size={18} />}
                   >
                      {isSubmitting ? labels.sending : labels.sendMessage}
                   </Button>
                </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
