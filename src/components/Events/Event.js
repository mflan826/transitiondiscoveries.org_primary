import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Event.css';
import { formatDate } from '../../helper';

const Event = (props) => {
  //console.log(props);
  return (
    <div className="row">
      {props.events &&
        props.events.map((event) => {
          return (
            <div className="col-auto col-lg-4 col-sm-6 my-3" key={event.id}>
              <NavLink
                className="resourceLink"
                to={{
                  pathname: '/events/' + event.link,
                }}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={event.thumbnail.src}
                    alt="icon"
                  />
                  <div className="card-body">
                    <p className="card-text ">{event.title}</p>
                    <p className="card-title">
                      {formatDate(event.publish_date)}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
};
export default Event;
