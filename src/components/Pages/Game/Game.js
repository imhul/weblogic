import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { bindActionCreators } from 'redux';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
import menu from '../../../utils/menu';
import translate from '../translations';
import JsonLd from '../../../utils/microdata';
import Toolbar from '../../Toolbar';
import {
    CrownOutlined,
    GithubOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';
import preview from '../../../images/preview.png'

class Game extends Component {

    render() {
        const { microdata } = this.props.ui;

        return (
            <div className="Game">
                <ContextMenuTrigger id="context-menu">
                    <Helmet>
                        <title>The Game</title>
                        <link rel="canonical" href="http://weblogic.com.ua/game" />
                    </Helmet>

                    <Toolbar key={0} />

                    <h1 className="center">Proto-Mass. The Game</h1>
                    <div className="center">React-based Sandbox Game with Indirect Control</div>

                    <div className="links-wrapper center">
                        <div>
                            <a href="https://proto-mass.netlify.app/">
                                <CrownOutlined /> Netlify App</a>
                        </div>
                        <div>
                            <a href="https://github.com/imhul/proto-mass">
                                <GithubOutlined /> GitHub Page</a>
                        </div>
                        <div>
                            <a href="https://www.patreon.com/protomass">
                                <DollarCircleOutlined /> Patreon Page</a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/watch?v=nETaVY9GOao&list=PLhuamC7vAt9eGXOUIvAKZlDetKB-Uwp0s">
                                <YoutubeOutlined /> Youtube Video</a>
                        </div>
                    </div>

                    <div className="preview-wrapper center">
                        <img src={preview} alt="game preview" className="preview" />
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