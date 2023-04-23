const axios = require('axios');
const safe = require('./utils/safe');

exports.handler = async (data) => {
    let apiURL = '';

    try {
        axios.get(safe.ipify).then(response => {
            apiURL = `${safe.link}${data}${response.data.ip !== '' ? `&remoteip=${response.data.ip}` : ''}`;
        });
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `::: ipify is not responding with error: ${error.message} :::` })
        };
    }

    if (apiURL === '') {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: '::: Netlify functions: Something went wrong! :::' })
        };
    }

    try {
        const response = await axios.post(apiURL);

        return response.status === 200 && response.data && {
            statusCode: 200,
            body: JSON.stringify({ ok: true })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `::: Recaptcha is not responding with error: ${error.message} :::` })
        };
    }
};
