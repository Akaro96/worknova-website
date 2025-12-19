
import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { UnternehmenPage } from './pages/UnternehmenPage';
import { TalentPage } from './pages/TalentPage';
import { ServicesPage } from './pages/ServicesPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { ZahlungsinformationenPage } from './pages/ZahlungsinformationenPage';
import { AppLandingPage } from './pages/AppLandingPage';
import { FAQPage } from './pages/FAQPage';
import { DatenschutzPlattformPage } from './pages/DatenschutzPlattformPage';
import { NutzungsbedingungenPage } from './pages/NutzungsbedingungenPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';

import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentRoute(hash);

      // Robust top scroll on true page changes
      if (!hash.includes('contact')) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Handle smooth scrolling for anchors within a page
      if (hash.startsWith('#') && !hash.startsWith('#/')) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const PageComponent = useMemo(() => {
    const route = currentRoute.toLowerCase();

    // Home route
    if (route === '#/' || route === '#' || route === '') return LandingPage;

    // Explicit route mapping for safety
    if (route.startsWith('#/unternehmen')) return UnternehmenPage;
    if (route.startsWith('#/talent')) return TalentPage;
    if (route.startsWith('#/services')) return ServicesPage;
    if (route.startsWith('#/impressum')) return ImpressumPage;
    if (route.startsWith('#/zahlungsinformationen')) return ZahlungsinformationenPage;
    if (route.startsWith('#/app')) return AppLandingPage;
    if (route.startsWith('#/faq')) return FAQPage;
    if (route.startsWith('#/datenschutz')) return DatenschutzPlattformPage;
    if (route.startsWith('#/agb')) return NutzungsbedingungenPage;
    if (route.startsWith('#/register')) return RegisterPage;
    if (route.startsWith('#/login')) return LoginPage;

    // 404 for any unknown route
    return NotFoundPage;
  }, [currentRoute]);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-white relative selection:bg-brand-orange selection:text-white overflow-x-hidden">
        <SEO route={currentRoute} />
        {/* Skip Link for Accessibility */}
        <a
          href="#main-content"
          className="skip-link"
          onClick={(e) => {
            e.preventDefault();
            const main = document.getElementById('main-content');
            if (main) {
              main.focus();
              main.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Zum Hauptinhalt springen
        </a>

        <Navbar currentRoute={currentRoute} />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          <PageComponent />
        </main>
      </div>
    </HelmetProvider>
  );
};

export default App;
