import { handleResponse, handleError } from "./apiUtils";
import * as constants from "../constants";

const baseUrl = process.env.REACT_APP_URL;
const apiUrl = process.env.REACT_APP_API_URL + "api/";
const endpoint = "story_listings";

function buildFilterUrl(filter) {
  let filterUrl = apiUrl + endpoint;
  if (filter) {
    filterUrl += "?filter=" + encodeURIComponent(JSON.stringify(filter));
  }
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

function buildStoryPageUrl(linkValue) {
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

export function getStories() {
  return fetch(
    buildFilterUrl({
      order: "publish_date DESC",
      limit: constants.POSTS_PER_PAGE,
    })
  )
    .then(handleResponse)
    .catch(handleError);
}

export function searchStories(searchQuery) {
  return fetch(buildSearchUrl(searchQuery))
    .then(handleResponse)
    .catch(handleError);
}

export function loadMoreStories(limit, skip) {
  return fetch(buildFilterUrl({ order: "publish_date DESC", limit, skip }))
    .then(handleResponse)
    .catch(handleError);
}

export function getStoryPage(link) {
  return fetch(buildStoryPageUrl(link)).then(handleResponse).catch(handleError);
}

export function getRecentStories() {
  return fetch(buildFilterUrl({ order: "publish_date DESC", limit: 5 }))
    .then(handleResponse)
    .catch(handleError);
}
