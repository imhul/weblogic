// import Base64 from './decode';

const decode = (data) => {
    let buff = Buffer.from(data, 'base64');
    // let asci = buff.toString('ascii');
    let utf = buff.toString('utf8');

    return utf;
}

export const safe = {
    link: decode(process.env.REACT_APP_LINK),
    key: decode(process.env.REACT_APP_KEY),
    mCode: decode(process.env.REACT_APP_M_CODE),
    fCode: decode(process.env.REACT_APP_F_CODE),
    tCode: decode(process.env.REACT_APP_T_CODE),
    cURL: decode(process.env.REACT_APP_C_CODE),
    cv: decode(process.env.REACT_APP_CV),
    ipify: 'https://api.ipify.org/?format=json',
    base: 'https://weblogic.netlify.app',
    vid: 'nETaVY9GOao'
};
