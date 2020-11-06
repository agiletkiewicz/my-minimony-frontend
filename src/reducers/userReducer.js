export default (state = {
    isLoggedIn: false,
    id: null,
    name: "",
    error: ""
}, action) => {
  
    switch (action.type) {
      case 'LOGIN_USER':
          debugger
        return {
            isLoggedIn: true,
            id: action.user.id,
            name: action.user.name,
            error: ""
        } 
        case 'LOGOUT_USER':
            return {
                isLoggedIn: false,
                id: null,
                name: "",
                error: ""
            }
        case 'LOGIN_USER_FAILED':
            return {...state, error: action.error}
        default: 
            return state;
    }
  
  }