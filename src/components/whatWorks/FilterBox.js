import { connect } from "react-redux";
import { setVisibilityFilter } from "../../redux/actions/whatWorksActions";
import Box from "./Box";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
