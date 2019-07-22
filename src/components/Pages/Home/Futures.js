import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
import { Button, Icon } from 'antd';
// import collection from '../../../../db';

class Futures extends Component {

    render() {
        const { uxActions } = this.props;
        const { isFuturesOpen } = this.props.ux;

        return (
            <div className="Futures ant-back-top">
                <div className="ant-back-top-inner">
                    <div className={ `tap-target-wrapper ${ isFuturesOpen ? "open" : "close" }`} >
                        <div className="tap-target">
                            <div className="tap-target-content white">
                                <h2 className="white">Hello!</h2>
                                <h3 className="white">v1.0.4 Changelog:</h3>
                                <p>
                                    <a href="https://core.telegram.org/bots/api" target="_blank">
                                        <Icon type="api" /> Telegram API
                                    </a> is implemented
                                </p>
                                <p>
                                    <a href="https://developers.google.com/recaptcha/docs/display" target="_blank">
                                        <Icon type="api" /> Google reCaptcha API
                                    </a> is implemented
                                </p>
                                <h3 className="white">Roadmap</h3>

                                <p>MongoDb + express.js</p>

                                {/* { collection } */}
                            </div>
                        </div>
                        <div className="tap-target-wave">
                            <Button
                                type="primary"
                                shape="circle"
                                icon="fire"
                                size="large"
                                onClick={uxActions.toggleFutures}
                            />
                        </div>
                    </div>
                </div>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Futures);
