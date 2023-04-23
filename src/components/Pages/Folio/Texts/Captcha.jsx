import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../../redux/actions/ui_actions';
import { Row, Col, message } from 'antd/lib';
import safe from '../../../../utils/safe';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
import translate from '../../../../utils/translations';

class Captcha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshed: false,
            ipified: false
        };
    }

    componentDidMount() {
        axios.get(safe.ipify).then(response => {
            if (response.data.ip !== '') {
                this.props.uiActions.authenticate(response.data.ip);
                this.setState({ ipified: true });
            }
        });
        axios.get(safe.cURL).finally(() =>
            this.setState({
                refreshed: true,
            }));
    }

    verify(data) {
        const { lang } = this.props.ux;
        const { ui, uiActions } = this.props;
        const { link } = safe;
        if (!this.state.refreshed || !this.state.ipified || !ui.currentUser.ip.length) {
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
                message.error({
                    content: `${translate(lang, 'message_error_recaptcha')}`,
                    duration: 3,
                    style: {
                        marginTop: '40px'
                    }
                })
            });
    }

    render() {
        const { lang } = this.props.ux;
        const { key } = safe;

        return (<Row gutter={24} type="flex" justify="center" align="middle">
            <Col span={12} className="center">
                <Recaptcha
                    sitekey={key}
                    theme="dark"
                    verifyCallback={response => this.verify(response)}
                    hl={lang === 'ukrainian' ? 'ua' : 'en'}
                />
            </Col>
        </Row>);
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
