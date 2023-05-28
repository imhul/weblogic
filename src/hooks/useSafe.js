// core
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const initial = {
    ipify: 'https://api.ipify.org/?format=json',
    base: 'https://weblogic.netlify.app',
    vid: 'nETaVY9GOao'
};

const useSafe = () => {
    const { safe } = useSelector(state => state.ui);
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    function decode(data) {
        if (!data) {
            console.warn('::: No data!!! :::');
            return;
        }
        let buff = Buffer.from(data, 'base64');
        return buff.toString('utf8');
    }

    function setEnv() {
        if (!process.env.REACT_APP_LINK && loaded) return;
        dispatch({
            type: 'SET_ENV',
            payload: {
                ...initial,
                link: decode(process.env.REACT_APP_LINK),
                key: decode(process.env.REACT_APP_KEY),
                mCode: decode(process.env.REACT_APP_M_CODE),
                fCode: decode(process.env.REACT_APP_F_CODE),
                tCode: decode(process.env.REACT_APP_T_CODE),
                cv: decode(process.env.REACT_APP_CV),
                getNF: decode(process.env.REACT_APP_GET_NF),
                getTG: decode(process.env.REACT_APP_GET_TG),
                getEmail: decode(process.env.REACT_APP_GET_EMAIL),
                getMongo: process.env.REACT_APP_GET_MONGO,
                authdb: process.env.MONGO_ATLAS_AUTH_DB,
                authCollection: process.env.MONGO_ATLAS_AUTH_COLLECTION,
                tipKey: process.env.REACT_APP_TIP_KEY
            }
        });
        setLoaded(true);
    }

    useEffect(() => {
        if (loaded && safe) return;
        // setEnv();
        const checkProcessEnv = async () => {
            while (!process.env.REACT_APP_LINK) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            if (!safe) setEnv();
        };
        checkProcessEnv();
    }, [loaded, safe]);
};

export default useSafe;
