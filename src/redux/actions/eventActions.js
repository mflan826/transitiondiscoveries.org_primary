import * as eventsApi from "../../api/eventsApi";
import * as types from "./actionTypes";
import * as constants from "../../constants";

export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events };
}

export function loadCalEventsSuccess(events) {
  return { type: types.LOAD_CAL_EVENTS_SUCCESS, events };
}
export function searchEventsSuccess(events) {
  return { type: types.SEARCH_EVENTS_SUCCESS, events };
}

export function loadMoreEventsSuccess(events) {
  return { type: types.LOADMORE_EVENTS_SUCCESS, events };
}

export function setEventPageSuccess(page) {
  return { type: types.SET_EVENT_PAGE_SUCCESS, page };
}

export function loadEventPageSuccess(eventPage) {
  return { type: types.LOAD_EVENTPAGE_SUCCESS, eventPage };
}

export function loadRecentEventsSuccess(recentEvents) {
  return { type: types.LOAD_RECENT_EVENT_SUCCESS, recentEvents };
}

export function loadEvents() {
  return function (dispatch) {
    return eventsApi
      .getEvents()
      .then((events) => {
        dispatch(loadEventsSuccess({ events, page: 1 }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadCalEvents() {
  return function (dispatch) {
    return eventsApi
      .getCalEvents()
      .then((events) => {
        dispatch(loadCalEventsSuccess({ events, page: 1 }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function searchEvents(searchQuery) {
  //console.log("search resources action called " + searchQuery);
  return function (dispatch) {
    return eventsApi
      .searchEvents(searchQuery)
      .then((events) => {
        dispatch(searchEventsSuccess(events));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadMoreEvents(page) {
  //console.log("load more resources action called " + page);
  return function (dispatch) {
    return eventsApi
      .loadMoreEvents(constants.POSTS_PER_PAGE, page * constants.POSTS_PER_PAGE)
      .then((events) => {
        if (events.length === constants.POSTS_PER_PAGE) {
          page = page + 1;
        } else {
          page = 0;
        }
        dispatch(loadMoreEventsSuccess({ events, page }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function setEventPage(pageNo) {
  //console.log("set page action called " + pageNo);
  return function (dispatch) {
    return dispatch(setEventPageSuccess(pageNo + 1));
  };
}

export function loadEventPage(link) {
  return function (dispatch) {
    return eventsApi
      .getEventPage(link)
      .then((eventPage) => {
        dispatch(loadEventPageSuccess(eventPage[0]));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadRecentEvents() {
  return function (dispatch) {
    return eventsApi.getRecentEvents().then((events) => {
      dispatch(loadRecentEventsSuccess(events));
    });
  };
}
