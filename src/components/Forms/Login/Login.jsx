import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Checkbox, Button, Col, Form, Input, Row } from 'antd/lib';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
// utils
import translate from '../../../utils/translations';

const FormItem = Form.Item;

const Login = () => {
    const { lang } = useSelector(state => state.ui);
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <Row gutter={24} className="Login">
            <Col span={24}>
                <FormItem
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: translate(lang, 'email_required_message')
                        }
                    ]}
                >
                    <Input
                        addonBefore={<MailOutlined className="white" />}
                        placeholder="Email"
                    />
                </FormItem>
            </Col>
            <Col span={24}>
                <FormItem
                    name="pass"
                    rules={[
                        {
                            required: true,
                            message: translate(lang, 'pass_required_message')
                        }
                    ]}
                >
                    <Input
                        addonBefore={<LockOutlined className="white" />}
                        placeholder={translate(lang, 'pass')}
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
                        {translate(lang, 'remember_me')}
                    </Checkbox>
                </FormItem>
            </Col>

            <Col span={8} className="right">
                <Button htmlType="submit">
                    {translate(lang, 'login_submit')}
                </Button>
            </Col>
        </Row>
    );
};

export default Login;
