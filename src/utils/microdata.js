import React from 'react';

export const microdata = {
    '@context': 'http://www.schema.org',
    '@type': ['WebPage'],
    name: 'WebLogic Studio',
    url: 'https://weblogic.netlify.app/',
    inLanguage: 'en-US',
    mainEntityOfPage: 'https://weblogic.netlify.app/',
    logo: '/app/logo.png',
    image: '/app/print.png',
    description:
        'WebLogic Studio - Website development and creation, as well as SEO optimization and website promotion in Kiev',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kiyv',
        addressRegion: 'Kiyv',
        postalCode: '03110',
        addressCountry: 'Ukraine'
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+38 063 442-2537',
        contactType: 'customer support'
    },
    telephone: '+38 063 442-2537',
    aggregateRating: {
        '@context': 'http://www.schema.org',
        '@type': 'aggregateRating',
        name: 'WebLogic Studio Rating',
        reviewCount: 439,
        ratingValue: 91,
        bestRating: 100,
        worstRating: 1
    }
};

const JsonLd = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(microdata)
        }}
    />
);

export default JsonLd;
