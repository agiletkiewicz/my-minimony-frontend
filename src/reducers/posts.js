export default (state = [], action) => {
  
  switch (action.type) {
    case 'FETCH_POSTS':
      return [...state, action.posts];
    default: 
      return state;
  }

}
