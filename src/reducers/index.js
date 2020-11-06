import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';
import boardsReducer from './boardsReducer';


const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  boards: boardsReducer
});

export default rootReducer;