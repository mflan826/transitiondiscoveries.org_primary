import * as types from "../actions/actionTypes";

export default function recentResourcesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_RECENT_RESOURCE_SUCCESS:
      return action.recentResources;
    default:
      return state;
  }
}
