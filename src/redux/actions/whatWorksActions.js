import * as whatWorksApi from "../../api/whatWorksApi";
import * as types from "./actionTypes";

export function loadWhatWorksSuccess(whatWorksData) {
  return { type: types.LOAD_WHATWORKS_SUCCESS, whatWorksData };
}

export function filterWhatWorksDataSuccess(whatWorksData) {
  return { type: types.FILTER_WHATWORKS_SUCCESS, whatWorksData };
}

export function setVisibilityQisFilterSuccess(qisFilter) {
  return {
    type: "SET_VISIBILITY_QIS_FILTER",
    qisFilter,
  };
}

export function removeVisibilityQisFilterSuccess(qisFilter) {
  return {
    type: "REMOVE_VISIBILITY_QIS_FILTER",
    qisFilter,
  };
}

export function loadWhatWorksData() {
  return function (dispatch) {
    return whatWorksApi
      .getWhatWorksData()
      .then((whatWorksData) => {
        dispatch(loadWhatWorksSuccess(whatWorksData));
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };
}

export function filterWhatWorksData(filters) {
  console.log("filters whatworks action called " + filters);
  return function (dispatch) {
    return whatWorksApi
      .filterWhatWorksData(filters)
      .then((whatWorksData) => {
        dispatch(filterWhatWorksDataSuccess(whatWorksData));
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };
}

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: "ALL_sdev",
  SHOW_YOUTH: "YOUTH_sdev",
  SHOW_FAMILY: "FAMILY_sdev",
  SHOW_STAKEHOLDER: "SH_sdev",
};

export const setToggleIndicator = (indicator) => ({
  type: "SET_INDICATOR",
  indicator,
});

export function setVisibilityQisFilter(qisFilter) {
  return function (dispatch) {
    dispatch(setVisibilityQisFilterSuccess(qisFilter));
  };
}

export function removeVisibilityQisFilter(qisFilter) {
  return function (dispatch) {
    dispatch(removeVisibilityQisFilterSuccess(qisFilter));
  };
}

export const VisibilityQisFilters = {
  SHOW_ALL: "ALL_QIS",
  SHOW_YOUTH: "YOUTH_QIS",
  SHOW_FAMILY: "FAMILY_QIS",
  SHOW_STAKEHOLDER: "SH_QIS",
};
