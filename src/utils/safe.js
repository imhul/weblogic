import Base64 from './decode';

const safe = {
    link: Base64.decode(process.env.REACT_APP_LINK),
    key: Base64.decode(process.env.REACT_APP_KEY),
    mCode: Base64.decode(process.env.REACT_APP_M_CODE),
    fCode: Base64.decode(process.env.REACT_APP_F_CODE),
    tCode: Base64.decode(process.env.REACT_APP_T_CODE),
    cURL: Base64.decode(process.env.REACT_APP_C_CODE),
    cv: Base64.decode(process.env.REACT_APP_CV),
    ipify: 'https://api.ipify.org/?format=json',
    base: 'https://weblogic.netlify.app',
    vid: 'nETaVY9GOao'
};

export default safe;
