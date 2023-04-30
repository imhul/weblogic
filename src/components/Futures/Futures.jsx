// core
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { Button } from 'antd/lib';
import { ApiOutlined } from '@ant-design/icons';

const Futures = memo(() => {
    const { isFuturesOpen } = useSelector(state => state.ux);
    // const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS_BEGIN' });

        axios
            .get('/api/users')
            .then(data => {
                dispatch({
                    type: 'FETCH_USERS_SUCESS',
                    payload: data
                });
            })
            .catch(error =>
                dispatch({
                    type: 'FETCH_USERS_FAILURE',
                    payload: error
                })
            );
    });

    return (
        <div className="Futures ant-back-top">
            <div className="ant-back-top-inner">
                <div className={`tap-target-wrapper ${isFuturesOpen ? 'open' : 'close'}`}>
                    <div className="tap-target">
                        <div className="tap-target-content white">
                            <h2 className="white">Hello!</h2>
                            <h3 className="white">v0.0.8 Changelog:</h3>
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
                            onClick={() => dispatch({ type: 'TOGGLE_FUTURES' })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Futures;
