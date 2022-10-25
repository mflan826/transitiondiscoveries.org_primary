import * as types from "../actions/actionTypes";

const initialState = {
  searches: [],
  page: 1,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_SEARCHES_SUCCESS:
      return {
        searches: action.searches.searches,
        page: action.searches.page,
      };
    case types.SEARCH_SEARCHES_SUCCESS:
      return { searches: action.searches };
    case types.SET_SEARCH_PAGE_SUCCESS:
      return action.page;
    case types.LOADMORE_SEARCHES_SUCCESS:
      return {
        searches: [...(state.searches || []), ...action.searches.searches],
        page: action.searches.page,
      };
    case types.LOAD_SEARCHPAGE_SUCCESS:
      return {
        searchPage: action.searchPage,
        searches: state.searches,
        page: state.page,
      };
    default:
      return state;
  }
}
