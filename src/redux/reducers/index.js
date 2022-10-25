import { combineReducers } from "redux";
import indicators from "./indicatorReducer";
import subIndicators from "./subIndicatorReducer";
import subIndicator from "./subIndicatorDetailReducer";
import resources from "./resourceReducer";
import whatWorksData from "./whatWorksReducer";
import visibilityFilter from "./visibilityFilter";
import toggleIndicatorReducer from "./toggleIndicatorReducer";
import visibilityQisFilter from "./visibilityQisFilter";
import blogs from "./blogReducer";
import events from "./eventReducer";
import stories from "./storyReducer";
import recentBlogs from "./recentBlogReducer";
import recentEvents from "./recentEventReducer";
import recentStories from "./recentStoryReducer";
import recentResources from "./recentResourcesReducer";
import searches from "./searchReducer";

const rootReducer = combineReducers({
  indicators,
  subIndicators,
  resources,
  whatWorksData,
  visibilityFilter,
  toggleIndicatorReducer,
  visibilityQisFilter,
  blogs,
  events,
  stories,
  subIndicator,
  recentBlogs,
  recentEvents,
  recentStories,
  recentResources,
  searches,
});

export default rootReducer;
