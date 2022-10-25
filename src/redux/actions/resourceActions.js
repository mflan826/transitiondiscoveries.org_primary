import * as resourcesApi from "../../api/resourcesApi";
import * as types from "./actionTypes";
import * as constants from "../../constants";

export function loadResourcesSuccess(resources) {
  return { type: types.LOAD_RESOURCES_SUCCESS, resources };
}

export function searchResourcesSuccess(resources) {
  return { type: types.SEARCH_RESOURCES_SUCCESS, resources };
}

export function loadMoreResourcesSuccess(resources) {
  return { type: types.LOADMORE_RESOURCES_SUCCESS, resources };
}

export function setPageSuccess(page) {
  return { type: types.SET_PAGE_SUCCESS, page };
}

export function loadResourcePageSuccess(resourcePage) {
  return { type: types.LOAD_RESOURCEPAGE_SUCCESS, resourcePage };
}

export function loadRecentResourcesSuccess(recentResources) {
  return { type: types.LOAD_RECENT_RESOURCE_SUCCESS, recentResources };
}

export function loadResources() {
  return function (dispatch) {
    return resourcesApi
      .getResources()
      .then((resources) => {
        dispatch(loadResourcesSuccess({ resources, page: 1 }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function searchResources(searchQuery) {
  //console.log("search resources action called " + searchQuery);
  return function (dispatch) {
    return resourcesApi
      .searchResources(searchQuery)
      .then((resources) => {
        dispatch(searchResourcesSuccess(resources));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadMoreResources(page) {
  //console.log("load more resources action called " + page);
  return function (dispatch) {
    return resourcesApi
      .loadMoreResources(
        constants.RESOURCES_PER_PAGE,
        page * constants.RESOURCES_PER_PAGE
      )
      .then((resources) => {
        if (resources.length === constants.RESOURCES_PER_PAGE) {
          page = page + 1;
        } else {
          page = 0;
        }
        dispatch(loadMoreResourcesSuccess({ resources, page }));
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

export function loadResourcePage(link) {
  return function (dispatch) {
    return resourcesApi
      .getResourcePage(link)
      .then((resourcePage) => {
        dispatch(loadResourcePageSuccess(resourcePage[0]));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadRecentResources() {
  return function (dispatch) {
    return resourcesApi.getRecentResources().then((resources) => {
      dispatch(loadRecentResourcesSuccess(resources));
    });
  };
}
