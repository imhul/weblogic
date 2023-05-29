// core
import React, { memo, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Row, Col, message } from 'antd/lib';
import Recaptcha from 'react-recaptcha';
import { LoadingOutlined } from '@ant-design/icons';
// utils
import { messageOptions } from '../../utils/config';
import translate from '../../utils/translations';
// api
import { getRecaptcha } from '../../utils/api';

const Captcha = memo(() => {
    const { safe, lang } = useSelector(state => state.ui);
    const { currentUser } = useSelector(state => state.auth);
    const [ip, setIp] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.ip.length && !safe) return;
        if (!ip.length && currentUser.ip.length)
            setIp(currentUser.ip);
    }, [currentUser.ip, ip, safe]);

    const verify = useCallback(
        async response => {
            if (!safe.getNF) return;
            const captcha = await getRecaptcha(
                safe.getNF + '' + response,
                lang
            );

            if (captcha) {
                dispatch({
                    type: 'ROBOT_CHECK',
                    payload: captcha
                });
                message.success({
                    content: `${translate(
                        'message_success_recaptcha'
                    )}`,
                    ...messageOptions
                });
            } else {
                message.error({
                    content: `${translate(
                        'message_error_recaptcha'
                    )}`,
                    ...messageOptions
                });
            }
        },
        [lang, safe.getNF]
    );

    return (
        <Row
            gutter={24}
            type="flex"
            justify="center"
            className="Captcha"
            align="middle"
        >
            <Col span={12} className="center min-h">
                {!currentUser.ip ? (
                    <LoadingOutlined
                        style={{ fontSize: '4rem', color: '#bcc8ce' }}
                    />
                ) : (
                    <Recaptcha
                        sitekey={safe.key}
                        theme="dark"
                        verifyCallback={response => verify(response)}
                        hl={lang === 'ukrainian' ? 'ua' : 'en'}
                    />
                )}
            </Col>
        </Row>
    );
});

export default Captcha;
