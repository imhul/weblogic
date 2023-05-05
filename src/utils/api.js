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

    const response = await fetch(netlifyURL + '' + data, config);
    console.info('::: getRecaptcha response: ', response);
    const resultJson = await response.json();
    const result = JSON.parse(resultJson.data);
    console.info('::: getRecaptcha result.success: ', result.success);
    console.info('::: getRecaptcha result: ', result);

    if (!result.ok) {
        console.warn('::: getRecaptcha error: ', response);
        return false;
    }

    return true;
};
