import React from "react";
import "./videodescriptionbox.css";
import Image from "./../Image";
import Description from "./../common/Description";

const VideoAndDescriptionRow = (props) => {
  let descLink = { url: "", text: "Join Now" };
  return (
    <>
      <div className="container videodescriptionbox ">
        <div className="item-video-a">
          <div className="item-iframe">
            <iframe
              id="player"
              type="text/html"
              width="100%"
              height="400"
              src={props.videoLink}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div className="item-text-b">
          <div className="item-text">
            <h2 className="white">{props.heading} </h2>
            <p className="white">{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoAndDescriptionRow;
