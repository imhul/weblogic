import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Input, Rate, Button, Icon, message } from 'antd';
import translate from '../../translations';
import Base64 from '../../../../utils/decode';
import Clipboard from 'react-clipboard.js';


const { TextArea } = Input;

const mCode = Base64.decode('Ymxhc2hpcmtAZ21haWwuY29t');
const fCode = Base64.decode('KzM4IDA2MyA0NDIgMjUgMzc=');

class Contact extends Component {

    onSuccess(e) {
        switch ( e.text ) {
            case mCode: 
                return message.success('Email address successfully copied!');
            case fCode: 
                return message.success('Phone number successfully copied!');
            default:
                return message.error('Something wrong!');
        }
    };

    render() {

        const emailPrefix = <Icon type="mail" />;
        const commentPrefix = <Icon type="edit" />;
        const { lang } = this.props.ux;

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
                                { translate( lang, 'summary' )}
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
                        { translate( lang, 'or' )}
                    </Col>

                    <Col span={24} className="mb-20">
                        <h2>{ translate( lang, 'copy_contacts' )}</h2>
                    </Col>

                    <Col span={12} className="mb-20 align-right">
                        <Clipboard
                            className="ant-btn ant-btn-background-ghost"
                            option-text={() => mCode}
                            onSuccess={ this.onSuccess }>
                            <Icon type="copy" />
                            <Icon type="mail" />
                        </Clipboard>
                    </Col>

                    <Col span={12} className="mb-20 align-left">
                        <Clipboard
                            className="ant-btn ant-btn-background-ghost"
                            option-text={() => fCode}
                            onSuccess={ this.onSuccess }>
                            <Icon type="copy" />
                            <Icon type="phone" />
                        </Clipboard>
                    </Col>

                    <Col span={24}>
                        <h2>
                            { translate( lang, 'cooperation_ready' )}
                        </h2>
                    </Col>
                </Row>
            </div>
        )
    }
};

function mapStateToProps(state) {
  return {
    ux: state.ux,
  }
};

export default connect(mapStateToProps)(Contact);