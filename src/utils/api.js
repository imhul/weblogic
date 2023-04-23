// import fetch from "node-fetch";

// netlify functions URLs
const netlifyURL = 'https://weblogic.netlify.app/.netlify/functions/recaptcha';

export const getRecaptcha = async data => {
    console.info('::: getRecaptcha :::');

    const config = {
        method: 'POST',
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    };

    const request = await fetch(netlifyURL, config);
    console.info('::: getRecaptcha request: ', request);
    const result = await request.json();

    if (result.ok) {
        console.log('::: getRecaptcha response: ', response.data);

        return response.data;
    } else {
        console.warn('::: getRecaptcha error: ', result);
    }

    return result;
};
