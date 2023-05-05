// netlify functions URLs
const netlifyURL = 'https://weblogic.netlify.app/.netlify/functions/recaptcha?data=';

export const getRecaptcha = async data => {
    console.info('::: getRecaptcha :::');

    const config = {
        method: 'GET',
        mode: 'no-cors', // no-cors, cors, *cors, same-origin
        headers: { 'Content-Type': 'application/json', Allow: 'GET, POST, OPTIONS, HEAD' }
        // body: JSON.stringify({ data })
    };

    const result = await fetch(netlifyURL + '' + data, config);
    console.info('::: getRecaptcha result: ', result);

    if (result.ok) {
        console.log('::: getRecaptcha result.OK & result: ', result);

        return result.data;
    } else {
        console.warn('::: getRecaptcha error: ', result);
    }

    return result;
};
