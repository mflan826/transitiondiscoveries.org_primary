import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import * as resourceActions from '../redux/actions/resourceActions';
import { connect } from 'react-redux';
import './ManageIndicator.css';
import { Redirect, NavLink } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import RecentResources from '../components/Resource/RecentResources';
import BannerWH from '../components/common/BannerWH';

let invalidSlug = false;
class ResourcePage extends React.Component {
  componentDidMount() {
    const { resourcePage, loadResourcePage } = this.props;
    loadResourcePage(this.props.match.params.slug).catch(() => {
      invalidSlug = true;
    });
  }

  componentDidUpdate(prevProps) {
    const { resourcePage, loadResourcePage } = this.props;
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      loadResourcePage(this.props.match.params.slug).catch(() => {
        invalidSlug = true;
      });
    }
  }

  render() {
    if (invalidSlug) {
      return <Redirect to="/not-found" />;
    } else if (!this.props.resourcePage) {
      return null;
    } else {
      return (
        <div className="main">
          <ScrollToTop />
          <section className=" bg-darkgreen">
            <BannerWH
              heading={this.props.resourcePage.name}
              imageName={this.props.resourcePage.thumbnail.src}
              date={this.props.resourcePage.publish_date}
              author={this.props.resourcePage.author}
            />
          </section>
          <section className="ml-4 mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 sidebar1 clearfix">
                  <RecentResources />
                </div>

                <div className="col-lg-9 BlogBody">
                  <div>
                    {ReactHtmlParser(this.props.resourcePage.description)}
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
    resourcePage: state.resources.resourcePage,
  };
}

const mapDispatchToProps = {
  loadResourcePage: resourceActions.loadResourcePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourcePage);
