import React from "react";
import Breadcrumb from "./Breadcrumb";
import "./Banner.css";

const BannerWithVideo = (props) => {
  let bannerImage;
  if (props.imageName) {
    bannerImage = (
      <div className="col-md-6 col-lg-6 mt-minus-5">
        <img src={props.imageName} alt="banner" />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 pt-165 pb-100">
          <div className="hero-slider-content text-left">
            <Breadcrumb />

            <h1 className="slider-lead white">{props.heading}</h1>
            <p className="lead white">{props.text}</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 my-auto">
          <div className="hero-slider-content text-left">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src={props.video}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {bannerImage}
      </div>
    </div>
  );
};

export default BannerWithVideo;
