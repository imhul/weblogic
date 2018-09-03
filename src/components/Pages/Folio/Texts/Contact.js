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
            <div className="container">
                <h2 className="uk-text-center">Connect with us</h2>

                <div className="uk-margin-bottom" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <ul className="uk-list">
                        <li>
                            <div className="uk-clearfix">
                                <div className="uk-float-right">
                                    <a href="" id="copy-mail" className="uk-button uk-button-default uk-button-small center msgs"
                                        data-message="<span uk-icon='icon: check'></span> Mail is copied ;)">Copy to clipboard</a>
                                </div>
                                <div className="uk-float-left">
                                    <span id="decoded-mail" className="mobile-fix uk-margin-bottom uk-display-block uk-text-center"></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-clearfix">
                                <div className="uk-float-right">
                                    <a href="" id="copy-phone" className="uk-button uk-button-default uk-button-small center msgs"
                                        data-message="<span uk-icon='icon: check'></span> Phone is copied ;)">Copy to clipboard</a>
                                </div>
                                <div className="uk-float-left">
                                    <span id="decoded-phone" className="mobile-fix uk-margin-bottom uk-display-block uk-text-center"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <p className="" itemProp="description">
                    Development, design and creation of sites, SEO optimization, website promotion, as well as training courses on the creation
                    and promotion of sites.
                    <br />Разработка и создание сайтов, SEO оптимизация, раскрутка и продвижение сайтов, а так же обучающие курсы по
                    созданию и продвижению сайтов.</p>

            </div>
        )
    }
}

export default Contact