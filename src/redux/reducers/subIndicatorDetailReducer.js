import * as types from "../actions/actionTypes";

export default function subIndicatorDetailReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_SUBINDICATORDETAILS_SUCCESS:
      return action.subIndicator;
    default:
      return state;
  }
}
