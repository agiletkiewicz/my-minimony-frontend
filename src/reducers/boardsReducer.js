export default (state = [], action) => {
  
    switch (action.type) {
      case 'FETCH_BOARDS':
        return action.boards.map( board => (
          board.attributes
        ))
      case 'ADD_BOARD':
        let board = {
          id: action.board.attributes.id,
          title: action.board.attributes.title
        }  
        return [...state, board];
      case 'DELETE_BOARD':
        return state.filter( board => (
          board.id !== action.board
        )) 
      case 'LOGOUT_USER':
        return [];
      default: 
        return state;
    }
  
  }