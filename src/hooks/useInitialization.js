// core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { message } from 'antd/lib';
import { NOTIFY_OPTIONS } from '../utils/config';

const useInitialization = () => {
    const { initialized } = useSelector(s => s.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialized) return;

        function initHomePage() {
            dispatch({ type: 'INITIALIZE' });
            message.info({
                content: 'Keep clicking anywhere!',
                ...NOTIFY_OPTIONS,
                style: {
                    marginTop: '5rem'
                }
            });
            const timeout = setTimeout(() => {
                dispatch({ type: 'HERO_ANIMATE' });
                dispatch({ type: 'GUEST_INIT' });
                clearTimeout(timeout);
            }, 500);
        }

        initHomePage();
    });
};

export default useInitialization;
