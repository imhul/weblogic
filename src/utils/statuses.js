const env =
    process.env.NODE_ENV !== 'development' ? 'Netlify' : 'Common';

export const statuses = {
    303:
        '::: ' +
        env +
        ' error: Recaptcha server return status 303! :::',
    404: '::: ' + env + ' error: Page Not Found! :::',
    405: '::: ' + env + ' error: Method Not Allowed! :::',
    500: '::: ' + env + ' error: Internal Server Error! :::',
    502: '::: ' + env + ' error: Bad Gateway! :::',
    510: '::: Netlify functions: No frontend data! :::',
    511: '::: Netlify functions: ipify server bad response! :::',
    512: '::: Netlify functions: Captcha URL is wrong! :::',
    513: '::: Netlify functions: No data! :::',
    514: '::: Netlify functions: Telegram: No frontend data! :::',
    515: '::: Netlify functions: Telegram: server is not responding but with error message! :::',
    516: '::: Netlify functions: Telegram: bad server response. Message is not sent! :::',
    517: '::: Netlify functions: Telegram: server is not responding with no error message! :::',
    518: '::: Netlify functions: ipify server is not responding! :::',
    519: '::: Netlify functions: Email: No data provided! :::',
    520: '::: Netlify functions: Email: No environment provided! :::',
    521: '::: Netlify functions: Email: No mailOptions provided! :::',
    522: '::: Netlify functions: Email: Error sending email: transporter.sendMail error :::',
    523: '::: Netlify functions: Email: Error sending email: last catch error! :::',
    524: '::: Netlify functions: Mongo: ALL: Failed  mongodb connection! :::',
    525: '::: Netlify functions: Mongo: ALL: Common mongodb error! :::',
    526: '::: Netlify functions: Mongo: ALL: No data provided! :::',
    527: '::: Netlify functions: Mongo: UPDATE: No data provided! :::',
    528: '::: Netlify functions: Mongo: UPDATE: Failed update! :::',
    529: '::: Netlify functions: Mongo: UPDATE: Common mongodb error! :::',
    530: '::: Netlify functions: Mongo: ADD: No data provided! :::',
    531: '::: Netlify functions: Mongo: ADD: Failed update! :::',
    532: '::: Netlify functions: Mongo: ADD: Common mongodb error! :::',
    533: '::: Netlify functions: Auth: No data provided! :::',
    534: '::: Netlify functions: Auth: No token provided! :::',
    535: '::: :::',
    536: '::: :::',
    537: '::: :::',
    538: '::: :::'
};

export const getErrorByCode = code => statuses[code];
