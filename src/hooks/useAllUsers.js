// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { getMongoDB } from '../utils/api';
import { MONGO_ACTIONS } from '../utils/config';
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
            const connected = await getMongoDB(
                `${safe.getMongo}/?=${encodeURIComponent(
                    JSON.stringify({
                        action: MONGO_ACTIONS.ALL,
                        db: safe.authdb,
                        collection: safe.authCollection,
                        query: {}
                    })
                )}`,
                lang
            );
            if (!connected.ok) {
                console.warn('::: NOT connected!');
                return;
            }
            const result = await parseResponseBody(connected);
            dispatch({
                type: 'GET_ALL_USERS',
                payload: result.data
            });
        }
    }, [safe, lang, currentUser]);
};

export default useAllUsers;
