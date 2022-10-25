import { VisibilityQisFilters } from "../actions/whatWorksActions";

const visibilityQisFilter = (
  state = [VisibilityQisFilters.SHOW_ALL],
  action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_QIS_FILTER":
      return state.concat(action.qisFilter);
    case "REMOVE_VISIBILITY_QIS_FILTER":
      return state.filter((item) => item !== action.qisFilter);
    default:
      return state;
  }
};

export default visibilityQisFilter;
