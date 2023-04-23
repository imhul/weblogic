// import fetch from "node-fetch";

// netlify functions URLs
const netlifyURL = 'https://weblogic.netlify.app/.netlify/functions/recaptcha';

export const getRecaptcha = async data => {
    console.info('::: getRecaptcha :::');

    const config = {
        method: 'POST',
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: { 'Content-Type': 'application/json' },
        body: data
    };

    const result = await fetch(netlifyURL, config)
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
