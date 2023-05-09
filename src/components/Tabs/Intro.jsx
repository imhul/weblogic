// core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// utils
import translate from '../../utils/translations';
import { technologies } from '../../utils/technologies';
// components
import { Row, Col } from 'antd/lib';
import Gravatar from 'react-gravatar';
// assets
import {
    SassLogo,
    ParcelLogo,
    SvelteLogo,
    UikitLogo,
    MaterializeLogo,
    AntdLogo,
    MobxLogo,
    ReduxLogo,
    ReactLogo
} from '../../images/logos';

class Intro extends Component {
    render() {
        const { lang } = this.props.ux;

        return (
            <div className="Intro content">
                <Row gutter={24}>
                    <Col span={24}>
                        <h2>{translate(lang, 'believe')} ;)</h2>
                    </Col>

                    <Col span={24} style={{ height: '90px' }} className="center">
                        <Gravatar email="blashirk@gmail.com" size={100} />
                    </Col>

                    <Col span={24} style={{ marginTop: 0 }} className="center">
                        <p className="name">{translate(lang, 'my_name')}</p>
                        <p className="italic">{translate(lang, 'front_dev')}</p>
                    </Col>

                    <Col span={24}>
                        <p>{translate(lang, 'tagline')}</p>
                    </Col>

                    <Col span={24}>
                        <h2 className="margin">{translate(lang, 'what_i_do')}</h2>

                        <p>{translate(lang, 'my_offer')}</p>

                        <h2 className="margin">{translate(lang, 'fav_tech')}</h2>

                        {/* LOGOS */}
                        <Row
                            gutter={24}
                            type="flex"
                            justify="center"
                            align="middle"
                            className="logos"
                        >
                            <Col span={8}>
                                <ReactLogo />
                            </Col>
                            <Col span={8}>
                                <ReduxLogo />
                            </Col>
                            <Col span={8}>
                                <MobxLogo />
                            </Col>
                        </Row>

                        <Row
                            gutter={24}
                            type="flex"
                            justify="center"
                            align="middle"
                            className="logos"
                        >
                            <Col span={8}>
                                <AntdLogo />
                            </Col>
                            <Col span={8}>
                                <MaterializeLogo />
                            </Col>
                            <Col span={8}>
                                <UikitLogo />
                            </Col>
                        </Row>

                        <Row
                            gutter={24}
                            type="flex"
                            justify="center"
                            align="middle"
                            className="logos"
                        >
                            <Col span={8}>
                                <SvelteLogo />
                            </Col>
                            <Col span={8}>
                                <ParcelLogo />
                            </Col>
                            <Col span={8}>
                                <SassLogo />
                            </Col>
                        </Row>

                        {/* TECHS */}
                        <Row className="tech" gutter={24} type="flex" justify="center" align="top">
                            <Col
                                lg={{ span: 6 }}
                                xs={{ span: 24 }}
                                sm={{ span: 24 }}
                                md={{ span: 6 }}
                            >
                                {/* LIBRARIES */}
                                <h3>Libraries</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'library')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                                {/* CSS FRAMEWORKS */}
                                <h3>Frameworks</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'fw')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                                {/* CSS FRAMEWORKS */}
                                <h3>CSS Frameworks</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'cssfw')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                                {/* BUNDLERS */}
                                <h3>Bundlers</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'bundler')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                                {/* GIT */}
                                <h3>Version Control</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'git')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                                {/* CRM */}
                                <h3>CRM</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'crm')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                            </Col>

                            <Col
                                lg={{ span: 6 }}
                                xs={{ span: 24 }}
                                sm={{ span: 24 }}
                                md={{ span: 6 }}
                            >
                                <h3>Languages</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'lang')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>

                                {/* DESIGN */}
                                <h3>Design</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'design')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>

                                {/* CMS */}
                                <h3>CMS</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'cms')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                            </Col>

                            <Col
                                lg={{ span: 6 }}
                                xs={{ span: 24 }}
                                sm={{ span: 24 }}
                                md={{ span: 6 }}
                            >
                                <h3>APIs</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'api')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>

                                <h3>Tracking</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'track')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                                <h3>SEO</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'seo')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>

                                <h3>IDEs</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'ide')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                                <h3>Package Managers</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'packmen')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                            </Col>

                            <Col
                                lg={{ span: 6 }}
                                xs={{ span: 24 }}
                                sm={{ span: 24 }}
                                md={{ span: 6 }}
                            >
                                {/* UTILS */}
                                <h3>Utils</h3>
                                <ul>
                                    {technologies
                                        .filter(item => item.list === 'other')
                                        .map(item => {
                                            return <li key={item.id}>{item.id}</li>;
                                        })}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ui: state.ui,
        ux: state.ux
    };
}

export default connect(mapStateToProps)(Intro);
