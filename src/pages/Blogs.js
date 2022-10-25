import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as blogActions from "../redux/actions/blogActions";
import BlogList from "../components/Blogs/Post";
import { Button } from "react-bootstrap";
import Banner from "../components/common/Banner";
import RecentBlogs from "../components/Blogs/RecentBlogs";
import * as constants from "../constants";
import { getStyle } from "./../helper";

class Blogs extends React.Component {
  componentDidMount() {
    const { blogs, actions } = this.props;

    if (blogs.blogs.length === 0) {
      actions.loadBlog().catch((error) => {
        alert("Loading blog failed" + error);
      });
    }
    //actions.setPage(page);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSearchBlog = (e) => {
    e.preventDefault();
    if (this.state) {
      const searchQuery = new Object();
      if (this.state.search) {
        searchQuery.or = [
          { title: { like: ".*" + this.state.search + ".*", options: "i" } },
          {
            body: {
              like: ".*" + this.state.search + ".*",
              options: "i",
            },
          },
        ];
      }
      try {
        if (Object.keys(searchQuery).length > 0) {
          this.props.actions.searchBlog(searchQuery);
        } else {
          this.props.actions.loadBlog();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      this.props.actions.loadBlog();
    }
  };

  handleLoadMore = () => {
    try {
      this.props.actions.loadMorePosts(this.props.blogs.page);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let loadMoreButton;
    if (!this.props.blogs) {
      return null;
    } else {
      if (
        this.props.blogs.page &&
        this.props.blogs.page > 0 &&
        this.props.blogs.blogs.length > constants.POSTS_PER_PAGE - 1
      ) {
        loadMoreButton = (
          <Button className="btn btn-blogs" onClick={this.handleLoadMore}>
            Load More
          </Button>
        );
      }
    }
    return (
      <div className="main" id="blogbx">
        <section>
          <div
            className="hero-equal-height pt-165 pb-150 gradient-overly-right-light  pagebanner"
            page="blog"
            style={getStyle("blogs", "Blog-Banner.jpg")}
          >
            <Banner
              heading="Blogs"
              text="We believe our shared experiences are the key to success!"
            />
          </div>
        </section>

        <section className="ml-4 mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 sidebar1 clearfix">
                <form className="searchForm" onSubmit={this.handleSearchBlog}>
                  <h2 className="sidebarhead green">Refine your search</h2>
                  <div className="form-group">
                    <input
                      type="search"
                      name="search"
                      aria-label="Search"
                      className="form-control"
                      placeholder="Enter Keyword..."
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    SEARCH
                  </button>
                </form>
                <RecentBlogs />
              </div>

              <div className="col-lg-9 reslinks" align="center">
                <BlogList blogs={this.props.blogs.blogs}></BlogList>
                {loadMoreButton}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    blogs: state.blogs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBlog: bindActionCreators(blogActions.loadBlog, dispatch),
      searchBlog: bindActionCreators(blogActions.searchBlog, dispatch),
      loadMorePosts: bindActionCreators(blogActions.loadMorePosts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
