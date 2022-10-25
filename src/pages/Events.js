import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../redux/actions/eventActions';
import EventList from '../components/Events/Event';
import { Button } from 'react-bootstrap';
import Banner from '../components/common/Banner';
import RecentEventList from '../components/Events/RecentEventList';
import RecentEvents from '../components/Events/RecentEvents';
import * as constants from '../constants';
import IconTile2Heading from '../components/subindicators/IconTile2Heading';
import ReactHtmlParser from 'react-html-parser';

// import { Calendar, momentLocalizer } from "react-big-calendar";
import '../components/Events/Event.css';
import moment from 'moment';
import { Route, Redirect } from 'react-router';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getStyle } from './../helper';

class Events extends React.Component {
  state = {
    events: [],
    loadCalEvents: [],
    searchEventsList: [],
    searchEvent: false,
    searchedQuery: false
  };
  componentDidMount() {
    const { events, actions } = this.props;
    if (typeof events === 'undefined' || events.events.length === 0) {
      actions.loadEvents().catch((error) => {
        alert('Loading events failed' + error);
      });
      actions.loadCalEvents().catch((error) => {
        alert('Loading events failed' + error);
      });
    }
    if (this.props.events.calendarEvents.length > 0) {
      this.mapEventsHandler(this.props.events);
    }
  }
  componentWillReceiveProps(nextProps) {
    //debugger
    console.log('componentWillReceiveProps');
    if (nextProps.events.calendarEvents !== this.props.events.calendarEvents) {
      this.mapEventsHandler(nextProps.events);
    }
    if (nextProps.events.events !== this.props.events.events) {
      console.log('nextProps.events.events@@', nextProps.events.events);
      this.setState({ events: nextProps.events.events });
    }
  }

  mapEventsHandler = (events) => {
    localStorage.setItem('allEvents', JSON.stringify(events.calendarEvents));
    let eventsObject = events;
    if (eventsObject && eventsObject.calendarEvents.length > 0) {
      eventsObject.calendarEvents.map((object, ind) => {
        if (object.start_date && object.start_time) {
          let startDate = new Date(object.start_date + ' ' + object.start_time);
          eventsObject.calendarEvents[ind].start = startDate;
        } else {
          eventsObject.calendarEvents[ind].start = object.start_date;
        }
        if (object.end_date && object.end_time) {
          let endDate = new Date(object.end_date + ' ' + object.end_time);
          eventsObject.calendarEvents[ind].end = endDate;
        } else {
          eventsObject.calendarEvents[ind].end = object.end_date;
        }
      });

      this.setState({ calendarEvents: eventsObject.calendarEvents });
    }
  };

  handleChange = (e) => {
    
    //debugger
    if (e.target.value) {
      this.setState({
        [e.target.name]: e.target.value
      });
      this.setState({ searchEventsList: [], searchEvent: false}) 
      this.searchEventHandler(e.target.value)
    } else {
      this.setState({ searchEventsList: [], searchEvent: false})
    }

  };

  searchEventHandler = (searchQuery) => { 
    try { 
        let searchEventsList = [];
        let getAllEvents = localStorage.getItem('allEvents');
        let events = JSON.parse(getAllEvents);
        events.map((val) => {
          let bodySearch = val.body.toLowerCase();
          let title = val.title.toLowerCase();
          if (bodySearch.includes(searchQuery) || title.includes(searchQuery)) {
            console.log('match', val)
            searchEventsList.push(val)
          }
        })
        if (searchEventsList.length > 0) { 
          this.setState({ searchEventsList: searchEventsList, searchEvent: true, searchedQuery: searchQuery })
        } else { 
          this.setState({ searchEventsList: [], searchEvent: true, searchedQuery: "No Record found" })
        }  
    } catch (error) {
      console.log(error);
    }
  }

  handleSearchEvent = (e) => { 
    e.preventDefault();
    if (this.state) {
      const searchQuery = new Object();
      if (this.state.search) {
        searchQuery.tags = this.state.search;
      }
      this.searchEventHandler(this.state.search)
    } else {
      this.props.actions.loadEvents();
    }
  };

  handleLoadMore = () => {
    try {
      this.props.actions.loadMoreEvents(this.props.events.page);
    } catch (error) {
      console.log(error);
    }
  };

  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  handleEventClick = ({ event, el }) => {
    let link = event._def.extendedProps.link;
    let linkEvent = '/events/' + link;
    this.props.history.push({
      pathname: linkEvent,
    });
  };

  render() {
    let eventTimeFormates = {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short',
    };
    console.log('this.state.events', this.state.events);
    let loadMoreButton;
    if (!this.props.events) {
      return null;
    } else {
      if (
        this.props.events &&
        this.props.events.page &&
        this.props.events.page > 0 &&
        this.props.events.events.length > constants.EVENTS_PER_PAGE - 1
      ) {
        loadMoreButton = (
          <Button className="btn btn-blogs" onClick={this.handleLoadMore}>
            Load More
          </Button>
        );
      }
    }
    return (
      <div className="main" id="eventsbx">
        <section>
          <div
            className="hero-equal-height pt-165 pb-150 gradient-overly-right-light aboutbanner pagebanner"
            page="events"
            style={getStyle('events', 'event-list-banner.jpg')}
          >
            <Banner
              heading="Events"
              text="Check out the list below to find an event near you! "
              content=""
            />
          </div>
        </section>

        <section className="ml-4 mt-4">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-9 reslinks"
                align="center"
                style={{ height: '' }}
              >
                <IconTile2Heading
                  heading=""
                  headingclassName="green"
                  subheadingclassName="dark"
                  subheading={ReactHtmlParser(
                    "At Transition Discoveries, we are always looking to host or highlight opportunities for young people, families and stakeholders to connect and get involved with all things transition! To keep this page as updated as possible, we count on community members like you to let us know what’s going on! Do you have something you’d like to add to this list? Let us know on our <a href='get-connected'>Get Connected</a> page! "
                  )}
                >
                  {' '}
                </IconTile2Heading>
                {/* <EventList events={this.props.events.events}></EventList>
                {loadMoreButton} */}

                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  events={this.state.calendarEvents}
                  eventClick={this.handleEventClick}
                  editable={true}
                  eventTimeFormat={eventTimeFormates}
                />
              </div>

              <div
                className="col-lg-3 sidebar1 clearfix"
                style={{ }}
              >
                <form className="searchForm" onSubmit={this.handleSearchEvent}>
                  <h2 className="sidebarhead green">Refine your search</h2>
                  <div className="form-group">
                    <input
                      type="search"
                      name="search"
                      aria-label="Search"
                      className="form-control"
                      placeholder="Enter Keyword..."
                      onKeyUp={this.handleChange}
                      onKeyDown={this.handleChange}
                    ></input>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    SEARCH
                  </button>
                </form>
                <RecentEvents searchEvent = {this.state.searchEvent} searchedQuery={this.state.searchedQuery} searchedEvents={this.state.searchEventsList} searchEventStatus={this.state.searchEvent} events={this.state.calendarEvents} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    events: state.events,
    loadCalEvents: state.events.calendarEvents,
  };
}

function mapDispatchToProps(dispatch) {
  //debugger
  return {
    actions: {
      loadCalEvents: bindActionCreators(eventActions.loadCalEvents, dispatch),
      loadEvents: bindActionCreators(eventActions.loadEvents, dispatch),
      searchEvents: bindActionCreators(eventActions.searchEvents, dispatch),
      loadMoreEvents: bindActionCreators(eventActions.loadMoreEvents, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
