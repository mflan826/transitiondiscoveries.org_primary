import React from "react";
import * as resourceActions from "../../redux/actions/resourceActions";
import { connect } from "react-redux";
import RecentResourcesList from "./RecentResourcesList";

class RecentResources extends React.Component {
  componentDidMount() {
    const { recentResources, loadRecentResources } = this.props;
    console.log("recentResources");
    console.log(this.props);
    console.log(recentResources);
    if (recentResources.length < 1) {
      loadRecentResources().catch((error) => {
        alert("Loading recent resources failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h4 className="green">Recent Resources</h4>
        <RecentResourcesList resources={this.props.recentResources}></RecentResourcesList>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    recentResources: state.recentResources,
  };
}

const mapDispatchToProps = {
  loadRecentResources: resourceActions.loadRecentResources,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecentResources);
