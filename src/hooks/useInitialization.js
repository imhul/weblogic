// core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { message } from 'antd/lib';
import { messageOptions } from '../utils/options';

const useInitialization = () => {
    const { initialized } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialized) return;

        function initHomePage() {
            dispatch({ type: 'INITIALIZE' });
            message.info({
                content: 'Keep clicking anywhere!',
                ...messageOptions
            });
            const timeout = setTimeout(() => {
                dispatch({ type: 'HERO_ANIMATE' });
                clearTimeout(timeout);
            }, 500);
        }

        initHomePage();
    });
};

export default useInitialization;
