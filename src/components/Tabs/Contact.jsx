// core
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
// components
import { Row, Col } from 'antd/lib';
import { GithubOutlined, BarChartOutlined } from '@ant-design/icons';
import ContactForm from '../Forms/ContactForm';
import CopyButton from '../CopyButton';
import Captcha from '../Captcha';
// utils
import translate from '../../utils/translations';

const Contact = memo(() => {
    const { lang } = useSelector(state => state.ui);
    const { currentUser } = useSelector(state => state.auth);

    return (
        <div className="Contact content">
            {currentUser.isRobot ? (
                <Captcha />
            ) : (
                <Row
                    gutter={24}
                    type="flex"
                    justify="center"
                    align="middle"
                >
                    <Col
                        lg={7}
                        md={12}
                        xs={24}
                        className="mb-20 align-left mobile-center"
                    >
                        <a
                            className="link"
                            href="https://www.codecademy.com/profiles/weblogicfront"
                            title={`${translate(lang, 'codecademy')}`}
                            target="_blank"
                        >
                            <BarChartOutlined /> codecedemy
                        </a>
                    </Col>

                    <Col
                        lg={7}
                        xs={12}
                        className="mb-20 align-right mobile-center"
                    >
                        <a
                            href="https://github.com/imhul"
                            className="link"
                            title={`${translate(lang, 'github')}`}
                            target="_blank"
                        >
                            <GithubOutlined /> github
                        </a>
                    </Col>

                    <ContactForm />

                    <Col span={24} className="mt-20 center">
                        {translate(lang, 'or')}
                    </Col>

                    <Col span={24} className="mb-20 center">
                        <h2>{translate(lang, 'copy_contacts')}</h2>
                    </Col>

                    <Col
                        span={24}
                        className="mb-20 center"
                        title={translate(lang, 'copy_email')}
                    >
                        <CopyButton />
                    </Col>

                    <Col span={24} className="center mb-20">
                        <h2>
                            {translate(lang, 'cooperation_ready')}
                        </h2>
                    </Col>
                </Row>
            )}
        </div>
    );
});

export default Contact;
