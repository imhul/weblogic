import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd/lib';

const useInitialization = () => {
    const { initialized } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialized) return;

        function initHomePage() {
            dispatch({ type: 'INITIALIZE' });
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

        initHomePage();
    });
};

export default useInitialization;
