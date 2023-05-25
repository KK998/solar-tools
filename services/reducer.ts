import type { ApiContextAction, ApiContextState } from "./context";

const apiReducer = (
  state: ApiContextState,
  action: ApiContextAction
): ApiContextState => {
  switch (action.type) {
    case "SET_OFF_GRID":
      return { ...state, offGrid: action.payload };
    case "SET_ON_GRID":
      return { ...state, onGrid: action.payload };
    case "SET_SEVANJE":
      return { ...state, sevanje: action.payload };
    default:
      return state;
  }
};

export { apiReducer };
