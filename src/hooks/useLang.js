// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useLang = method => {
    const { isUserLangSelected, lang } = useSelector(
        state => state.ui
    );
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            !isUserLangSelected &&
            currentUser &&
            currentUser.lang.length &&
            currentUser.lang !== lang
        ) {
            dispatch({
                type: 'CHANGE_LANG',
                payload: currentUser.lang
            });
        }
    }, [currentUser, lang, isUserLangSelected]);
};

export default useLang;
