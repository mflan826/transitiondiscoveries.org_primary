import * as types from "../actions/actionTypes";

const initialState = {
  blogs: [],
  // blogPage: {},
  page: 1,
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_BLOG_SUCCESS:
      return {
        blogs: action.blogs.blogs,
        page: action.blogs.page,
      };
    case types.SEARCH_BLOG_SUCCESS:
      return { blogs: action.blogs };
    case types.SET_BLOG_PAGE_SUCCESS:
      return action.page;
    case types.LOADMORE_POSTS_SUCCESS:
      return {
        blogs: [...(state.blogs || []), ...action.blogs.blogs],
        page: action.blogs.page,
      };
    case types.LOAD_BLOGPAGE_SUCCESS:
      return {
        blogPage: action.blogPage,
        blogs: state.blogs,
        page: state.page,
      };
    default:
      return state;
  }
}
