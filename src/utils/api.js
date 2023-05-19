const GET_CONFIG = {
    method: 'GET',
    mode: 'no-cors', // no-cors, cors, *cors, same-origin
    headers: {
        'Content-Type': 'text/strings',
        Allow: 'GET, POST, OPTIONS, HEAD'
    }
    // TODO: POST request with body: JSON.stringify({ data }) instead current GET
};

const GET_JSON_CONFIG = {
    method: 'GET',
    mode: 'no-cors', // no-cors, cors, *cors, same-origin
    headers: {
        'Content-Type': 'application/json',
        Allow: 'GET, POST, OPTIONS, HEAD'
    }
    // TODO: POST request with body: JSON.stringify({ data }) instead current GET
};

const POST_CONFIG = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        Allow: 'GET, POST, OPTIONS, HEAD'
    }
};

// getNF, getTG, getEmail

const request = async (url, config) => {
    const response = await fetch(url, config);
    if (response.ok !== undefined) return response;
    const resultJson = await response.json();
    const result = await JSON.parse(resultJson.data);
    return result;
};

export const getRecaptcha = async url => {
    const result = await request(url, GET_CONFIG);
    return result.ok;
};

export const getTelegram = async url => {
    const result = await request(url, GET_CONFIG);
    return result;
};

export const sendEmail = async url => {
    const result = await request(url, GET_JSON_CONFIG);
    return result;
};
