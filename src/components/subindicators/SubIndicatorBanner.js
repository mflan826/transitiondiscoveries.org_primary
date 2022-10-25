import React from "react";

const Banner = (props) => {
  let bannerImage;
  if (props.imageName) {
    bannerImage = (
      <div className="col-md-6 col-lg-6 mt-minus-5">
        <img src={props.imageName} alt="banner" />
      </div>
    );
  }
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="subindicator-banner" id={props.abcid}>
          <div className="item-a">
            <div className="transi-bx">
              <h3 className="l-green">{props.indicatorname}</h3>
              <h1 className="slider-lead white">{props.subindicatorname}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
