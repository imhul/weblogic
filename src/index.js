// core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// store
import store from './redux/store';
// components
import Output from './components/Output';
// styles
import 'antd/dist/reset.css';
import '@fontsource/open-sans';
import './fonts/fonts.css';
import './scss/index.scss';

const App = () => (
    <Provider store={store}>
        <Output />
    </Provider>
);

const root = createRoot(document.getElementById('root'));

root.render(<App />);
