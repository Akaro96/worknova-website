
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, FALLBACK_SEO } from '../lib/seo-config';

interface SEOProps {
    route: string;
}

export const SEO: React.FC<SEOProps> = ({ route }) => {
    // Handle routes with fragments/params if necessary, currently exact match
    // Clean route for matching (e.g. #/unternehmen?foo=bar -> #/unternehmen)
    const cleanRoute = route.split('?')[0];

    const config = SEO_CONFIG[cleanRoute] || FALLBACK_SEO;

    // Structured Data (Organization) - Constant across site
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Worknova",
        "url": "https://www.worknova.de",
        "logo": "https://www.worknova.de/Worknova_Logo.webp",
        "sameAs": [],
        "description": "Internationale Fachkräftevermittlung & Smart Recruiting Plattform."
    };

    return (
        <Helmet>
            <title>{config.title}</title>
            <meta name="description" content={config.description} />

            {/* Open Graph */}
            <meta property="og:title" content={config.title} />
            <meta property="og:description" content={config.description} />
            <meta property="og:url" content={`https://www.worknova.de/${cleanRoute}`} />
            <meta property="og:type" content="website" />
            {/* Fallback image if not per-page */}
            <meta property="og:image" content="/Worknova_Logo.webp" />

            {/* Twitter */}
            <meta name="twitter:title" content={config.title} />
            <meta name="twitter:description" content={config.description} />

            {/* Canonical - confusing with HashRouter, but usually points to root or / */}
            <link rel="canonical" href={`https://www.worknova.de/${cleanRoute}`} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};
