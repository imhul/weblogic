import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../../../redux/store';
// actions
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
// utils
import JsonLd from '../../../utils/microdata';
import menu from '../../../utils/menu';
import translate from '../translations';
// components
import { Helmet } from 'react-helmet';
import { Wave } from 'react-preloading-component';
import { Collapse } from 'antd';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { Intro, Roadmap, Works, Contact } from './Texts';
import {
  MessageOutlined,
  RocketOutlined,
  PoweroffOutlined,
  CompassOutlined
} from '@ant-design/icons';

const Panel = Collapse.Panel;

class Folio extends Component {
  componentDidMount() {
    setTimeout(() => this.props.uiActions.loadFolio(), 1000);
  }

  render() {
    const { loaded, microdata } = this.props.ui;
    const { active, lang } = this.props.ux;
    const { uxActions } = this.props;

    const texts = [
      {
        id: 'intro',
        name: (
          <div>
            {translate(lang, 'intro')}
            <PoweroffOutlined />
          </div>
        ),
        key: 1,
        text: <Intro />
      },
      {
        id: 'roadmap',
        name: (
          <div>
            {translate(lang, 'roadmap')}
            <CompassOutlined />
          </div>
        ),
        key: 2,
        text: <Roadmap />
      },
      {
        id: 'works',
        name: (
          <div>
            {translate(lang, 'works')}
            <RocketOutlined />
          </div>
        ),
        key: 3,
        text: <Works />
      },
      {
        id: 'contacts',
        name: (
          <div>
            {translate(lang, 'contacts')}
            <MessageOutlined />
          </div>
        ),
        key: 4,
        text: <Contact />
      }
    ];

    return (
      <div className="Folio" tabIndex="1">
        <Helmet>
          <title>My Portfolio</title>
          <link rel="canonical" href="http://weblogic.com.ua/folio" />
        </Helmet>
        <JsonLd data={microdata} />

        <ContextMenuTrigger id="context-menu">
          {!loaded ? (
            <Wave color="#fdd835" />
          ) : (
            <Collapse
              accordion
              destroyInactivePanel
              defaultActiveKey={active}
              onChange={uxActions.tabMod}
              className={active ? 'active' : null}
            >
              {texts.map(load => (
                <Panel
                  id={load.id}
                  header={<div className="bg">{load.name}</div>}
                  key={load.key}
                  showArrow={false}
                >
                  {load.text}
                </Panel>
              ))}
            </Collapse>
          )}
        </ContextMenuTrigger>
        <ContextMenu hideOnLeave id="context-menu">
          {menu.map(item => {
            return (
              <MenuItem key={item.id} onClick={() => history.push(item.url)}>
                {item.icon} {item.id}
              </MenuItem>
            );
          })}
        </ContextMenu>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch),
    uxActions: bindActionCreators(UX_ACTIONS, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    ux: state.ux
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Folio);
