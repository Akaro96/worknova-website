
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';
import { CreditCard, Wallet, Banknote, Building } from 'lucide-react';

export const ZahlungsinformationenPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fffbf7] font-sans pt-24 lg:pt-32 flex flex-col">
      <main className="flex-grow">
         {/* Header */}
        <div className="bg-brand-dark py-16 lg:py-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
           
           <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 underline decoration-brand-orange/50 decoration-4 underline-offset-8">
                 {t('paymentPage.title')}
              </h1>
           </div>
        </div>

        <div className="max-w-[800px] mx-auto px-6 py-16 lg:py-24 text-slate-600 leading-relaxed">
            
            {/* Section 1 */}
            <div className="mb-16">
                <h2 className="text-xl font-bold text-brand-dark mb-6 border-l-4 border-brand-orange pl-4">
                    {t('paymentPage.section1Title')}
                </h2>
                <p className="mb-8 text-lg">
                    {t('paymentPage.section1Intro')}
                </p>
                <ul className="grid sm:grid-cols-3 gap-4 mb-8">
                    <li className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-3 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-brand-orange mb-1">
                            <CreditCard size={24} />
                        </div>
                        <span className="font-bold text-brand-dark">{t('paymentPage.creditCard')}</span>
                    </li>
                    <li className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-3 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-brand-teal mb-1">
                            <Banknote size={24} />
                        </div>
                        <span className="font-bold text-brand-dark">{t('paymentPage.directDebit')}</span>
                    </li>
                    <li className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-3 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-1">
                            <Wallet size={24} />
                        </div>
                        <span className="font-bold text-brand-dark">{t('paymentPage.paypal')}</span>
                    </li>
                </ul>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-sm">
                    <p className="mb-4">
                        {t('paymentPage.section1Text1')}
                    </p>
                    <p className="font-medium">
                        {t('paymentPage.section1Text2')} <a href="#/agb" onClick={(e) => { e.preventDefault(); window.location.hash = '#/agb'; }} className="text-brand-orange hover:underline">{t('paymentPage.termsLink')}</a>.
                    </p>
                </div>
            </div>

            <div className="h-px w-full bg-slate-200 mb-16"></div>

            {/* Section 2 */}
            <div>
                <h2 className="text-xl font-bold text-brand-dark mb-6 border-l-4 border-brand-teal pl-4">
                    {t('paymentPage.section2Title')}
                </h2>
                <p className="mb-8 text-lg">
                    {t('paymentPage.section2Intro')}
                </p>
                
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden max-w-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-bl-[100px] -mr-10 -mt-10 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/5 rounded-tr-[80px] -ml-10 -mb-10 z-0"></div>
                    
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-brand-dark text-white rounded-lg flex items-center justify-center">
                                <Building size={20} />
                            </div>
                            <span className="font-bold text-brand-dark text-lg">{t('paymentPage.bankConnection')}</span>
                        </div>

                        <div className="space-y-4 font-mono text-sm md:text-base text-brand-dark">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-1">
                                <span className="text-slate-500 font-sans font-bold uppercase text-xs tracking-wider">{t('paymentPage.bank')}</span>
                                <span className="font-bold">Sparkasse Karlsruhe</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-1">
                                <span className="text-slate-500 font-sans font-bold uppercase text-xs tracking-wider">{t('paymentPage.iban')}</span>
                                <span className="font-bold tracking-wider text-brand-teal">DE65 6605 0101 4190 03</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-1">
                                <span className="text-slate-500 font-sans font-bold uppercase text-xs tracking-wider">{t('paymentPage.bic')}</span>
                                <span className="font-bold min-h-[1.5em] text-slate-300 italic"></span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 gap-1">
                                <span className="text-slate-500 font-sans font-bold uppercase text-xs tracking-wider">{t('paymentPage.accountHolder')}</span>
                                <span className="font-bold">Morsnova GmbH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};
