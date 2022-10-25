import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./ProjectLeftImageRightBullets.css";

const font={
  'font-size':'1.75rem'
}

const ProjectLeftImageRightBullets = (props) => {
  return (
    <div class="container grid">
      <div class="item-b">
        <div class="item-bc">
          <div>     
              <strong class="green" style={font}>
                {props.heading}
              </strong>
              </div>
          <p class="dark mb-3">{props.subheading}</p>
          <img
            src={props.LeftImg}
            alt="About TQEP"
            class="img-fluid"
          ></img>
        </div>
      </div>
      <div class="item-a">
        {ReactHtmlParser(props.content)}</div>
    </div>
  );
};

export default ProjectLeftImageRightBullets;
