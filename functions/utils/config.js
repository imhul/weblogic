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
    atlasName: safe.atlasName,
    authdb: safe.authdb,
    atlasBase: safe.atlasBase,
    authCollection: safe.authCollection,
    getMongo: safe.getMongo
};

export const headers = {
    // Allow: 'GET, POST, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

export const MONGO_ACTIONS = {
    ALL: '/action/find',
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
