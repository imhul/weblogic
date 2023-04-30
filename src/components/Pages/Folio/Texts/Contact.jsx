// core
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
// components
import { Row, Col, Form, Input, Button, Statistic, message } from 'antd/lib';
import {
    MailOutlined,
    GithubOutlined,
    BarChartOutlined,
    CopyOutlined,
    // PhoneOutlined,
    EllipsisOutlined,
    EditOutlined
} from '@ant-design/icons';
import Clipboard from 'react-clipboard.js';
import Captcha from './Captcha';
// utils
import translate from '../../../../utils/translations';
import safe from '../../../../utils/safe';

const { TextArea } = Input;

const Contact = memo(() => {
    const { lang, tgMessage, isFilled } = useSelector(state => state.ux);
    const { currentUser } = useSelector(state => state.ui);
    const { mCode, tCode, fCode } = safe;
    const maxSize = 4096;

    const success = useCallback(e => {
        switch (e.text) {
            case mCode:
                return message.success({
                    content: `${translate(lang, 'message_success_email')}`,
                    duration: 3,
                    style: {
                        marginTop: '40px'
                    }
                });
            case fCode:
                return message.success({
                    content: `${translate(lang, 'message_success_phone')}`,
                    duration: 3,
                    style: {
                        marginTop: '40px'
                    }
                });
            default:
                return message.error({
                    content: `${translate(lang, 'message_error_wrong')}`,
                    duration: 3,
                    style: {
                        marginTop: '40px'
                    }
                });
        }
    });

    const submit = useCallback(() => {
        if (safe && isFilled && tgMessage) {
            fetch(`${tCode}${tgMessage}'`)
                .then(response => response.json())
                .then(result => {
                    if (result.ok) {
                        message.success({
                            content: `${translate(lang, 'message_success')}`,
                            duration: 3,
                            style: {
                                marginTop: '40px'
                            }
                        });
                    } else {
                        message.error({
                            content: `${translate(lang, 'message_error')}`,
                            duration: 3,
                            style: {
                                marginTop: '40px'
                            }
                        });
                    }
                })
                .catch(error =>
                    message.error({
                        content: `${translate(lang, 'message_error')}: ${error}`,
                        duration: 3,
                        style: {
                            marginTop: '40px'
                        }
                    })
                );
        } else {
            message.error({
                content: `${translate(lang, 'message_error_phone')}`,
                duration: 3,
                style: {
                    marginTop: '40px'
                }
            });
        }
    });

    return (
        <div className="Contact content">
            {currentUser.isRobot ? (
                <Captcha />
            ) : (
                <Row gutter={24} type="flex" justify="center" align="middle">
                    <Col md={12} sm={24} xs={24} className="mb-20 align-left mobile-center">
                        <a
                            className="link"
                            href="https://www.codecademy.com/profiles/weblogicfront"
                            title={`${translate(lang, 'codecademy')}`}
                            target="_blank"
                        >
                            <BarChartOutlined /> codecedemy
                        </a>
                    </Col>

                    <Col md={12} sm={24} xs={24} className="mb-20 align-right mobile-center">
                        <a
                            href="https://github.com/imhul"
                            className="link"
                            title={`${translate(lang, 'github')}`}
                            target="_blank"
                        >
                            <GithubOutlined /> github
                        </a>
                    </Col>

                    <Col span={24}>
                        <Form>
                            <Row gutter={24} type="flex" justify="center" align="middle">
                                <Col span={12} className="mb-10">
                                    <h2 className="white">
                                        <EditOutlined /> {translate(lang, 'contact_form')}
                                    </h2>
                                </Col>

                                <Col span={12} className="mb-10 align-right">
                                    <Statistic
                                        className="white"
                                        suffix={`/ ${maxSize}`}
                                        value={`${tgMessage.length}`}
                                    />
                                </Col>

                                <Col span={24}>
                                    <TextArea
                                        rows={4}
                                        cols={30}
                                        tabIndex="1"
                                        placeholder={`${translate(lang, 'placeholder')}`}
                                        onChange={event =>
                                            dispatch({
                                                type: '',
                                                payload: event.target.value
                                            })
                                        }
                                    />
                                </Col>
                                <Col span={16}>
                                    <Button
                                        size="large"
                                        type="primary"
                                        htmlType="submit"
                                        onClick={event => submit(event)}
                                    >
                                        {translate(lang, 'submit')}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                    <Col span={24} className="mt-20 center">
                        {translate(lang, 'or')}
                    </Col>

                    <Col span={24} className="mb-20 center">
                        <h2>{translate(lang, 'copy_contacts')}</h2>
                    </Col>

                    <Col span={24} className="mb-20 center" title={translate(lang, 'copy_email')}>
                        <Clipboard
                            className="ant-btn center ant-btn-background-ghost"
                            option-text={() => mCode}
                            onSuccess={success}
                        >
                            <MailOutlined />
                            <EllipsisOutlined />
                            <CopyOutlined />
                        </Clipboard>
                    </Col>

                    <Col span={24} className="center mb-20">
                        <h2>{translate(lang, 'cooperation_ready')}</h2>
                    </Col>
                </Row>
            )}
        </div>
    );
});

export default Contact;
