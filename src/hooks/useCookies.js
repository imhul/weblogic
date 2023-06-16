// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';

const useCookies = () => {
    const { safe, cookiesAllowed } = useSelector(s => s.ui);

    const dispatch = useDispatch();

    // checks whether cookies are allowed in the browser
    useEffect(() => {
        if (
            navigator.cookieEnabled !== undefined &&
            cookiesAllowed === undefined
        ) {
            dispatch({
                type: 'SET_COOKIES_ALLOWED',
                payload: navigator.cookieEnabled
            });
        }
    }, [cookiesAllowed, navigator.cookieEnabled]);

    useEffect(() => {
        if (
            navigator.cookieEnabled !== undefined &&
            cookiesAllowed === undefined
        ) {
            dispatch({
                type: 'SET_COOKIES_ALLOWED',
                payload: navigator.cookieEnabled
            });
        }

        const getJWT = () => {
            const { jwtKey } = safe;
            const cookies = document.cookie.split(';');
            console.info('cookies: ', cookies);
            const tokenCookie = cookies.some(cookie =>
                cookie.trim().startsWith('tx=')
            );
            console.info('tokenCookie: ', tokenCookie);
            if (tokenCookie) {
                dispatch({
                    type: 'SET_COOKIES_ALLOWED_BY_USER',
                    payload: true
                });
                dispatch({
                    type: 'SET_CURREN_USER_COOKIES',
                    payload: true
                });
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
