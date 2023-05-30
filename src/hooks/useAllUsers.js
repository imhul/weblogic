// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { getMongoDB } from '../utils/api';
import { MONGO_ACTIONS } from '../utils/config';
import parseResponseBody from '../utils/parseBody';

const useAllUsers = mthod => {
    const { safe, lang } = useSelector(state => state.ui);
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (safe && lang && currentUser && currentUser.ip) {
            getAllUsers();
        } else return;

        async function getAllUsers() {
            const connected = await getMongoDB(
                `${safe.getMongo}/?=${encodeURIComponent(
                    JSON.stringify({
                        action: MONGO_ACTIONS.FIND,
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
