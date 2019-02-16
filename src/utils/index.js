import React from 'react';
import ReactDOM from 'react-dom';
import '../fonts/fonts.css';
import '../scss/index.scss';

import './bg';

import Output from '../components/Output';
import registerServiceWorker from './worker/registerServiceWorker';

ReactDOM.render(<Output />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}
