import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
// utils
import menu from '../../../utils/menu';
import translate from '../translations';
import JsonLd from '../../../utils/microdata';
// components
import { Helmet } from "react-helmet";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Toolbar from '../../Toolbar';
import { Row, Col } from 'antd';
import {
    CrownOutlined,
    GithubOutlined,
    YoutubeOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';
// import preview from '../../../images/preview.png';

class Game extends Component {

    render() {
        const { microdata } = this.props.ui;
        const { lang } = this.props.ux;
        const videoId = 'nETaVY9GOao';

        return (
            <div className="Game">
                <ContextMenuTrigger id="context-menu">
                    <Helmet>
                        <title>{translate(lang, 'game_title')}</title>
                        <link rel="canonical" href="http://weblogic.com.ua/game" />
                    </Helmet>

                    <Toolbar key={0} />

                    <div className="container">
                        <Row type="flex" justify="center" align="middle">
                            <Col span={24}>
                                <h1 className="center">{translate(lang, 'game_title')}</h1>
                                <h2 className="center">{translate(lang, 'game_subtitle')}</h2>
                                <div className="center">
                                    <span>{translate(lang, 'game_description')}</span>
                                </div>

                                <Row gutter={24} className="links-wrapper center mb-20 mt-20">
                                    <Col xs={{ span: 24 }} sm={{ span: 8 }} className="mb-20 mt-20">
                                        <a href="/game-app" target="_blank" rel="external">
                                            <CrownOutlined /> {translate(lang, 'game_demo')}</a>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 8 }} className="mb-20 mt-20">
                                        <a href="/game-github" target="_blank" rel="external">
                                            <GithubOutlined /> {translate(lang, 'game_git')}</a>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 8 }} className="mb-20 mt-20">
                                        <a href="/patreon" target="_blank" rel="external">
                                            <DollarCircleOutlined /> {translate(lang, 'game_donate')}</a>
                                    </Col>
                                </Row>

                                <div className="preview-wrapper center">
                                    {/* <img src={preview} alt="game preview" className="preview" /> */}
                                    <iframe 
                                        className="preview"
                                        width="640" 
                                        height="360" 
                                        src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1?fs=1`}
                                        title={translate(lang, 'game_title')}
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <JsonLd data={microdata} />
                </ContextMenuTrigger>
                <ContextMenu hideOnLeave id="context-menu">
                    {
                        menu.map((item) => {
                            return (
                                <MenuItem key={item.id}>
                                    <a href={item.url} title={item.id}>
                                        {item.icon} {item.id}</a>
                                </MenuItem>
                            )
                        })
                    }
                </ContextMenu>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
        uxActions: bindActionCreators(UX_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
        ux: state.ux,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);