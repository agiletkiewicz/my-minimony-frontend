export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SAVES':
      const newState = [];
      for (const element of action.saves) {
        newState.push(element.attributes);
      }
      return newState;
    case 'ADD_SAVE':
      return [...state, action.save];
    case 'DELETE_SAVE':
      return state.filter((save) => save.id !== action.save);
    case 'DELETE_BOARD':
      return state.filter((save) => save.boardId !== action.board);
    case 'LOGOUT_USER':
      return [];
    default:
      return state;
  }
};
