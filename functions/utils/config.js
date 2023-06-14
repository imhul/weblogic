import { safe } from './safe';

export const decode = data => {
    let buff = Buffer.from(data, 'base64');
    return buff.toString('utf8');
};

export const env = {
    get link() {
        return decode(safe.link);
    },
    get tCode() {
        return decode(safe.tCode);
    },
    get mCode() {
        return decode(safe.mCode);
    },
    ipify: safe.ipify,
    mPW: safe.mPW,
    atlasConnect: safe.atlasConnect,
    atlasPass: safe.atlasPass,
    atlasName: safe.atlasName,
    authdb: safe.authdb,
    atlasBase: safe.atlasBase,
    authCollection: safe.authCollection,
    apiURL: safe.apiURL
};

export const headers = {
    // Allow: 'GET, POST, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
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

// TODO: code from cors.json
// [
//     {
//       "origin": [
//         "https://olo.live",
//         "https://*.olo.live",
//         "https://*.firebaseapp.com",
//         "https://*.web.app",
//         "http://*.liv",
//         "http://olopanel.space",
//         "http://*.olopanel.space",
//         "http://localhost"
//       ],
//       "method": [
//         "GET"
//       ],
//       "maxAgeSeconds": 3600
//     }
//   ]
