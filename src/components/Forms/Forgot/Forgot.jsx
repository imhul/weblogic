import React from 'react';
// components
import { Button, Col, Form, Input, Row } from 'antd/lib';
// import { MenuOutlined } from '@ant-design/icons';

const TextArea = Input.TextArea;
const FormItem = Form.Item;

const Forgot = () => {
    return (
        <Row gutter={24}>
            <Col span={24}>
                <FormItem
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter user name'
                        }
                    ]}
                >
                    <Input placeholder="Please enter user name" />
                </FormItem>
            </Col>
            <Col span={24}>
                <FormItem
                    name="url"
                    label="Url"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter url'
                        }
                    ]}
                >
                    <Input
                        style={{
                            width: '100%'
                        }}
                        addonBefore="http://"
                        addonAfter=".com"
                        placeholder="Please enter url"
                    />
                </FormItem>
            </Col>
        </Row>
    );
};

export default Forgot;
