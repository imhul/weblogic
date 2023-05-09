const env = process.env.NODE_ENV !== 'development' ? 'Netlify' : 'Common';

export const statuses = {
    303: 'Recaptcha error: status 303!',
    404: 'Common error: Page Not Found!',
    405: `${env} error: Method Not Allowed!`,
    500: `Common error: ${env} Internal Server Error!`,
    502: `Common error: ${env} Server Error: Bad Gateway!`,
    510: 'Netlify functions: No frontend data!',
    511: 'Netlify functions: ipify:  server is not responding!',
    512: 'Netlify functions: Captcha URL is wrong!',
    513: 'Netlify functions: No data!',
    514: 'Netlify functions: Telegram: No frontend data!',
    515: 'Netlify functions: Telegram: server is not responding but with error message!',
    516: 'Netlify functions: Telegram: bad server response. Message is not sent!',
    517: 'Netlify functions: Telegram: server is not responding with no error message!',
    518: ''
};
