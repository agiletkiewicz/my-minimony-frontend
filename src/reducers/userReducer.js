export default (state = {
    isLoggedIn: false,
    id: null,
    name: ""
}, action) => {
  
    switch (action.type) {
      case 'LOGIN_USER':
        debugger
        return {
            isLoggedIn: true,
            id: action.user.id,
            name: action.user.name
        } 
      default: 
        return state;
    }
  
  }