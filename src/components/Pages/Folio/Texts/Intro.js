import React, { Component } from 'react';
import { Row, Col, Button, Icon, message } from 'antd';
import { Language } from '../../../../utils/language/provider';
import store from '../../../../utils/store/store';
import Gravatar from 'react-gravatar';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: '',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.language !== this.state.language) {
            this.setState({
                language: store.lang,
            })
        }
    }

    render() {
        return (
            <div className="Intro content">
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

                        <Row gutter={24}>
                            <Col span={12}>
                                <p className="name">
                                    <Language
                                        dictionary={{
                                            english: "Tkachuk Zakhar",
                                            russian: "Ткачук Захар"
                                        }}
                                    />
                                </p>
                                <p className="italic">
                                    <Language
                                        dictionary={{
                                            english: "front-end developer",
                                            russian: "фронт-энд разработчик"
                                        }}
                                    />
                                </p>
                            </Col>

                            <Col span={12}>
                                <a 
                                    className="ant-btn ant-btn-background-ghost"
                                    target='_blank'
                                    href='https://www.linkedin.com/in/tkachuk-zakhar-04733892/'
                                    title="my linkedin page">
                                    <Icon type='linkedin' />
                                    <Language
                                        dictionary={{
                                            english: "summary",
                                            russian: "Резюме"
                                        }}
                                    />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <p>
                    <Language
                        dictionary={{
                            english: <span>Having gone a long way, having gained experience, I chose the best of modern technologies for creating my products. I create sites and applications, drawing inspiration from the <mark>Material Design</mark> concept and <mark>React</mark> library for building user interfaces.</span>,
                            russian: <span>Пройдя длинный путь, получив опыт, я выбрал лучшие из современных технологий для создания своих продуктов. Я создаю сайты и приложения, черпая вдохновение из концепции <mark>Material Design</mark> и использую <mark>React</mark> для создания пользовательских интерфейсов.</span>
                        }}
                    />
                </p>

            </div>
        )
    }
}

export default Intro