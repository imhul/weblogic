import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import Output from './components/Output';

import './fonts/fonts.css';
import './scss/index.scss';
import './utils/bg';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composerEnchancer = devtools ? devtools : compose;
const enhancedStore = composerEnchancer(applyMiddleware( thunk ));

function configureStore(initialState) {
  return createStore(
    rootReducer, 
    initialState, 
    enhancedStore
  )
};

export const store = configureStore({});

const reactRoot = document.getElementById('root');
const baseComponent = React.createElement(Output, { store });

ReactDOM.render(baseComponent, reactRoot);
