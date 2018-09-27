import React, { Component } from 'react';
import { Row, Col, Button, Icon, message } from 'antd';
import { Language } from '../../../../utils/language/provider';
import Base64 from '../../../../utils/decode';
import Clipboard from 'react-clipboard.js';
import Gravatar from 'react-gravatar';

const mCode = () => Base64.decode('Ymxhc2hpcmtAZ21haWwuY29t');
const fCode = () => Base64.decode('KzM4IDA2MyA0NDIgMjUgMzc=');

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess() {
        console.info('successfully copied');
    }

    render() {

        return (
            <div className="Contact content" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">

                <Row gutter={24}>
                    <Col span={12}>
                        { Base64.decode('Ymxhc2hpcmtAZ21haWwuY29t') }
                    </Col>
                    <Col span={12}>
                        <Clipboard 
                            className="ant-btn ant-btn-background-ghost" 
                            option-text={ mCode } 
                            onSuccess={this.onSuccess}>
                                <Icon type="copy" />
                                Copy to clipboard
                        </Clipboard>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        { Base64.decode('KzM4IDA2MyA0NDIgMjUgMzc=') }
                    </Col>
                    <Col span={12}>
                        <Clipboard 
                            className="ant-btn ant-btn-background-ghost" 
                            option-text={ fCode } 
                            onSuccess={this.onSuccess}>
                                <Icon type="copy" />
                                Copy to clipboard
                        </Clipboard>
                    </Col>
                </Row>

                <p itemProp="description">
                    <Language
                        dictionary={{
                            english: "Development, design and creation of sites, SEO optimization, website promotion, as well as training courses on the creation and promotion of sites.",
                            russian: "Разработка и создание сайтов, SEO оптимизация, раскрутка и продвижение сайтов, а так же обучающие курсы по созданию и продвижению сайтов."
                        }}
                    />
                </p>
            </div>
        )
    }
}

export default Contact;