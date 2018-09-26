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

                    <Col span={24}>
                        <h2>
                            <Language
                                dictionary={{
                                    english: "I believe that design makes the world a better",
                                    russian: "Я верю, что дизайн делает мир лучше"
                                }}
                            /> ;)
                        </h2>
                    </Col>

                    <Col span={24} style={{ height: '90px'}}>
                        <Gravatar email="blashirk@gmail.com" size={100} />
                    </Col>

                    <Col span={24} style={{ marginTop: 0}}>
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

                    <Col span={12} className="left-btn">
                        <a 
                            title="my linkedin page"
                            href='https://www.linkedin.com/in/tkachuk-zakhar-04733892/'
                            className="ant-btn ant-btn-background-ghost"
                            target='_blank'
                        >
                            <Icon type='linkedin' />
                            <Language
                                dictionary={{
                                    english: "summary",
                                    russian: "Резюме"
                                }}
                            />
                        </a>
                    </Col>

                    <Col span={12} className="right-btn">
                        <a
                            title="github project"
                            href="https://github.com/imhul/weblogic"
                            className="ant-btn ant-btn-background-ghost"
                            target="_blank"
                        >
                            <Icon type="github" /> github
                        </a>
                    </Col>
                    
                    <Col span={24}>
                        <Language
                            dictionary={{
                                english: <span>Using new technologies, such as <mark> React </mark> or <mark> Hyperapp </mark> always gives inspiration. I prefer non-standard <mark>UI</mark> and <mark>UX</mark> solutions, taking as a basis the concept of <mark>Material Design</mark></span>,
                                russian: <span>Использование новых технологий, таких как <mark>React</mark> или <mark>Hyperapp</mark> всегда даёт вдохновение. Я предпочитаю нестандартные <mark>UI</mark> и <mark>UX</mark> решения, беря за основу концепции <mark>Material Design</mark></span>
                            }}
                        />
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Intro