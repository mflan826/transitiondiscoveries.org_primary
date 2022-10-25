import * as types from "../actions/actionTypes";

const initialState = {
  stories: [],
  // storyPage: [],
  page: 1,
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_STORY_SUCCESS:
      return {
        stories: action.stories.stories,
        page: action.stories.page,
      };
    case types.SEARCH_STORY_SUCCESS:
      return { stories: action.stories };
    case types.SET_STORY_PAGE_SUCCESS:
      return action.page;
    case types.LOADMORE_STORY_SUCCESS:
      return {
        stories: [...(state.stories || []), ...action.stories.stories],
        page: action.stories.page,
      };
    case types.LOAD_STORYPAGE_SUCCESS:
      return {
        storyPage: action.storyPage,
        stories: state.stories,
        page: state.page,
      };
    default:
      return state;
  }
}
