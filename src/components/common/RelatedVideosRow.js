import React from "react";
import VideoLinkTile from "./common/VideoLinkTile";

const RelatedVideosRow = (props) => {
  return (
    <div className="container">
      <h3 className="green">{props.heading}</h3>
      <div className="row">
        {props.relatedVideos.map((relatedVideo) => (
          <div className="col-md-4" key={relatedVideo.id}>
            <VideoLinkTile
              imageName={relatedVideo.imageName}
              title={relatedVideo.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedVideosRow;
