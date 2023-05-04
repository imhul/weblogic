// netlify functions URLs
const netlifyURL = 'https://weblogic.netlify.app/.netlify/functions/recaptcha';

export const getRecaptcha = async data => {
    console.info('::: getRecaptcha :::');

    const config = {
        method: 'GET',
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    };

    const result = await fetch(netlifyURL, config);
    console.info('::: getRecaptcha result: ', result);

    if (result.ok) {
        console.log('::: getRecaptcha response: ', response.data);

        return response.data;
    } else {
        console.warn('::: getRecaptcha error: ', result);
    }

    return result;
};
