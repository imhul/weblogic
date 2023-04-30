import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd/lib';

const useInitialization = () => {
    const { initialized } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialized) return;
        const pathname = window.location.pathname;

        function initialize() {
            dispatch({ type: 'INITIALIZE' });
        }

        function initHomePage() {
            console.info('INIT HOME PAGE');
            initialize();
            message.info({
                content: 'Keep clicking anywhere!',
                duration: 4,
                style: {
                    marginTop: '40px'
                }
            });
            const timeout = setTimeout(() => {
                dispatch({ type: 'HERO_ANIMATE' });
                clearTimeout(timeout);
            }, 500);
        }

        function updateOtherPage() {
            if (!initialized) initialize();
            console.info('INIT OTHER PAGE');
            const oldPath = pathname.slice(1, 2).toUpperCase() + pathname.slice(2);
            dispatch({
                type: 'LOCATION_UPDATE',
                payload: oldPath
            });
        }

        pathname === '/' ? initHomePage() : updateOtherPage();
    });
};

export default useInitialization;
