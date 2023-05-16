// import Base64 from './decode';
export const decode = data => {
    let buff = Buffer.from(data, 'base64');
    return buff.toString('utf8');
};

const safe = {
    link: decode(process.env.REACT_APP_LINK),
    key: decode(process.env.REACT_APP_KEY),
    mCode: decode(process.env.REACT_APP_M_CODE),
    fCode: decode(process.env.REACT_APP_F_CODE),
    tCode: decode(process.env.REACT_APP_T_CODE),
    cv: decode(process.env.REACT_APP_CV),
    getNF: decode(process.env.REACT_APP_GET_NF),
    getTG: decode(process.env.REACT_APP_GET_TG),
    getEmail: decode(process.env.REACT_APP_GET_EMAIL),
    ipify: 'https://api.ipify.org/?format=json',
    base: 'https://weblogic.netlify.app',
    vid: 'nETaVY9GOao'
};

export default safe;
