import { createStore } from "redux";

const INITIAL_STATE = {
  STEP: 1,
  MAIN_NAVIGATION: null,
  DRAWER_NAVIGATION: null,
};

function ROOT_REDUCER(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SECOND":
      return { ...state, STEP: 2 };
    case "FIRST":
      return { ...state, STEP: 1 };
    case "ADD_MAIN_NAVIGATION":
      return { ...state, MAIN_NAVIGATION: action.navigation };
    case "ADD_DRAWER_NAVIGATION":
      return { ...state, DRAWER_NAVIGATION: action.navigation };
    default:
      return state;
  }
}

const store = createStore(ROOT_REDUCER);

export default store;
