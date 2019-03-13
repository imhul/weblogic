import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ui from './ui';
import ux from './ux';

export default (history) => combineReducers({
    router: connectRouter(history),
    ui: ui,
    ux: ux, 
});
