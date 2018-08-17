import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../fonts/fonts.css';
import '../scss/index.scss';
import Output from '../components/Output';
// TODO: import registerServiceWorker if needed
import registerServiceWorker from '../utils/worker/registerServiceWorker';

ReactDOM.render(<Output />, document.getElementById('root'));
registerServiceWorker();

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
