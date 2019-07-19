import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
import { Button, } from 'antd';
import translate from '../translations';

class Futures extends Component {

    render() {
        const { uxActions } = this.props;
        const { isFuturesOpen } = this.props.ux;

        return (
            <div className="ant-back-top">
                <div className="ant-back-top-inner">
                    <div className={ `tap-target-wrapper ${ isFuturesOpen ? "open" : "close" }`} >
                        <div className="tap-target">
                            <div className="tap-target-content white">
                                <h2 className="white">Hello!</h2>
                                <h3 className="white">v1.0.4</h3>
                                <h4 className="white">Futures implemented in the contact section:</h4>
                                <p>Telegram API</p>
                                <p>reCaptcha API</p>
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
