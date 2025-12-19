
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';

export const ImpressumPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Ensure we start at the top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fffbf7] font-sans pt-24 lg:pt-32 flex flex-col">
      
      <main className="flex-grow">
        {/* Header / Title Section */}
        <div className="bg-brand-dark py-16 lg:py-24 relative overflow-hidden">
           {/* Background Accents */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
           
           <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 underline decoration-brand-orange/50 decoration-4 underline-offset-8">
                 {t('impressumPage.title')}
              </h1>
           </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[800px] mx-auto px-6 py-16 lg:py-24 text-slate-600 leading-relaxed">
          
          {/* Address Block */}
          <div className="mb-12">
            <p className="font-bold text-brand-dark text-lg mb-1">Morsnova GmbH</p>
            <p>{t('impressumPage.address')}</p>
            <p>{t('impressumPage.city')}</p>
            <p>{t('impressumPage.country')}</p>
          </div>

          {/* Contact Block */}
          <div className="mb-12">
            <p>
              <span className="font-bold text-brand-dark">{t('impressumPage.email')}</span>{' '}
              <a href="mailto:info@worknova.de" className="text-brand-orange hover:underline">info@worknova.de</a>
            </p>
            <p>
              <span className="font-bold text-brand-dark">{t('impressumPage.internet')}</span>{' '}
              <a href="https://www.worknova.de" target="_blank" rel="noreferrer" className="text-brand-orange hover:underline">www.worknova.de</a>
            </p>
          </div>

          {/* CEO Block */}
          <div className="mb-12">
            <p className="font-bold text-brand-dark">{t('impressumPage.ceo')}</p>
            <p>{t('impressumPage.ceoName')}</p>
          </div>

          {/* Registry Block */}
          <div className="mb-12">
            <p>{t('impressumPage.registerNumber')}</p>
            <p>{t('impressumPage.registerCourt')}</p>
          </div>

          {/* Tax Block */}
          <div className="mb-16">
            <p>{t('impressumPage.vatId')}</p>
            <p>{t('impressumPage.vatIdLaw')}</p>
          </div>

          <div className="h-px w-full bg-slate-200 mb-16"></div>

          {/* Legal Text Section 1 */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-brand-dark mb-4">{t('impressumPage.section1Title')}</h3>
            <p className="mb-4">
              {t('impressumPage.section1Text1')}
            </p>
            <p>
              {t('impressumPage.section1Text2')}
            </p>
          </div>

          {/* Legal Text Section 2 */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-brand-dark mb-4">{t('impressumPage.section2Title')}</h3>
            <p>
              {t('impressumPage.section2Text')}
            </p>
          </div>

          <div className="h-px w-full bg-slate-200 mb-16"></div>

          {/* Legal Text Section 3 */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-brand-dark mb-4">
               {t('impressumPage.section3Title')} (<a href="#/zahlungsinformationen" onClick={(e) => { e.preventDefault(); window.location.hash = '#/zahlungsinformationen'; }} className="text-brand-orange hover:underline">{t('impressumPage.seePaymentInfo')}</a>)
            </h3>
            
            <div className="mb-6">
              <strong className="block text-brand-dark mb-2">{t('impressumPage.subscriptions')}</strong>
              <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                <li>{t('impressumPage.subscriptionText1')}</li>
                <li>{t('impressumPage.subscriptionText2')}</li>
              </ul>
            </div>

            <div>
              <strong className="block text-brand-dark mb-2">{t('impressumPage.singleInvoices')}</strong>
              <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                <li>{t('impressumPage.singleInvoiceText1')}</li>
                <li>{t('impressumPage.singleInvoiceText2')}</li>
              </ul>
            </div>
          </div>

          {/* Legal Text Section 4 */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-brand-dark mb-4">{t('impressumPage.section4Title')}</h3>
            <p>
              {t('impressumPage.section4Text')}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
