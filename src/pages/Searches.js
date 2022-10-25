import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchActions from "../redux/actions/searchActions";
import SearchList from "../components/Search/SearchList";
import Banner from "./../components/common/Banner";
import { getStyle } from "./../helper";
import {
  getImage,
  colourOptions,
  getIndicators,
  getSubIndicators,
  // getSearchTypes,
  getPreemploymentTransitionServices,
} from "./../helper";
import "./Searches.css";
import { Button } from "react-bootstrap";

class Searches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchText: "",
    };
  }

  componentDidMount() {
    const { searches, actions } = this.props;
    if (searches.searches.length === 0) {
      actions.loadSearches(this.props.searches.page).catch((error) => {
        //alert("Loading searches failed" + error);
      });
    }
    this.setState({
      search: "",
    });
    //actions.setPage(page);
  }

  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
  };

  handleSearchSearch = (event) => {
    event.preventDefault();
    let searchQuery = "";
    if (this.state) {
      if (this.state.search) {
        searchQuery = this.state.search;
      }else {
        searchQuery = ""
      }
      try {
        if (searchQuery.length > 0) {
          this.props.actions.searchSearches(searchQuery);
        } else {
          this.props.actions.loadSearches(this.props.searches.page);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      this.props.actions.loadSearches(this.props.searches.page);
    }
    this.setState({
      searchText: searchQuery,
    });
  };

  handleLoadMore = () => {
    //this.props.actions.setPage(this.props.page);

    try {
      this.props.actions.loadMoreSearches(this.state.search, this.props.searches.page);
    } catch (error) {
      console.log(error);
    }
    //this.state.pageNo += 1;
  };

  render() {
    
    if (!this.props.searches.searches > 0) {
      return null;
    } else {
      let loadMoreButton;
      if (this.props.searches.page && this.props.searches.page > 0) {
        loadMoreButton = (
          <Button className="btn btn-searches" onClick={this.handleLoadMore}>
            Load More
          </Button>
        );
      }

      return (
        <div className="main" id="searchpage">
          
          <section className="ml-4 mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 sidebar1 clearfix">
                  
                  <form
                    className="searchForm"
                    onSubmit={this.handleSearchSearch}
                  >
                    <h2 className="sidebarhead green">Search</h2>
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
                </div>
                
                <div className="col-lg-12 reslinks" align="center">
                  <h3 className="green">Search Result for: "{this.state.searchText}"</h3>
                  <SearchList
                    searches={this.props.searches.searches}
                  ></SearchList>
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
    searches: state.searches,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSearches: bindActionCreators(
        searchActions.loadSearches,
        dispatch
      ),
      searchSearches: bindActionCreators(
        searchActions.searchSearches,
        dispatch
      ),
      loadMoreSearches: bindActionCreators(
        searchActions.loadMoreSearches,
        dispatch
      ),
      //setPage: bindActionCreators(searchActions.setPage, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
