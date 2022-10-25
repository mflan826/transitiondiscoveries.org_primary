import { connect } from "react-redux";
import {
  setVisibilityQisFilter,
  removeVisibilityQisFilter,
} from "../../redux/actions/whatWorksActions";
import QisBox from "./QisBox";

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityQisFilter.includes(ownProps.QisFilter),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onQisChange: (e) => {
    if (e.target.checked) {
      dispatch(setVisibilityQisFilter(ownProps.QisFilter));
    } else {
      dispatch(removeVisibilityQisFilter(ownProps.QisFilter));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QisBox);
