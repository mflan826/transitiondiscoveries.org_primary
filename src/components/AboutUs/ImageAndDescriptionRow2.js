import React from "react";
import Image from "./../Image";
import Description from "./../common/Description";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";
import { getImage } from "./../../helper";

const ImageAndDescriptionRow2 = (props) => {
  console.log(props,"vvgvgvg")
  return (
    <>
      <div className="item-a">
        <div className="item-ab">
          <Description
            page={props.page}
            heading={props.heading}
            content={props.content}
            h3Class="green"
            checklist={props.checklist}
            descriptionLink={props.descriptionLink}
          />
        </div>
      </div>
      <div className="item-b">
        <img src={props.imageName} className="img-fluid" alt="About Transition Discoveries"></img>
      </div>
    </>
  );
};

ImageAndDescriptionRow2.propTypes = {
  imageName: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.object,
};

ImageAndDescriptionRow2.defaultProps = {
  isImageSideRight: false,
};

export default ImageAndDescriptionRow2;
