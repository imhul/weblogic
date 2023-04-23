import axios from 'axios';

// netlify functions URLs
const netlifyURL = 'https://weblogic.netlify.app/.netlify/functions/recaptcha';

export const getRecaptcha = async data => {
    console.info('::: getRecaptcha :::');

    const config = {
        method: 'post',
        data: 'data=' + data,
        url: netlifyURL
    };

    const result = await axios(config)
        .then(response => {
            console.log('::: getRecaptcha response: ', response.data);

            return response.data;
        })
        .catch(error => {
            console.warn('::: getRecaptcha error: ', error);
            return error;
        });

    return result;
};
