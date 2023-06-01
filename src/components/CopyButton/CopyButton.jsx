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
import { messageOptions } from '../../utils/config';

const CopyButton = () => {
    const { safe, lang } = useSelector(s => s.ui);

    const copySuccess = useCallback(e => {
        if (e.text.length) {
            message.success({
                content: `${translate(
                    lang,
                    'message_success_email_copy'
                )}`,
                ...messageOptions
            });
        } else {
            message.error({
                content: `${translate(lang, 'message_error_wrong')}`,
                ...messageOptions
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
