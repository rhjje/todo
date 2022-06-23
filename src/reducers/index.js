import { combineReducers } from 'redux';
import todos from './todos';
import search from './search';
import filter from './filter';

export default combineReducers({
  todos,
  search,
  filter
});
