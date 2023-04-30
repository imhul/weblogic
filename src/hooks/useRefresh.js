// core
import { useState, useEffect } from 'react';
// utils
import axios from 'axios';
import safe from '../utils/safe';

const useRefresh = () => {
    const [refreshed, setRefreshed] = useState(false);
    const { cURL } = safe;

    useEffect(() => {
        async function fetching() {
            if (!ignore && !refreshed) axios.get(cURL).finally(() => setRefreshed(true));
        }

        let ignore = false;
        fetching();

        return () => {
            ignore = true;
        };
    });

    return refreshed;
};

export default useRefresh;
