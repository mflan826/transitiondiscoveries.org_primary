import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Post.css';
import { formatDate } from '../../helper';

const Post = (props) => {
  //console.log(props);
  return (
    <div className="row">
      {props.blogs &&
        props.blogs.map((blog) => {
          return (
            <div className="col-auto col-lg-4 col-sm-6 my-3" key={blog.id}>
              <NavLink
                className="resourceLink"
                to={{
                  pathname: '/blogs/' + blog.link,
                }}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={blog.thumbnail.src}
                    alt="icon"
                  />
                  <div className="card-body">
                    <p className="card-text ">{blog.title}</p>
                    <p className="card-title">
                      {formatDate(blog.publish_date)}
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
export default Post;
