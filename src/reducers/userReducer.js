export default (state = {
    isLoggedIn: false,
    id: null,
    name: ""
}, action) => {
  
    switch (action.type) {
      case 'LOGIN_USER':
        return {
            isLoggedIn: true,
            id: action.user.id,
            name: action.user.name
        } 
        case 'LOGOUT_USER':
            return {
                isLoggedIn: false,
                id: null,
                name: ""
            }
        case 'ADD_USER':
            return state;
        default: 
            return state;
    }
  
  }