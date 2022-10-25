import * as types from "../actions/actionTypes";

export default function indicatorReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_INDICATORS_SUCCESS:
      return action.indicators;
    default:
      return state;
  }
}
