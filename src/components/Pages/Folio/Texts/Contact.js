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
                <h2 class="uk-text-center">Connect with us</h2>

                <div class="uk-margin-bottom" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                    <ul class="uk-list">
                        <li>
                            <div class="uk-clearfix">
                                <div class="uk-float-right">
                                    <a href="" onclick="event.preventDefault()" id="copy-mail" class="uk-button uk-button-default uk-button-small center msgs"
                                        data-message="<span uk-icon='icon: check'></span> Mail is copied ;)">Copy to clipboard</a>
                                </div>
                                <div class="uk-float-left">
                                    <span id="decoded-mail" class="mobile-fix uk-margin-bottom uk-display-block uk-text-center"></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="uk-clearfix">
                                <div class="uk-float-right">
                                    <a href="" onclick="event.preventDefault()" id="copy-phone" class="uk-button uk-button-default uk-button-small center msgs"
                                        data-message="<span uk-icon='icon: check'></span> Phone is copied ;)">Copy to clipboard</a>
                                </div>
                                <div class="uk-float-left">
                                    <span id="decoded-phone" class="mobile-fix uk-margin-bottom uk-display-block uk-text-center"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <p class="" itemprop="description">
                    Development, design and creation of sites, SEO optimization, website promotion, as well as training courses on the creation
                    and promotion of sites.
                    <br />Разработка и создание сайтов, SEO оптимизация, раскрутка и продвижение сайтов, а так же обучающие курсы по
                    созданию и продвижению сайтов.</p>

            </div>
                )
            }
        }
        
export default Contact