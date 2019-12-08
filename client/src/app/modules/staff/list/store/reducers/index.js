import { combineReducers } from 'redux';
import staff from './todos.reducer';
import folders from './folders.reducer';
import labels from './labels.reducer';
import filters from './filters.reducer';

const reducer = combineReducers({
  staff,
  folders,
  labels,
  filters
});

export default reducer;
