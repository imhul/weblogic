export const initStateUI = {
    fps: 60,
    parts: 0,
    loaded: false,
    isInit: false,
    heroStyle: {},
    currentUser: {
        ip: '',
        isAuth: false,
        isRobot: true,
        date: '',
    },
    hero: ['T', 'k', 'a', 'c', 'h', 'u', 'k', ' ', 'Z', 'a', 'k', 'h', 'a', 'r'],
    microdata: {
        '@context': 'http://www.schema.org',
        '@type': ['WebPage'],
        name: 'WebLogic Studio',
        url: 'http://weblogic.com.ua/',
        inLanguage: 'en-US',
        mainEntityOfPage: 'http://weblogic.com.ua/',
        logo: '/app/logo.png',
        image: '/app/print.png',
        description: 'WebLogic Studio - Website development and creation, as well as SEO optimization and website promotion in Kiev',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kiyv',
            addressRegion: 'Kiyv',
            postalCode: '03110',
            addressCountry: 'Ukraine',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+38 063 442-2537',
            contactType: 'customer support',
        },
        telephone: '+38 063 442-2537',
        aggregateRating: {
            '@context': 'http://www.schema.org',
            '@type': 'aggregateRating',
            name: 'WebLogic Studio Rating',
            reviewCount: 439,
            ratingValue: 91,
            bestRating: 100,
            worstRating: 1,
        },
    },
    technologies: [
        {
            id: 'Parcel',
            list: 'bundler',
            link: 'https://parceljs.org/',
        },
        {
            id: 'React',
            list: 'library',
            link: 'https://reactjs.org/',
        },
        {
            id: 'Redux',
            list: 'library',
            link: 'https://redux.js.org/',
        },
        {
            id: 'jQuery',
            list: 'library',
            link: 'https://jquery.com/',
        },
        {
            id: 'Ant Design',
            list: 'fw',
            link: 'https://ant.design/',
        },
        {
            id: 'npm',
            list: 'packmen',
            link: '#',
        },
        {
            id: 'yarn',
            list: 'packmen',
            link: '#',
        },
        {
            id: 'Materialize',
            list: 'fw',
            link: 'https://materializecss.com/',
        },
        {
            id: 'UIKit',
            list: 'fw',
            link: 'https://getuikit.com/',
        },
        {
            id: 'Bootstrap',
            list: 'fw',
            link: 'https://getbootstrap.com/',
        },
        {
            id: 'JavaScript, ES6',
            list: 'lang',
            link: '#',
        },
        {
            id: 'HTML5, JSX',
            list: 'lang',
            link: 'https://reactjs.org/docs/introducing-jsx.html',
        },
        {
            id: 'SASS, SCSS, CSS',
            list: 'lang',
            link: 'https://sass-lang.com/',
        },
        {
            id: 'JSON, xml',
            list: 'lang',
            link: '#',
        },
        {
            id: 'RESTful Web API',
            list: 'api',
            link: '#',
        },
        {
            id: 'Google Maps API',
            list: 'api',
            link: 'https://developers.google.com/maps/documentation/',
        },
        {
            id: 'YouTube Data API',
            list: 'api',
            link: 'https://developers.google.com/youtube/v3/',
        },
        {
            id: 'Instagram API',
            list: 'api',
            link: 'https://developers.facebook.com/docs/instagram-api/',
        },
        {
            id: 'Telegram API',
            list: 'api',
            link: 'https://core.telegram.org/',
        },
        {
            id: 'Viber API',
            list: 'api',
            link: 'https://developers.viber.com/docs/api/rest-bot-api/',
        },
        {
            id: 'reCaptcha API',
            list: 'api',
            link: 'https://developers.google.com/recaptcha/intro',
        },
        {
            id: 'Photoshop',
            list: 'design',
            link: '#',
        },
        {
            id: 'Zeplin',
            list: 'design',
            link: '#',
        },
        {
            id: 'Atlassian JIRA',
            list: 'track',
            link: 'https://jira.atlassian.com/',
        },
        {
            id: 'Trello',
            list: 'track',
            link: 'https://trello.com/',
        },
        {
            id: 'GitHub',
            list: 'git',
            link: 'https://github.com/',
        },
        {
            id: 'GitLab',
            list: 'git',
            link: 'https://gitlab.com/',
        },
        {
            id: 'Tortoise SVN',
            list: 'git',
            link: 'https://tortoisesvn.net/',
        },
        {
            id: 'VS Code',
            list: 'ide',
            link: 'https://code.visualstudio.com/',
        },
        {
            id: 'Intellij IDEA',
            list: 'ide',
            link: '#',
        },
        {
            id: 'WebStorm',
            list: 'ide',
            link: '#',
        },
        {
            id: 'Search Console',
            list: 'seo',
            link: '#',
        },
        {
            id: 'Google Analytics',
            list: 'seo',
            link: '#',
        },
        {
            id: 'microdata',
            list: 'seo',
            link: 'https://schema.org/',
        },
        {
            id: 'Joomla CMS',
            list: 'cms',
            link: 'https://www.joomla.org/',
        },
        {
            id: 'react-preloading-component',
            list: 'other',
            link: '#',
        },
        {
            id: 'react-router-hash-link',
            list: 'other',
            link: '#',
        },
        {
            id: 'react-redux-form',
            list: 'other',
            link: 'https://github.com/davidkpiano/react-redux-form',
        },
        {
            id: 'react-clipboard.js',
            list: 'other',
            link: '#',
        },
        {
            id: 'react-contextmenu',
            list: 'other',
            link: '#',
        },
        
        {
            id: 'react-hot-loader',
            list: 'other',
            link: '#',
        },
        {
            id: 'react-router',
            list: 'other',
            link: '#',
        },
        {
            id: 'react-gravatar',
            list: 'other',
            link: '#',
        },
        {
            id: 'react-recaptcha',
            list: 'other',
            link: '#',
        },
        {
            id: 'react-router-dom',
            list: 'other',
            link: '#',
        },
        {
            id: 'right-now',
            list: 'other',
            link: '#',
        },
        {
            id: 'redux-saga',
            list: 'other',
            link: 'https://redux-saga.js.org/',
        },
        {
            id: 'redux-thunk',
            list: 'other',
            link: 'https://github.com/reduxjs/redux-thunk',
        },
        {
            id: 'redux-logger',
            list: 'other',
            link: 'https://github.com/LogRocket/redux-logger',
        },
        {
            id: 'history',
            list: 'other',
            link: 'https://github.com/ReactTraining/history',
        },
        {
            id: 'helmet',
            list: 'other',
            link: '#',
        },
        {
            id: 'axios',
            list: 'other',
            link: '#',
        },
        {
            id: 'Pixi.js',
            list: 'other',
            link: 'http://pixijs.com',
        },
        {
            id: 'Anime.js',
            list: 'other',
            link: 'https://animejs.com/',
        },
        {
            id: 'Immutable.js',
            list: 'other',
            link: 'https://facebook.github.io/immutable-js/',
        },
        {
            id: 'socket.io',
            list: 'other',
            link: 'https://socket.io/',
        },
        {
            id: 'lodash',
            list: 'other',
            link: 'https://lodash.com/',
        },
        {
            id: 'jQuery-UI',
            list: 'other',
            link: 'https://jquery.com/',
        },
        {
            id: 'Highcharts.js',
            list: 'other',
            link: 'https://www.highcharts.com/',
        },
        {
            id: 'Odometr.js',
            list: 'other',
            link: 'https://github.hubspot.com/odometer/docs/welcome/',
        },
        {
            id: 'raf',
            list: 'other',
            link: '#',
        },
    ],
};
