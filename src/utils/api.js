import safe from './safe';

const GET_CONFIG = {
    method: 'GET',
    mode: 'no-cors', // no-cors, cors, *cors, same-origin
    headers: {
        'Content-Type': 'text/strings',
        Allow: 'GET, POST, OPTIONS, HEAD'
    }
    // TODO: POST request with body: JSON.stringify({ data }) instead current GET
};

const POST_CONFIG = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'text/strings',
        Allow: 'GET, POST, OPTIONS, HEAD'
    }
};

const { getNF, getTG, getEmail } = safe;

const request = async (url, config) => {
    const response = await fetch(url, config);
    if (response.ok !== undefined) return response;
    const resultJson = await response.json();
    const result = await JSON.parse(resultJson.data);
    return result;
};

export const getRecaptcha = async data => {
    const result = await request(getNF + '' + data, GET_CONFIG);
    return result.ok;
};

export const getTelegram = async data => {
    const result = await request(getTG + '' + data, GET_CONFIG);
    return result;
};

export const sendEmail = async data => {
    const result = await request(getEmail + '/?=' + JSON.stringify(data), GET_CONFIG);
    return result;
};
