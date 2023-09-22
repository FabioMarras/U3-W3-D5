const initialState = {
  searchResults: [],
};

const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_BAR_RESULTS":
      return {
        ...state,
        searchResults: [...state.searchResults, action.payload],
      };
    default:
      return state;
  }
};

export default SidebarReducer;
