import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_URL + "/indicators/";

export function getIndicators() {
  return fetch(baseUrl + "indicators.json")
    .then(handleResponse)
    .catch(handleError);
}

export function getSubIndicatorsBySlug(slug) {
  return fetch(baseUrl + "/" + slug + "/" + slug + ".json")
    .then(handleResponse)
    .catch(handleError);
}

export function getSubIndicatorDetailsBySubIndicator(indicator, subindicator) {
  return fetch(
    baseUrl +
      "/" +
      indicator +
      "/" +
      subindicator +
      "/" +
      subindicator +
      ".json"
  )
    .then(handleResponse)
    .catch(handleError);
}
