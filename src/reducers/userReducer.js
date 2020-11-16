export default (
  state = {
    isLoggedIn: false,
    id: null,
    name: '',
    username: '',
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        isLoggedIn: true,
        id: action.user.id,
        name: action.user.name,
        username: action.user.username,
      };
    case 'LOGOUT_USER':
      return {
        isLoggedIn: false,
        id: null,
        name: '',
        username: '',
      };
    case 'LOGIN_USER_FAILED':
      return { ...state, error: action.error };
    default:
      return state;
  }
};
