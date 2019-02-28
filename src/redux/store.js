import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

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

const store = configureStore({});

export default store;