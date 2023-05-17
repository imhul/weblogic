// core
import { useEffect, useState } from 'react';

const initial = {
    ipify: 'https://api.ipify.org/?format=json',
    base: 'https://weblogic.netlify.app',
    vid: 'nETaVY9GOao'
};

const useSafe = () => {
    const [safe, setSafe] = useState(initial);

    function decode(data) {
        if (!data) {
            console.warn('::: No data :::');
            return;
        }
        let buff = Buffer.from(data, 'base64');
        return buff.toString('utf8');
    }

    useEffect(() => {
        console.info('::: process.env.REACT_APP_LINK ::: ', process.env.REACT_APP_LINK);
        console.info('::: process.env ::: ', process.env);
        console.info('::: process ::: ', process);
        
        function setEnv() {
            setSafe({
                ...initial,
                link: decode(process.env.REACT_APP_LINK),
                key: decode(process.env.REACT_APP_KEY),
                mCode: decode(process.env.REACT_APP_M_CODE),
                fCode: decode(process.env.REACT_APP_F_CODE),
                tCode: decode(process.env.REACT_APP_T_CODE),
                cv: decode(process.env.REACT_APP_CV),
                getNF: decode(process.env.REACT_APP_GET_NF),
                getTG: decode(process.env.REACT_APP_GET_TG),
                getEmail: decode(process.env.REACT_APP_GET_EMAIL)
            });
        }

        if (process.env.REACT_APP_LINK && safe.link) {
            setEnv();
            return;
        }

        
        const checkProcessEnv = async () => {
            while (!process.env.REACT_APP_LINK) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            setEnv();

            console.info('::: process.env.REACT_APP_LINK 2 ::: ', safe);
        };

        checkProcessEnv();
    }, [process.env, safe]);

    return safe;
};

export default useSafe;
