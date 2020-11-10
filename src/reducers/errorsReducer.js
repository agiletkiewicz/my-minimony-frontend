export default (state = [], action) => {
  
    switch (action.type) {
      case 'ADD_ERROR':
        return action.error;
      case 'CLEAR_ERROR':
        return [];
      default: 
        return state;
    }
  
  }