import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Row, Col, Space, Drawer, Button } from 'antd/lib';
import { QuestionCircleOutlined } from '@ant-design/icons';
// utils
import translate from '../../utils/translations';
import { COOKIES_POLICY } from '../../utils/config';

const CookiesModal = () => {
    const {
        lang,
        cookiesModalOpen,
        cookiesAllowed,
        cookiesAllowebByUser
    } = useSelector(s => s.ui);
    const { currentUser } = useSelector(s => s.auth);
    const dispatch = useDispatch();

    // opens a modal window for acceptance/rejection of cookies by the user
    useEffect(() => {
        if (
            !currentUser.cookies &&
            cookiesAllowed === true &&
            !cookiesModalOpen &&
            cookiesAllowebByUser === undefined
        ) {
            dispatch({ type: 'TOGGLE_COOKIES_MODAL', payload: true });
        }
    }, [
        currentUser.cookies,
        cookiesModalOpen,
        cookiesAllowed,
        cookiesAllowebByUser
    ]);

    const cancel = () => {
        dispatch({
            type: 'SET_COOKIES_ALLOWED_BY_USER',
            payload: false
        });
        dispatch({
            type: 'SET_CURREN_USER_COOKIES',
            payload: false
        });
        dispatch({ type: 'TOGGLE_COOKIES_MODAL', payload: false });
    };

    const confirm = () => {
        dispatch({
            type: 'SET_COOKIES_ALLOWED_BY_USER',
            payload: true
        });
        dispatch({
            type: 'SET_CURREN_USER_COOKIES',
            payload: true
        });
        dispatch({
            type: 'NOTIFY',
            payload: {
                text: 'cookies_use_success_message',
                options: { type: 'success' }
            }
        });

        dispatch({ type: 'TOGGLE_COOKIES_MODAL', payload: false });
    };

    return (
        <Drawer
            placement="bottom"
            keyboard={false}
            closable={false}
            mask={false}
            destroyOnClose={true}
            open={cookiesModalOpen}
            rootClassName="cookies-modal"
        >
            <Row justify="center">
                <Col sm={24} md={16}>
                    <Row gutter={24}>
                        <Col sm={24} md={12} className="mb-20">
                            <QuestionCircleOutlined className="secondary" />{' '}
                            {translate(lang, 'cookies_desk')}{' '}
                            <a
                                href={COOKIES_POLICY[lang]}
                                title={translate(
                                    lang,
                                    'cookies_policy'
                                )}
                                target="_blank"
                                rel="external nofollow noopener"
                            >
                                {translate(lang, 'cookies_policy')}
                            </a>
                        </Col>
                        <Col sm={24} md={12}>
                            <Space align="end">
                                <Button onClick={cancel}>
                                    {translate(lang, 'cancel')}
                                </Button>
                                <Button onClick={confirm}>
                                    {translate(lang, 'confirm')}
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Drawer>
    );
};

export default CookiesModal;
