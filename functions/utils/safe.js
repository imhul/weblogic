import { config } from './config';

export const decode = data => {
    let buff = Buffer.from(data, 'base64');
    return buff.toString('utf8');
};

export const safe = {
    get link() {
        return decode(process.env.REACT_APP_LINK);
    },
    get tCode() {
        return decode(process.env.REACT_APP_T_CODE);
    },
    get mCode() {
        return decode(process.env.REACT_APP_M_CODE);
    },
    get getNF() {
        return decode(process.env.REACT_APP_GET_NF);
    },
    get getTG() {
        return decode(process.env.REACT_APP_GET_TG);
    },
    get getEmail() {
        return decode(process.env.REACT_APP_GET_EMAIL);
    },
    ipify: config.ipify,
    client: config.client,
    secret: config.secret,
    refresh: config.refresh,
    token: config.token,
    mPW: config.mPW
};

export const headers = {
    // Allow: 'GET, POST, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};
