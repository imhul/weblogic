// core
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
// components
import Clipboard from 'react-clipboard.js';
import {
    MailOutlined,
    CopyOutlined,
    EllipsisOutlined
} from '@ant-design/icons';
// utils
import { message } from 'antd/lib';
import translate from '../../utils/translations';
import { NOTIFY_OPTIONS } from '../../utils/config';

const CopyButton = () => {
    const { safe, lang } = useSelector(s => s.ui);

    const copySuccess = useCallback(e => {
        if (e.text.length) {
            dispatch({
                type: 'NOTIFY',
                payload: {
                    text: 'message_success_email_copy',
                    options: { type: 'success' }
                }
            });
        } else {
            dispatch({
                type: 'NOTIFY',
                payload: {
                    text: 'message_error_wrong',
                    options: { type: 'error' }
                }
            });
        }
    });

    return (
        <Clipboard
            className="ant-btn center ant-btn-background-ghost"
            option-text={() => safe.mCode}
            onSuccess={copySuccess}
        >
            <MailOutlined />
            <EllipsisOutlined />
            <CopyOutlined />
        </Clipboard>
    );
};

export default CopyButton;
