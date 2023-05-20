export const messageOptions = {
    duration: 3,
    style: {
        marginTop: '2.5rem'
    }
};

export const GET_CONFIG = {
    method: 'GET',
    mode: 'no-cors', // no-cors, cors, *cors, same-origin
    headers: {
        'Content-Type': 'text/strings',
        Allow: 'GET, POST, OPTIONS, HEAD'
    }
    // TODO: POST request with body: JSON.stringify({ data }) instead current GET
};

export const GET_JSON_CONFIG = {
    method: 'GET',
    mode: 'no-cors', // no-cors, cors, *cors, same-origin
    headers: {
        'Content-Type': 'application/json',
        Allow: 'GET, POST, OPTIONS, HEAD'
    }
    // TODO: POST request with body: JSON.stringify({ data }) instead current GET
};

export const POST_JSON_CONFIG = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        Allow: 'GET, POST, OPTIONS, HEAD'
    }
};
