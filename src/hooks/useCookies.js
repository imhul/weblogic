// core
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

const useCookies = () => {
    const {
        safe,
        cookiesAllowed,
        cookiesAllowebByUser,
        cookiesModalOpen
    } = useSelector(s => s.ui);
    const { users, currentUser } = useSelector(s => s.auth);
    const [checked, setChecked] = useState(false);
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
        console.info('useCookies run!');
        if (safe && safe.jwtKey && users) {
            console.info('useCookies: safe is exist!');
            getJWT();
        } else return;

        const getJWT = () => {
            console.info('getJWT run!');
            const { jwtKey } = safe;
            console.info('useCookies: jwtKey is exist: ', jwtKey);
            // console.info('useCookies: document.cookie: ', document.cookie);
            // const cookies = document.cookie.split(';');
            // console.info('useCookies: cookies is exist: ', cookies);
            // const tokenCookie = cookies.some(cookie =>
            //     cookie.trim().startsWith('tx=')
            // );
            const tokenCookie = Cookies.get('tx');
            console.info('useCookies tokenCookie: ', tokenCookie);
            if (tokenCookie) {
                dispatch({
                    type: 'SET_COOKIES_ALLOWED_BY_USER',
                    payload: true
                });
                dispatch({
                    type: 'SET_CURREN_USER_COOKIES',
                    payload: true
                });
                setChecked(true);
                const token = tokenCookie.split('=')[1];
                try {
                    const decoded = jwt.verify(token, jwtKey);
                    console.info('useCookies decoded: ', decoded);
                    if (decoded) {
                        dispatch({
                            type: 'SET_JWT',
                            payload: tokenCookie
                        });

                        const checkedUser = users.find(
                            user => user._id === decoded.auto_id
                        );

                        console.info(
                            'useCookies checkedUser: ',
                            checkedUser
                        );
                    }
                } catch (error) {
                    console.error(
                        'useCookies Error verifying token:',
                        error
                    );
                    dispatch({ type: 'SET_JWT', payload: null });
                }
            } else {
                setChecked(true);
                dispatch({ type: 'JWT_IS_NOT_EXIST' });
            }
        };


        // window.cookieStore.addEventListener('change', getJWT);

        // return () => {
        //     window.cookieStore.removeEventListener('change', getJWT);
        // };

    }, [safe, users]);

    // opens a modal window for acceptance/rejection of cookies by the user
    useEffect(() => {
        if (
            checked &&
            !currentUser.cookies &&
            cookiesAllowed &&
            !cookiesModalOpen &&
            cookiesAllowebByUser === undefined
        ) {
            dispatch({ type: 'TOGGLE_COOKIES_MODAL', payload: true });
        }
    }, [
        currentUser.cookies,
        cookiesModalOpen,
        cookiesAllowed,
        cookiesAllowebByUser
    ]);

    return;
};

export default useCookies;
