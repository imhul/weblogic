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
            if (!ipified && !ignore) {
                try {
                    const response = await axios.get(ipify);
                    if (response.status === 200 && response.data.ip !== '') {
                        setIpified(true);
                        dispatch({
                            type: 'AUTHENTICATE',
                            payload: response.data.ip
                        });
                    }
                } catch (error) {
                    console.error(`ipify error: ${error}`);
                }
            }
        }

        let ignore = false;
        fetching();

        return () => {
            ignore = true;
        };
    }, []);
};

export default useIpify;
