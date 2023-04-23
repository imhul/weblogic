// const axios = require('axios');
// const safe = require('./utils/safe');
// import axios from 'axios';
import fetch from "node-fetch";
import safe from './utils/safe';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

exports.handler = async data => {
    console.info('::: handler with data: ', data, ' :::');
    let apiURL = '';

    await fetch(safe.ipify).then(response => {
        apiURL = `${safe.link}${data}${
            response.data.ip !== '' ? `&remoteip=${response.data.ip}` : ''
        }`;
    });

    if (apiURL === '') {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: '::: Netlify functions: Something went wrong! :::' })
        };
    }

    try {
        const response = await fetch(apiURL,{ method: 'POST', mode: "no-cors", headers: { 'Content-Type': 'application/json' }});

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
