import * as types from "../actions/actionTypes";

export default function recentStoryReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_RECENT_STORY_SUCCESS:
      return action.recentStories;
    default:
      return state;
  }
}
