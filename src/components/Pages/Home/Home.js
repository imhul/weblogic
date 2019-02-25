import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Icon, message } from 'antd';
import { Language } from '../../../utils/language/provider';
import JsonLd from '../../../utils/microdata';
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
// import anime from "animejs";
import { HashLink } from 'react-router-hash-link';
import { ContextMenu, MenuItem, SubMenu, ContextMenuTrigger } from "react-contextmenu";
import '../../../images/print.png';
import '../../../images/logo.png';

class Home extends Component {

    componentDidMount() {
        this.info();
        setTimeout(() => {          
            this.props.uiActions.heroAnimate();
        }, 500);
    };

    info() {
        message.info('Keep clicking anywhere on the screen around the header to check how strong your device is', 6)
    };

    changeLocation() {
        this.props.uiActions.changeLocation(false)
    };

    render() {
        const { hero, microdata, heroStyle } = this.props.ui;

        return (
            <div className="Home">
                <ContextMenuTrigger id="context-menu">

                    <Helmet>
                        <title>WebLogic Studio Home</title>
                        <link rel="canonical" href="http://weblogic.com.ua/" />
                    </Helmet>
                    
                    <Link to="/folio" onClick={ this.changeLocation }>
                        <h1 className="mobile-fix heading-hero" style={ heroStyle }>
                            { hero.map(( symbol, index ) => {
                                return (
                                    <span
                                        key={ index }
                                        className={`span-${ index }`}>
                                        { symbol }
                                    </span>)
                            })}
                            <span className="span-15">
                                <i className="icon-lamp" />
                            </span>
                        </h1>
                    </Link>
                    <JsonLd data={microdata.home} />
                </ContextMenuTrigger>
                <ContextMenu id="context-menu">
                    <MenuItem key="folio">
                        <Link to="/folio">
                            <Icon type="experiment" theme="outlined" /> About
                        </Link>
                    </MenuItem>
                    <MenuItem key="linkedin">
                        <Link to="/linkedin" onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.linkedin.com/in/tkachuk-zakhar-04733892/")
                        }}>
                            <Icon type='linkedin' /> Summary</Link>
                    </MenuItem>
                    <MenuItem key="github">
                        <Link to="/github" onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/imhul")
                        }}>
                            <Icon type="github" /> Github
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.info} key="how-to">
                        <Icon type="question-circle" /> How-to
                    </MenuItem>
                    {/* <MenuItem key="folio/intro">
                        <HashLink to="folio#intro">Intro</HashLink>
                    </MenuItem>
                    <MenuItem key="folio/roadmap">
                        <HashLink to="folio#roadmap">Roadmap</HashLink>
                    </MenuItem>
                    <MenuItem key="folio/works">
                        <HashLink to="folio#works">Works</HashLink>
                    </MenuItem>
                    <MenuItem key="folio/contacts">
                        <HashLink to="folio#contacts">Contacts</HashLink>
                    </MenuItem> */}
                </ContextMenu>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch),
  }
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);