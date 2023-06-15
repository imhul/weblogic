// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';

const useCookies = () => {
    const { safe } = useSelector(s => s.ui);

    const dispatch = useDispatch();

    useEffect(() => {
        const getJWT = () => {
            const { jwtKey } = safe;
            const cookies = document.cookie.split(';');
            const tokenCookie = cookies.some(cookie =>
                cookie.trim().startsWith('tx=')
            );
            if (tokenCookie) {
                const token = tokenCookie.split('=')[1];
                try {
                    const decoded = jwt.verify(token, jwtKey);
                    console.info('decoded: ', decoded);
                    dispatch({
                        type: 'SET_JWT',
                        payload: tokenCookie
                    });
                } catch (error) {
                    console.error('Error verifying token:', error);
                    dispatch({ type: 'SET_JWT', payload: null });
                }
            } else {
                dispatch({ type: 'JWT_IS_NOT_EXIST' });
            }
        };

        window.cookieStore.addEventListener('change', getJWT);

        return () => {
            window.cookieStore.removeEventListener('change', getJWT);
        };
    }, []);

    return;
};

export default useCookies;
