const decode = data => {
    let buff = Buffer.from(data, 'base64');
    return buff.toString('utf8');
};

export const safe = {
    link: decode(process.env.REACT_APP_LINK),
    tCode: Base64.decode(process.env.REACT_APP_T_CODE),
    getNF: Base64.decode(process.env.REACT_APP_GET_NF),
    ipify: 'https://api.ipify.org/?format=json'
};
