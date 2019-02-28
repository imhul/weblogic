import React, { Component } from 'react';
import { Row, Col, Form, Input, Rate, Button, Icon, message } from 'antd';
import { Language } from '../../provider';
import Base64 from '../../../../utils/decode';
import Clipboard from 'react-clipboard.js';

const { TextArea } = Input;

const mCode = Base64.decode('Ymxhc2hpcmtAZ21haWwuY29t');
const fCode = Base64.decode('KzM4IDA2MyA0NDIgMjUgMzc=');

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess() {
        message.success('successfully copied');
    }

    render() {

        const emailPrefix = <Icon type="mail" />;
        const commentPrefix = <Icon type="edit" />;

        return (
            <div className="Contact content">
            
                <Row gutter={24} type="flex" justify="center" align="middle">
                    <Col span={12} className="mb-20 align-right">
                        <Button
                            ghost={ true }
                            title="my linkedin page"
                            href='https://www.linkedin.com/in/tkachuk-zakhar-04733892/'
                            target='_blank'>
                            <Icon type='linkedin' />
                            <Language
                                dictionary={{
                                    english: "Summary",
                                    russian: "Резюме"
                                }} />
                        </Button>
                    </Col>
  
                    <Col span={12} className="mb-20 align-left">
                        <Button
                            ghost={ true }
                            title="github project"
                            href="https://github.com/imhul"
                            target="_blank"
                        >
                            <Icon type="github" />Github
                        </Button>
                    </Col>

                    {/* TODO: implement formspree !!! */}
                    {/* <Col span={24}>
                        <Form 
                            method="POST" 
                            className="mb-20"
                            encType="text/plain" 
                            action="https://formspree.io/blashirk@gmail.com"
                            >
                            <Row gutter={24} type="flex" justify="center" align="middle">
                                <Col span={24} className="mb-10">
                                    <h2 className="white">
                                        <Language
                                            dictionary={{
                                                english: "Contact Form",
                                                russian: "Форма обратной связи"
                                            }}
                                        />
                                    </h2>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                    <Input 
                                        name="email" 
                                        tabIndex="1" 
                                        type="email" 
                                        prefix={ emailPrefix }
                                        defaultValue="exemple@mail.com" />
                                </Col>
                                <Col span={24}>
                                    <TextArea 
                                        name="comment" 
                                        tabIndex="2" 
                                        rows={4} />
                                </Col>
                                <Col span={24} className="mb-2">
                                    <span className="white">
                                        <Language
                                            dictionary={{
                                                english: "Rate this page",
                                                russian: "Оцените этот сайт"
                                            }}
                                        /></span>
                                </Col>
                                <Col span={24} className="mb-20">
                                    <Rate character={<Icon type="heart" theme="filled" />} />
                                </Col>
                                <Col span={12}>
                                    <Input 
                                        type="submit" 
                                        tabIndex="3" 
                                        value="Send" />
                                </Col>
                            </Row>
                        </Form>
                    </Col> */}

                    <Col span={24}>
                        <Language
                            dictionary={{
                                english: "or",
                                russian: "или"
                            }}
                        />
                    </Col>

                    <Col span={24} className="mb-20">
                        <Language
                            dictionary={{
                                english: "copy contacts",
                                russian: "скопируйте контакты"
                            }}
                        />
                    </Col>

                    <Col span={24} className="mb-20">
                        <Clipboard
                            className="ant-btn ant-btn-background-ghost"
                            option-text={() => mCode}
                            onSuccess={this.onSuccess}>
                            <Icon type="copy" />
                            <Language
                                dictionary={{
                                    english: "Copy email to clipboard",
                                    russian: "Копировать email"
                                }}
                            />
                        </Clipboard>
                    </Col>

                    <Col span={24}>
                        <Clipboard
                            className="ant-btn ant-btn-background-ghost"
                            option-text={() => fCode}
                            onSuccess={this.onSuccess}>
                            <Icon type="copy" />
                            <Language
                                dictionary={{
                                    english: "Copy phone to clipboard",
                                    russian: "Копировать телефон"
                                }}
                            />
                        </Clipboard>
                    </Col>

                    <Col span={24}>
                        <p>
                            <Language
                                dictionary={{
                                    english: "Always ready for mutually beneficial cooperation.",
                                    russian: "Всегда готов к взаимовыгодному сотрудничеству."
                                }}
                            />
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;