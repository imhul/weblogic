const fetch = require('node-fetch');
const { builder } = require('@netlify/functions');
import safe from './utils/safe';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

const buildHandler = async data => {
    console.info('::: handler with data: ', data, ' :::');
    let apiURL = '';

    try {
        const response = await fetch(safe.ipify);
        apiURL = `${safe.link}${data}${
            response.data.ip !== '' ? `&remoteip=${response.data.ip}` : ''
        }`;
    } catch (error) {
        return {
            statusCode: 666,
            body: JSON.stringify({
                error: `::: ipify is not responding with error: ${error.message} :::`
            })
        };
    }

    if (apiURL === '') {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: '::: Netlify functions: Something went wrong! :::' })
        };
    }

    try {
        const response = await fetch(apiURL, {
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
                error: `::: Recaptcha is not responding with error: ${error.message} :::`
            })
        };
    }
};

const handler = builder(buildHandler);

export default handler;
