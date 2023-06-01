export const messageOptions = {
    duration: 4,
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

export const MONGO_ACTIONS = {
    ALL: 'ALL', // '/action/find'
    RUN: 'RUN', // '/action/aggregate'
    ADD: 'ADD', // '/action/insertOne'
    FIND: 'FIND', // '/action/findOne'
    UPDATE: 'UPDATE', // '/action/updateOne'
    DELETE: 'DELETE', // '/action/deleteOne'
    ADD_MANY: 'ADD_MANY', // '/action/insertMany'
    FIND_MANY: 'FIND_MANY', // '/action/find'
    UPDATE_MANY: 'UPDATE_MANY', // '/action/updateMany'
    DELETE_MANY: 'DELETE_MANY' // '/action/deleteMany'
};

export const forms = {
    login: {
        title: 'Login',
        id: 'login'
    },
    reg: {
        title: 'Registration',
        id: 'reg'
    },
    forgot: {
        title: 'Forgot password?',
        id: 'forgot'
    },
    reset: {
        title: 'Change password',
        id: 'change_pass'
    }
};

export const contactMethodOptions = [
    { label: 'Telegram', value: 'Telegram', disabled: false },
    { label: 'Email', value: 'Email', disabled: false },
    { label: 'SMS', value: 'SMS', disabled: true }
];

export const langOptions = [
    { label: 'English', value: 'english', disabled: false },
    { label: 'Ukrainian', value: 'ukrainian', disabled: false }
];

export const SYSTEM_LANG =
    navigator.language ||
    navigator.userLanguage ||
    window.navigator.userLanguage ||
    window.navigator.language;
