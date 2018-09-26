import React, { Component } from 'react';
import { Row, Col, Button, Icon, message } from 'antd';
import { LanguageProvider, Language } from '../../../../utils/language/provider';
import Gravatar from 'react-gravatar';

const summarySuccess = () => {
    message.info('Summary already downloaded');
};

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Contact content">
                <h2>Connect with us</h2>

                <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <ul>
                        <li>
                            <div>
                                <div>
                                    <a href="" id="copy-mail"
                                        data-message="<span uk-icon='icon: check'></span> Mail is copied ;)">Copy to clipboard</a>
                                </div>
                                <div>
                                    <span id="decoded-mail"></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div>
                                    <a href="" id="copy-phone"
                                        data-message="<span uk-icon='icon: check'></span> Phone is copied ;)">Copy to clipboard</a>
                                </div>
                                <div className="uk-float-left">
                                    <span id="decoded-phone"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <p itemProp="description">
                    Development, design and creation of sites, SEO optimization, website promotion, as well as training courses on the creation
                    and promotion of sites.
                    <br />Разработка и создание сайтов, SEO оптимизация, раскрутка и продвижение сайтов, а так же обучающие курсы по
                    созданию и продвижению сайтов.</p>

            </div>
        )
    }
}

export default Contact