import * as types from "../actions/actionTypes";

export default function subIndicatorReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_SUBINDICATORS_SUCCESS:
      return action.subIndicators;
    default:
      return state;
  }
}
