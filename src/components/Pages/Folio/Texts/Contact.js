import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../../redux/actions/ux_actions';
import { Row, Col, Form, Input, Button, Statistic, message } from 'antd';
import {
    MailOutlined,
    CloudOutlined,
    GithubOutlined,
    LinkedinOutlined,
    CopyOutlined,
    PhoneOutlined,
    EllipsisOutlined,
    EditOutlined
} from '@ant-design/icons';
import translate from '../../translations';
import safe from '../../../../utils/safe';
import Clipboard from 'react-clipboard.js';
import Captcha from './Captcha';

const { TextArea } = Input;

class Contact extends Component {

    onSuccess(e) {
        const { lang } = this.props.ux;
        switch ( e.text ) {
            case safe.mCode: 
                return message.success(`${translate( lang, 'message_success_email' )}`);
            case safe.fCode: 
                return message.success(`${translate( lang, 'message_success_phone' )}`);
            default:
                return message.error(`${translate( lang, 'message_error_wrong' )}`);
        }
    };

    handleSubmit = event => {
        const { lang, isFilled, tgMessage } = this.props.ux;

            if (isFilled) {
                fetch(`${safe.tCode}${tgMessage}'`)
                .then(response => response.json())
                .then(result => {
                    if (result.ok) {
                        message.success(`${translate( lang, 'message_success' )}`);
                    } else {
                        message.error(`${translate( lang, 'message_error' )}`);
                    }
                })
                .catch(error => message.error(`${translate( lang, 'message_error' )}: ${error}`))
            } else {
                message.error(`${translate( lang, 'message_error_phone' )}`);
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
                        <Col md={12} sm={24} xs={24} className="mb-20 align-left mobile-center">
                            <a
                                className="ant-btn ant-btn-background-ghost first"
                                href="https://www.linkedin.com/in/tkachuk-zakhar-04733892/"
                                title={ `${translate( lang, 'linkedin' )}`}
                                target="_blank">
                                <LinkedinOutlined />
                            </a>
                            <a
                                href="https://github.com/imhul/weblogic"
                                className="ant-btn ant-btn-background-ghost"
                                title={ `${translate( lang, 'github' )}` }
                                target="_blank"
                            >
                                <GithubOutlined />
                            </a>
                        </Col>
    
                        <Col md={12} sm={24} xs={24} className="mb-20 align-right mobile-center">
                            <Button
                                ghost
                                href={safe.cv}
                                title={ `${translate( lang, 'myCV' )}` }
                                target='_blank'>
                                <CloudOutlined />
                                    { translate( lang, 'summary' )}
                            </Button>
                        </Col>

                        <Col span={24}>

                            <Form onSubmit={this.handleSubmit}>

                                <Row gutter={24} type="flex" justify="center" align="middle">
                                    <Col span={12} className="mb-10">
                                        <h2 className="white">
                                        <EditOutlined /> { translate( lang, 'contact_form' )}
                                        </h2>
                                    </Col>

                                    <Col span={12} className="mb-10 align-right">
                                        <Statistic 
                                            className="white" 
                                            suffix={`/ ${maxSize}`}
                                            value={`${tgMessage.length}`} />
                                    </Col>
                                
                                    <Col span={24}>
                                        <TextArea 
                                            rows={4}
                                            cols={30}
                                            tabIndex="1"
                                            placeholder={ `${translate( lang, 'placeholder')}` }
                                            onChange={uxActions.textareaUpdate} />
                                    </Col>
                                    <Col span={16}>
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

                        <Col md={12} sm={24} xs={24} className="mb-20 align-right mobile-center" title={ translate( lang, 'copy_email' )}>
                            <Clipboard
                                className="ant-btn ant-btn-background-ghost"
                                option-text={() => safe.mCode}
                                onSuccess={ this.onSuccess }>
                                <MailOutlined />
                                <EllipsisOutlined />
                                <CopyOutlined />
                            </Clipboard>
                        </Col>

                        <Col md={12} sm={24} xs={24} className="mb-20 align-left mobile-center" title={ translate( lang, 'copy_phone' )}>
                            <Clipboard
                                className="ant-btn ant-btn-background-ghost"
                                option-text={() => safe.fCode}
                                onSuccess={ this.onSuccess }>
                                <PhoneOutlined />
                                <EllipsisOutlined />
                                <CopyOutlined />
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