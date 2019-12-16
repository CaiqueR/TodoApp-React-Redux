import { combineReducers } from 'redux';
import todo from './todo.redux';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
