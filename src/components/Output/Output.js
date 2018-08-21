// Компонент-обёртка для LayoutMain, позволяющая осуществлять роутинг внутри себя

import React, { Component } from 'react';
import history from '../../utils/history/history';

import { Router } from "react-router-dom";
import LayoutMain from '../Layouts/LayoutMain';
import { LanguageProvider } from '../../utils/language/provider';

class Output extends Component {
    render() {
        return (
            <Router history={history}>
                <LanguageProvider>
                    <LayoutMain />
                </LanguageProvider>
            </Router>
        );
    }
}

export default Output;
