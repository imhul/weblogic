import safe from './safe';

const config = {
    method: 'GET',
    mode: 'no-cors', // no-cors, cors, *cors, same-origin
    headers: { 'Content-Type': 'text/strings', Allow: 'GET, POST, OPTIONS, HEAD' }
    // TODO: POST request with body: JSON.stringify({ data }) instead current GET 
};

export const getRecaptcha = async data => {
    const { getNF } = safe;
    const response = await fetch(getNF + '' + data, config);
    const resultJson = await response.json();
    const result = await JSON.parse(resultJson.data);
    return result.success;
};

export const getTelegram = async data => {
    const { getTG } = safe;
    const response = await fetch(getTG + '' + data, config);
    const resultJson = await response.json();
    const result = await JSON.parse(resultJson.data);
    return result;
};