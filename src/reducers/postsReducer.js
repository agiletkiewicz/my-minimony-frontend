export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.posts.data;
    case 'ADD_POST':
      return [action.post, ...state];
    default:
      return state;
  }
};
