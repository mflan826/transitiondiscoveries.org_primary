import React from "react";
import * as storyActions from "../../redux/actions/storyActions";
import { connect } from "react-redux";
import RecentStoryList from "./RecentStoryList";

class RecentStories extends React.Component {
  componentDidMount() {
    const { recentStories, loadRecentStories } = this.props;
    if (recentStories.length < 1) {
      loadRecentStories().catch((error) => {
        alert("Loading recent stories failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2 className="sidebarhead green">Recent Stories</h2>
        <RecentStoryList stories={this.props.recentStories}></RecentStoryList>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    recentStories: state.recentStories,
  };
}

const mapDispatchToProps = {
  loadRecentStories: storyActions.loadRecentStories,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecentStories);
