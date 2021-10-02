import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../../redux/store';
import '../../utils/bg';
// actions
import * as UX_ACTIONS from '../../redux/actions/ux_actions';
// components
import { Layout } from 'antd';
import Menu from '../Menu';
import Toolbar from '../Toolbar';
import HowTo from '../HowTo';
import Stats from '../Stats';
import Home from '../Pages/Home';
import Folio from '../Pages/Folio';
import Game from '../Pages/Game';
// import Futures from '../Pages/Home/Futures';
// styles
import '../../fonts/fonts.css';
import '../../scss/index.scss';

const { Content } = Layout;

class Output extends Component {
  componentDidMount() {
    const { uxActions } = this.props;
    history.listen(() => {
      uxActions.updateHistory(history.location.pathname);
    });
  }

  render() {
    const { isHome } = this.props.ux;
    const { technologies } = this.props.ui;

    return (
      <Layout className="LayoutMain">
        {isHome ? <Stats /> : null}
        {isHome ? <HowTo /> : <Toolbar key={0} />}
        <Menu />
        <Layout className="Main">
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/game" component={Game} />
              <Route exact path="/folio" component={Folio} />
              <Route
                path="/patreon"
                component={() => {
                  window.location.href = 'https://www.patreon.com/protomass';
                  return null;
                }}
              />
              <Route
                path="/game-app"
                component={() => {
                  window.location.href = 'https://proto-mass.netlify.app/';
                  return null;
                }}
              />
              <Route
                path="/github"
                component={() => {
                  window.location.href = 'https://github.com/imhul/weblogic';
                  return null;
                }}
              />
              <Route
                path="/codecademy"
                component={() => {
                  window.location.href = 'https://www.codecademy.com/profiles/weblogicfront';
                  return null;
                }}
              />
              <Route
                path="/linkedin"
                component={() => {
                  window.location.href = 'https://www.linkedin.com/in/tkachuk-zakhar-04733892/';
                  return null;
                }}
              />
              <Route
                path="/youtube"
                component={() => {
                  window.location.href =
                    'https://www.youtube.com/watch?v=nETaVY9GOao&list=PLhuamC7vAt9eGXOUIvAKZlDetKB-Uwp0s';
                  return null;
                }}
              />
              <Route
                path="/game-github"
                component={() => {
                  window.location.href = 'https://github.com/imhul/proto-mass';
                  return null;
                }}
              />
              <Route
                path="/isoftbet"
                component={() => {
                  window.location.href = 'https://isoftbet.com/';
                  return null;
                }}
              />
              <Route
                path="/isoftbet-article"
                component={() => {
                  window.location.href =
                    'https://www.softgamings.com/sg-games/isoftbetgames-any/alice-adventure-2/';
                  return null;
                }}
              />
              {technologies.map(item => {
                return (
                  <Route
                    key={item.id}
                    path={`/${item.id}`}
                    component={() => {
                      window.location.href = item.link;
                      return null;
                    }}
                  />
                );
              })}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uxActions: bindActionCreators(UX_ACTIONS, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    ux: state.ux
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Output);
