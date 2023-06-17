// core
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// utils
import axios from 'axios';
import Bowser from 'bowser';

const useIpify = safe => {
    const [ipified, setIpified] = useState(false);
    const dispatch = useDispatch();
    const system = Bowser.parse(window.navigator.userAgentData);

    useEffect(() => {
        function fetching() {
            const timeout = setTimeout(async () => {
                if (
                    !ipified &&
                    !ignore &&
                    process.env &&
                    safe.ipify.length
                ) {
                    try {
                        const response = await axios.get(safe.ipify);
                        if (
                            response.status === 200 &&
                            response.data.ip !== ''
                        ) {
                            setIpified(true);
                            dispatch({
                                type: 'IPIFY',
                                payload: {
                                    ip: response.data.ip,
                                    system
                                }
                            });
                        }
                    } catch (error) {
                        console.error(`ipify error: ${error}`);
                    }
                }
                clearTimeout(timeout);
            }, 1000);
        }

        let ignore = false;
        fetching();

        return () => {
            ignore = true;
        };
    }, [ipified, process.env, safe]);
};

export default useIpify;
