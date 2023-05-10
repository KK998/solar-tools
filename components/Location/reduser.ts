export type LocationAction =
  | { type: "SET_LOCATION"; payload: string }
  | { type: "CLEAR_LOCATION" }
  | { type: "SET_MARKER"; payload: [number, number] }
  | { type: "CLEAR_MARKER" };

export type LocationState = {
  location: string;
  marker: [number, number];
};

export const locationReducer = (
  state: LocationState,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "CLEAR_LOCATION":
      return {
        ...state,
        location: "",
      };
    case "SET_MARKER":
      return {
        ...state,
        marker: action.payload,
      };
    case "CLEAR_MARKER":
      return {
        ...state,
        marker: [0, 0],
      };
    default:
      return state;
  }
};
