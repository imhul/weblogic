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
    ADD: '/action/insertOne',
    FIND: '/action/findOne',
    UPDATE: '/action/updateOne',
    DELETE: '/action/deleteOne',
    ADD_MANY: '/action/insertMany',
    FIND_MANY: '/action/find',
    UPDATE_MANY: '/action/updateMany',
    DELETE_MANY: '/action/deleteMany',
    RUN: '/action/aggregate'
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
