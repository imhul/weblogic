import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Checkbox, Button, Col, Form, Input, Row } from 'antd/lib';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
// utils
import translate from '../../../utils/translations';

const FormItem = Form.Item;

const Registration = ({ onSubmit }) => {
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <Row gutter={24} className="Registration">
            {/* name */}
            <Col span={24}>
                <FormItem
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: translate(
                                'name_required_message'
                            )
                        }
                    ]}
                >
                    <Input
                        placeholder={translate('name_placeholder')}
                        prefix={<UserOutlined className="white" />}
                    />
                </FormItem>
            </Col>
            {/* email */}
            <Col span={24}>
                <FormItem
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: translate(
                                'message_invalid_email'
                            )
                        },
                        {
                            required: true,
                            message: translate(
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
            {/* pass */}
            <Col span={24}>
                <FormItem
                    name="pass"
                    rules={[
                        {
                            required: true,
                            message: translate(
                                'pass_required_message'
                            )
                        }
                    ]}
                >
                    <Input
                        addonBefore={
                            <LockOutlined className="white" />
                        }
                        placeholder={translate('pass')}
                    />
                </FormItem>
            </Col>
            <Col span={12} className="left">
                <Button
                    type="link"
                    onClick={() =>
                        dispatch({
                            type: 'CHANGE_AUTH_FORM_TYPE',
                            payload: 'login'
                        })
                    }
                >
                    {translate('login_submit')}
                </Button>
            </Col>

            <Col span={12} className="right">
                <Button htmlType="submit" onClick={onSubmit}>
                    {translate('reg_submit')}
                </Button>
            </Col>
        </Row>
    );
};

export default Registration;
