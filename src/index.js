import { hot, setConfig, AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import Output from './components/Output';

// styles
import 'antd/dist/antd.css';
import '@fontsource/open-sans';

setConfig({ integratedResolver: false });

function renderApp() {
    const App = () => (
        <AppContainer>
            <Provider store={store}>
                <Output />
            </Provider>
        </AppContainer>
    );
    const root = createRoot(document.getElementById('root'));
    root.render(hot(module)(App));
}

renderApp();
