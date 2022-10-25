import React from "react";

const font = {
  "font-size": "1.75rem",
};

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
    <div className="container contentsec-grid pd-0-5 greyBGwithoutBorder">
      <div className="item-a">
        <div className="item-ab">
          <div>
            <strong class="green" style={font}>
              {props.heading}
            </strong>
          </div>
          <p className="">{props.subhead}</p>
          <ul className="checkul">
            <li>{props.bullets}</li>
          </ul>
        </div>
      </div>
      <div className="item-b">
        <img src={props.imageName} alt={props.heading} />
      </div>
    </div>
  );
};

export default Banner;
