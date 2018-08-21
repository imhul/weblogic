import React, { Component } from 'react';
import { Row, Col, Button, Icon, message } from 'antd';
import { Language } from '../../../../utils/language/provider';
import Gravatar from 'react-gravatar';

const summarySuccess = () => {
    message.info('Summary already downloaded');
};

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <Row gutter={24}>
                    <Col span={6}>
                        <Gravatar email="blashirk@gmail.com" size={100} />
                    </Col>
                    <Col span={18}>
                        <h2>
                            <Language
                                dictionary={{
                                    english: "I believe that design makes the world a better",
                                    russian: "Я верю, что дизайн делает мир лучше"
                                }}
                            /> ;)
                        </h2>
                        <p>
                            <Language
                                dictionary={{
                                    english: "Tkachuk Zakhar",
                                    russian: "Ткачук Захар"
                                }}
                            />
                        </p>
                        <p>
                            <Language
                                dictionary={{
                                    english: "front-end developer",
                                    russian: "фронт-энд разработчик"
                                }}
                            />
                        </p>

                        <Button type="default" icon="download" loading={this.state.iconLoading} onClick={this.summarySuccess}>
                            <Language
                                dictionary={{
                                    english: "summary",
                                    russian: "Резюме"
                                }}
                            />
                        </Button>
                    </Col>
                </Row>


                <p>
                    <Language
                        dictionary={{
                            english: "Having gone a long way, having gained experience, I chose the best of modern technologies for creating my products. I create sites and applications, drawing inspiration from the Material Design concept and React library for building user interfaces.",
                            russian: "Привет!"
                        }}
                    />
                </p>

            </div>
        )
    }
}

export default Intro