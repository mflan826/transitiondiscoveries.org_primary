import { toggleIndicator } from "../actions/whatWorksActions";

const toggleIndicatorReducer = (state = { value: "All" }, action) => {
  switch (action.type) {
    case "SET_INDICATOR":
      return typeof action.indicator === undefined ? state : action.indicator;
    default:
      return state;
  }
};

export default toggleIndicatorReducer;
