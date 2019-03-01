import React from 'react';
import {hot} from 'react-hot-loader';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Output from './components/Output';

function renderApp() {
  const App = () => <Provider store={ store }><Output /></Provider>;
  ReactDOM.render(<App />, document.getElementById('root'))
};

renderApp();

hot(module)(renderApp);
