import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Icon, message } from 'antd';
import JsonLd from '../../../utils/microdata';
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
// import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
// import { push } from 'connected-react-router';
import { history } from '../../../redux/store';
// import anime from "animejs";
import { ContextMenu, MenuItem, SubMenu, ContextMenuTrigger } from "react-contextmenu";
import '../../../images/print.png';
import '../../../images/logo.png';

class Home extends Component {

    componentDidMount() {
        this.info();
        // console.log("props: ", this.props);
        setTimeout(() => {          
            this.props.uiActions.heroAnimate();
        }, 500);
    };

    info() {
        message.info('Keep clicking anywhere on the screen around the header to check how strong your device is', 6)
    };

    // changePage() {
    //     this.props.uxActions.goFolio()
    //     history.push('/folio');
    // };

    render() {
        const { hero, microdata, heroStyle } = this.props.ui;
        // const { uxActions } = this.props;

        return (
            <div className="Home" onClick={() => history.push('/folio')}>
                <ContextMenuTrigger id="context-menu">

                    <Helmet>
                        <title>WebLogic Studio Home</title>
                        <link rel="canonical" href="http://weblogic.com.ua/" />
                    </Helmet>
                    
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
                    <JsonLd data={microdata} />
                </ContextMenuTrigger>
                <ContextMenu id="context-menu">
                    <MenuItem key="folio" onClick={() => history.push('/folio')}>
                     
                            <Icon type="experiment" theme="outlined" /> About
                    
                    </MenuItem>
                    <MenuItem key="linkedin" onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.linkedin.com/in/tkachuk-zakhar-04733892/")
                        }}>
                            <Icon type='linkedin' /> Summary
                    </MenuItem>
                    <MenuItem key="github" onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/imhul")
                        }}>
                            <Icon type="github" /> Github
                    </MenuItem>
                    <MenuItem onClick={this.info} key="how-to">
                        <Icon type="question-circle" /> How-to
                    </MenuItem>
                </ContextMenu>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(UI_ACTIONS, dispatch),
        // uxActions: bindActionCreators(UX_ACTIONS, dispatch),
    }
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);