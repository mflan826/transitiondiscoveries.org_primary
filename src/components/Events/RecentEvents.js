import React from "react";
import * as eventActions from "../../redux/actions/eventActions";
import { connect } from "react-redux";
import RecentEventList from "./RecentEventList";

import moment from "moment";
class RecentEvents extends React.Component {
  state = {
    recentEvents: [],
    upcomingEvents: [],
    searchEventsList: []
  };

  componentDidMount() {
    const { recentEvents, loadRecentEvents } = this.props;
    if (recentEvents.length === 0) {
      loadRecentEvents().catch((error) => {
        alert("Loading recent events failed" + error);
      });
    }
    if (this.props.events && this.props.events.length > 0) {
      this.filterEventsList(this.props.events);
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchEventStatus) {
      this.setState({ searchEventsList: nextProps.searchedEvents });
    }
    if (this.props.events !== nextProps.events) {
      this.filterEventsList(nextProps.events);
    }
    if (this.props.recentEvents !== nextProps.recentEvents) {
      this.filterEventsList(nextProps.recentEvents);
    }


  }
  /**filter upcoming & recent events
   *
   * @param {Events list} events
   */
  filterEventsList = (events) => {
    let recentEvents = [];
    let upcomingEvents = [];
    events.map((val, index) => {
      let currentDate = moment().format("YYYY-MM-DD");

      if (val.start_date > currentDate) {
        upcomingEvents.push(val);
      } else {
        recentEvents.push(val);
      }
    });
    if (recentEvents.length > 5) {
      let updateRecentEvent = [];
      let temp;
      let countNext = 0;
      for (let i = 0; i < recentEvents.length - 1; i++) {

        let startDate = recentEvents[i].start_date;
        let endDate = recentEvents[i + 1].start_date;
        if (startDate > endDate) {
          temp = recentEvents[i];
          recentEvents[i] = recentEvents[i + 1];
          recentEvents[i] = temp;
        }
        if (i < 5)
          updateRecentEvent[i] = recentEvents[i];
      }
      this.setState({ recentEvents: updateRecentEvent });
    } else {

      this.setState({ recentEvents: recentEvents });
    }

    if (upcomingEvents.length > 5) {
      let updateRecentEvent = [];
      let temp;
      let countNext = 0;
      for (let i = 0; i < upcomingEvents.length - 1; i++) {

        let startDate = upcomingEvents[i].start_date;
        let endDate = upcomingEvents[i + 1].start_date;
        if (startDate > endDate) {
          temp = upcomingEvents[i];
          upcomingEvents[i] = upcomingEvents[i + 1];
          upcomingEvents[i] = temp;
        }
        if (i < 5)
          updateRecentEvent[i] = updateRecentEvent[i];
      }
      this.setState({ upcomingEvents: upcomingEvents });
    } else {
      this.setState({ upcomingEvents: upcomingEvents });
    }


  };

  render() {
 

    return (
      <>
        {this.props.searchEvent  && this.props.searchedQuery !== ""?
          (<>
            <h4 className="green">Your Searched Results</h4>
            <div className="eventsLayout" style={{ marginBottom: "105%;", fontSize: "16px" }}>
              {
                this.props.searchedQuery !== "No Record found" ? (
                  <RecentEventList events={this.state.searchEventsList}></RecentEventList>
                ) :
                  <p>{this.props.searchedQuery}</p>
              }

            </div>
          </>) : (
            <>
              <h4 className="green">Recent Events</h4>
              <div className="eventsLayout" style={{ marginBottom: "105%;", fontSize: "16px" }}>
                <RecentEventList events={this.state.recentEvents}></RecentEventList>
              </div>
              <h4 className="green">Upcoming Events</h4>
              <div className="eventsLayout">
                <RecentEventList events={this.state.upcomingEvents}></RecentEventList>
              </div>
            </>
          )
        }

      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    recentEvents: state.recentEvents,
  };
}

const mapDispatchToProps = {
  loadRecentEvents: eventActions.loadRecentEvents,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecentEvents);
