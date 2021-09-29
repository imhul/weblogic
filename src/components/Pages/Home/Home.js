import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { message } from 'antd';
import {
    QuestionCircleOutlined
} from '@ant-design/icons';
import JsonLd from '../../../utils/microdata';
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
import { history } from '../../../redux/store';
// import anime from "animejs";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import menu from '../../../utils/menu';
import '../../../images/print.png';
import '../../../images/logo.png';

class Home extends Component {

    componentDidMount() {
        this.info();
        this.props.uxActions.isHome();
        setTimeout(() => {
            this.props.uiActions.heroAnimate();
        }, 500);
    };

    info() {
        message.info('Keep clicking anywhere!', 3)
    };

    render() {
        const { hero, microdata, heroStyle } = this.props.ui;

        return (
            <div className="Home" onClick={() => history.push('/folio')}>
                <ContextMenuTrigger id="context-menu">
                    <Helmet>
                        <title>WebLogic Studio Home</title>
                        <link rel="canonical" href="http://weblogic.com.ua/" />
                    </Helmet>

                    <h1 className="mobile-fix heading-hero" style={heroStyle}>
                        {hero.map((symbol, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`span-${index}`}>
                                    {symbol}
                                </span>)
                        })}
                        <span className="span-15">
                            <i className="icon-lamp" />
                        </span>
                    </h1>
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
                    <MenuItem onClick={this.info} key="how-to">
                        <QuestionCircleOutlined /> How-to
                    </MenuItem>
                </ContextMenu>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
        uxActions: bindActionCreators(UX_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);