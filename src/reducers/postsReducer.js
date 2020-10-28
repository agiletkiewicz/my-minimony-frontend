export default (state = [], action) => {
  
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.posts;
    case 'ADD_POST':
      debugger
      return [...state, action.post]; 
    default: 
      return state;
  }

}
