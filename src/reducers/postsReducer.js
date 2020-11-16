export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.posts.data;
    case 'ADD_POST':
      return [...state, action.post];
    default:
      return state;
  }
};
