import React from "react";
import ReactHtmlParser from "react-html-parser";

const IconTile2 = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }

  return (
    <div className={props.className}>
      <img src={props.iconTileImage} alt="" />
      <h4 className={props.iconHeadingclassName}>{props.heading}</h4>
      <p className={props.iconTextclassName}>
        {" "}
        {ReactHtmlParser(props.content)}
      </p>
    </div>
  );
};

export default IconTile2;
