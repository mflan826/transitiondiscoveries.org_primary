import React from 'react';
import { connect } from 'react-redux';
import Banner from '../components/common/Banner';
import VideoAndDescriptionRow from '../components/ActivityLessons/VideoAndDescriptionRow';
import IndicatorList from '../components/IndicatorList';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as indicatorActions from '../redux/actions/indicatorActions';
import './ActivityLessons.css';
import HeaderRow from '../components/common/HeaderRow';
import { getIndicatorImage } from './../helper';

class ActivityLessons extends React.Component {
  componentDidMount() {
    const { indicators, actions } = this.props;
    console.log(this.props.indicators);
    if (indicators.length === 0) {
      actions.loadIndicators().catch(() => {
        ////alert("Loading indicators failed" + error);
      });
    }
  }
  render() {
    if (typeof this.props.indicators.Banner === 'undefined') {
      return null;
    }
    return (
      <div className="main">
        <section className="hero-equal-height pt-100  gradient-overly-right-light activitylessonsbanner">
          <Banner
            heading={this.props.indicators.Banner.heading}
            text={this.props.indicators.Banner.text}
            imageName={getIndicatorImage(
              this.props.indicators.Banner.imageName
            )}
          ></Banner>
        </section>
        <section className="ptb-60 pb-0 mt-50 ">
          <VideoAndDescriptionRow
            videoLink={this.props.indicators.VideoAndDescriptionRow.videoLink}
            heading={this.props.indicators.VideoAndDescriptionRow.heading}
            content={this.props.indicators.VideoAndDescriptionRow.content}
          />
        </section>
        <section className="ptb-60 pb-0 indicators ">
          <div className="container indicatorsgrid" align="center">
            <HeaderRow
              heading={this.props.indicators.HeaderRow.heading}
              text={this.props.indicators.HeaderRow.text}
            />
            <div className="indicatorboxes">
              <div className="indicatorboxeselmnts">
                <IndicatorList
                  indicators={this.props.indicators.Indicators}
                ></IndicatorList>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ActivityLessons.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    indicators: state.indicators,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadIndicators: bindActionCreators(
        indicatorActions.loadIndicators,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityLessons);
