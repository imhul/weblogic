// Компонент-обёртка для LayoutMain, позволяющая осуществлять роутинг внутри себя

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from '../../index';
import history from '../../utils/history';
import { Switch, Route, Router } from "react-router-dom";
import { Layout } from 'antd';
import { LanguageProvider, Language } from '../../utils/language/provider';

// components
import Home from '../Pages/Home';
import Folio from '../Pages/Folio';
import Stats from '../Stats';

const { Content } = Layout;

class Output extends Component {
    render() {
        const NotFound = () => {
            <h1>Sorry! Page Not Found:(</h1>
        }
        return (
            <Provider store={store}>
                <Router history={history}>
                    <LanguageProvider>
                        <Layout className="LayoutMain">
                            { Stats ? <Stats /> : null }
                            <Layout className="Main">
                                <Content>
                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route path="/folio" component={Folio} />
                                        <Route component={NotFound} />
                                    </Switch>
                                </Content>
                            </Layout>
                        </Layout>
                    </LanguageProvider>
                </Router>
            </Provider>
        );
    }
}

export default Output;
