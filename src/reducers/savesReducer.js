export default (state = [], action) => {
  
    switch (action.type) {
      case 'FETCH_SAVES':
          let newState = []
          for (const element of action.saves) {
              newState.push(element.attributes)
          }
        return newState;
      case 'ADD_SAVE':
        return state;
      case 'LOGOUT_USER':
        return [];
      default: 
        return state;
    }
  
  };