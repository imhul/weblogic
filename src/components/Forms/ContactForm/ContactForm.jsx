// core
import React, { memo, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import {
    Row,
    Col,
    Form,
    Input,
    Radio,
    Select,
    Button,
    Divider,
    Statistic
} from 'antd/lib';
import {
    MailOutlined,
    SendOutlined,
    UserOutlined,
    CheckOutlined,
    LoadingOutlined,
    MessageOutlined
} from '@ant-design/icons';
// utils
import translate from '../../../utils/translations';
import { getTelegram, sendEmail } from '../../../utils/api';
import { API_ACTIONS } from '../../../utils/config';

const Fragment = React.Fragment;
const { TextArea } = Input;
const { Option } = Select;
const { Group } = Radio;
const { Item } = Form;
const subjects = [
    {
        id: 1,
        title: 'Сooperation offer'
    },
    {
        id: 2,
        title: 'Other Business offer'
    },
    {
        id: 3,
        title: 'Web App order'
    },
    {
        id: 4,
        title: 'Other order'
    }
];

const ContactForm = memo(() => {
    const {
        safe,
        lang,
        tgMessage,
        isContactFormFilled,
        contactMethod
    } = useSelector(s => s.ui);
    const [submitting, setSubmitting] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const inDevelopment = false;
    const maxSize = 4096;

    const setContactMethod = value => {
        dispatch({
            type: 'CHANGE_CONTACT_METHOD',
            payload: value
        });
        if (tgMessage.length) {
            return dispatch({
                type: 'TEXTAREA_UPDATE',
                payload: ''
            });
        }
        form.resetFields();
    };

    const submit = useCallback(async () => {
        if (submitting && !safe) return;

        async function getTelegramAPI() {
            setSubmitting(true);
            await getTelegram(
                safe.mongoAPI +
                    API_ACTIONS.TELEGRAM_BOT +
                    '?data=' +
                    tgMessage,
                lang
            )
                .then(response => {
                    if (response.ok !== undefined) {
                        // TODO: response.ok !== undefined. Must be response.ok
                        dispatch({
                            type: 'NOTIFY',
                            payload: {
                                text: 'message_success',
                                options: { type: 'success' }
                            }
                        });
                        dispatch({
                            type: 'TEXTAREA_UPDATE',
                            payload: ''
                        });
                    }
                })
                .finally(() => {
                    setSubmitting(false);
                    dispatch({
                        type: 'USER_TG_MESSAGE_AUTO_UPDATE',
                        payload: tgMessage
                    });
                });
        }

        async function getEmailAPI() {
            const values = form.getFieldsValue();
            const filled = Object.keys(values).every(
                key => values[key] !== ''
            );
            if (values) {
                dispatch({
                    type: 'FORM_UPDATE',
                    payload: {
                        form: values,
                        filled: filled
                    }
                });

                if (values.email) {
                    dispatch({
                        type: 'USER_EMAIL_AUTO_UPDATE',
                        payload: values.email
                    });
                }

                if (values.name) {
                    dispatch({
                        type: 'USER_NAME_AUTO_UPDATE',
                        payload: values.name
                    });
                }

                if (values.subject) {
                    dispatch({
                        type: 'USER_SUBJECT_AUTO_UPDATE',
                        payload: values.subject
                    });
                }

                if (values.message) {
                    dispatch({
                        type: 'USER_MAIL_MESSAGE_AUTO_UPDATE',
                        payload: values.message
                    });
                }

                form.resetFields();
            } else return;

            setSubmitting(true);
            const emailURL =
                safe.mongoAPI +
                '/?=' +
                encodeURIComponent(JSON.stringify(values));

            await sendEmail(emailURL, lang)
                .then(res => {
                    // TODO: resolve status 0
                    if (
                        res.status === 0 ||
                        res.status === 200 ||
                        res.ok
                    ) {
                        // temporary solution is: res.status === 0
                        dispatch({
                            type: 'NOTIFY',
                            payload: {
                                text: 'message_success',
                                options: { type: 'success' }
                            }
                        });
                        dispatch({
                            type: 'NOTIFY',
                            payload: {
                                text: 'message_success',
                                options: { type: 'success' }
                            }
                        });
                    }
                    return res;
                })
                .finally(() => setSubmitting(false));
        }

        async function getSmsAPI() {
            console.info('getSmsAPI');
        }

        switch (contactMethod) {
            case 'Telegram':
                getTelegramAPI();
                break;
            case 'Email':
                getEmailAPI();
                break;
            case 'SMS':
                getSmsAPI();
                break;
        }
    }, [contactMethod, isContactFormFilled, tgMessage, lang, safe]);

    const renderOptions = subjects.map(option => (
        <Option key={option.id} value={option.title}>
            {option.title}
        </Option>
    ));

    const SubmitButton = () => (
        <Button
            block
            size="large"
            htmlType="submit"
            key="SubmitButton"
            disabled={submitting}
            onClick={event => submit(event)}
        >
            {submitting && !safe ? (
                <LoadingOutlined style={{ color: '#bcc8ce' }} />
            ) : (
                translate(lang, 'submit')
            )}
        </Button>
    );

    const tgForm = () => (
        <Fragment key="tgForm">
            <Col xs={{ span: 24 }} md={{ span: 20 }}>
                <TextArea
                    maxLength={maxSize}
                    value={tgMessage}
                    rows={4}
                    cols={30}
                    tabIndex="1"
                    key="TextInput"
                    placeholder={`${translate(lang, 'placeholder')}`}
                    onChange={event =>
                        dispatch({
                            type: 'TEXTAREA_UPDATE',
                            payload: event.target.value
                        })
                    }
                />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 20 }}>
                <SubmitButton />
            </Col>
        </Fragment>
    );

    const emailForm = () => (
        <Fragment key="emailForm">
            <Col
                xs={{ span: 24 }}
                md={{ span: 20 }}
                lg={{ span: 14 }}
            >
                <Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: translate(
                                lang,
                                'name_required_message'
                            )
                        }
                    ]}
                >
                    <Input
                        placeholder={translate(
                            lang,
                            'name_placeholder'
                        )}
                        prefix={<UserOutlined className="white" />}
                    />
                </Item>
            </Col>
            <Col
                xs={{ span: 24 }}
                md={{ span: 20 }}
                lg={{ span: 14 }}
            >
                <Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: translate(
                                lang,
                                'message_invalid_email'
                            )
                        },
                        {
                            required: true,
                            whitespace: true,
                            message: translate(
                                lang,
                                'message_required_email'
                            )
                        }
                    ]}
                >
                    <Input
                        placeholder={translate(
                            lang,
                            'email_placeholder'
                        )}
                        prefix={<MailOutlined className="white" />}
                        autoComplete="email"
                    />
                </Item>
            </Col>
            <Col
                xs={{ span: 24 }}
                md={{ span: 20 }}
                lg={{ span: 14 }}
            >
                <Item
                    name="subject"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: translate(
                                lang,
                                'message_required_subject'
                            )
                        }
                    ]}
                >
                    <Select
                        placeholder={translate(
                            lang,
                            lang,
                            'select_subject_placeholder'
                        )}
                        menuItemSelectedIcon={<CheckOutlined />}
                        dropdownStyle={{
                            backgroundColor: '#bcc8ce'
                        }}
                    >
                        {renderOptions}
                    </Select>
                </Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 20 }}>
                <Item
                    name="message"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: translate(
                                lang,
                                'message_required_subject'
                            )
                        }
                    ]}
                >
                    <TextArea
                        maxLength={maxSize}
                        rows={4}
                        cols={30}
                        tabIndex="1"
                        placeholder={translate(lang, 'placeholder')}
                        onChange={event =>
                            setEmailMessage(event.target.value)
                        }
                    />
                </Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 20 }}>
                <SubmitButton />
            </Col>
        </Fragment>
    );

    const smsForm = () => (
        <Col
            key="smsForm"
            span={24}
            className="flex center"
            style={{ height: '10rem' }}
        >
            <span className="white">
                Feature in development. Coming soon...
            </span>
        </Col>
    );

    const renderForm = () => {
        switch (contactMethod) {
            case 'Telegram':
                return tgForm();
            case 'Email':
                return inDevelopment ? smsForm() : emailForm();
            case 'SMS':
                return smsForm();
        }
    };

    return (
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 14 }}>
            <Form
                form={form}
                className="contact-form"
                name="email-form"
            >
                <Row
                    gutter={24}
                    type="flex"
                    justify="center"
                    align="middle"
                >
                    <Col span={12} className="mb-10">
                        <Group
                            onChange={e =>
                                setContactMethod(e.target.value)
                            }
                            value={contactMethod}
                            buttonStyle="solid"
                            optionType="button"
                            size="small"
                        >
                            <Radio value={'Telegram'}>
                                <SendOutlined />
                                <span className="mobile-hide">
                                    {' '}
                                    Telegram
                                </span>
                            </Radio>
                            <Radio value={'Email'}>
                                <MailOutlined />
                                <span className="mobile-hide">
                                    {' '}
                                    Email
                                </span>
                            </Radio>
                            <Radio value={'SMS'}>
                                <MessageOutlined />
                                <span className="mobile-hide">
                                    {' '}
                                    SMS
                                </span>
                            </Radio>
                        </Group>
                    </Col>

                    <Col span={12} className="mb-10 align-right">
                        <Statistic
                            className="white"
                            suffix={`/ ${maxSize}`}
                            value={`${
                                tgMessage.length
                                    ? tgMessage.length
                                    : emailMessage.length
                            }`}
                        />
                    </Col>
                    <Divider>
                        <h3 className="white">
                            {translate(lang, 'contact_form')}
                        </h3>
                    </Divider>
                    {renderForm()}
                </Row>
            </Form>
        </Col>
    );
});

export default ContactForm;
