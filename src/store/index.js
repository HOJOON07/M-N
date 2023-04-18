import { combineReducers } from 'redux';
import user from './modules/user';
import workspace from './modules/workspace';
import create from './modules/createDate';

export default combineReducers({
  user,
  workspace,
  create,
});
