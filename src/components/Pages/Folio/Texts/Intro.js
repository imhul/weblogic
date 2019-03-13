import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Icon, message } from 'antd';
import Gravatar from 'react-gravatar';

import logos from '../../../../images/logos';

class Intro extends Component {
    render() {
        const { technologies } = this.props.ui;
        
        return (
            <div className="Intro content">
                <Row gutter={24}>

                    <Col span={24}>
                        <h2>
                            <Language
                                dictionary={{
                                    english: "I believe that design makes the world better",
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
                                    english: "Summary",
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
                            <Icon type="github" />github
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

                    <Col span={24}>

                        <h2 className="margin">
                            <Language
                                dictionary={{
                                    english: "What I do?",
                                    russian: "Что я предлагаю"
                                }}
                            />
                        </h2>

                        <Language
                            dictionary={{
                                english: <p>I offer turnkey websites development (including but not limited to): UI/UX design and mockup drawing, responsive and adaptive design. I also advise on promotion and search engine optimization of web resourses</p>,
                                russian: <p>Я предлагаю услуги по разработке сайтов под ключ, такие как: разработка дизайна, включая UI/UX дизайн и отрисовку макета, резиновая или адаптивная вёрстка, разработка и поисковая олптимизация сайта. Так же я предоставляю консультации по продвижению и поисковой оптимизации интернет-ресурсов.</p>
                            }}
                        />

                        <h2 className="margin">
                            <Language
                                dictionary={{
                                    english: "Favorite technologies",
                                    russian: "Любимые технологии"
                                }}
                            />
                        </h2>

                        <Row gutter={24} type="flex" justify="center" align="middle">
                            <Col span={8}>
                                <a href="https://reactjs.org/" title="React page" className="">
                                    { logos.reactLogo }
                                </a>
                            </Col>
                            <Col span={8}>
                                <a href="https://redux.js.org/" title="Redux page" className="">
                                    { logos.reduxLogo }
                                </a>
                            </Col>
                            <Col span={8}>
                                <a href="https://redux-saga.js.org/" title="Redux-Saga page" className="">
                                    { logos.reduxSagaLogo }
                                </a>
                            </Col>
                        </Row>

                        <Row gutter={24} type="flex" justify="center" align="middle">
                            <Col span={8}>
                                <a href="https://ant.design/" title="Ant Design page" className="">
                                    { logos.antdLogo }
                                </a>
                            </Col>
                            <Col span={8}>
                                <a href="https://materializecss.com/" title="Materialize page" className="">
                                    { logos.materializeLogo }
                                </a>
                            </Col>
                            <Col span={8}>
                                <a href="https://getuikit.com/" title="UIKit page" className="">
                                     { logos.uikitLogo }
                                </a>
                            </Col>
                        </Row>

                        <Row gutter={24} type="flex" justify="center" align="middle">
                            <Col span={8}>
                                <a href="https://getbootstrap.com/" title="Bootstrap page" className="">
                                    { logos.bootstrapLogo }
                                </a>
                            </Col>
                            <Col span={8}>
                                <a href="https://parceljs.org/" title="Parcel page" className="">
                                    { logos.parcelLogo }
                                </a>
                            </Col>
                            <Col span={8}>
                                <a href="https://sass-lang.com/" title="SASS page" className="">
                                     { logos.sassLogo }
                                </a>
                            </Col>
                        </Row>

                        <Row className="tech" gutter={24} type="flex" justify="center" align="top">
                            <Col lg={{span: 8}} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                                <h3>Libraries</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'library').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>
                                <h3>Design</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'design').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>

                                <h3>Package Managers</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'packmen').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>

                                <h3>CMS</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'cms').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>
                                
                            </Col>
                            
                            <Col lg={{span: 8}} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                                <h3>Languages</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'lang').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>
                                <h3>Frameworks</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'fw').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>
                                <h3>Version Control</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'git').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>

                                <h3>Other</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'other').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>
                                
                            </Col>
                            
                            <Col lg={{span: 8}} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                                <h3>Bundlers</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'bundler').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>

                                <h3>APIs</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'api').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>
                                <h3>Tracking</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'track').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>
                                <h3>SEO</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'seo').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>

                                <h3>IDEs</h3>
                                <ul>
                                    { technologies.filter((item) => item.list === 'ide').map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} target="_blank" title={`${item.id} page`}>
                                                    {item.id}
                                                </a>
                                            </li>
                                        )
                                    }) }
                                </ul>

                            </Col>
                            
                        </Row>

                    </Col>
                </Row>
            </div>
        )
    }
};


function mapStateToProps(state) {
  return {
    ui: state.ui,
  }
};

export default connect(mapStateToProps)(Intro);