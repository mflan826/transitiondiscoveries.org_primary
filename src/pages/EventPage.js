import React from "react";
import { bindActionCreators } from 'redux';
import ScrollToTop from "../components/ScrollToTop";
import * as eventActions from "../redux/actions/eventActions";
import { connect } from "react-redux";
import "./ManageIndicator.css";
import { Redirect, NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import BannerWH from "../components/common/BannerWH";
import RecentEvents from "../components/Events/RecentEvents";
import { formatDate } from "../helper";
import EventsDetails from '../pages/EventsDetails';
import moment from "moment";
let invalidSlug = false;
class EventPage extends React.Component {
  state = {
    eventPage: {}
  }
  componentDidMount() {  
    const { eventPage, loadEventPage } = this.props;
    let eventList = this.props.calendarEvents;
    eventList.map((object, index)=>{
      if(object.link ==  this.props.match.params.slug){
        this.setState({ eventPage: object})
      }
    })
    loadEventPage(this.props.match.params.slug).catch(() => {
      invalidSlug = true;
    });
  }
  componentWillReceiveProps(nextProps) { 
    if (this.props.eventPage != nextProps.eventPage) {
      nextProps.eventPage.start_date = moment(nextProps.eventPage.start_date).format("MMM Do YYYY");
      this.setState({ eventPage: nextProps.eventPage })
    }
  }
  componentDidUpdate(prevProps) { 
    const { eventPage, loadEventPage } = this.props;
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      loadEventPage(this.props.match.params.slug).catch(() => {
        invalidSlug = true;
      });
    }
  }

  formatWhen(startDate, endDate) {
    return formatDate(startDate) + " - " + formatDate(endDate);
  }
  formatTime(startTime, endTime) {
    if (startTime && endTime) {
      return startTime + " - " + endTime;
    } else {
      return '00:00-00:00';
    }

  }

  bannerEventsHandler() { 
    if (this.state.eventPage && this.state.eventPage.thumbnail) {
      return (
        <BannerWH
          heading={this.state.eventPage.title}
          imageName={this.state.eventPage.thumbnail.src}
          date={this.state.eventPage.publish_date}
          page='event-details'
          when={this.formatWhen(
            this.state.eventPage.start_date,
            this.state.eventPage.end_date
          )}
          time={this.formatTime(
            this.state.eventPage.start_time,
            this.state.eventPage.end_time
          )}
          where={this.state.eventPage.event_place}
        />
      );
    } else {
      return null;
    }

  }

  render() {
    console.log('this.state.eventPage',this.state.eventPage)
    if (invalidSlug) {
      return <Redirect to="/not-found" />;
    } else if (this.state.eventPage && this.state.eventPage.title) {
      return (
        <div className="main">
          <ScrollToTop />
          <section className=" bg-darkgreen">
            {this.bannerEventsHandler()}
          </section>
          <section className="ml-4 mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 sidebar1 clearfix" style={{ height: "100%" }}>
                  <RecentEvents events = {this.props.calendarEvents}/>
                </div>

                <div className="col-lg-9 BlogBody">
                  <div class="container">
                    <h4 className="green">Event Detail</h4>

                    <div class="row">
                      <div class="col-sm-12" className="eventDetail">
                        <h6>Event Date :
                           <span>
                            {this.state.eventPage.start_date} - ({this.state.eventPage.start_time} - {this.state.eventPage.end_time})
                         </span>
                        </h6>
                      </div>

                      <div class="col-sm-12" className="eventDetail"><h6>Venue:  <span>{this.state.eventPage.event_place}</span></h6></div>
                      <div class="col-sm-12" className="eventDetail"><h6>Details:  <span> {ReactHtmlParser(this.state.eventPage.body)}</span></h6></div>
                      

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div >
      );
    } else {
      return null
    }
  }
}
function mapStateToProps(state) { 
  return {
    eventPage: state.events.eventPage,
    calendarEvents: state.events.calendarEvents
  };
}

function  mapDispatchToProps(dispatch){ 
return {
  loadEventPage: bindActionCreators(eventActions.loadEventPage, dispatch),
};
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
