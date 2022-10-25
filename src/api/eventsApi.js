import { handleResponse, handleError } from "./apiUtils";
import * as constants from "../constants";

const baseUrl = process.env.REACT_APP_URL;
const apiUrl = process.env.REACT_APP_API_URL + "api/";
const endpoint = "events";

function buildFilterUrl(filter) { 
  let filterUrl = apiUrl + endpoint;
  if (filter) {
    filterUrl += "?filter=" + encodeURIComponent(JSON.stringify(filter));
  }
  return filterUrl;
}

function buildUrl(filter) { 
  let filterUrl = apiUrl + endpoint;
  if (filter) {
    filterUrl += "?filter=" + encodeURIComponent(JSON.stringify(filter));
  }
  return filterUrl;
}

function buildCalUrl() { 
  let filterUrl = apiUrl + endpoint; 
  return filterUrl;
}

function buildSearchUrl(filter) {
  let searchUrl = apiUrl + endpoint;
  let searchFilter = {
    order: "publish_date DESC",
    where: filter,
  };
  if (filter) {
    searchUrl += "?filter=" + encodeURIComponent(JSON.stringify(searchFilter));
  }
  return searchUrl;
}

function buildEventPageUrl(linkValue) {
  let searchUrl = apiUrl + endpoint;
  let filter = {
    link: linkValue,
  };
  let searchFilter = {
    where: filter,
  };
  if (filter) {
    searchUrl += "?filter=" + encodeURIComponent(JSON.stringify(searchFilter));
  }
  return searchUrl;
}

export function getEvents() { 
  return fetch(
    buildFilterUrl({
      order: "publish_date DESC",
      limit: constants.EVENTS_PER_PAGE,
    })
  )
    .then(handleResponse)
    .catch(handleError);
}
export function getCalEvents() { 
  return fetch(buildCalUrl())
    .then(handleResponse)
    .catch(handleError);
}

export function searchEvents(searchQuery) {
  return fetch(buildSearchUrl(searchQuery))
    .then(handleResponse)
    .catch(handleError);
}

export function loadMoreEvents(limit, skip) {
  return fetch(buildFilterUrl({ order: "publish_date DESC", limit, skip }))
    .then(handleResponse)
    .catch(handleError);
}

export function getEventPage(link) {
  return fetch(buildEventPageUrl(link)).then(handleResponse).catch(handleError);
}

export function getRecentEvents() {
  return fetch(buildFilterUrl({ order: "publish_date DESC", limit: 5 }))
    .then(handleResponse)
    .catch(handleError);
}
