import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';
import boardsReducer from './boardsReducer';
import errorsReducer from './errorsReducer';


const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  boards: boardsReducer,
  errors: errorsReducer
});

export default rootReducer;