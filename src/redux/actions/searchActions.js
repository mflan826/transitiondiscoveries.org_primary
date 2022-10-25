import * as searchesApi from "../../api/searchesApi";
import * as types from "./actionTypes";
import * as constants from "../../constants";

export function loadSearchesSuccess(searches) {
  return { type: types.LOAD_SEARCHES_SUCCESS, searches };
}

export function searchSearchesSuccess(searches) {
  return { type: types.SEARCH_SEARCHES_SUCCESS, searches };
}

export function loadMoreSearchesSuccess(searches) {
  return { type: types.LOADMORE_SEARCHES_SUCCESS, searches };
}

export function setPageSuccess(page) {
  return { type: types.SET_SEARCH_PAGE_SUCCESS, page };
}

export function loadSearchPageSuccess(searchPage) {
  return { type: types.LOAD_SEARCHPAGE_SUCCESS, searchPage };
}

export function loadRecentSearchesSuccess(recentSearches) {
  return { type: types.LOAD_RECENT_SEARCH_SUCCESS, recentSearches };
}

export function loadSearches(page) {
  return function (dispatch) {
    return searchesApi
      .getSearches()
      .then((searches) => {
        if (searches.length === constants.SEARCHES_PER_PAGE) {
          page = page + 1;
        } else {
          page = 0;
        }
        dispatch(loadSearchesSuccess({ searches, page }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function searchSearches(searchQuery) {
  //console.log("search searches action called " + searchQuery);
  return function (dispatch) {
    return searchesApi
      .searchSearches(searchQuery)
      .then((searches) => {
        dispatch(searchSearchesSuccess(searches));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadMoreSearches(searchQuery, page) {
  //console.log("load more searches action called " + page);
  return function (dispatch) {
    return searchesApi
      .loadMoreSearches(
        searchQuery,
        page,
        constants.SEARCHES_PER_PAGE,
      )
      .then((searches) => {
        if (searches.length === constants.SEARCHES_PER_PAGE) {
          page = page + 1;
        } else {
          page = 0;
        }

        dispatch(loadMoreSearchesSuccess({ searches, page }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function setPage(pageNo) {
  //console.log("set page action called " + pageNo);
  return function (dispatch) {
    return dispatch(setPageSuccess(pageNo + 1));
  };
}

export function loadSearchPage(link) {
  return function (dispatch) {
    return searchesApi
      .getSearchPage(link)
      .then((searchPage) => {
        dispatch(loadSearchPageSuccess(searchPage[0]));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadRecentSearches() {
  return function (dispatch) {
    return searchesApi.getRecentSearches().then((searches) => {
      dispatch(loadRecentSearchesSuccess(searches));
    });
  };
}
