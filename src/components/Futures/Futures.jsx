import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UX_ACTIONS from '../../redux/actions/ux_actions';
import * as USER_ACTIONS from '../../redux/actions/api_actions';
import { Button } from 'antd/lib';
import { ApiOutlined } from '@ant-design/icons';

class Futures extends Component {
    componentDidMount() {
        this.props.userActions.readUsers();
    }

    render() {
        const { uxActions, userActions } = this.props;
        const { isFuturesOpen } = this.props.ux;
        const { users } = this.props.users;

        console.info('state.users: ', users);

        return (
            <div className="Futures ant-back-top">
                <div className="ant-back-top-inner">
                    <div className={`tap-target-wrapper ${isFuturesOpen ? 'open' : 'close'}`}>
                        <div className="tap-target">
                            <div className="tap-target-content white">
                                <h2 className="white">Hello!</h2>
                                <h3 className="white">v1.0.4 Changelog:</h3>
                                <p>
                                    <a href="https://core.telegram.org/bots/api" target="_blank">
                                        <ApiOutlined /> Telegram API
                                    </a>{' '}
                                    is implemented
                                </p>
                                <p>
                                    <a
                                        href="https://developers.google.com/recaptcha/docs/display"
                                        target="_blank"
                                    >
                                        <ApiOutlined /> Google reCaptcha API
                                    </a>{' '}
                                    is implemented
                                </p>
                                <h3 className="white">Roadmap</h3>

                                <p>MongoDb + Fastify</p>

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
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uxActions: bindActionCreators(UX_ACTIONS, dispatch),
        userActions: bindActionCreators(USER_ACTIONS, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        ux: state.ux,
        users: state.users
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Futures);
