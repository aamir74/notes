const notesReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return { ...state, notes: action.payload };
    case "ADD_NOTES":
      return { ...state, notes: action.payload };
    case "DELETE_NOTES":
      return { ...state, notes: action.payload };
    case "UPDATE_NOTES":
      return { ...state, notes: action.payload };
    case "HANDLE_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    case "HANDLE_TRASH":
      return {
        ...state,
        trash: [...state.trash, action.payload.trash],
        archives: action.payload.archives,
      };
    case "EMPTY_NOTES":
      return { ...state, notes: [] };
    default:
      return state;
  }
};

export { notesReducer };
