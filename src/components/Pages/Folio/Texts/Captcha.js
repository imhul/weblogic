import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../../redux/actions/ui_actions';
import { Row, Col, Icon, message } from 'antd';
import translate from '../../translations';
import Base64 from '../../../../utils/decode';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';

const link = Base64.decode('aHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpL3NpdGV2ZXJpZnk/c2VjcmV0PTZMY0piLU1TQUFBQUFFMXExanJUYXd0b0EwNWdwelNyUHRTY2dIbnomcmVzcG9uc2U9');

class Captcha extends Component {

    componentDidMount() {
        const ipify = {
            URL: 'https://api.ipify.org/', 
            FORMAT: '?format=json'
        };
        axios.get(ipify.URL + ipify.FORMAT)
        .then(response => {
            if(response.data.ip !== '') {
                this.props.uiActions.authenticate(response.data.ip)
            }
        })
    };

    verify(data) {
        const { ui, uiActions } = this.props;
        const apiURL = `${link}${data}&remoteip=${ui.currentUser.ip}`;
        console.log(apiURL)
        axios.post(apiURL)
        .then(response => {
            // console.info("currentUser: ", ui.currentUser);
            if(response.status === 200 && response.data) {
                uiActions.getRobot(response.data)
            }
        })
        .catch(error => console.info("verify error: ", error));
    };

    verifyCallback = (response) => {
        this.verify(response)
    };

    render() {
        const { lang } = this.props.ux;
        const key = Base64.decode('NkxjSmItTVNBQUFBQUJIVWkzNzJiZGtwdWdLekctNWhpcExYRHRpMg==');

        return (
            <Row gutter={24} type="flex" justify="center" align="middle">
                <Col span={12} className="center">
                    <Recaptcha
                        sitekey={key}
                        theme="dark"
                        verifyCallback={response => this.verifyCallback(response)}
                        hl={ lang === "russian" ? "uk" : "en"}
                    />
                </Col>
            </Row>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
        ux: state.ux,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Captcha);