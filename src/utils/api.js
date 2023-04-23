const axios = require('axios');

const netlifyURL = 'https://weblogic.netlify.app/.netlify/functions/recaptcha';

export const getRecaptcha = async data => {
    console.info('::: getRecaptcha :::');

    const config = {
        method: 'post',
        data: 'data=' + data,
        url: netlifyURL
    };

    await axios(config)
        .then(response => {
            console.log('::: getRecaptcha response: ', response.data);
        })
        .catch(error => {
            console.warn('::: getRecaptcha error: ', error);
        });
};
