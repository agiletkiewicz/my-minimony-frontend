export default (state = [], action) => {
  
    switch (action.type) {
      case 'FETCH_BOARDS':
        return action.boards;
      case 'ADD_BOARD':
        debugger
        return [...state, action.board];
      default: 
        return state;
    }
  
  }