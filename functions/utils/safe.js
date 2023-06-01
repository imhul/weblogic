export const safe = {
    link: process.env.REACT_APP_LINK,
    tCode: process.env.REACT_APP_T_CODE,
    mCode: process.env.REACT_APP_M_CODE,
    ipify: 'https://api.ipify.org/?format=json',
    mPW: process.env.REACT_APP_MAIL_APP_PW,
    atlasConnect: process.env.MONGO_ATLAS_CONNECT,
    atlasPass: process.env.MONGO_ATLAS_PW,
    atlasName: process.env.MONGO_ATLAS_LG,
    atlasBase: process.env.MONGO_ATLAS_URL,
    authdb: process.env.MONGO_ATLAS_AUTH_DB,
    authCollection: process.env.MONGO_ATLAS_AUTH_COLLECTION,
    mongoAPI: process.env.REACT_APP_MONGO_API
};
