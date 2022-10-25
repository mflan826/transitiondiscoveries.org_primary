import React, { useState } from "react";
import { getResourceTypes, formatDate } from "../../helper";

const ResourceCard = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.resource.thumbnail.src} alt="" />
      <div className="card-body">
        <p className="card-title " >{formatDate(props.resource.publish_date)}</p>
        <p className="card-text">{props.resource.name}</p>
      </div>
    </div>
  );
};
export default ResourceCard;
