import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Checkbox, Button, Col, Form, Input, Row } from 'antd/lib';
import {
    MailOutlined,
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
// utils
import translate from '../../../utils/translations';

const FormItem = Form.Item;

const Registration = () => {
    const { currentUser } = useSelector(s => s.auth);
    const { safe, lang } = useSelector(s => s.ui);
    const [submitting, setSubmitting] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const submit = useCallback(async () => {
        if (submitting && !safe) return;
        setSubmitting(true);
        const values = form.getFieldsValue();

        try {
            // if result.ok:
        } catch (error) {}

        console.info('submit values: ', values);
        setSubmitting(false);
    }, [safe]);

    return (
        <Form
            form={form}
            className="auth-form"
            name="forgot-form"
            layout="vertical"
        >
            <Row gutter={24} className="Forgot">
                {/* new pass */}
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
                                    'new_pass_required_message'
                                )
                            }
                        ]}
                    >
                        <Input
                            addonBefore={
                                <LockOutlined className="white" />
                            }
                            placeholder={translate(lang, 'new_pass')}
                        />
                    </FormItem>
                </Col>
                {/* confirm new pass */}
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
                                    'confirm_new_pass_required_message'
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
                            addonBefore={
                                <LockOutlined className="white" />
                            }
                            placeholder={translate(
                                lang,
                                'repeat_new_pass'
                            )}
                        />
                    </FormItem>
                </Col>
                {/* buttons */}
                <Col span={12} className="left">
                    <Button
                        type="link"
                        onClick={() =>
                            dispatch({
                                type: 'SET_AUTH_FORM_TYPE',
                                payload: 'login'
                            })
                        }
                    >
                        {translate(lang, 'login_submit')}
                    </Button>
                </Col>

                <Col span={12} className="right">
                    <Button htmlType="submit" onClick={submit}>
                        {translate(lang, 'reg_submit')}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Registration;
