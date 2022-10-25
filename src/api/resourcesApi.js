import { handleResponse, handleError } from "./apiUtils";
import * as constants from "../constants";

const baseUrl = process.env.REACT_APP_URL;
const apiUrl = process.env.REACT_APP_API_URL + "api/";
const endpoint = "resources";

function buildFilterUrl(filter) {
  let filterUrl = apiUrl + endpoint;
  if (filter) {
    filterUrl += "?filter=" + encodeURIComponent(JSON.stringify(filter));
  }
  return filterUrl;
}

function buildSearchFilterUrl(filter) {
  let filterUrl = apiUrl + endpoint;
  if (filter) {
    filterUrl += "?filter=" + encodeURIComponent(JSON.stringify(filter));
  }
  return filterUrl;
}

function buildResourcePageUrl(link) {
  let searchUrl = apiUrl + endpoint;
  let filter = {
    path: link,
  };
  let searchFilter = {
    where: filter,
  };
  if (filter) {
    searchUrl += "?filter=" + encodeURIComponent(JSON.stringify(searchFilter));
  }
  return searchUrl;
}

function buildSearchUrl(filter) {
  let searchUrl = apiUrl + endpoint;
  let searchFilter = {
    where: filter,
  };
  if (filter) {
    searchUrl += "?filter=" + encodeURIComponent(JSON.stringify(searchFilter));
  }
  return searchUrl;
}

export function getResources() {
  return fetch(buildFilterUrl({ order: "publish_date DESC", limit: constants.RESOURCES_PER_PAGE }))
    .then(handleResponse)
    .catch(handleError);
}

export function searchResources(searchQuery) {
  return fetch(buildSearchUrl(searchQuery))
    .then(handleResponse)
    .catch(handleError);
}

export function loadMoreResources(limit, skip) {
  return fetch(buildFilterUrl({ order: "publish_date DESC", limit, skip }))
    .then(handleResponse)
    .catch(handleError);
}

export function getResourcePage(link) {
  return fetch(buildResourcePageUrl(link)).then(handleResponse).catch(handleError);
}

export function getRecentResources() {
  return fetch(buildSearchFilterUrl({ order: "publish_date DESC", limit: 5 }))
    .then(handleResponse)
    .catch(handleError);
}