// core
import React, { memo, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Row, Col, message } from 'antd/lib';
import Recaptcha from 'react-recaptcha';
import { LoadingOutlined } from '@ant-design/icons';
// utils
import { NOTIFY_OPTIONS, API_ACTIONS } from '../../utils/config';
import translate from '../../utils/translations';
// api
import { getRecaptcha } from '../../utils/api';

const Captcha = memo(() => {
    const { safe, lang } = useSelector(s => s.ui);
    const { currentUser } = useSelector(s => s.auth);
    const [ip, setIp] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.ip.length && !safe) return;
        if (!ip.length && currentUser.ip.length)
            setIp(currentUser.ip);
    }, [currentUser.ip, ip, safe]);

    const verify = useCallback(
        async response => {
            if (!safe.mongoAPI) return;
            const captcha = await getRecaptcha(
                safe.mongoAPI +
                    API_ACTIONS.RECAPTCHA_PROXY +
                    '?data=' +
                    response,
                lang
            );

            if (captcha) {
                dispatch({
                    type: 'ROBOT_CHECK',
                    payload: captcha
                });
                message.success({
                    content: `${translate(
                        lang,
                        'message_success_recaptcha'
                    )}`,
                    ...NOTIFY_OPTIONS
                });
            } else {
                message.error({
                    content: `${translate(
                        lang,
                        'message_error_recaptcha'
                    )}`,
                    ...NOTIFY_OPTIONS
                });
            }
        },
        [lang, safe]
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
