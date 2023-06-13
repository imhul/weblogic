// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import translate from '../utils/translations';
import { getMongoDB } from '../utils/api';
import { API_ACTIONS, NOTIFY_OPTIONS } from '../utils/config';
import parseResponseBody from '../utils/parseBody';
import { message } from 'antd';

const useAllUsers = () => {
    const { safe, lang } = useSelector(s => s.ui);
    const { currentUser } = useSelector(s => s.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (safe && lang && !currentUser.isAuth && currentUser.ip) {
            getAllUsers();
        } else return;

        async function getAllUsers() {
            const connected = await getMongoDB(
                `${safe.mongoAPI}${API_ACTIONS.MONGO_ALL
                }?=${encodeURIComponent(
                    JSON.stringify({
                        db: safe.authdb,
                        collection: safe.authCollection
                    })
                )}`,
                lang
            );
            if (!connected.ok) {
                // message.error({
                //     content: translate(lang, 'init_failed'),
                //     ...NOTIFY_OPTIONS
                // });
                dispatch({
                    type: 'LOCATION_UPDATE',
                    payload: 'Home'
                });
            } else {
                const result = await parseResponseBody(connected);
                dispatch({
                    type: 'GET_ALL_USERS',
                    payload: result.data
                });
                dispatch({
                    type: 'LOCATION_UPDATE',
                    payload: 'Home'
                });
            }
        }
    }, [safe, lang, currentUser.isAuth, currentUser.ip]);
};

export default useAllUsers;
