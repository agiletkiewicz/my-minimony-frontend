export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOARDS':
      return action.boards.map((boardObject) => boardObject.attributes);
    case 'ADD_BOARD':
      return [...state, action.board.attributes];
    case 'DELETE_BOARD':
      return state.filter((boardObject) => boardObject.id !== action.board);
    case 'LOGOUT_USER':
      return [];
    default:
      return state;
  }
};
