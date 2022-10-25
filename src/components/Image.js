import React from "react";
import { getImage } from "../helper";

const Image = (props, index) => {
  return <img src={getImage(props.imageName)} className="img-fluid" alt={"green-text-box" + index}></img>;
};

export default Image;
