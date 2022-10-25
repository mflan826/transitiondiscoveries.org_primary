import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as resourceActions from "../redux/actions/resourceActions";
import ResourceList from "../components/Resource/ResourceList";
import Banner from "./../components/common/Banner";
import { getStyle } from "./../helper";
import {
  getImage,
  colourOptions,
  getIndicators,
  getSubIndicators,
  getResourceTypes,
  getPreemploymentTransitionServices,
} from "./../helper";
import "./Resources.css";
import { Button } from "react-bootstrap";

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frameworks: [],
      subIndicators: [],
      resourceTypes: [],
      preemploymentTransitionServices: [],
      subIndicatorUpdated: [],
    };
  }

  componentDidMount() {
    const { resources, actions } = this.props;
    if (resources.resources.length === 0) {
      actions.loadResources().catch((error) => {
        //alert("Loading resources failed" + error);
      });
    }
    this.setState({
      frameworks: getIndicators(),
      subIndicators: getSubIndicators(),
      resourceTypes: getResourceTypes(),
      preemploymentTransitionServices: getPreemploymentTransitionServices(),
      subIndicatorUpdated: [],
    });
    //actions.setPage(page);
  }

  handleSelectChange = (selectedOptions, action) => {
    if (action.name == "indicator") {
      if (selectedOptions) {
        const indicatorsArray = selectedOptions.map((x) => x.id);
        console.log(indicatorsArray);
        var update = this.state.subIndicators.filter((x) =>
          indicatorsArray.includes(x.indicator_id)
        );
      } else {
        var update = [];
      }
      this.setState({
        subIndicatorUpdated: update,
      });
    }
    if (selectedOptions) {
      this.setState({
        [action.name]: selectedOptions.map((x) => x.id),
      });
    } else {
      this.setState({
        [action.name]: [],
      });
    }
  };
  handleChange = (event) => {
    if (event.target.type == "select-multiple") {
      let options = event.target.options;
      const value = [...options]
        .filter((x) => x.selected)
        .map((x) => Number(x.value));
      this.setState({
        [event.target.name]: value,
      });
      if (event.target.name == "indicator") {
        let update = this.state.subIndicators.filter((x) =>
          value.includes(x.indicator_id)
        );
        this.setState({
          subIndicatorUpdated: update,
        });
      }
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  handleSearchResource = (event) => {
    event.preventDefault();
    if (this.state) {
      const searchQuery = new Object();
      if (this.state.search) {
        searchQuery.or = [
          { name: { like: ".*" + this.state.search + ".*", options: "i" } },
          {
            description: {
              like: ".*" + this.state.search + ".*",
              options: "i",
            },
          },
        ];
      }
      if (this.state.indicator && this.state.indicator.length) {
        searchQuery.indicator = { all: this.state.indicator };
      }
      if (this.state.subindicator && this.state.subindicator.length) {
        searchQuery.subindicator = { all: this.state.subindicator };
      }
      if (
        this.state.preemploymenttransitionservices &&
        this.state.preemploymenttransitionservices.length
      ) {
        searchQuery.preemploymenttransitionservices = {
          all: this.state.preemploymenttransitionservices,
        };
      }

      if (this.state.resourcetypes && this.state.resourcetypes.length) {
        searchQuery.resourcetypes = { all: this.state.resourcetypes };
      }

      try {
        if (Object.keys(searchQuery).length > 0) {
          this.props.actions.searchResources(searchQuery);
        } else {
          this.props.actions.loadResources();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      this.props.actions.loadResources();
    }
  };

  handleLoadMore = () => {
    //this.props.actions.setPage(this.props.page);

    try {
      this.props.actions.loadMoreResources(this.props.resources.page);
    } catch (error) {
      console.log(error);
    }
    //this.state.pageNo += 1;
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
    if (!this.props.resources.resources > 0) {
      return null;
    } else {
      let loadMoreButton;
      if (this.props.resources.page && this.props.resources.page > 0) {
        loadMoreButton = (
          <Button className="btn btn-resources" onClick={this.handleLoadMore}>
            Load More
          </Button>
        );
      }
      const {
        frameworks,
        subIndicators,
        subIndicatorUpdated,
        resourceTypes,
        preemploymentTransitionServices,
        selectedOption,
      } = this.state;

      return (
        <div className="main" id="resourcepage">
          <section>
            <div
              className="hero-equal-height pt-165 pb-150 gradient-overly-right-light aboutbanner pagebanner"
              page="resources"
              style={getStyle("resources", "resources-banner.jpg")}
            >
              <Banner
                heading="Resources"
                text="The Transition Discoveries Resources include tip sheets for young people and their families, lesson plans for transition stakeholders, as well as many other exciting resources!"
              />
            </div>
          </section>
          <section className="ml-4 mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 sidebar1 clearfix">
                  <form
                    className="searchForm"
                    onSubmit={this.handleSearchResource}
                  >
                    <h2 className=" sidebarhead green">Refine your search</h2>
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
                    <div className="form-group">
                      <label style={{ fontSize: "16px" }}>
                        Select Framework
                      </label>
                      <Select
                        style={{ fontSize: "16px" }}
                        name="indicator"
                        label="indicator"
                        aria-label="Select Framework"
                        theme={theme}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={frameworks[0]}
                        options={frameworks}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option.id}
                        isMulti
                        onChange={this.handleSelectChange}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: "16px" }}>
                        Select Sub Indicator
                      </label>
                      <Select
                        style={{ fontSize: "16px" }}
                        name="subindicator"
                        label="subindicator"
                        aria-label="Select Sub Indicator"
                        theme={theme}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={subIndicatorUpdated[0]}
                        options={subIndicatorUpdated}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option.id}
                        isMulti
                        onChange={this.handleSelectChange}
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: "16px" }}>
                        Select Pre-employment Transition Services
                      </label>
                      <Select
                        style={{ fontSize: "16px" }}
                        name="preemploymenttransitionservices"
                        label="preemploymenttransitionservices"
                        aria-label="Pre-employment"
                        theme={theme}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={preemploymentTransitionServices[0]}
                        options={preemploymentTransitionServices}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option.id}
                        isMulti
                        onChange={this.handleSelectChange}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: "16px" }}>
                        Select Resource Types
                      </label>
                      <Select
                        style={{ fontSize: "16px" }}
                        name="resourcetypes"
                        label="resourcetypes"
                        aria-label="Select Resource Types"
                        theme={theme}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={resourceTypes[0]}
                        options={resourceTypes}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option.id}
                        isMulti
                        onChange={this.handleSelectChange}
                      />
                    </div>

                    <button className="btn btn-primary" type="submit">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="col-lg-9 reslinks" align="center">
                  <h3 className="green">Latest Resources</h3>
                  <ResourceList
                    resources={this.props.resources.resources}
                  ></ResourceList>
                  {loadMoreButton}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}
function mapStateToProps(state, ownProps) {
  return {
    resources: state.resources,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadResources: bindActionCreators(
        resourceActions.loadResources,
        dispatch
      ),
      searchResources: bindActionCreators(
        resourceActions.searchResources,
        dispatch
      ),
      loadMoreResources: bindActionCreators(
        resourceActions.loadMoreResources,
        dispatch
      ),
      //setPage: bindActionCreators(resourceActions.setPage, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
