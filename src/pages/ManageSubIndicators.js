import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ScrollToTop from '../components/ScrollToTop';
import './subindicators.css';
import ReactHtmlParser from 'react-html-parser';
import { getSubIndicatorsImage, getSubIndicatorVideoUrl } from './../helper';
import IconTile2 from './../components/subindicators/IconTile2';
import NewTestimonial from '../components/common/NewTestimonial';
import SubIndicatorBanner from '../components/subindicators/SubIndicatorBanner';
import SubIndicatorTextImage from '../components/subindicators/SubIndicatorTextImage';
import SubIndicatorVideoImage from '../components/subindicators/SubIndicatorVideoImage';
import IconTile2Heading from '../components/subindicators/IconTile2Heading';
import FooterTop from '../components/common/FooterTop';
import { loadSubIndicatorDetails } from '../redux/actions/subIndicatorActions';
let invalidSlug = false;
class ManageSubIndicators extends React.Component {
  state = {
    testimonialList: this.props.SubIndicatorBanner &&   this.props.SubIndicatorBanner.fourth_section.testimonialList
  };

  componentDidMount() {
    const { subIndicator, loadSubIndicatorDetails } = this.props;
    //if (!mapSubIndicators.has(this.props.match.params.slug)) {
    loadSubIndicatorDetails(
      this.props.match.params.indicator,
      this.props.match.params.subindicator
    )

    
      //   .then((_subIndicators) => {
      //     mapSubIndicators.set(this.props.match.params.slug, _subIndicators);
      //   })
      .catch(() => {
        ////alert("Loading subIndicators failed");
        invalidSlug = true;
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps,this.props,'sss');
    // Any time props.email changes, update state.
    if (nextProps.subIndicator.SubIndicatorBanner && this.props.subIndicator.SubIndicatorBanner && nextProps.subIndicator.SubIndicatorBanner.indicatorname !== this.props.subIndicator.SubIndicatorBanner.indicatorname) {
      const { subIndicator, loadSubIndicatorDetails } = this.props;
    //if (!mapSubIndicators.has(this.props.match.params.slug)) {
      this.props.subIndicator.fourth_section.testimonialList=nextProps.subIndicator.fourth_section.testimonialList
  }
  }

  render() {
    const style = {
      'margin-right': '2.25rem',
    };
    if (!this.props.subIndicator.SubIndicatorBanner) {
      return null;
    }
    return (
      <div className="main">
        <ScrollToTop />
        <section>
          <SubIndicatorBanner
            indicatorname={
              this.props.subIndicator.SubIndicatorBanner.indicatorname
            }
            subindicatorname={
              this.props.subIndicator.SubIndicatorBanner.subindicatorname
            }
            abcid={this.props.subIndicator.SubIndicatorBanner.abcid}
          ></SubIndicatorBanner>
        </section>
        <section className="mt-minus-50">
          <SubIndicatorTextImage
            heading={this.props.subIndicator.SubIndicatorTextImage[0].heading}
            subhead={this.props.subIndicator.SubIndicatorTextImage[0].subhead}
            bullets={ReactHtmlParser(
              this.props.subIndicator.SubIndicatorTextImage[0].bullets
            )}
            imageName={getSubIndicatorsImage(
              this.props.match.params.indicator,
              this.props.match.params.subindicator,
              this.props.subIndicator.SubIndicatorTextImage[0].image
            )}
          ></SubIndicatorTextImage>
        </section>
        <section className="indicatorvideobox">
          <SubIndicatorVideoImage
            icon={getSubIndicatorsImage(
              this.props.match.params.indicator,
              this.props.match.params.subindicator,
              this.props.subIndicator.SubIndicatorVideoImage.icon
            )}
            VideoLink={
              this.props.subIndicator.SubIndicatorVideoImage.VideoLink
            }
            heading={this.props.subIndicator.SubIndicatorVideoImage.heading}
            imageName={getSubIndicatorsImage(
              this.props.match.params.indicator,
              this.props.match.params.subindicator,
              this.props.subIndicator.SubIndicatorVideoImage.imageName
            )}
          ></SubIndicatorVideoImage>
        </section>
        <section className="greyBGwithoutBorder patchleft ptb-40">
          <SubIndicatorTextImage
            heading={this.props.subIndicator.SubIndicatorTextImage[1].heading}
            subhead={this.props.subIndicator.SubIndicatorTextImage[1].subhead}
            bullets={ReactHtmlParser(
              this.props.subIndicator.SubIndicatorTextImage[1].bullets
            )}
            imageName={getSubIndicatorsImage(
              this.props.match.params.indicator,
              this.props.match.params.subindicator,
              this.props.subIndicator.SubIndicatorTextImage[1].image
            )}
          ></SubIndicatorTextImage>
        </section>
        <section className="bgbox">
          <div className="container bgboxgrid">
            <IconTile2Heading
              heading={this.props.subIndicator.IconTile2Heading.heading}
              headingclassName="white"
              subheading={this.props.subIndicator.IconTile2Heading.subheading}
              subheadingclassName="white"
            ></IconTile2Heading>
            <div className="box-grid-icons">
              {this.props.subIndicator.IconTile2.map((item) => {
                return (
                  <div className="box-grid-icons-1" align="center">
                    <IconTile2
                      iconTileImage={getSubIndicatorsImage(
                        this.props.match.params.indicator,
                        this.props.match.params.subindicator,
                        item.iconTileImage
                      )}
                      heading={item.heading}
                      content={item.content}
                      iconHeadingclassName="white"
                      iconTextclassName="white"
                    ></IconTile2>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="ptb-60">
          {/* <div className="container" style={style}> */}
          <div className="container" id="success-stories">
            <div className="row">
              <div className=" col-lg-12" align="center">
                <h4 class="lead-txt dark-green mb-3" align="center">
                  Success Stories
                </h4>
              </div>
              <NewTestimonial
                indicatorSlug={this.props.match.params.indicator}
                subindicatorSlug={this.props.match.params.subindicator}
                testimonials={
                  this.props.subIndicator.fourth_section.testimonialList
                }
              />
            </div>
          </div>
        </section>
        <section className="ptb-60">
          <FooterTop></FooterTop>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    subIndicator: state.subIndicator,
  };
}

const mapDispatchToProps = {
  loadSubIndicatorDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSubIndicators);
