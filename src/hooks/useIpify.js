// core
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// utils
import axios from 'axios';
import safe from '../utils/safe';

const useIpify = () => {
    const [ipified, setIpified] = useState(false);
    const dispatch = useDispatch();
    const { ipify } = safe;

    useEffect(() => {
        async function fetching() {
            if (!ipified || !ignore) axios.get(ipify).then(response => {
                if (response.data.ip !== '') {
                    setIpified(true);
                    dispatch({
                        type: 'AUTHENTICATE',
                        payload: response.data.ip
                    });
                }
            });
        }

        let ignore = false;
        fetching();

        return () => {
            ignore = true;
        };
    });

    return ipified;
};

export default useIpify;
