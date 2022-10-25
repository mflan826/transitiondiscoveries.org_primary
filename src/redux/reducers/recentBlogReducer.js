import * as types from "../actions/actionTypes";

export default function recentBlogReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_RECENT_BLOG_SUCCESS:
      return action.recentBlogs;
    default:
      return state;
  }
}
