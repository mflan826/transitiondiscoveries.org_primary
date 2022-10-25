import React from "react";
import Breadcrumb from "./Breadcrumb";
import "./BannerWH.css";
import { formatDate, getPageImage } from "../../helper";

const BannerWH = (props) => {
  debugger
  let bannerImage;
  
  if (props.imageName && props.page!='event-details') {
    bannerImage = (
      <div className="BlogThumb">
        <img src={props.imageName} alt="banner" />
      </div>
    );
  }
  let whenPlaceholder;
  if (props.when) {
    whenPlaceholder = (
      <p className="lead eventIconp  white">
        <img
          className="eventIcon"
          src= {getPageImage('WhatsHappening', 'calendar-icon-white.png')}
          alt="icon"
        ></img>{" "}
        {props.when} ( {props.time})
      </p>
    );
  }

  let timePlaceholder; 
  if (props.time == "undefined - undefined") {
    timePlaceholder = (
      <p className="lead eventIconp white"> {/* Time - {props.time} */}</p>
    );
  } else {
    timePlaceholder = "";
  }

  let wherePlaceholder;
  if (props.where) {
    wherePlaceholder = (
      <p className="lead eventIconp white">
        <img
          className="eventIcon"
          src={getPageImage('WhatsHappening', 'location-icon-white.png')}
          alt="icon"
        ></img>{" "}
        {props.where}
      </p>
    );
  }
  let authorPlaceholder;
  if (props.author) {
    authorPlaceholder = (
      <p className="lead eventIconp white">
        <img
          className="eventIcon"
          src={getPageImage('WhatsHappening', 'user.png')}
          alt="icon"
        ></img>{" "}
        Author - {props.author}
      </p>
    );
  }
  return (
    <div className="container">
      <div className="BlogBanner">
        <div className=" ">
          <div className="hero-slider-content mt-50">
            <Breadcrumb />

            <h1 className="slider-lead white"  style={{alignItems: "center", marginLeft: "28%;", width: "100%;"}}>{props.heading}</h1>
            <p className="lead white">{props.text}</p>
            {/* <p className="lead white">
              Published On - {formatDate(props.date)}
            </p>
            {whenPlaceholder}
            {timePlaceholder}
            {wherePlaceholder}
            {authorPlaceholder} */}
          </div>
        </div>
        {bannerImage}
      </div>
    </div>
  );
};

export default BannerWH;
