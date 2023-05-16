// core
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// utils
import axios from 'axios';

const useIpify = ({ ipify }) => {
    const [ipified, setIpified] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetching() {
            if (!ipified && !ignore && process.env && ipify.length) {
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
    }, [ipified, process.env, ipify]);
};

export default useIpify;
