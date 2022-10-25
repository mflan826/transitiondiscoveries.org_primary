import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Banner from "../components/common/Banner";
import Chart from "../components/whatWorks/Chart";
import * as whatWorksActions from "../redux/actions/whatWorksActions";
import "./WhatWorks.css";
import FilterBox from "../components/whatWorks/FilterBox";
import FilterQisBox from "../components/whatWorks/FilterQisBox";
import AgeFilter from "../components/whatWorks/AgeFilter";
import { getStyle } from "./../helper";
import {
  VisibilityFilters,
  setToggleIndicator,
  VisibilityQisFilters,
} from "../redux/actions/whatWorksActions";
import { getSubIndicatorImage, getIndicatorImage } from "../helper";
import VideoAndDescriptionRow from "../components/ActivityLessons/VideoAndDescriptionRow";

class WhatWorks extends React.Component {
  state = {
    age: {
      lowerRange: 13,
      upperRange: 26,
    },
    indicators: [
      { value: "All", title: "All Indicators" },
      { value: "Transition Planning", title: "Transition Planning" },
      { value: "Youth Development", title: "Youth Development" },
      {
        value: "Person and Family Directed Planning",
        title: "Person and Family Directed Planning",
      },
      { value: "Family Engagement", title: "Family Engagement" },
      { value: "Relationships", title: "Relationships" },
      {
        value: "Independent Living and Community Engagement",
        title: "Independent Living and Community Engagement",
      },
      {
        value: "Cross Agency Collaboration",
        title: "Cross Agency Collaboration",
      },
      { value: "Employment", title: "Employment" },
      { value: "Post Secondary Education", title: "Post Secondary Educations" },
    ],
    state: [{ value: "Pennsylvania", title: "Pennsylvania" }],
  };

  componentDidMount() {
    const { whatWorksData, actions, toggleIndicator } = this.props;

    // actions.loadWhatWorksData().catch((error) => {
    actions.filterWhatWorksData({}).catch((error) => {
      //alert("Loading data failed" + error);
    });
  }

  ageFilterCallback = (ageFilter) => {
    const { whatWorksData, actions, toggleIndicator } = this.props;
    console.log(ageFilter);
    this.setState({
      age: {
        lowerRange: ageFilter[0],
        upperRange: ageFilter[1],
      },
    });

    actions.filterWhatWorksData(this.state).catch((error) => {
      //alert("Loading data failed" + error);
    });
  };

  render() {
    const animatedComponents = makeAnimated();
    const theme = (theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#a0cb3a",
        primary: "#a0cb3a",
        primary75: "#a0cb3a",
        primary50: "#a0cb3a",
      },
    });
    if (!this.props.whatWorksData.length > 0) {
      return null;
    } else {
      return (
        <div className="main" id="whatworksbx">
          <section>
            <div
              className="hero-equal-height pt-165 pb-150 gradient-overly-right-light aboutbanner pagebanner"
              page="what-works"
              style={getStyle("what-works", "what-works-banner.jpg")}
            >
              <Banner
                heading="What Works"
                text="Youth, families and stakeholders make up the ultimate network of experts on what works in preparing for life after high school"
              />
            </div>
          </section>
          <section className="ptb-60 pb-100 mt-50 ">
            <VideoAndDescriptionRow
              videoLink="https://www.youtube.com/embed/gG23GxG_MdM?rel=0&modestbranding=0&autohide=0&showinfo=0&controls=1"
              heading="Ready to Learn About What Works?"
              content="So many communities are sharing with us about what works in transition, and we want to share it with you! So, we made TD’s What Works data hub! Think of this like your one-stop-shop for stats and highlights about effective things that communities are doing to help young people reach their goals for life after high school. This video explains everything that you’ll need to know in order to get the most out of this space! "
            />
          </section>
          <section>
            <div className="container">
              <div className="form-inline filter-bg justify-content-center">
                <Select
                  style={{ fontSize: "16px" }}
                  name="selectState"
                  label="selectState"
                  aria-label="Select State"
                  theme={theme}
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  defaultValue={this.state.state[0]}
                  options={this.state.state}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.value}
                />
                <Select
                  style={{ fontSize: "16px" }}
                  name="selectIndicator"
                  label="selectIndicator"
                  aria-label="Select Indicators"
                  theme={theme}
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  defaultValue={this.state.indicators[0]}
                  options={this.state.indicators}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.value}
                  onChange={this.props.toggleIndicator}
                />
                {/* <select
                  className="form-control mx-4 select-mac-fix"
                  id="selectState"
                  name="selectState"
                >
                  <option value="Pennsylvania">Pennsylvania</option>
                </select>
                <select
                  className="form-control mx-4 select-mac-fix"
                  id="selectIndicator"
                  name="selectIndicator"
                  onChange={this.props.toggleIndicator}
                >
                  <option value="All">All Indicators</option>
                  <option value="Transition Planning">
                    Transition Planning
                  </option>
                  <option value="Youth Development">Youth Development</option>
                  <option value="Person and Family Directed Planning">
                    Person and Family Directed Planning
                  </option>
                  <option value="Family Engagement">Family Engagement</option>
                  <option value="Relationships">Relationships</option>
                  <option value="Independent Living and Community Engagement">
                    Independent Living and Community Engagement
                  </option>
                  <option value="Cross Agency Collaboration">
                    Cross Agency Collaboration
                  </option>
                  <option value="Employment">Employment</option>
                  <option value="Post Secondary Education">
                    Post Secondary Education
                  </option>
                </select> */}
              </div>
            </div>
          </section>
          <section className="mt-4">
            <div className="container">
              <div className="chart-box ">
                <div className="d-flex justify-content-center bg-white">
                  <Chart data={this.props.whatWorksData} />
                </div>
              </div>

              <div className="py-4">
                <div className="row">
                  <div className="col">
                    <div className="tile">
                      <h5 className="green">
                        Which information would you like to see?
                      </h5>
                      <div style={{ fontSize: "16px" }}>
                        <h6>Average Score in the community</h6>
                        <FilterQisBox QisFilter={VisibilityQisFilters.SHOW_ALL}>
                          All
                        </FilterQisBox>
                        <FilterQisBox
                          QisFilter={VisibilityQisFilters.SHOW_YOUTH}
                        >
                          Youth
                        </FilterQisBox>
                        <FilterQisBox
                          QisFilter={VisibilityQisFilters.SHOW_FAMILY}
                        >
                          Family
                        </FilterQisBox>
                        <FilterQisBox
                          QisFilter={VisibilityQisFilters.SHOW_STAKEHOLDER}
                        >
                          Stakeholder
                        </FilterQisBox>
                      </div>
                      <div style={{ fontSize: "16px" }}>
                        <h6>Range of Score in the community</h6>
                        <FilterBox filter={VisibilityFilters.SHOW_ALL}>
                          All
                        </FilterBox>
                        <FilterBox filter={VisibilityFilters.SHOW_YOUTH}>
                          Youth
                        </FilterBox>
                        <FilterBox filter={VisibilityFilters.SHOW_FAMILY}>
                          Family
                        </FilterBox>
                        <FilterBox filter={VisibilityFilters.SHOW_STAKEHOLDER}>
                          Stakeholder
                        </FilterBox>
                      </div>
                      <div style={{ fontSize: "16px" }}>
                        <h6>Filter By Age Range</h6>
                        <AgeFilter ageFilterCallback={this.ageFilterCallback} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tile" style={{ fontSize: "16px" }}>
                      <h5 className="green">
                        Which information would you like to see?
                      </h5>
                      <div>
                        <div>
                          <label className="col-form-label">
                            Young people with disabilites:
                          </label>

                          <label className="col-form-label pl-1">200</label>
                        </div>
                        <div>
                          <label className="col-form-label">Family:</label>

                          <label className="col-form-label pl-1">100</label>
                        </div>
                        <div>
                          <label for="staticEmail" className="col-form-label">
                            Stakeholder:
                          </label>

                          <label className="col-form-label pl-1">150</label>
                        </div>
                        <div className="form-group">
                          <label for="staticEmail" className="col-form-label">
                            Total:
                          </label>

                          <label className="col-form-label pl-1">500</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row"></div>
            </div>
          </section>
        </div>
      );
    }
  }
}

function filterWhatWorksData(whatWorksData, filterValue) {
  const dataWorks = whatWorksData;
  const filteredData = [];
  dataWorks.map((item) => {
    let obj = new Object();
    Object.keys(item).map((key) => {
      if (key.includes(filterValue) || key.includes("name")) {
        obj[key] = item[key];
      }
    });
    filteredData.push(obj);
  });
  return filteredData;
}

function filterByVisibility(whatWorksData, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return whatWorksData.length > 0
        ? filterWhatWorksData(whatWorksData, VisibilityFilters.SHOW_ALL)
        : whatWorksData;
    case VisibilityFilters.SHOW_YOUTH:
      return filterWhatWorksData(whatWorksData, VisibilityFilters.SHOW_YOUTH);
    case VisibilityFilters.SHOW_FAMILY:
      return filterWhatWorksData(whatWorksData, VisibilityFilters.SHOW_FAMILY);
    case VisibilityFilters.SHOW_STAKEHOLDER:
      return filterWhatWorksData(
        whatWorksData,
        VisibilityFilters.SHOW_STAKEHOLDER
      );
    default:
      return whatWorksData;
  }
}

function filterByVisibilityQis(whatWorksData, QisFilter) {
  let filterQisValue = QisFilter.join();
  const dataWorksQis = whatWorksData;
  const filteredQisData = [];
  dataWorksQis.map((item) => {
    let obj = new Object();
    Object.keys(item).map((key) => {
      if (filterQisValue.includes(key) || key.includes("name")) {
        obj[key] = item[key];
      }
    });
    filteredQisData.push(obj);
  });
  return filteredQisData;
}

function getFilteredData(whatWorksData, filter, selectedIndicator, QisFilter) {
  console.log(selectedIndicator);
  if (selectedIndicator.value !== "All") {
    whatWorksData = whatWorksData.filter(
      (item) => item.name === selectedIndicator.value
    );
    whatWorksData = whatWorksData[0].subIndicators;
  }

  if (whatWorksData.length > 0) {
    let whatWorksData1 = filterByVisibility(whatWorksData, filter);
    let whatWorksData2 = filterByVisibilityQis(whatWorksData, QisFilter);
    whatWorksData = whatWorksData1.map((item, i) =>
      Object.assign({}, item, whatWorksData2[i])
    );
    return whatWorksData;
  } else {
    return whatWorksData;
  }
}

function mapStateToProps(state) {
  return {
    whatWorksData: getFilteredData(
      state.whatWorksData,
      state.visibilityFilter,
      state.toggleIndicatorReducer,
      state.visibilityQisFilter
    ),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadWhatWorksData: bindActionCreators(
        whatWorksActions.loadWhatWorksData,
        dispatch
      ),
      filterWhatWorksData: bindActionCreators(
        whatWorksActions.filterWhatWorksData,
        dispatch
      ),
    },
    toggleIndicator: (selectedOptions) => {
      dispatch(setToggleIndicator(selectedOptions));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(WhatWorks);
