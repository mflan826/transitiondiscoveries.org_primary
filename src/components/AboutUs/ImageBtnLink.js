import React from "react";
import { getImage } from "./../../helper";
import PropTypes from "prop-types";

const font={
  'font-size':'1.75rem'
}

const ImageBtnLink = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }
  return (
    <>
      <div className="item">
        <img src={getImage(props.imageName)} className="img-fluid " alt={"Our Frameworks" + props.index}></img>
        <div className="subitem-1">
          <div style={font} className=" white" >{props.heading}</div>
          <button className="green-btn">{button}</button>
        </div>
      </div>
    </>
  );
};

export default ImageBtnLink;
