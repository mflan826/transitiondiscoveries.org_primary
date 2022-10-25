import { handleResponse, handleError } from "./apiUtils";
import * as constants from "../constants";

const baseUrl = process.env.REACT_APP_URL;
const apiUrl = process.env.REACT_APP_API_URL + "api/";
const endpoint = "globalSearches/search";

function buildFilterUrl(filter = "", page = 1, per_page = 10 ) {
  let filterUrl = apiUrl + endpoint;

  // if (filter) {
    filterUrl += "?q=" + encodeURIComponent(filter);
  // }

  if (page) {
    filterUrl +="&current_page=" + encodeURIComponent(page);
  }

  if (per_page) {
    filterUrl +="&per_page_items=" + encodeURIComponent(per_page);
  }

  return filterUrl;
}

function buildSearchFilterUrl(filter = "") {
  let filterUrl = apiUrl + endpoint;
  if (filter) {
    filterUrl += "?q=" + encodeURIComponent(filter);
  }
  return filterUrl;
}

function buildSearchPageUrl(link) {
  let searchUrl = apiUrl + endpoint;
  let filter = {
    path: link,
  };
  let searchFilter = {
    where: filter,
  };
  if (filter) {
    searchUrl += "?q=" + encodeURIComponent(searchFilter);
  }
  return searchUrl;
}

function buildSearchUrl(filter) {
  let searchUrl = apiUrl + endpoint;
  let searchFilter = {
    where: filter,
  };
  if (filter) {
    searchUrl += "?q=" + encodeURIComponent(searchFilter);
  }
  return searchUrl;
}

export function getSearches() {
  return fetch(buildFilterUrl())
    .then(handleResponse)
    .catch(handleError);
}

export function searchSearches(searchQuery) {
  return fetch(buildFilterUrl(searchQuery))
    .then(handleResponse)
    .catch(handleError);
}

export function loadMoreSearches( searchQuery, page, per_page) {

  return fetch(buildFilterUrl(searchQuery, page, per_page ))
    .then(handleResponse)
    .catch(handleError);
}

export function getSearchPage(link) {
  return fetch(buildSearchPageUrl(link)).then(handleResponse).catch(handleError);
}

export function getRecentSearches() {
  return fetch(buildSearchFilterUrl({ order: "publish_date DESC", limit: 5 }))
    .then(handleResponse)
    .catch(handleError);
}