import * as types from "../actions/actionTypes";

export default function recentEventReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_RECENT_EVENT_SUCCESS:
      return action.recentEvents;
    default:
      return state;
  }
}
