import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Checkbox, Button, Col, Form, Input, Row } from 'antd/lib';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
// utils
import translate from '../../../utils/translations';

const FormItem = Form.Item;

const Login = ({ onSubmit }) => {
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <Row gutter={24} className="Login">
            <Col span={24}>
                <FormItem
                    name="login"
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
            <Col span={16} className="left">
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
                        {translate('remember_me')}
                    </Checkbox>
                </FormItem>
            </Col>
            <Col span={8} className="right">
                <Button
                    htmlType="submit"
                    onClick={() => onSubmit('login')}
                >
                    {translate('login_submit')}
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
                    {translate('reg_form')}
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
                    {translate('forgot_form')}
                </Button>
            </Col>
        </Row>
    );
};

export default Login;
