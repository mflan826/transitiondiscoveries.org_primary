import React, { useState } from "react";
import { formatDate } from "../../helper";
import { NavLink } from 'react-router-dom';

const SearchCard = (props) => {
  if (props.search.type == 'resources') {
  return (
    <div className="card search-card">
      <h2>{props.search.name}</h2>
      <h5>{formatDate(props.search.publish_date)}</h5>
      <div className="fakeimg"><img className="card-img-top" src={props.search.thumbnail.src} alt="" width={200} height={200}/></div>
      <p dangerouslySetInnerHTML={{__html: props.search.description.substr(0,200) }} />...

      <NavLink
        className={'searchLink'}
        to={{
          pathname: '/resource-details/' + props.search.path,
        }}
      >
        Read More
      </NavLink>
    </div>
  );
  } else if (props.search.type == 'blogs') {
    return (
      <div className="card search-card">
        <h2>{props.search.title}</h2>
        <h5>{formatDate(props.search.publish_date)}</h5>
        <div className="fakeimg"><img className="card-img-top" src={props.search.thumbnail.src} alt="" width={200} height={200}/></div>
        <p dangerouslySetInnerHTML={{__html: props.search.body.substr(0,200) }} />...
  
        <NavLink
          className={'searchLink'}
          to={{
            pathname: '/blogs/' + props.search.link,
          }}
        >
          Read More
        </NavLink>
      </div>
    );
  } else if (props.search.type == 'events') {
    return (
      <div className="card search-card">
        <h2>{props.search.title}</h2>
        <h5>{formatDate(props.search.publish_date)}</h5>
        <div className="fakeimg"><img className="card-img-top" src={props.search.thumbnail.src} alt="" width={200} height={200}/></div>
        <p dangerouslySetInnerHTML={{__html: props.search.body.substr(0,200) }} />...
  
        <NavLink
          className={'searchLink'}
          to={{
            pathname: '/events/' + props.search.link,
          }}
        >
          Read More
        </NavLink>
      </div>
    );
  } else if (props.search.type == 'story-listings') {
    return (
      <div className="card search-card">
        <h2>{props.search.title}</h2>
        <h5>{formatDate(props.search.publish_date)}</h5>
        <div className="fakeimg"><img className="card-img-top" src={props.search.thumbnail.src} alt="" width={200} height={200}/></div>
        <p dangerouslySetInnerHTML={{__html: props.search.body.substr(0,200) }} />...
  
        <NavLink
          className={'searchLink'}
          to={{
            pathname: '/story-listings/' + props.search.link,
          }}
        >
          Read More
        </NavLink>
      </div>
    );
  } else if (props.search.type == 'team') {
    return (
      <div className="card search-card">
        <h2>{props.search.TeamMemberName}</h2>
        <h5>{props.search.TeamMemberJobTitle}</h5>
        <div className="fakeimg"><img className="card-img-top" src={props.search.TeamMemberImage.src} alt="" width={200} height={200}/></div>
        <p dangerouslySetInnerHTML={{__html: props.search.bio_content.substr(0,200) }} />...
  
        <NavLink
          className={'searchLink'}
          to={{
            pathname: '/team/' + props.search.slug,
          }}
        >
          Read More
        </NavLink>
      </div>
    );
  } else {
  return (
    <div className="card search-card">
      <h2>{props.search.title}</h2>
      <h5>{formatDate(props.search.publish_date)}</h5>
      <div className="fakeimg"><img className="card-img-top" src={props.search.thumbnail.src} alt="" width={200} height={200}/></div>
      <p dangerouslySetInnerHTML={{__html: props.search.body.substr(0,200) }} />...

      <NavLink
        className={'searchLink'}
        to={{
          pathname: '/' + props.search.path,
        }}
      >
        Read More
      </NavLink>
    </div>
  );
  }
};
export default SearchCard;
