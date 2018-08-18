import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../fonts/fonts.css';
import '../scss/index.scss';

import '../utils/particles';
import '../utils/app';
import '../utils/stats';

import Output from '../components/Output';
import registerServiceWorker from '../utils/worker/registerServiceWorker';

ReactDOM.render(<Output />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}
