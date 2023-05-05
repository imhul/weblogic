// netlify functions URLs
const netlifyURL = 'https://weblogic.netlify.app/.netlify/functions/recaptcha?data=';

export const getRecaptcha = async data => {
    console.info('::: getRecaptcha :::');

    const config = {
        method: 'GET',
        mode: 'no-cors', // no-cors, cors, *cors, same-origin
        headers: { 'Content-Type': 'text/strings', Allow: 'GET, POST, OPTIONS, HEAD' }
        // body: JSON.stringify({ data })
    };

    const response = await fetch(netlifyURL + '' + data, config);
    const resultJson = await response.json();
    const result = await JSON.parse(resultJson.data);

    console.info('::: getRecaptcha response' + response + ':::');
    console.info('::: getRecaptcha resultJson' + resultJson + ':::');
    console.info('::: getRecaptcha result' + result + ':::');
    console.info('::: getRecaptcha result' +  + ':::');

    return result.success;
};
