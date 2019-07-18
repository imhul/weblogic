import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UI_ACTIONS from '../../../../redux/actions/ui_actions';
import { Row, Col, Icon, message } from 'antd';
import translate from '../../translations';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';

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
        const url = 'https://www.google.com/recaptcha/api/siteverify';
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const secret = '6LcJb-MSAAAAAE1q1jrTawtoA05gpzSrPtScgHnz';
        const apiURL = `${cors}${url}?secret=${secret}&response=${data}&remoteip=${ui.currentUser.ip}`;
        
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
        const key = '6LcJb-MSAAAAABHUi372bdkpugKzG-5hipLXDti2';

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