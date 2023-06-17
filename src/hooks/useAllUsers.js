// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { getMongoDB } from '../utils/api';
import { API_ACTIONS } from '../utils/config';
import parseResponseBody from '../utils/parseBody';

const useAllUsers = () => {
    const { safe, lang } = useSelector(s => s.ui);
    const { currentUser } = useSelector(s => s.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (safe && lang && !currentUser.isAuth && currentUser.ip) {
            getAllUsers();
        } else return;

        async function getAllUsers() {
            if (!safe.apiURL) return;
            const connected = await getMongoDB(
                `${safe.apiURL}${
                    API_ACTIONS.MONGO_ALL
                }?=${encodeURIComponent(
                    JSON.stringify({
                        db: safe.authdb,
                        collection: safe.authCollection
                    })
                )}`,
                lang
            );
            if (!connected.ok) {
                dispatch({
                    type: 'NOTIFY',
                    payload: {
                        text: 'init_failed',
                        options: { type: 'error' }
                    }
                });

                dispatch({
                    type: 'SET_LOCATION',
                    payload: 'Home'
                });
                return;
            } else {
                const result = await parseResponseBody(connected);
                if (!result) {
                    dispatch({
                        type: 'NOTIFY',
                        payload: {
                            text: 'init_failed',
                            options: { type: 'error' }
                        }
                    });
                    return;
                }
                dispatch({
                    type: 'GET_ALL_USERS',
                    payload: result.data
                });
                dispatch({
                    type: 'SET_LOCATION',
                    payload: 'Home'
                });
            }
        }
    }, [safe, lang, currentUser.isAuth, currentUser.ip]);
};

export default useAllUsers;
