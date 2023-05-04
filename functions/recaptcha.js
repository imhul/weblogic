import { builder } from '@netlify/functions';
import { request } from 'undici';
import { safe } from './utils/safe';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

// just for testing

const build = async (data, context) => {
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
        }

        const response = await request(apiURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: ['Content-Type', 'application/json']
        });

        // let response;
        // let response = await recaptchaResponse.body.json();
        // response = response || recaptchaResponse;

        // for await (const data of recaptchaResponse) {
        //     console.log('data', data);
        //     response = data;
        // }

        if (response.statusCode === 200 && response.body) {
            return (
                response.statusCode === 200 && {
                    headers,
                    statusCode: 200,
                    body: JSON.stringify({ ok: true, data: response.body, status: response.statusCode })
                }
            );
        } else if (response.statusCode === 200 && !response.body) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    error: '::: Recaptcha error: status 200, but data is wrong'
                        + ' with status: ' + response.statusCode + ' and with response: ' + JSON.stringify(response) + ' :::'
                })
            };

        } else if (response.statusCode === 303) {
            return {
                statusCode: 303,
                body: JSON.stringify({
                    error: '::: Recaptcha error: status 303 and with response: ' 
                        + await response.body.json() + ' :::'
                })
            };
        } else {
            return {
                statusCode: 555,
                body: JSON.stringify({
                    error: '::: Recaptcha error: status 500 or 502 ::: '
                        + ' and with status: ' + response.statusCode 
                        + ' and with response: ' + response
                        + ' and with response: ' + await response.body.json()
                        + ' and with JSON.stringify({response}): ' + JSON.stringify({response})
                        + ' and with JSON.stringify(response): ' + JSON.stringify(response)
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
