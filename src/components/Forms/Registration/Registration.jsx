import React, { useCallback, useState } from 'react';
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
    MailOutlined,
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
// utils
import translate from '../../../utils/translations';
import { messageOptions } from '../../../utils/config';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

const FormItem = Form.Item;

const Registration = () => {
    const { currentUser } = useSelector(s => s.auth);
    const { safe, lang } = useSelector(s => s.ui);
    const [submitting, setSubmitting] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    function generateUserID() {
        const value =
            currentUser.ip || currentUser.email || currentUser.name;
        const seed = uuidv4();
        const id = uuidv5(value, seed);
        return id;
    }

    const submit = useCallback(async () => {
        if (submitting && !safe) return;
        setSubmitting(true);
        const id = generateUserID();
        const values = form.getFieldsValue();

        try {
            // TODO: add user to usersDB

            // if result.ok:
            dispatch({
                type: 'USER_REGISTER',
                payload: {
                    email: values.email,
                    pass: values.pass,
                    name: values.name,
                    userId: id,
                    lang: lang,
                    registerTime: `${Date.now()}`,
                    lastSignInTime: `${Date.now()}`
                }
            });
        } catch (error) {}

        console.info('submit values: ', values);
        setSubmitting(false);
    }, [safe]);

    return (
        <Form
            form={form}
            className="auth-form"
            name="reg-form"
            layout="vertical"
            autoComplete="off"
        >
            <Row gutter={24} className="Registration">
                {/* name */}
                <Col span={24}>
                    <FormItem
                        name="name"
                        rules={[
                            {
                                min: 3,
                                required: true,
                                whitespace: true,
                                message: translate(
                                    lang,
                                    'name_required_message'
                                )
                            }
                        ]}
                    >
                        {currentUser.name.length &&
                        currentUser.name !== 'Guest' ? (
                            <Input
                                disabled
                                value={currentUser.name}
                                addonBefore={
                                    <UserOutlined className="white" />
                                }
                            />
                        ) : (
                            <Input
                                autoComplete="name"
                                placeholder={translate(
                                    lang,
                                    'name_placeholder'
                                )}
                                addonBefore={
                                    <UserOutlined className="white" />
                                }
                            />
                        )}
                    </FormItem>
                </Col>
                {/* email */}
                <Col span={24}>
                    <FormItem
                        name="email"
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
                        {currentUser.email.length ? (
                            <Input
                                disabled
                                value={currentUser.email}
                                addonBefore={
                                    <MailOutlined className="white" />
                                }
                            />
                        ) : (
                            <Input
                                autoComplete="email"
                                placeholder={translate(
                                    lang,
                                    'email_placeholder'
                                )}
                                addonBefore={
                                    <MailOutlined className="white" />
                                }
                            />
                        )}
                    </FormItem>
                </Col>
                {/* pass */}
                <Col span={24}>
                    <FormItem
                        name="pass"
                        hasFeedback
                        rules={[
                            {
                                min: 6,
                                required: true,
                                whitespace: true,
                                message: translate(
                                    lang,
                                    'pass_required_message'
                                )
                            }
                        ]}
                    >
                        <Input
                            autoComplete="new-password"
                            addonBefore={
                                <LockOutlined className="white" />
                            }
                            placeholder={translate(lang, 'pass')}
                        />
                    </FormItem>
                </Col>
                {/* confirm pass */}
                <Col span={24}>
                    <FormItem
                        name="confirm-pass"
                        dependencies={['pass']}
                        hasFeedback
                        rules={[
                            {
                                min: 6,
                                required: true,
                                whitespace: true,
                                message: translate(
                                    lang,
                                    'confirm_pass_required_message'
                                )
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue('pass') ===
                                            value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'The two passwords that you entered do not match!'
                                        )
                                    );
                                }
                            })
                        ]}
                    >
                        <Input
                            autoComplete="new-password"
                            addonBefore={
                                <LockOutlined className="white" />
                            }
                            placeholder={translate(
                                lang,
                                'repeat_pass'
                            )}
                        />
                    </FormItem>
                </Col>
                {/* checkbox */}
                <Col span={24} className="left">
                    <FormItem name="remember">
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
                {/* buttons */}
                <Col span={12} className="padding-small left">
                    <Button
                        type="link"
                        onClick={() =>
                            dispatch({
                                type: 'CHANGE_AUTH_FORM_TYPE',
                                payload: 'login'
                            })
                        }
                    >
                        {translate(lang, 'login_submit')}
                    </Button>
                </Col>

                <Col span={12} className="padding-small right">
                    <Button htmlType="submit" onClick={submit}>
                        {translate(lang, 'reg_submit')}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Registration;
