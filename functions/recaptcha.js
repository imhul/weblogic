import { builder } from '@netlify/functions';
import { request } from 'undici';
import { safe } from './utils/safe';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

const build = async (data, context) => {
    // const { identity, user } = context.clientContext;
    const clientContext = context.clientContext;
    let ipifiedData;
    const fakeData = '';

    try {
        let apiURL = '';

        const ipified = await request(safe.ipify, { headers });
        ipifiedData = ipified.json();

        if (!ipifiedData?.data?.ip?.length) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: '::: Netlify functions: ipify error! ::: ' + JSON.stringify(ipified) })
            };
        }

        apiURL = `${safe.link}${fakeData}${ipified.data.ip !== '' ? `&remoteip=${ipified.data.ip}` : ''
            }`;

        if (!apiURL.length) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: '::: Netlify functions: Something went wrong! :::' })
            };
        }

        const response = await request(apiURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' }
        });

        return (
            response.status === 200 &&
            response.data && {
                headers,
                statusCode: 200,
                body: JSON.stringify({ ok: true })
            }
        );
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: '::: Recaptcha is not responding with error: '
                    + error.message
                    + ' and with ip: '
                    + (ipifiedData?.data?.ip ?? 'NO IP!')
                    + ' and with clientContext: '
                    + JSON.stringify({ ...clientContext })
                    + ' and with data: '
                    + JSON.stringify({ ...data })
                    + ' :::'
            })
        };
    }
};

const handler = builder(build);

export { handler };
