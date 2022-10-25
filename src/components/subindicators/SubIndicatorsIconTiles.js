import React from "react";
import ReactHtmlParser from "react-html-parser";
import IconTile2 from "./IconTile2";

const SubIndicatorsIconTiles = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }

  return (
    <div className="container bgboxgrid">
      <div className="boxgridhead">
        {props.heading ? <h3 className={props.headingclassName}>{props.heading}</h3> : null}
        <p className={props.subheadingclassName}>{props.subheading}</p>
      </div>
      <IconTile2></IconTile2>
    </div>
  );
};

export default SubIndicatorsIconTiles;
