import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Story.css";
import { formatDate } from "../../helper";

const Story = (props) => {
  //console.log(props);
  return (
    <div className="row">
      {props.stories &&
        props.stories.map((story) => {
          return (
            <div className="col-auto col-lg-4 col-sm-6 my-3" key={story.id}>
              <NavLink
                className="resourceLink"
                to={{
                  pathname: "/story-listings/" + story.link,
                }}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={story.thumbnail.src}
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text ">{story.title}</p>
                    <p className="card-title">
                      {formatDate(story.publish_date)}
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
export default Story;
