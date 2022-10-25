import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import * as blogActions from '../redux/actions/blogActions';
import { connect } from 'react-redux';
import './ManageIndicator.css';
import { Redirect, NavLink } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import BannerWH from '../components/common/BannerWH';
import RecentBlogs from '../components/Blogs/RecentBlogs';

let invalidSlug = false;
class BlogPage extends React.Component {
  componentDidMount() {
    const { blogPage, loadBlogPage } = this.props;
    loadBlogPage(this.props.match.params.slug).catch(() => {
      invalidSlug = true;
    });
  }
  componentDidUpdate(prevProps) {
    const { blogPage, loadBlogPage } = this.props;
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      loadBlogPage(this.props.match.params.slug).catch(() => {
        invalidSlug = true;
      });
    }
  }

  render() {
    if (invalidSlug) {
      return <Redirect to="/not-found" />;
    } else if (!this.props.blogPage) {
      return null;
    } else {
      return (
        <div className="main" key={this.props.match.params.slug}>
          <ScrollToTop />
          <section className=" bg-darkgreen blogdet">
            <BannerWH
              heading={this.props.blogPage.title}
              imageName={this.props.blogPage.thumbnail.src}
              date={this.props.blogPage.publish_date}
            />
          </section>
          <section className="ml-4 mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 sidebar1 clearfix">
                  <RecentBlogs></RecentBlogs>
                </div>

                <div className="col-lg-9 BlogBody">
                  <div>{ReactHtmlParser(this.props.blogPage.body)}</div>
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
    blogPage: state.blogs.blogPage,
  };
}

const mapDispatchToProps = {
  loadBlogPage: blogActions.loadBlogPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
