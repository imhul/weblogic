export const decode = data => {
    let buff = Buffer.from(data, 'base64');
    return buff.toString('utf8');
};

export const safe = {
    link: decode(process.env.REACT_APP_LINK),
    tCode: decode(process.env.REACT_APP_T_CODE),
    getNF: decode(process.env.REACT_APP_GET_NF),
    getTG: decode(process.env.REACT_APP_GET_TG),
    smail: decode(process.env.REACT_APP_S_MAIL),
    ipify: 'https://api.ipify.org/?format=json'
};

export const headers = {
    // Allow: 'GET, POST, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};
