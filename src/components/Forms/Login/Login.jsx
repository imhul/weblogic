import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import {
    Checkbox,
    Button,
    Col,
    Form,
    Input,
    Row,
    message
} from 'antd/lib';
import {
    EyeOutlined,
    MailOutlined,
    LockOutlined,
    LoadingOutlined,
    EyeInvisibleOutlined
} from '@ant-design/icons';
// utils
import translate from '../../../utils/translations';
import { messageOptions } from '../../../utils/config';

const FormItem = Form.Item;
const Password = Input.Password;

const Login = () => {
    const { users, currentUser } = useSelector(s => s.auth);
    const { safe, lang } = useSelector(s => s.ui);
    const [submitting, setSubmitting] = useState(false);
    const [isSubmitDisabled, setisSubmitDisabled] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    useEffect(() => {
        const disabled = submitting && !safe && !users;
        setisSubmitDisabled(disabled);
    }, [submitting, safe, users]);

    const submit = useCallback(async () => {
        if (isSubmitDisabled) return;
        setSubmitting(true);
        const values = form.getFieldsValue();
        console.info('values: ', values);
        console.info('users: ', users);
        const beingCheckedUser = users.find(
            user => user.email === values.login
        );

        console.info('beingCheckedUser: ', beingCheckedUser);

        if (!beingCheckedUser) {
            message.error({
                content: translate(
                    lang,
                    'invalid_pass_or_email_message'
                ),
                ...messageOptions
            });
            return;
        } else {
            if (beingCheckedUser.pass === values.pass) {
                dispatch({
                    type: 'USER_AUTH',
                    // TODO: check & write only needed fields
                    payload:
                        currentUser.ip === beingCheckedUser.ip
                            ? beingCheckedUser
                            : {
                                  ...beingCheckedUser,
                                  ip: currentUser.ip,
                                  ips: beingCheckedUser.ip
                                      ? [
                                            beingCheckedUser.ip,
                                            currentUser.ip
                                        ]
                                      : [currentUser.ip]
                              }
                });
            } else {
                message.error({
                    content: translate(lang, 'invalid_pass_message'),
                    ...messageOptions
                });
            }
        }

        form.resetFields();
        setSubmitting(false);
    }, [safe, users, submitting, form, lang, currentUser]);

    return (
        <Form
            form={form}
            className="auth-form"
            name="login-form"
            layout="vertical"
        >
            <Row gutter={24} className="Login">
                <Col span={24}>
                    <FormItem
                        name="login"
                        rules={[
                            {
                                min: 8,
                                type: 'email',
                                whitespace: true,
                                message: translate(
                                    lang,
                                    'message_invalid_email'
                                )
                            },
                            {
                                required: true,
                                message: translate(
                                    lang,
                                    'message_required_email'
                                )
                            }
                        ]}
                    >
                        <Input
                            addonBefore={
                                <MailOutlined className="white" />
                            }
                            placeholder="Email"
                            autoComplete="email"
                        />
                    </FormItem>
                </Col>
                <Col span={24}>
                    <FormItem
                        name="pass"
                        rules={[
                            {
                                required: true,
                                whitespace: true,
                                message: translate(
                                    lang,
                                    'pass_required_message'
                                )
                            }
                        ]}
                    >
                        <Password
                            addonBefore={
                                <LockOutlined className="white" />
                            }
                            iconRender={visible =>
                                visible ? (
                                    <EyeOutlined className="white" />
                                ) : (
                                    <EyeInvisibleOutlined className="white" />
                                )
                            }
                            placeholder={translate(lang, 'pass')}
                            autoComplete="current-password"
                        />
                    </FormItem>
                </Col>
                <Col span={16} className="left">
                    <FormItem name="remember" valuePropName="checked">
                        <Checkbox
                            checked={currentUser.rememberMe}
                            onChange={e =>
                                dispatch({
                                    type: 'TOGGLE_REMEMBER_ME',
                                    payload: e.target.checked
                                })
                            }
                        >
                            {translate(lang, 'remember_me')}
                        </Checkbox>
                    </FormItem>
                </Col>
                <Col span={8} className="right">
                    <Button
                        disabled={isSubmitDisabled}
                        htmlType="submit"
                        onClick={submit}
                    >
                        {isSubmitDisabled ? (
                            <LoadingOutlined
                                style={{ color: '#bcc8ce' }}
                            />
                        ) : (
                            translate(lang, 'login_submit')
                        )}
                    </Button>
                </Col>
                <Col span={10} className="padding-small left">
                    <Button
                        type="link"
                        onClick={() =>
                            dispatch({
                                type: 'CHANGE_AUTH_FORM_TYPE',
                                payload: 'reg'
                            })
                        }
                    >
                        {translate(lang, 'reg_form')}
                    </Button>
                </Col>
                <Col span={14} className="padding-small right">
                    <Button
                        type="link"
                        onClick={() =>
                            dispatch({
                                type: 'CHANGE_AUTH_FORM_TYPE',
                                payload: 'forgot'
                            })
                        }
                    >
                        {translate(lang, 'forgot_form')}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Login;
