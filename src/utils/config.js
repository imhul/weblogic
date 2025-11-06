export const NOTIFY_OPTIONS = {
    duration: 4,
    style: {
        marginTop: '5rem'
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

export const API_ACTIONS = {
    RECAPTCHA_PROXY: 'recaptcha',
    TELEGRAM_BOT: 'telegram',
    EMAIL: 'email',
    MONGO_ALL: 'mongo',
    MONGO_ADD: 'mongo-add',
    MONGO_EDIT: 'mongo-edit',
    AUTH: 'auth',
    MONGO_UPDATE: 'mongo-update'
};

export const CONTACT_METHOD_OPTIONS = [
    { label: 'Telegram', value: 'Telegram', disabled: false },
    { label: 'Email', value: 'Email', disabled: false },
    { label: 'SMS', value: 'SMS', disabled: true }
];

export const LANG_OPTIONS = [
    { label: 'English', value: 'english', disabled: false },
    { label: 'Ukrainian', value: 'ukrainian', disabled: false }
];

export const SYSTEM_LANG =
    navigator.language ||
    navigator.userLanguage ||
    window.navigator.userLanguage ||
    window.navigator.language;

export const PROXY = "https://cors-anywhere.herokuapp.com/";
export const GITHUB_PAGE = 'https://github.com/imhul';
export const GITHUB_README = 'https://raw.githubusercontent.com/imhul/chicken-hell/dev/README.md';
export const GITHUB_GAME_PAGE = 'https://github.com/imhul/chicken-hell/';
export const COOKIES_POLICY = {
    ukrainian: 'https://imhul.github.io/cookies-pilicy-ua/',
    english: 'https://imhul.github.io/cookies-pilicy/'
};
