// core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useInitialization = () => {
    const { initialized } = useSelector(s => s.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialized) return;

        function initHomePage() {
            dispatch({ type: 'INITIALIZE' });
            const timeout = setTimeout(() => {
                dispatch({ type: 'GUEST_INIT' });
                clearTimeout(timeout);
            }, 500);
        }

        initHomePage();
    });
};

export default useInitialization;
