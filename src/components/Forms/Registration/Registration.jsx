import React from 'react';
// components
import { Button, Col, Form, Input, Row } from 'antd/lib';
// import { MenuOutlined } from '@ant-design/icons';

const TextArea = Input.TextArea;
const FormItem = Form.Item;

const Registration = () => {
    return (
        <Form layout="vertical">
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
            <Row gutter={24}>
                <Col span={24}>
                    <FormItem
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required: true,
                                message:
                                    'please enter url description'
                            }
                        ]}
                    >
                        <TextArea
                            rows={4}
                            placeholder="please enter url description"
                        />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    );
};

export default Registration;
