// core
import React, { memo, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    Divider,
    Statistic,
    Radio,
    Select,
    message
} from 'antd/lib';
import {
    MailOutlined,
    SendOutlined,
    EditOutlined,
    UserOutlined,
    CheckOutlined,
    LoadingOutlined,
    MessageOutlined
} from '@ant-design/icons';
// utils
import translate from '../../utils/translations';
import { getTelegram, sendEmail } from '../../utils/api';
import { messageOptions } from '../../utils/config';

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
    const { lang, tgMessage, isFilled } = useSelector(state => state.ux);
    const [submitting, setSubmitting] = useState(false);
    const { safe } = useSelector(state => state.ui);
    const [formtype, setFormtype] = useState('tg'); // tg, email, sms
    const [emailMessage, setEmailMessage] = useState('');
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const inDevelopment = false;
    const maxSize = 4096;

    const setForm = value => {
        setFormtype(value);
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
            await getTelegram(safe.getTG + '' + tgMessage, lang)
                .then(response => {
                    if (response.ok !== undefined) {
                        // TODO: response.ok !== undefined. Must be response.ok
                        message.success({
                            ...messageOptions,
                            content: `${translate(lang, 'message_success')}`
                        });
                        dispatch({
                            type: 'TEXTAREA_UPDATE',
                            payload: ''
                        });
                    }
                })
                .finally(() => setSubmitting(false));
        }

        async function getEmailAPI() {
            const values = form.getFieldsValue();
            const filled = Object.keys(values).every(key => values[key] !== '');
            if (values) {
                dispatch({
                    type: 'FORM_UPDATE',
                    payload: {
                        form: values,
                        filled: filled
                    }
                });

                form.resetFields();
            } else return;

            setSubmitting(true);
            const emailURL =
                safe.getEmail +
                '/?=' +
                encodeURIComponent(JSON.stringify(values));

            await sendEmail(emailURL, lang)
                .then(res => {
                    console.info('res: ', res);
                    // TODO: resolve status 0
                    if (res.status === 0 || res.status === 200 || res.ok) {
                        // temporary solution is: res.status === 0
                        message.success({
                            ...messageOptions,
                            content: `${translate(lang, 'message_success')}`
                        });
                    }
                    return res;
                })
                .finally(() => setSubmitting(false));
        }

        async function getSmsAPI() {
            console.info('getSmsAPI');
        }

        switch (formtype) {
            case 'tg':
                getTelegramAPI();
                break;
            case 'email':
                getEmailAPI();
                break;
            case 'sms':
                getSmsAPI();
                break;
        }
    }, [formtype, isFilled, tgMessage, lang, safe]);

    const renderOptions = subjects.map(option => (
        <Option key={option.id} value={option.title}>
            {option.title}
        </Option>
    ));

    const SubmitButton = () => (
        <Button
            size="large"
            type="primary"
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
            <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 14 }}>
                <Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: translate(lang, 'message_required_name')
                        }
                    ]}
                >
                    <Input
                        placeholder={translate(lang, 'name_placeholder')}
                        prefix={<UserOutlined className="white" />}
                    />
                </Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 14 }}>
                <Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: translate(lang, 'message_invalid_email')
                        },
                        {
                            required: true,
                            message: translate(lang, 'message_required_email')
                        }
                    ]}
                >
                    <Input
                        placeholder={translate(lang, 'email_placeholder')}
                        prefix={<MailOutlined className="white" />}
                        autoComplete="email"
                    />
                </Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 14 }}>
                <Item
                    name="subject"
                    rules={[
                        {
                            required: true,
                            message: translate(lang, 'message_required_subject')
                        }
                    ]}
                >
                    <Select
                        placeholder={translate(
                            lang,
                            'select_subject_placeholder'
                        )}
                        menuItemSelectedIcon={<CheckOutlined />}
                        dropdownStyle={{
                            backgroundColor: '#bcc8ce'
                            // color: '#bcc8ce'
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
                            message: translate(lang, 'message_required_subject')
                        }
                    ]}
                >
                    <TextArea
                        maxLength={maxSize}
                        rows={4}
                        cols={30}
                        tabIndex="1"
                        placeholder={translate(lang, 'placeholder')}
                        onChange={event => setEmailMessage(event.target.value)}
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
        switch (formtype) {
            case 'tg':
                return tgForm();
            case 'email':
                return inDevelopment ? smsForm() : emailForm();
            case 'sms':
                return smsForm();
        }
    };

    return (
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 14 }}>
            <Form
                form={form}
                className="contact-form"
                name="email-form"
                data-netlify="true"
            >
                <Row gutter={24} type="flex" justify="center" align="middle">
                    <Col span={12} className="mb-10">
                        <Group
                            onChange={e => setForm(e.target.value)}
                            value={formtype}
                            buttonStyle="solid"
                            optionType="button"
                            size="small"
                        >
                            <Radio value={'tg'}>
                                <SendOutlined />
                                <span className="mobile-hide"> Telegram</span>
                            </Radio>
                            <Radio value={'email'}>
                                <MailOutlined />
                                <span className="mobile-hide"> Email</span>
                            </Radio>
                            <Radio value={'sms'}>
                                <MessageOutlined />
                                <span className="mobile-hide"> SMS</span>
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
