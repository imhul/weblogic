import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import * as UI_ACTIONS from '../../../redux/actions/ui_actions';
import * as UX_ACTIONS from '../../../redux/actions/ux_actions';
// components
import { Helmet } from 'react-helmet';
import { message } from 'antd';
// images
import '../../../images/print.png';
import '../../../images/logo.png';

class Home extends Component {

  componentDidMount() {
    message.info({
      content: 'Keep clicking anywhere!',
      duration: 3,
      style: {
        marginTop: '40px'
      }
    });
    const timeout = setTimeout(() => {
      this.props.uiActions.heroAnimate();
      clearTimeout(timeout);
    }, 500);
  }

  render() {
    const { hero, heroStyle } = this.props.ui;
    const { uxActions } = this.props;

    return (
      <div className="Home" onClick={() => uxActions.updateLocation('Folio')}>
        <Helmet>
          <title>WebLogic Studio Home</title>
          <link rel="canonical" href="http://weblogic.com.ua/" />
        </Helmet>
        

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
