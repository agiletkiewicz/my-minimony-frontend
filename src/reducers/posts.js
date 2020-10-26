export default (state = {posts: []}, action) => {
  
  switch (action.type) {
    case 'FETCH_POSTS':
      return {...state, ...state.posts, posts: [action.posts]}
    default: 
      return state;
  }

}
