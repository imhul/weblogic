import { builder } from '@netlify/functions';
import { request } from 'undici';
import { safe } from './utils/safe';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

const build = async (data, context) => {
    const clientContext = context.clientContext.custom.netlify;
    let ipifiedData;

    try {
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

        const response = await request(apiURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.status === 200 && response.data) {
            return (
                response.status === 200 && {
                    headers,
                    statusCode: 200,
                    body: JSON.stringify({ ok: true })
                }
            );
        } else {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: '::: Recaptcha error: status 200, but data is wrong! ::: '
                        + response.status
                        + ' and with data: '
                        + JSON.stringify(data)
                        + ' :::'
                })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: '::: Recaptcha is not responding with error: '
                    + error.message
                    + ' and with data: '
                    + JSON.stringify(data)
                    + ' :::'
            })
        };
    }
};

const handler = builder(build);

export { handler };
