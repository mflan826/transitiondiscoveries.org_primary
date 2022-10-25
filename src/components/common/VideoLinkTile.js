import React from "react";
import { getImage } from "../helper";
import "./VideoLinkTile.css";

const VideoLinkTile = (props) => {
  return (
    <div className="relatedbx">
      <div className="related-img">
        <img src={props.imageName} alt="video" className="img-fluid"  />
        <img src={getImage("playbutton.png")} alt="Play Video About TD" className="playicon" />
      </div>
      <div className="card-body">
        <h3 className="h5 mb-2 card-title">{props.title}</h3>
      </div>
    </div>
  );
};

export default VideoLinkTile;
