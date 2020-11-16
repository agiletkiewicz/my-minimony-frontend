export default (state = '', action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return action.search;
    case 'CLEAR_SEARCH':
      return '';
    default:
      return state;
  }
};
