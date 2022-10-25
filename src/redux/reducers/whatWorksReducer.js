import * as types from "../actions/actionTypes";

const initialState = {
  whatWorksData: [],
};

export default function whatWorksReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_WHATWORKS_SUCCESS:
      return action.whatWorksData;
    case types.FILTER_WHATWORKS_SUCCESS:
      return action.whatWorksData;
    default:
      return state;
  }
}
