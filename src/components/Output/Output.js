// Компонент-обёртка для LayoutMain, позволяющая осуществлять роутинг внутри себя

import React, { Component } from 'react';
import history from '../../utils/history/history';
import {Helmet} from "react-helmet";
import { Router } from "react-router-dom";
import LayoutMain from '../Layouts/LayoutMain';
import { LanguageProvider, Language } from '../../utils/language/provider';

class Output extends Component {
    render() {
        return (
            <Router history={history}>
                <LanguageProvider>
                    <Helmet>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
                        <meta name="msapplication-tap-highlight" content="no" />
                        <meta name="apple-mobile-web-app-capable" content="yes" />
                        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                        <meta name="format-detection" content="telephone=no" />
                        <meta name="format-detection" content="address=no" />
                        <meta http-equiv="cleartype" content="on" />
                        <meta name="description" content="WebLogic Studio - Website development and creation, as well as SEO optimization and website promotion in Kiev" />
                        <meta name="author" content="Tkachuk Zakhar" />
                        <meta name="HandheldFriendly" content="True" />
                        <meta name="MobileOptimized" content="320" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="theme-color" content="#607D8B" />
                        <title>WebLogic Studio Home</title>
                        <link rel="shortcut icon" href="../../favicon.ico" />
                        <link rel="canonical" href="http://weblogic.com.ua/" />
                    </Helmet>
                    <LayoutMain />
                </LanguageProvider>
            </Router>
        );
    }
}

export default Output;
