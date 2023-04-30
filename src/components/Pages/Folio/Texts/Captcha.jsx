// core
import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Row, Col, message } from 'antd/lib';
import Recaptcha from 'react-recaptcha';
// utils
import axios from 'axios';
import safe from '../../../../utils/safe';
import translate from '../../../../utils/translations';
// hooks
import useIpify from '../../../../hooks/useIpify';
import useRefresh from '../../../../hooks/useRefresh';
// import { getRecaptcha } from '../../../../utils/api';

const Captcha = memo(() => {
    const ipified = useIpify();
    const refreshed = useRefresh();
    const { currentUser } = useSelector(state => state.ui);
    const { lang } = useSelector(state => state.ux);
    const { key } = safe;
    const dispatch = useDispatch();

    const verify = useCallback(async data => {
        console.info('verify with data: ', data);

        if (!refreshed || !ipified || !currentUser.ip.length) {
            return message.error({
                content: `${translate(lang, 'message_error_recaptcha')}`,
                duration: 3,
                style: {
                    marginTop: '40px'
                }
            });
        }
        const apiURL = `${link}${data}&remoteip=${currentUser.ip}`;
        console.info('apiURL: ', apiURL);
        await axios
            .post(apiURL)
            .then(response => {
                console.info('response: ', response);

                if (response.status === 200 && response.data) {
                    dispatch({
                        type: 'ROBOT_CHECK',
                        payload: response.data
                    });
                    message.success({
                        content: `${translate(lang, 'message_success_recaptcha')}`,
                        duration: 3,
                        style: {
                            marginTop: '40px'
                        }
                    });
                }
            })
            .catch(() => {
                message.error({
                    content: `${translate(lang, 'message_error_recaptcha')}`,
                    duration: 3,
                    style: {
                        marginTop: '40px'
                    }
                });
            });
    });

    return (
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
