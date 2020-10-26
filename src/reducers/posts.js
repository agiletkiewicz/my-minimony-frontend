export default (state = [], action) => {
  
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.posts;
    default: 
      return state;
  }

}
