import * as types from "../actions/actionTypes";
import { playerActions } from "video-react";

const initialState = {
  events: [],
  eventPage: [],
  page: 1,
  calendarEvents: []
};
 

export default function resourceReducer(state = initialState, action) {  
  switch (action.type) {

    case types.LOAD_CAL_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        calendarEvents: action.events.events,
        page: action.events.page,
      }) 
    case types.LOAD_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        events: action.events.events,
        page: action.events.page,
      }) 
    case types.SEARCH_EVENTS_SUCCESS:
      return { events: action.events };
    case types.SET_EVENT_PAGE_SUCCESS:
      return action.page;
    case types.LOADMORE_EVENTS_SUCCESS:
      return {
        events: [...(state.events || []), ...action.events.events],
        page: action.events.page,
      };
    case types.LOAD_EVENTPAGE_SUCCESS:
      return Object.assign({}, state, {
        eventPage: action.eventPage,
        events: state.events,
        page: state.page
      })
    default:
      return state;
  }
}
