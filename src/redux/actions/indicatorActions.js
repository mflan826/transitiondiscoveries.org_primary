import * as indicatorApi from "../../api/indicatorsApi";
import * as types from "./actionTypes";

export function loadIndicatorsSuccess(indicators) {
  return { type: types.LOAD_INDICATORS_SUCCESS, indicators };
}

export function loadIndicators() {
  return function (dispatch) {
    return indicatorApi
      .getIndicators()
      .then((indicators) => {
        dispatch(loadIndicatorsSuccess(indicators));
      })
      .catch((error) => {
        throw error;
      });
  };
}
