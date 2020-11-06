import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer';
import boardsReducer from './boardsReducer';
import modalReducer from './modalReducer';


const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  boards: boardsReducer,
  modalShow: modalReducer
});

export default rootReducer;