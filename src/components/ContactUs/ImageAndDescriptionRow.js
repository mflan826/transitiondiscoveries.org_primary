import React from "react";
import Image from "./../Image";
import Description from "./../common/Description";
import PropTypes from "prop-types";
import { getImage } from "./../../helper";

const font = {
  "font-size": "25px",
  "line-height": "32px",
};

const ImageAndDescriptionRow = (props) => {
  if (props.isImageSideRight) {
    return (
      <>
        <div className="item-b">
          <Image imageName={props.imageName} />
        </div>
        <div className="item-a">
          <div className="item-ab">
            <Description
              heading={props.heading}
              content={props.content}
              link={props.descriptionLink}
              h3Class="white"
              pClass="white"
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="item-a">
          <div className="item-ab">
            <img
              src={getImage(props.descriptionIconImageName)}
              alt={props.descriptionIconImageAltText || "Transition Icon"}
            ></img>
            <div style={font}>{props.content}</div>
          </div>
        </div>
        <div className="item-b">
          <Image imageName={props.imageName} />
        </div>
      </>
    );
  }
};

ImageAndDescriptionRow.propTypes = {
  imageName: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.object,
};

ImageAndDescriptionRow.defaultProps = {
  isImageSideRight: false,
};

export default ImageAndDescriptionRow;
