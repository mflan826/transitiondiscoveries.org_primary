import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "api/contactus/";

export function getContactUsData() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveContactUsForm(contactUsFormValues) {
  return fetch(baseUrl + (contactUsFormValues.id || ""), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...contactUsFormValues,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}
