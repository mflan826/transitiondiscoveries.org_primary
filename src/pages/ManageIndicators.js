import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import * as subIndicatorActions from '../redux/actions/subIndicatorActions';
import * as indicatorActions from '../redux/actions/indicatorActions';
import { connect } from 'react-redux';
import './ManageIndicator.css';
import { Redirect, NavLink } from 'react-router-dom';
import ImageAndDescriptionRow2 from '../components/AboutUs/ImageAndDescriptionRow2';
import PropTypes from 'prop-types';
import ModalBox from './../components/common/ModalBox';
import {
  getSubIndicatorImage,
  getIndicatorImage,
  getIndicatorVideoUrl,
} from '../helper';

import TextAndIconRow from '../components/common/TextAndIconRow';
import Testimonials from '../components/common/Testimonials';
import FooterTop from '../components/common/FooterTop';
//const mapSubIndicators = new Map();
let invalidSlug = false;
class ManageIndicators extends React.Component {
  componentDidMount() {
    this._propsUpdate();
  }

  _propsUpdate() {
    const {
      indicators,
      subIndicators,
      loadIndicators,
      loadSubIndicators,
    } = this.props;
    loadSubIndicators(this.props.match.params.slug).catch(() => {
      invalidSlug = true;
    });
    if (indicators.length === 0) {
      loadIndicators().catch(() => {});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      this._propsUpdate();
    }
  }

  // componentDidUpdate = (prevProps) => {
  //   const {
  //     indicators,
  //     subIndicators,
  //     loadIndicators,
  //     loadSubIndicators,
  //   } = this.props;
  //   //if (!mapSubIndicators.has(this.props.match.params.slug)) {
  //   loadSubIndicators(this.props.match.params.slug)
  //     //   .then((_subIndicators) => {
  //     //     mapSubIndicators.set(this.props.match.params.slug, _subIndicators);
  //     //   })
  //     .catch(() => {
  //       ////alert("Loading subIndicators failed");
  //       invalidSlug = true;
  //     });

  //   if (indicators.length === 0) {
  //     loadIndicators().catch(() => {
  //       ////alert("Loading indicators failed" + error);
  //     });
  //   }
  // };

  getIndicatorTitle(indicatorList) {
    if (!indicatorList) return;
    console.log(indicatorList, 'dddddin');
    let indicator = indicatorList.filter(
      (item) => item.slug === this.props.match.params.slug
    );
    return indicator[0].title;
  }

  render() {
    const defaultImage = '/images/indicator-1-left.png';
    var divStyle = !(this.props.subIndicators instanceof Array)
      ? {
          backgroundImage:
            'url(' +
            getIndicatorImage(
              this.props.subIndicators.banner.image,
              this.props.match.params.slug || defaultImage
            ) +
            ')',
        }
      : {};
    if (invalidSlug) {
      return <Redirect to="/not-found" />;
    } else if (
      typeof this.props.subIndicators.RelatedVideosRow === 'undefined'
    ) {
      return null;
    } else {
      return (
        <div className="main">
          <ScrollToTop />
          <section>
            <div className="container-fluid ">
              <div className="row">
                <div className="transition-planning">
                  <div className="item-a" style={divStyle}>
                    <div className="transi-bx">
                      <img
                        src={getIndicatorImage(
                          this.props.subIndicators.banner.imageName,
                          this.props.match.params.slug
                        )}
                        alt=""
                      />
                      <h1 className="slider-lead white">
                        {this.getIndicatorTitle(
                          this.props.indicators.Indicators
                        )}
                      </h1>
                      <p className="white">
                        {this.props.subIndicators.banner.content}
                      </p>
                    </div>
                  </div>
                  <div className="item-b">
                    <div className="agenc_bx">
                      {' '}
                      <iframe
                        id="player"
                        type="text/html"
                        width="100%"
                        height="400"
                        src={this.props.subIndicators.banner.videoUrl}
                        frameborder="0"
                      ></iframe>
                    </div>
                    {/* <div className="agenc_bx">
                       <ul>
                        {this.props.subIndicators.length === undefined &&
                          this.props.subIndicators.subIndicators.map(
                            (subIndicator) => (
                              <li key={subIndicator.id}>
                                <img
                                  src={getSubIndicatorImage(
                                    subIndicator.iconImageName,
                                    this.props.match.params.slug
                                  )}
                                  alt="logo"
                                />
                                <span>{subIndicator.title}</span>
                              </li>
                            )
                          )}
                      </ul> 
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container contentsec-grid ptb-40">
              <ImageAndDescriptionRow2
                imageName={getIndicatorImage(
                  this.props.subIndicators.ImageAndDescriptionRow.imageName,
                  this.props.match.params.slug
                )}
                heading={
                  this.props.subIndicators.ImageAndDescriptionRow.heading
                }
                content={
                  this.props.subIndicators.ImageAndDescriptionRow.content
                }
              />
            </div>
          </section>
          <section className="indicatorvideobox">
            <div className="container grid-dark ptb-40">
              <div className="item-b">
                <img
                  src={getIndicatorImage(
                    this.props.subIndicators.indicatorvideobox.image,
                    this.props.match.params.slug
                  )}
                  alt="Get the Information"
                  className="img-fluid"
                ></img>
              </div>
              <div className="item-a">
                <div className="item-ab">
                  <div className="video-txt">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#modalResources2"
                      onClick={
                        this.props.subIndicators.indicatorvideobox.VideoLink
                      }
                    >
                      <img
                        src="/images/indicator-3-1.png"
                        className=""
                        alt="icon"
                      ></img>
                    </a>
                    <ModalBox
                      id="modalResources2"
                      link={this.props.subIndicators.indicatorvideobox.VideoLink}
                      title=""
                      type="vedio"
                    ></ModalBox>
                    <h2 className="white">
                      {this.props.subIndicators.indicatorvideobox.content}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            style={{ textAlign: 'center' }}
            className="ptb-60  icon-section"
          >
            <div className="container ">
              <h3 className="green">
                {this.props.subIndicators.indicatordetails.heading}
              </h3>
              <p>{this.props.subIndicators.indicatordetails.content}</p>
              <div className="SubindicatorDetailList">
                <div className="item-left">
                  <div>
                    <ul>
                      {this.props.subIndicators.length === undefined &&
                        this.props.subIndicators.subIndicators.map(
                          (subIndicator, index) => {
                            if ((index + 2) % 2 === 0) {
                              return (
                                <li key={subIndicator.id}>
                                  <img
                                    className="icn"
                                    src={getSubIndicatorImage(
                                      subIndicator.imageName,
                                      this.props.match.params.slug
                                    )}
                                    alt=""
                                  />
                                  <NavLink
                                    to={{
                                      pathname:
                                        '/our-framework/' +
                                        this.props.match.params.slug +
                                        subIndicator.link,
                                      state: {
                                        subIndicatorTitle: subIndicator.title,
                                      },
                                    }}
                                  >
                                    <h4 className="green">
                                      {subIndicator.title}
                                    </h4>
                                  </NavLink>
                                  <p>{subIndicator.text}</p>
                                </li>
                              );
                            }
                          }
                        )}
                    </ul>
                  </div>
                </div>
                <div className="item-center" align="center">
                  <img src="/images/sub-Indicator-center-icon.png" alt=""></img>
                </div>
                <div className="item-right">
                  <div>
                    <ul>
                      {this.props.subIndicators.length === undefined &&
                        this.props.subIndicators.subIndicators.map(
                          (subIndicator, index) => {
                            if ((index + 2) % 2 !== 0) {
                              return (
                                <li key={subIndicator.id}>
                                  <img
                                    className="icn"
                                    src={getSubIndicatorImage(
                                      subIndicator.imageName,
                                      this.props.match.params.slug
                                    )}
                                    alt=""
                                  />
                                  <NavLink
                                    to={{
                                      pathname:
                                        '/our-framework/' +
                                        this.props.match.params.slug +
                                        subIndicator.link,
                                      state: {
                                        subIndicatorTitle: subIndicator.title,
                                      },
                                    }}
                                  >
                                    <h4 className="green">
                                      {subIndicator.title}
                                    </h4>
                                  </NavLink>
                                  <p>{subIndicator.text}</p>
                                </li>
                              );
                            }
                          }
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="blueBox ptb-40">
            <TextAndIconRow
              heading={this.props.subIndicators.TextAndIconRow.heading}
              title={this.props.subIndicators.TextAndIconRow.title}
              textAndIcons={
                this.props.subIndicators.TextAndIconRow.textAndIcons
              }
            />
          </section>
          {/* <section style={{ textAlign: "center" }} className="ptb-60">
            <RelatedVideosRow
              heading={this.props.subIndicators.RelatedVideosRow.heading}
              relatedVideos={
                this.props.subIndicators.RelatedVideosRow.relatedVideos
              }
            />
          </section>
          <section style={{ textAlign: "center" }} className="ptb-60 grey-bg">
            <GetInvolvedRow
              headerRow={this.props.subIndicators.GetInvolvedRow.headerRow}
              imageLinkTiles={
                this.props.subIndicators.GetInvolvedRow.imageLinkTiles
              }
            />
          </section> */}
          {/* <section className="ptb-60">
            <div className="container">
              <div className="row">
                <div className=" col-lg-5">
                  <iframe
                    id="player"
                    type="text/html"
                    width="100%"
                    height="400"
                    src="http://www.youtube.com/embed/8CZzZeYIq2M?rel=0&amp;modestbranding=0&amp;autohide=0&amp;showinfo=0&amp;controls=0"
                    frameborder="0"
                  ></iframe>
                </div>
                <div className="col-lg-7">
                  <Testimonials />
                </div>
              </div>
            </div>
          </section> */}
          <section className="ptb-60">
            <FooterTop></FooterTop>
          </section>
        </div>
      );
    }
  }
}

ManageIndicators.propTypes = {
  loadSubIndicators: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    subIndicators: state.subIndicators,
    indicators: state.indicators,
  };
}

const mapDispatchToProps = {
  loadSubIndicators: subIndicatorActions.loadSubIndicators,
  loadIndicators: indicatorActions.loadIndicators,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageIndicators);
