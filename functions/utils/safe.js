export const safe = {
    link: process.env.REACT_APP_LINK,
    tCode: process.env.REACT_APP_T_CODE,
    mCode: process.env.REACT_APP_M_CODE,
    getNF: process.env.REACT_APP_GET_NF,
    getTG: process.env.REACT_APP_GET_TG,
    getEmail: process.env.REACT_APP_GET_EMAIL,
    ipify: 'https://api.ipify.org/?format=json',
    mPW: process.env.REACT_APP_MAIL_APP_PW,
    atlasConnect: process.env.MONGO_ATLAS_CONNECT,
    atlasPass: process.env.MONGO_ATLAS_PW,
    atlasBase: process.env.MONGO_ATLAS_URL,
    authdb: process.env.MONGO_ATLAS_AUTH_DB,
    authCollection: process.env.MONGO_ATLAS_AUTH_COLLECTION,
    getMongo: process.env.REACT_APP_GET_MONGO
};
