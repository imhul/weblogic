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
import preview from '../../../images/preview.png'

class Game extends Component {

    render() {
        const { microdata } = this.props.ui;
        const videoId = 'nETaVY9GOao';

        return (
            <div className="Game">
                <ContextMenuTrigger id="context-menu">
                    <Helmet>
                        <title>The Game</title>
                        <link rel="canonical" href="http://weblogic.com.ua/game" />
                    </Helmet>

                    <Toolbar key={0} />

                    <div className="container">
                        <Row type="flex" justify="center" align="middle">
                            <Col xs={24} className="">
                                <h1 className="center">Proto-Mass. The Game</h1>
                                <h2 className="center">React-based Pixel-Art Sandbox Game with Indirect Control</h2>
                                <div className="center">
                                    <span>
                                        Far away on a distant planet inhabited by primitive life forms a small colony of robots accidentally trapped must build, develop and fight only to exist... How far can they go?
                                    </span>
                                </div>
                                {/* TODO: add translations */}
                                <div className="links-wrapper center">
                                    <div>
                                        <a href="/game-app" target="_blank" rel="external">
                                            <CrownOutlined /> Netlify App</a>
                                    </div>
                                    <div>
                                        <a href="/game-github" target="_blank" rel="external">
                                            <GithubOutlined /> GitHub Page</a>
                                    </div>
                                    <div>
                                        <a href="/patreon" target="_blank" rel="external">
                                            <DollarCircleOutlined /> Patreon Page</a>
                                    </div>
                                    <div>
                                        <a href="/youtube" target="_blank" rel="external">
                                            <YoutubeOutlined /> Youtube Video</a>
                                    </div>
                                </div>

                                <div className="preview-wrapper center">
                                    {/* <img src={preview} alt="game preview" className="preview" /> */}
                                    <iframe 
                                        loading="lazy"
                                        width="560" 
                                        height="315" 
                                        src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&showinfo=0&autoplay=1`}
                                        title="Proto-Mass Preview" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <JsonLd data={microdata} />
                </ContextMenuTrigger>
                <ContextMenu id="context-menu">
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