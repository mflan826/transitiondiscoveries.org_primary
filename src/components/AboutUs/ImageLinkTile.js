import React from "react";
import { getImage } from "./../../helper";
import PropTypes from "prop-types";

const ImageLinkTile = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }
  return (
    <>
      <a href="">
        <div className="item">
          <img src={getImage(props.imageName)} className="img-fluid " alt="Teacher Teaching to a disabled student"></img>
          <div>
            <p className="">{button}</p>
          </div>
        </div>
      </a>
    </>
  );
};

ImageLinkTile.propTypes = {
  imageName: PropTypes.string,
  linkText: PropTypes.string,
};

export default ImageLinkTile;
