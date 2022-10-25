import React from "react";
import Breadcrumb from "./Breadcrumb";
import "./Banner.css";

const font={
  'color':'#575757'
}

const Banner = (props) => {
  let bannerImage;
  if (props.imageName) {
    bannerImage = (
      <div className="col-md-5 col-lg-5 mt-minus-5">
        <img src={props.imageName} alt="Team working in Office"/>
      </div>
    );
  }
  let ctaLink;
  if (props.link) {
    ctaLink = (
      <a href={props.link.url} className="grtctatbg"  style={{fontSize: "25px"}}>
        {props.link.text}
      </a>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-lg-7">
          <div className="hero-slider-content text-left">
            <Breadcrumb />

            <h1 className="slider-lead white" style={font}>{props.heading}</h1>
            <p className="lead white">{props.text}</p>
            {ctaLink}
          </div>
        </div>
        {bannerImage}
      </div>
    </div>
  );
};

export default Banner;
