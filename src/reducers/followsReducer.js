export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_FOLLOWS':
        return action.follows.map((followObject) => followObject.attributes);
      case 'ADD_FOLLOW':
        return [...state, action.follow];
      case 'DELETE_FOLLOW':
        return state.filter((followObject) => followObject.id !== action.follow);
      case 'LOGOUT_USER':
        return [];
      default:
        return state;
    }
  };
  