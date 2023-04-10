import { combineReducers } from 'redux';
import user from './modules/user';
import workspace from './modules/workspace';

export default combineReducers({
  user,
  workspace,
});
