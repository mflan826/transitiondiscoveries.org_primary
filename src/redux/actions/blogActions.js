import * as blogsApi from "../../api/blogsApi";
import * as types from "./actionTypes";
import * as constants from "../../constants";

export function loadBlogSuccess(blogs) {
  return { type: types.LOAD_BLOG_SUCCESS, blogs };
}

export function searchBlogSuccess(blogs) {
  return { type: types.SEARCH_BLOG_SUCCESS, blogs };
}

export function loadMorePostsSuccess(blogs) {
  return { type: types.LOADMORE_POSTS_SUCCESS, blogs };
}

export function setBlogPageSuccess(page) {
  return { type: types.SET_BLOG_PAGE_SUCCESS, page };
}

export function loadBlogPageSuccess(blogPage) {
  return { type: types.LOAD_BLOGPAGE_SUCCESS, blogPage };
}

export function loadRecentBlogPageSuccess(recentBlogs) {
  return { type: types.LOAD_RECENT_BLOG_SUCCESS, recentBlogs };
}

export function loadBlog() {
  return function (dispatch) {
    return blogsApi
      .getBlog()
      .then((blogs) => {
        dispatch(loadBlogSuccess({ blogs, page: 1 }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function searchBlog(searchQuery) {
  //console.log("search resources action called " + searchQuery);
  return function (dispatch) {
    return blogsApi
      .searchBlog(searchQuery)
      .then((blogs) => {
        dispatch(searchBlogSuccess(blogs));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadMorePosts(page) {
  //console.log("load more resources action called " + page);
  return function (dispatch) {
    return blogsApi
      .loadMorePosts(constants.POSTS_PER_PAGE, page * constants.POSTS_PER_PAGE)
      .then((blogs) => {
        if (blogs.length === constants.POSTS_PER_PAGE) {
          page = page + 1;
        } else {
          page = 0;
        }
        dispatch(loadMorePostsSuccess({ blogs, page }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function setBlogPage(pageNo) {
  //console.log("set page action called " + pageNo);
  return function (dispatch) {
    return dispatch(setBlogPageSuccess(pageNo + 1));
  };
}

export function loadBlogPage(link) {
  return function (dispatch) {
    return blogsApi
      .getBlogPage(link)
      .then((blogPage) => {
        dispatch(loadBlogPageSuccess(blogPage[0]));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadRecentBlogs() {
  return function (dispatch) {
    return blogsApi.getRecentBlogs().then((blogs) => {
      dispatch(loadRecentBlogPageSuccess(blogs));
    });
  };
}
