import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ui from './ui';
import ux from './ux';
import users from './users';

export default (history) => combineReducers({
    router: connectRouter(history),
    ui: ui,
    ux: ux, 
    users: users,
});
