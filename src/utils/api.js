import safe from './safe';

export const getRecaptcha = async data => {
    const { getNF } = safe;

    const config = {
        method: 'GET',
        mode: 'no-cors', // no-cors, cors, *cors, same-origin
        headers: { 'Content-Type': 'text/strings', Allow: 'GET, POST, OPTIONS, HEAD' }
        // body: JSON.stringify({ data })
    };

    const response = await fetch(getNF + '' + data, config);
    const resultJson = await response.json();
    const result = await JSON.parse(resultJson.data);

    return result.success;
};
