const initialState = {
  homeResults: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_RESULTS":
      return {
        ...state,
        homeResults: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
