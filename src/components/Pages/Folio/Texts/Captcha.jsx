import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../../redux/actions/ui_actions';
import { Row, Col, message } from 'antd/lib';
import safe from '../../../../utils/safe';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
import translate from '../../../../utils/translations';

// https://cors-anywhere.herokuapp.com/corsdemo
const corsUpdateURL =
    'https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=ab883d13fad6967e2d126e5e7565362a0cc871ad18a21bd639a20c9bb9478f56';

class Captcha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            retried: false,
            inRetry: false,
            ipified: false
        };
    }

    componentDidMount() {
        const ipify = {
            URL: 'https://api.ipify.org/',
            FORMAT: '?format=json'
        };
        axios.get(ipify.URL + ipify.FORMAT).then(response => {
            if (response.data.ip !== '') {
                this.props.uiActions.authenticate(response.data.ip);
                this.setState({ ipified: true });
            }
        });
    }

    async retry() {
        this.setState({ inRetry: true });
        await axios.get(corsUpdateURL).finally(() =>
            this.setState({
                retried: true,
                inRetry: false
            })
        );
    }

    verify(data) {
        const { lang } = this.props.ux;
        const { ui, uiActions } = this.props;
        const { link } = safe;
        if (!this.state.ipified || !ui.currentUser.ip.length) {
            return message.error({
                content: `${translate(lang, 'message_error_recaptcha')}`,
                duration: 3,
                style: {
                    marginTop: '40px'
                }
            });
        }
        const apiURL = `${link}${data}&remoteip=${ui.currentUser.ip}`;
        axios
            .post(apiURL)
            .then(response => {
                if (response.status === 200 && response.data) {
                    uiActions.getRobot(response.data);
                    message.success({
                        content: `${translate(lang, 'message_success_recaptcha')}`,
                        duration: 3,
                        style: {
                            marginTop: '40px'
                        }
                    });
                }
            })
            .catch(() => {
                this.state.retried
                    ? message.error({
                          content: `${translate(lang, 'message_error_recaptcha')}`,
                          duration: 3,
                          style: {
                              marginTop: '40px'
                          }
                      })
                    : this.retry();
            });
    }

    verifyCallback = response => {
        this.verify(response);
    };

    render() {
        const { lang } = this.props.ux;
        const { key } = safe;

        return this.state.inRetry ? (
            <h2 class="center">{translate(lang, 'message_retry_recaptcha')}</h2>
        ) : (
            <Row gutter={24} type="flex" justify="center" align="middle">
                <Col span={12} className="center">
                    <Recaptcha
                        sitekey={key}
                        theme="dark"
                        verifyCallback={response => this.verifyCallback(response)}
                        hl={lang === 'ukrainian' ? 'ua' : 'en'}
                    />
                </Col>
            </Row>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        ui: state.ui,
        ux: state.ux
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Captcha);
