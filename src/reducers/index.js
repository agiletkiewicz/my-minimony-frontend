import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';
import boardsReducer from './boardsReducer';
import errorsReducer from './errorsReducer';
import searchReducer from './searchReducer';
import savesReducer from './savesReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  boards: boardsReducer,
  saves: savesReducer,
  errors: errorsReducer,
  search: searchReducer,
});

export default rootReducer;
