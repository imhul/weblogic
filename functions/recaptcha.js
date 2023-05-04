import { builder } from '@netlify/functions';
import { request } from 'undici';
import { safe } from './utils/safe';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

// just for testing

const build = async (event, context) => {
    const clientContext = context.clientContext.custom.netlify;

    if (!event) {
        return {
            statusCode: 556,
            body: JSON.stringify({ error: '::: Netlify functions: No event! :::' })
        };
    }


    if (!event.body || event.body === null || event.body === undefined) {
        return {
            statusCode: 556,
            body: JSON.stringify({ error: '::: Netlify functions: No event.body! :::' })
        };
    }

    const data = await JSON.parse(event.body.toString());

    if (data) {
        return {
            statusCode: 200,
            body: JSON.stringify({ error: '::: Netlify functions data: ::: ' + JSON.stringify(data) })
        };
    } else {
        return {
            statusCode: 557,
            body: JSON.stringify({ error: '::: Netlify functions: No data! :::' })
        };
    }

    try {
        let ipifiedData;
        let apiURL = '';
        const ipify = await request(safe.ipify, { headers });
        ipifiedData = await ipify.body.json();

        if (!ipifiedData.ip) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: '::: Netlify functions: ipify error! ::: ' + JSON.stringify(ipifiedData ?? ipify) })
            };
        }

        apiURL = `${safe.link}${clientContext}&remoteip=${ipifiedData.ip}`;

        if (!apiURL.length) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: '::: Netlify functions: Captcha URL is wrong! :::' })
            };
        }

        const { body, statusCode } = await request(apiURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: [
                'Content-Type',
                'application/json',
                'Access-Control-Allow-Origin',
                '*',
                'Access-Control-Allow-Headers',
                'Content-Type'
            ],
        });

        const resData = await body.text();

        if (statusCode === 200 && body) {
            return (
                statusCode === 200 && {
                    headers,
                    statusCode: 200,
                    body: JSON.stringify({ ok: true, data: resData, status: statusCode })
                }
            );
        } else if (statusCode === 200 && !body) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    error: '::: Recaptcha error: status 200, but data is wrong'
                        + ' with status: ' + statusCode + ' :::'
                })
            };

        } else if (statusCode === 303) {
            return {
                statusCode: 303,
                body: JSON.stringify({
                    error: '::: Recaptcha error: status 303 and with response: '
                        + resData + ' :::'
                })
            };
        } else {
            return {
                statusCode: 555,
                body: JSON.stringify({
                    error: '::: Recaptcha error: status 500 or 502 ::: '
                        + ' and with status: ' + statusCode
                        + ' and with response: ' + resData
                        + ' :::'
                })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: '::: Recaptcha is not responding with error: '
                    + (error.message ?? error) + ' :::'
            })
        };
    }
};

const handler = builder(build);

export { handler };
