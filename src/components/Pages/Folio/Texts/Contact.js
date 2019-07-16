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
                    <Col span={24} className="mb-20">
                        <Button
                            ghost={ true }
                            title="my linkedin page"
                            href='https://www.linkedin.com/in/tkachuk-zakhar-04733892/'
                            target='_blank'>
                            <Icon type='linkedin' />
                                { translate( lang, 'summary' )}
                        </Button>
                    </Col>
  
                    <Col span={24} className="mb-20">
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

                        {/* <form id="quick-contact-form" name="quick-contact-form" action="include/form.php" method="post" class="quick-contact-form nobottommargin">

							<input type="text" class="required sm-form-control input-block-level" id="quick-contact-form-name" name="quick-contact-form-name" value="" placeholder="Full Name" />
							<input type="text" class="required sm-form-control email input-block-level" id="quick-contact-form-email" name="quick-contact-form-email" value="" placeholder="Email Address" />
							<textarea class="required sm-form-control input-block-level short-textarea" id="quick-contact-form-message" name="quick-contact-form-message" rows="4" cols="30" placeholder="Message"></textarea>
							<input type="text" class="hidden" id="quick-contact-form-botcheck" name="quick-contact-form-botcheck" value="" />
							<input type="hidden" name="prefix" value="quick-contact-form-" />
							<button type="submit" id="quick-contact-form-submit" name="quick-contact-form-submit" class="button" value="submit">Send Email</button>
						</form> */}

                        <Form 
                            id="quick-contact-form" 
                            name="quick-contact-form" 
                            action="../../../../utils/include/form.php" 
                            method="post" 
                            className="quick-contact-form nobottommargin">

                            <Row gutter={24} type="flex" justify="center" align="middle">
                                <Col span={24} className="mb-10">
                                    <h2 className="white">
                                        { translate( lang, 'contact_form' )}
                                    </h2>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                    <Input 
                                        type="text"
                                        tabIndex="1" 
                                        prefix={ emailPrefix }
                                        defaultValue="Full Name"
                                        id="quick-contact-form-name"
                                        name="quick-contact-form-name"
                                        className="required sm-form-control input-block-level" />
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                    <Input 
                                        value=""
                                        type="text" 
                                        tabIndex="2" 
                                        prefix={ emailPrefix }
                                        id="quick-contact-form-email"
                                        defaultValue="exemple@mail.com"
                                        name="quick-contact-form-email"
                                        className="required sm-form-control email input-block-level" />
                                </Col>
                                <Col span={24}>
                                    <TextArea 
                                        rows={4}
                                        cols={30}
                                        tabIndex="3"
                                        placeholder="Message"
                                        id="quick-contact-form-message"
                                        name="quick-contact-form-message"
                                        className="required sm-form-control input-block-level short-textarea" />
                                </Col>
                                <Col span={12}>
                                    <input type="text" class="hidden" id="quick-contact-form-botcheck" name="quick-contact-form-botcheck" value="" />
                                    <input type="hidden" name="prefix" value="quick-contact-form-" />
                                    <Input 
                                        tabIndex="4"
                                        type="submit" 
                                        value="submit"
                                        id="quick-contact-form-submit"
                                        name="quick-contact-form-submit" />
                                </Col>
                            </Row>
                        </Form>
                    </Col>

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