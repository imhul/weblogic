import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../../../redux/store';
// actions
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
// components
import { Helmet } from 'react-helmet';
import { message } from 'antd';
// utils
import JsonLd from '../../../utils/microdata';
// images
import '../../../images/print.png';
import '../../../images/logo.png';

class Home extends Component {
  info() {
    message.info({
      content: 'Keep clicking anywhere!',
      duration: 3,
      style: {
        marginTop: '40px'
      }
    });
  }

  componentDidMount() {
    this.info();
    this.props.uxActions.isHome();
    const timeout = setTimeout(() => {
      this.props.uiActions.heroAnimate();
      clearTimeout(timeout);
    }, 500);
  }

  render() {
    const { hero, microdata, heroStyle } = this.props.ui;

    return (
      <div className="Home" onClick={() => history.push('/folio')}>
        <Helmet>
          <title>WebLogic Studio Home</title>
          <link rel="canonical" href="http://weblogic.com.ua/" />
        </Helmet>
        <JsonLd data={microdata} />

        <h1 className="mobile-fix heading-hero" style={heroStyle}>
          {hero.map((symbol, index) => {
            return (
              <span key={index} className={`span-${index}`}>
                {symbol}
              </span>
            );
          })}
          <span className="span-15">
            <i className="icon-lamp" />
          </span>
        </h1>
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
    ui: state.ui
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
