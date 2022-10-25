import React from "react";

const TextAndIcon = (props) => {
  return (
    <div className="hIT-1">
      <div className="hit-11">
        <h4 className="white">{props.text}</h4>
      </div>
      <div className="hIT-12">
        <img className="hiticn" src={props.iconImageName} alt="" />
      </div>
    </div>
  );
};
export default TextAndIcon;
