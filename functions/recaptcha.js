import { builder } from '@netlify/functions';
import { request } from 'undici';
import { safe } from './utils/safe';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

// just for testing

const build = async (_, context) => {
    const clientContext = context.clientContext.custom.netlify;

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
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ url: apiURL })
            };
        }

        const { body, statusCode } = await request(apiURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: [
                'Content-Type',
                'application/json',
                // 'Access-Control-Allow-Origin',
                // '*',
                // 'Access-Control-Allow-Headers',
                // 'Content-Type'
            ],
        });

        const data = await body.text();

        if (statusCode === 200 && body) {
            return (
                statusCode === 200 && {
                    headers,
                    statusCode: 200,
                    body: JSON.stringify({ ok: true, data: data, status: statusCode })
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
                        + data + ' :::'
                })
            };
        } else {
            return {
                statusCode: 555,
                body: JSON.stringify({
                    error: '::: Recaptcha error: status 500 or 502 ::: '
                        + ' and with status: ' + statusCode
                        + ' and with response: ' + data
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
