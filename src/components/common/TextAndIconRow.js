import React from "react";
import TextAndIcon from "./../common/TextAndIcon";
import HeaderRow from "./../common/HeaderRow";

const TextAndIconRow = (props) => {
  return (
    <div className="container" align="center">
      <h3 className="white" align="center">
        {props.heading}
      </h3>
      <p className="white" align="center">
        {props.title}
      </p>
      <div className="horizontleIconText">
        {props.textAndIcons.map((textAndIcon) => (
          <TextAndIcon
            key={textAndIcon.id}
            text={textAndIcon.text}
            iconImageName={textAndIcon.iconImageName}
          />
        ))}
      </div>
    </div>
  );
};
export default TextAndIconRow;
