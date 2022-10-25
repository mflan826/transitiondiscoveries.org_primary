import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import * as storyActions from "../redux/actions/storyActions";
import { connect } from "react-redux";
import "./ManageIndicator.css";
import { Redirect, NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import RecentStories from "../components/Story Listing/RecentStories";
import BannerWH from "../components/common/BannerWH";

let invalidSlug = false;
class StoryPage extends React.Component {
  componentDidMount() {
    const { storyPage, loadStoryPage } = this.props;
    loadStoryPage(this.props.match.params.slug).catch(() => {
      invalidSlug = true;
    });

  }

  componentDidUpdate(prevProps) {
    const { storyPage, loadStoryPage } = this.props;
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      loadStoryPage(this.props.match.params.slug).catch(() => {
        invalidSlug = true;
      });
    }
    console.log("link");
    console.log(this.props.storyPage);
  }


  is_url(str)
  {
    var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
          if (regexp.test(str))
          {
            return true;
          }
          else
          {
            return false;
          }
  }

  render() {
    if (invalidSlug) {
      return <Redirect to="/not-found" />;
    } else if (!this.props.storyPage) {
      return null;
    } else {
      return (
        <div className="main">
          <ScrollToTop />
          <section className=" bg-darkgreen">
            <BannerWH
              heading={this.props.storyPage.title}
              imageName={this.props.storyPage.thumbnail.src}
              date={this.props.storyPage.publish_date}
              author={this.props.storyPage.author}
            />
          </section>
          <section className="ml-4 mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 sidebar1 clearfix">
                  <RecentStories />
                </div>

                <div className="col-lg-9 BlogBody">
                  <div>{ReactHtmlParser(this.props.storyPage.body)}</div>
                  <div align="center">
                    <br></br>
                    {this.is_url(this.props.storyPage.video_link) &&
                    <iframe
                      id="player"
                      type="text/html"
                      width="70%"
                      height="500"
                      src={this.props.storyPage.video_link}
                      frameBorder="0"
                    ></iframe>
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    storyPage: state.stories.storyPage,
  };
}

const mapDispatchToProps = {
  loadStoryPage: storyActions.loadStoryPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
