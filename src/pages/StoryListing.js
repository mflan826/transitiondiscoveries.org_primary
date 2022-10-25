import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as storyActions from "../redux/actions/storyActions";
import StoryList from "../components/Story Listing/Story";
import { Button } from "react-bootstrap";
import Banner from "../components/common/Banner";
import RecentStories from "../components/Story Listing/RecentStories";
import * as constants from "../constants";
import IconTile2Heading from "../components/subindicators/IconTile2Heading";
import FooterTop from "../components/common/FooterTop";
import { getStyle } from "./../helper";

class StoryListing extends React.Component {
  componentDidMount() {
    const { stories, actions } = this.props;

    if (typeof stories === "undefined" || stories.stories.length === 0) {
      actions.loadStory().catch((error) => {
        alert("Loading stories failed" + error);
      });
    }
    //actions.setPage(page);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSearchStory = (e) => {
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
          this.props.actions.searchStory(searchQuery);
        } else {
          this.props.actions.loadStory();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      this.props.actions.loadStory();
    }
  };

  handleLoadMore = () => {
    try {
      this.props.actions.loadMoreStory(this.props.stories.page);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let loadMoreButton;
    if (!this.props.stories) {
      return null;
    } else {
      if (
        this.props.stories.page &&
        this.props.stories.page > 0 &&
        this.props.stories.stories.length > constants.STORY_PER_PAGE - 1
      ) {
        loadMoreButton = (
          <Button className="btn btn-blogs" onClick={this.handleLoadMore}>
            Load More
          </Button>
        );
      }
    }
    return (
      <div className="main">
        <section>
          <div
            className="hero-equal-height pt-165 pb-150 gradient-overly-right-light aboutbanner pagebanner"
            page="story-listing"
            style={getStyle("story-listings", "story-banner.jpg")}
          >
            <Banner
              heading="Your Voices, Your Stories"
              text="We’re all about highlighting success after high school and the many ways to make it happen!"
            />
          </div>
        </section>

        <section className="ml-4 mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 sidebar1 clearfix">
                <form className="searchForm" onSubmit={this.handleSearchStory}>
                  <h2 className="sidebarhead green">Refine your search</h2>
                  <div className="form-group">
                    <input
                      type="search"
                      aria-label="Search"
                      name="search"
                      className="form-control"
                      placeholder="Enter Keyword..."
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    SEARCH
                  </button>
                </form>
                <RecentStories />
              </div>

              <div className="col-lg-9 reslinks" align="center">
                <IconTile2Heading
                  heading="What’s Your Story?"
                  headingclassName="green"
                  subheadingclassName="dark"
                  subheading="At Transition Discoveries, we believe in the power of storytelling to bring communities and people together! Check out what others have to say about transitioning to life after high school.                   "
                ></IconTile2Heading>
                <StoryList stories={this.props.stories.stories}></StoryList>
                {loadMoreButton}
              </div>
            </div>
          </div>
        </section>
        <section className="ptb-60">
          <div className="container">
            <div className="col-lg-12 reslinks" align="center">
              <IconTile2Heading
                heading="Share Your Success!"
                headingclassName="green"
                subheadingclassName="dark"
                subheading="Have something to say about what success after high school looks like for you and all the great things that you do? Contact us and let us know your story! Other people can learn so much about planning their own futures by hearing about what you have done to reach your own goals.                   "
              ></IconTile2Heading>
            </div>
          </div>
          <FooterTop></FooterTop>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    stories: state.stories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadStory: bindActionCreators(storyActions.loadStory, dispatch),
      searchStory: bindActionCreators(storyActions.searchStory, dispatch),
      loadMoreStory: bindActionCreators(storyActions.loadMoreStory, dispatch),
      //setPage: bindActionCreators(resourceActions.setPage, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryListing);
