import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Wave } from 'react-preloading-component';
import LanguageProvider from '../provider';
import { Collapse, Icon } from 'antd';
import texts from './Texts';
import Toolbar from './Toolbar';
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const Panel = Collapse.Panel;

class Folio extends Component {
    componentDidMount() {
        setTimeout(() => this.props.uiActions.loadFolio(), 1000)
    };

    render() {
        const { loaded, active } = this.props.ui;
        const { uiActions } = this.props;

        return (
            <div className="Folio">
                <LanguageProvider>
                    <Helmet>
                        <title>My Portfolio</title>
                    </Helmet>

                    <ContextMenuTrigger id="context-menu">
                        { !loaded ? <Wave color="#fdd835" /> : 
                            <Collapse 
                                accordion 
                                destroyInactivePanel
                                defaultActiveKey={[active]}
                                onChange={ uiActions.tabMod } 
                                className={ active ? 'active' : null }>
                            
                                <Toolbar key={0} />

                                { texts.map(( load ) => (
                                        <Panel 
                                            id={ load.id }
                                            header={ load.name } 
                                            key={ load.key } 
                                            showArrow={ false }>
                                            { load.text }
                                        </Panel>
                                )) } 
                            </Collapse>
                        }
                    </ContextMenuTrigger>

                    <ContextMenu id="context-menu">
                        <MenuItem onClick={ uiActions.toHome }>
                            <Icon type="home" theme="outlined" /> Home
                        </MenuItem>
                        <MenuItem onClick={(e) => {
                                e.preventDefault();
                                window.open("https://www.linkedin.com/in/tkachuk-zakhar-04733892/")
                        }}>
                            <Icon type='linkedin' /> Summary
                        </MenuItem>
                        <MenuItem onClick={(e) => {
                                e.preventDefault();
                                window.open("https://github.com/imhul")
                        }}>
                            <Icon type="github" /> Github
                        </MenuItem>
                    </ContextMenu>
                </LanguageProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Folio);