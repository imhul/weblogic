import { useEffect } from 'react';

const useLocation = () => {
    useEffect(() => {
        const pathname = window.location.pathname;

        if (pathname !== '/') {
            const oldPath = pathname.slice(1, 2).toUpperCase() + pathname.slice(2);
            dispatch({
                type: 'LOCATION_UPDATE',
                payload: oldPath
            });
        }
    });
};

export default useLocation;
