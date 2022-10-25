import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_URL;
const apiUrl = process.env.REACT_APP_API_URL + "api/";
const endpoint = "whatworks";
const s3Url = process.env.REACT_APP_S3_URL + "what-works/Whatworks.json";

export function getWhatWorksData() {
  return fetch(s3Url).then(handleResponse).catch(handleError);
}

function buildSearchUrl() {
  let searchUrl = apiUrl + "whatworkstests/filter";
  return searchUrl;
}

function generateRange(min, max, step){
  let arr = [];
  for(let i = min; i <= max; i += step){
     switch (i) {
        case 13:
          arr.push("under 14");

         break;
        case 26:
          arr.push("over 25");
          break;
       default:
          arr.push(String(i));
         break;
     }
  }
  return arr;
}

export function filterWhatWorksData(filters) {
  console.log(filters.age);

  let roleFilter = ['F','S','Y', 'ALL'];
  let ageRangeFilter = generateRange(13, 26, 1);
  if(filters.age){
    ageRangeFilter = generateRange(Number(filters.age.lowerRange), Number(filters.age.upperRange), 1);
  }
  console.log(ageRangeFilter);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Role: roleFilter, Age: ageRangeFilter })
  };

  console.log(buildSearchUrl());
  return fetch(buildSearchUrl(), requestOptions)
    .then(handleResponse)
    .catch(handleError);
}
