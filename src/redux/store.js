import { createStore, applyMiddleware, compose } from 'redux';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer  from './reducers';

export const history = createBrowserHistory();

const initState = {};
const enhancers = [];
const routerMiddleware = createRouterMiddleware(history);
const middleware = [ thunk, routerMiddleware ]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
};

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  // connectRouter(history)(rootReducer),
  createRootReducer(history),
  initState,
  composedEnhancers
);

export default store;