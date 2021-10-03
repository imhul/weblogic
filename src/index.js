
import { hot, AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Output from './components/Output';
import 'antd/dist/antd.css';

function renderApp() {
  const App = () => (
    <AppContainer>
      <Provider store={store}>
          <Output />
      </Provider>
    </AppContainer>
  );
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();

hot(module)(renderApp);
