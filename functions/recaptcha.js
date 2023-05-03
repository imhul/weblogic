import axios from 'axios';
// const axios = require('axios')
// const { builder } = require('@netlify/functions');
import safe from './utils/safe';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

const handler = async data => {
    console.info('::: handler with data: ', data, ' :::');

    try {
        let apiURL = '';

        const ipified = await axios.post(safe.ipify, { headers });

        apiURL = `${safe.link}${data}${response.data.ip !== '' ? `&remoteip=${ipified.data.ip}` : ''
            }`;

        if (!apiURL.length) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: '::: Netlify functions: Something went wrong! :::' })
            };
        }

        const response = await axios(apiURL, {
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

export default handler;
