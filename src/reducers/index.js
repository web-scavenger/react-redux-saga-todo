import { combineReducers } from 'redux';

import { todos } from './todos';
import { input } from './input';
import onDataError from './error';

export default combineReducers({
  todos,
  onDataError,
  input,
});
