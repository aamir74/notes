const authReducer = (state, action) => {
    switch (action.type) {
      case "SET_USER_DATA":
        return { ...state, auth: action.payload };
      case "DELETE_USER_DATA":
        return { ...state, auth: false };
      default:
        return state;
    }
  };
  
  export { authReducer };
  