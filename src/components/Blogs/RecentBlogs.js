import React from "react";
import * as blogActions from "../../redux/actions/blogActions";
import { connect } from "react-redux";
import RecentBlogList from "./RecentBlogList";
import Post from "./Post";

const font={
  'font-size':'1.75rem'
}

class RecentBlogs extends React.Component {
  componentDidMount() {
    const { recentBlogs, loadRecentBlogs } = this.props;
    if (recentBlogs.length < 1) {
      loadRecentBlogs().catch((error) => {
        alert("Loading recent blogs failed" + error);
      });
    }
  }

  render() {
    const isHorizontal = this.props.isHorizontal;
    if (isHorizontal) {
      return (
        <>
          <Post blogs={this.props.recentBlogs}></Post>
        </>
      );
    } else {
      return (
        <>
          <div style={font} className="green">Recent Blogs</div>
          <RecentBlogList blogs={this.props.recentBlogs}></RecentBlogList>
        </>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    recentBlogs: state.recentBlogs,
  };
}

const mapDispatchToProps = {
  loadRecentBlogs: blogActions.loadRecentBlogs,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecentBlogs);
