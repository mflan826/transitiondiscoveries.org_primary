import React from "react";

const IconTile2Heading = (props) => {
  let bannerImage;
  if (props.imageName) {
    bannerImage = (
      <div className="col-md-6 col-lg-6 mt-minus-5">
        <img src={props.imageName} alt="banner" />
      </div>
    );
  }
  return (
    <div className="boxgridhead">
      {props.heading ? <h3 className={props.headingclassName}>{props.heading}</h3> : null}
      <p className={props.subheadingclassName}>{props.subheading}</p>
    </div>
  );
};

export default IconTile2Heading;
