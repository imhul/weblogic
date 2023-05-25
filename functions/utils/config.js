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
    get getNF() {
        return decode(safe.getNF);
    },
    get getTG() {
        return decode(safe.getTG);
    },
    get getEmail() {
        return decode(safe.getEmail);
    },
    ipify: safe.ipify,
    mPW: safe.mPW,
    atlasConnect: safe.atlasConnect,
    atlasPass: safe.atlasPass,
    authdb: safe.authdb,
    atlasBase: safe.atlasBase,
    authCollection: safe.authCollection
};

export const headers = {
    // Allow: 'GET, POST, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};
