// core
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import translate from '../../utils/translations';
import { message } from 'antd/lib';

const Notify = () => {
    const { show, text, options } = useSelector(s => s.notify);
    const [messageApi, contextHolder] = message.useMessage();
    const [progress, setProgress] = useState(false);
    const { lang } = useSelector(s => s.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        if (show && !progress) {
            setProgress(true);
            messageApi
                .open({
                    key: text,
                    type: options.type || 'info',
                    content: translate(lang, text),
                    duration: options.duration,
                    style: options.style
                })
                .then(() => {
                    dispatch({ type: 'NOTIFY_DESTROY' });
                    setProgress(false);
                });
        }
    }, [show, progress]);

    return <>{contextHolder}</>;
};

export default Notify;
