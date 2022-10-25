import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Event.css";

import moment from "moment";
const RecentEventList = (props) => {
  console.log(props);
  return (
    <div>
      {props.events &&
        props.events.map((event) => {
          return (
            <div className="eventsGrid" key={event.id}>
              <NavLink
                to={{
                  pathname: "/events/" + event.link,
                }}
              >
                <div class="container" style={{ color: "black" }}>
                  <div class="row">
                    <div class="">
                      <span class="recenteventsdt" style={{ fontSize: "16px" }}>
                        Event Time:{" "}
                        {moment(event.start_date).format("MMM Do YYYY")} -{" "}
                        {event.start_time} - {event.end_time}
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="">
                      <p className="PostTitle " style={{ fontSize: "16px" }}>
                        {event.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="RecentPostsBox">
                  <div>
                    <img className="" src={event.thumbnail.src} alt="icon" />
                    <span>Date & Time {event.start_date} - {event.start_time}</span>
                  </div>

                  <div className="">
                    <p className="PostTitle ">{event.title}</p>
                  </div>

                </div> */}
              </NavLink>
            </div>
          );
        })}
    </div>
  );
};
export default RecentEventList;
