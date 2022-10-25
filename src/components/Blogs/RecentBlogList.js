import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Post.css";

const RecentBlogList = (props) => {
  //console.log(props);
  return (
    <div>
      {props.blogs &&
        props.blogs.map((blog) => {
          return (
            <div className="" key={blog.id}>
              <NavLink
                to={{
                  pathname: "/blogs/" + blog.link,
                }}
              >
                <div className="RecentPostsBox">
                  <img className="" src={blog.thumbnail.src} alt="" />
                  <div className="">
                    <p className="PostTitle ">{blog.title}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
};
export default RecentBlogList;
