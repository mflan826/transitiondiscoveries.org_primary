import * as storyListingsApi from "../../api/storyListingsApi";
import * as types from "./actionTypes";
import * as constants from "../../constants";

export function loadStorySuccess(stories) {
  return { type: types.LOAD_STORY_SUCCESS, stories };
}

export function searchStorySuccess(stories) {
  return { type: types.SEARCH_STORY_SUCCESS, stories };
}

export function loadMoreStorySuccess(stories) {
  return { type: types.LOADMORE_STORY_SUCCESS, stories };
}

export function setStoryPageSuccess(page) {
  return { type: types.SET_STORY_PAGE_SUCCESS, page };
}

export function loadStoryPageSuccess(storyPage) {
  return { type: types.LOAD_STORYPAGE_SUCCESS, storyPage };
}

export function loadRecentStoriesSuccess(recentStories) {
  return { type: types.LOAD_RECENT_STORY_SUCCESS, recentStories };
}

export function loadStory() {
  return function (dispatch) {
    return storyListingsApi
      .getStories()
      .then((stories) => {
        dispatch(loadStorySuccess({ stories, page: 1 }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function searchStory(searchQuery) {
  //console.log("search resources action called " + searchQuery);
  return function (dispatch) {
    return storyListingsApi
      .searchStories(searchQuery)
      .then((stories) => {
        dispatch(searchStorySuccess(stories));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadMoreStory(page) {
  //console.log("load more resources action called " + page);
  return function (dispatch) {
    return storyListingsApi
      .loadMoreStories(
        constants.STORY_PER_PAGE,
        page * constants.STORY_PER_PAGE
      )
      .then((stories) => {
        if (stories.length === constants.STORY_PER_PAGE) {
          page = page + 1;
        } else {
          page = 0;
        }
        dispatch(loadMoreStorySuccess({ stories, page }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function setStoryPage(pageNo) {
  //console.log("set page action called " + pageNo);
  return function (dispatch) {
    return dispatch(setStoryPageSuccess(pageNo + 1));
  };
}

export function loadStoryPage(link) {
  return function (dispatch) {
    return storyListingsApi
      .getStoryPage(link)
      .then((storyPage) => {
        dispatch(loadStoryPageSuccess(storyPage[0]));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadRecentStories() {
  return function (dispatch) {
    return storyListingsApi.getRecentStories().then((stories) => {
      dispatch(loadRecentStoriesSuccess(stories));
    });
  };
}
