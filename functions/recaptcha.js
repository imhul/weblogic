import { builder } from '@netlify/functions';
import { request } from 'undici';
import { env, headers } from './utils/config';

const build = async event => {
    const data =
        (await event.queryStringParameters?.data) ??
        event.body?.data ??
        event.rawUrl.replace(env.getNF, '') ??
        null;

    if (!data) {
        return {
            statusCode: 510,
            body: JSON.stringify({
                error:
                    '::: Netlify functions: No data! with event: ' +
                    JSON.stringify(event) +
                    ':::'
            })
        };
    }

    try {
        let ipifiedData;
        let apiURL = '';
        const ipify = await request(env.ipify, { headers });
        ipifiedData = await ipify.body.json();

        if (!ipify) {
            return {
                statusCode: 518,
                body: JSON.stringify({
                    error: '::: Netlify functions: ipify server is not responding! :::'
                })
            };
        }

        if (!ipifiedData.ip) {
            return {
                statusCode: 511,
                body: JSON.stringify({
                    error:
                        '::: Netlify functions: ipify server bad response! ::: ' +
                        JSON.stringify(ipifiedData ?? ipify)
                })
            };
        }

        apiURL = `${env.link}${data}&remoteip=${ipifiedData.ip}`;

        if (!apiURL.length) {
            return {
                statusCode: 512,
                body: JSON.stringify({
                    error: '::: Netlify functions: Captcha URL is wrong! :::'
                })
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
            ]
        });

        const resData = await body.text();

        if (statusCode === 200 && body) {
            return (
                statusCode === 200 && {
                    headers,
                    statusCode: 200,
                    body: JSON.stringify({
                        ok: true,
                        data: resData,
                        status: statusCode
                    })
                }
            );
        } else if (statusCode === 200 && !body) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    error:
                        '::: Recaptcha error: status 200, but data is wrong' +
                        ' with status: ' +
                        statusCode +
                        ' :::'
                })
            };
        } else if (statusCode === 303) {
            return {
                statusCode: 303,
                body: JSON.stringify({
                    error:
                        '::: Recaptcha error: status 303 and with response: ' +
                        resData +
                        ' :::'
                })
            };
        } else {
            return {
                statusCode: 555,
                body: JSON.stringify({
                    error:
                        '::: Recaptcha error: status 500 or 502 ::: ' +
                        ' and with status: ' +
                        statusCode +
                        ' and with response: ' +
                        resData +
                        ' :::'
                })
            };
        }
    } catch (error) {
        return {
            statusCode: 513,
            body: JSON.stringify({
                error:
                    '::: Recaptcha is not responding with error: ' +
                    (error.message ?? error) +
                    ' :::'
            })
        };
    }
};

const handler = builder(build);

export { handler };
