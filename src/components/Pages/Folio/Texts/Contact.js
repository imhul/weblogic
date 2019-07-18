import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../../redux/actions/ux_actions';
import { Row, Col, Form, Input, Button, Icon, message } from 'antd';
import translate from '../../translations';
import Base64 from '../../../../utils/decode';
import Clipboard from 'react-clipboard.js';
import Captcha from './Captcha';


const { TextArea } = Input;

const mCode = Base64.decode('Ymxhc2hpcmtAZ21haWwuY29t');
const fCode = Base64.decode('KzM4IDA2MyA0NDIgMjUgMzc=');
const tCode = Base64.decode('aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDc2NDEwNzQ0NzpBQUZrSU9mRWNpTXlQaHgyaUhsMVhoNVF5RUI5cnByQS1WSS9zZW5kTWVzc2FnZT9jaGF0X2lkPTI2OTY1NjYyMiZ0ZXh0PSc=');


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

    handleSubmit = event => {
        const { ux, uxActions } = this.props;

            if (ux.isFilled) {
                fetch(`${tCode}${ux.tgMessage}'`)
                .then(response => response.json())
                .then(result => {
                    if (result.ok) {
                        message.success('Сообщение успешно отправлено!');
                    } else {
                        message.error('Ошибка при отправке!');
                    }
                })
                .catch(error => message.error(`Ошибка при отправке: ${error}`))
            } else {
                message.error('Ошибка при отправке: введите номер телефона!');
            };
            event.preventDefault();
    };

    render() {

        const { lang, tgMessage } = this.props.ux;
        const { currentUser } = this.props.ui;
        const { uxActions } = this.props;
        const maxSize = 4096;

        return (
            <div className="Contact content">
                { 
                    currentUser.isRobot ? <Captcha /> : (
                    <Row gutter={24} type="flex" justify="center" align="middle">
                        <Col span={12} className="mb-20 align-left">
                            <Button
                                ghost={ true }
                                title="my linkedin page"
                                href='https://www.linkedin.com/in/tkachuk-zakhar-04733892/'
                                target='_blank'>
                                <Icon type='linkedin' />
                                    { translate( lang, 'summary' )}
                            </Button>
                        </Col>
    
                        <Col span={12} className="mb-20 align-right">
                            <Button
                                ghost={ true }
                                title="github project"
                                href="https://github.com/imhul"
                                target="_blank"
                            >
                                <Icon type="github" />Github
                            </Button>
                        </Col>

                        <Col span={24}>

                            <Form onSubmit={this.handleSubmit}>

                                <Row gutter={24} type="flex" justify="center" align="middle">
                                    <Col span={12} className="mb-10">
                                        <h2 className="white">
                                            { translate( lang, 'contact_form' )}
                                        </h2>
                                    </Col>

                                    <Col span={12} className="mb-10 align-right">
                                        <h2 className="white">
                                            { `${tgMessage.length} / ${maxSize}` }
                                        </h2>
                                    </Col>
                                
                                    <Col span={24}>
                                        <TextArea 
                                            rows={4}
                                            cols={30}
                                            tabIndex="1"
                                            placeholder="Your Message" 
                                            onChange={uxActions.textareaUpdate} />
                                    </Col>
                                    <Col span={12}>
                                        <Button size="large" type="primary" htmlType="submit">
                                            { translate( lang, 'submit' )}
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>

                        <Col span={24} className="mt-20 center">
                            { translate( lang, 'or' )}
                        </Col>

                        <Col span={24} className="mb-20 center">
                            <h2>{ translate( lang, 'copy_contacts' )}</h2>
                        </Col>

                        <Col span={12} className="mb-20 align-right">
                            <Clipboard
                                className="ant-btn ant-btn-background-ghost"
                                option-text={() => mCode}
                                onSuccess={ this.onSuccess }>
                                <Icon type="copy" />
                                <Icon type="ellipsis" />
                                <Icon type="mail" />
                            </Clipboard>
                        </Col>

                        <Col span={12} className="mb-20 align-left">
                            <Clipboard
                                className="ant-btn ant-btn-background-ghost"
                                option-text={() => fCode}
                                onSuccess={ this.onSuccess }>
                                <Icon type="copy" />
                                <Icon type="ellipsis" />
                                <Icon type="phone" />
                            </Clipboard>
                        </Col>

                        <Col span={24} className="center">
                            <h2>
                                { translate( lang, 'cooperation_ready' )}
                            </h2>
                        </Col>
                    </Row>
                    )
                }
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uxActions: bindActionCreators(UX_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
  return {
    ux: state.ux,
    ui: state.ui,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);