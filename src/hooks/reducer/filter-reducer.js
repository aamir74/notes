const filterReducer = (state, action) => {
  switch (action.type) {
    case "ASC":
      return { ...state, sortBy: action.type };
    case "DESC":
      return { ...state, sortBy: action.type };
    case "SEARCH":
      return { ...state, search: action.search };
    case "PINNED":
      return { ...state, pinned: action.type };
    case "CLEAR":
      return {
        sortBy: "",
        search: "",
        pinned: true,
      };
    default:
      return state;
  }
};
export { filterReducer };
