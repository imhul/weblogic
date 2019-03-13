
import { hot, AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import store, { history } from './redux/store';

import Output from './components/Output';

function renderApp() {
    const App = () => (
        <AppContainer>
            <Provider store={ store }>
                <ConnectedRouter history={ history }>
                    <Output />
                </ConnectedRouter>
            </Provider>
        </AppContainer>
    );
    ReactDOM.render(<App />, document.getElementById('root'))
};

renderApp();

hot(module)(renderApp);
