import { config } from './config';

export const decode = data => {
    let buff = Buffer.from(data, 'base64');
    return buff.toString('utf8');
};

export const safe = {
    link: decode(config.link),
    tCode: decode(config.tCode),
    getNF: decode(config.getNF),
    getTG: decode(config.getTG),
    smail: decode(config.smail),
    getEmail: decode(config.getEmail),
    ipify: config.ipify,
    client: config.client,
    secret: config.secret,
    refresh: config.refresh
};

export const headers = {
    // Allow: 'GET, POST, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};
