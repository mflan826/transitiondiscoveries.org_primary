import * as indicatorApi from "../../api/indicatorsApi";
import * as types from "./actionTypes";

export function loadSubIndicatorsSuccess(subIndicators) {
  return { type: types.LOAD_SUBINDICATORS_SUCCESS, subIndicators };
}

export function loadSubIndicators(slug) {
  return function (dispatch) {
    return indicatorApi
      .getSubIndicatorsBySlug(slug)
      .then((subIndicators) => {
        dispatch(loadSubIndicatorsSuccess(subIndicators));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadSubIndicatorDetailsSuccess(subIndicator) {
  return { type: types.LOAD_SUBINDICATORDETAILS_SUCCESS, subIndicator };
}

export function loadSubIndicatorDetails(indicator, subindicator) {
  return function (dispatch) {
    return indicatorApi
      .getSubIndicatorDetailsBySubIndicator(indicator, subindicator)
      .then((subIndicator) => {
        dispatch(loadSubIndicatorDetailsSuccess(subIndicator));
      })
      .catch((error) => {
        throw error;
      });
  };
}
