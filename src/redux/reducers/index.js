import { combineReducers } from 'redux';
import ui from './ui';
import ux from './ux';
import users from './users';

export default () =>
  combineReducers({
    ui: ui,
    ux: ux,
    users: users
  });
