// core
import React, { memo, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Row, Col } from 'antd/lib';
import Recaptcha from 'react-recaptcha';
// utils
import safe from '../../../../utils/safe';
import translate from '../../../../utils/translations';
// hooks
import useIpify from '../../../../hooks/useIpify';
import { getRecaptcha } from '../../../../utils/api';

const Captcha = memo(() => {
    useIpify();
    const { lang } = useSelector(state => state.ux);
    const { currentUser } = useSelector(state => state.ui);
    const { key } = safe;
    const [ip, setIp] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (ip.length) console.info('::: FX ip: ', ip);
        if (!currentUser.ip.length) return;
        if (!ip.length && currentUser.ip.length) setIp(currentUser.ip);
        console.info('::: FX currentUser: ', currentUser);
    }, [currentUser.ip, ip]);

    const verify = useCallback(async response => {
        const captcha = await getRecaptcha(response);

        if (captcha) {
            dispatch({
                type: 'ROBOT_CHECK',
                payload: captcha
            });
            message.success({
                content: `${translate(lang, 'message_success_recaptcha')}`,
                duration: 3,
                style: {
                    marginTop: '40px'
                }
            });
        } else {
            message.error({
                content: `${translate(lang, 'message_error_recaptcha')}`,
                duration: 3,
                style: {
                    marginTop: '40px'
                }
            });
        }
    }, []);

    return !currentUser.ip ? <LoadingOutlined /> : (
        <Row gutter={24} type="flex" justify="center" align="middle">
            <Col span={12} className="center">
                <Recaptcha
                    sitekey={key}
                    theme="dark"
                    verifyCallback={response => verify(response)}
                    hl={lang === 'ukrainian' ? 'ua' : 'en'}
                />
            </Col>
        </Row>
    );
});

export default Captcha;
