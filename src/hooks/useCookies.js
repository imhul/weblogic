// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCookies = () => {
    const { cookiesAllowebByUser } = useSelector(s => s.ui);
    const dispatch = useDispatch();
};

export default useCookies;
