import * as types from "../actions/actionTypes";

const initialState = {
  resources: [],
  page: 1,
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_RESOURCES_SUCCESS:
      return {
        resources: action.resources.resources,
        page: action.resources.page,
      };
    case types.SEARCH_RESOURCES_SUCCESS:
      return { resources: action.resources };
    case types.SET_PAGE_SUCCESS:
      return action.page;
    case types.LOADMORE_RESOURCES_SUCCESS:
      return {
        resources: [...(state.resources || []), ...action.resources.resources],
        page: action.resources.page,
      };
    case types.LOAD_RESOURCEPAGE_SUCCESS:
      return {
        resourcePage: action.resourcePage,
        resources: state.resources,
        page: state.page,
      };
    default:
      return state;
  }
}
