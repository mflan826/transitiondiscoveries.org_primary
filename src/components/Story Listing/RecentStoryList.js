import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Story.css";

const RecentStoryList = (props) => {
  //console.log(props);
  return (
    <div>
      {props.stories &&
        props.stories.map((story) => {
          return (
            <div className="" key={story.id}>
              <NavLink
                to={{
                  pathname: "/story-listings/" + story.link,
                }}
              >
                <div className="RecentPostsBox">
                  <img className="" src={story.thumbnail.src} alt="" />
                  <div className="">
                    <p className="PostTitle ">{story.title}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
};
export default RecentStoryList;
