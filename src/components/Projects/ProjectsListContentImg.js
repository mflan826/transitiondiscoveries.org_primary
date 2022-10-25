import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./ProjectsListContentImg.css";

const font = {
  "font-size": "1.75rem",
};

const ProjectListContentImg = (props) => {
  return (
    <div className="container contentsec-grid ptb-40">
      <div className="item-a">
        <div className="item-ab">
          <a href={props.link} target="_blank">
            <div>
              <strong class="green" style={font}>
                {props.heading}
              </strong>
            </div>
          </a>
          <p>{ReactHtmlParser(props.content)}</p>
        </div>
      </div>
      <div className="item-b">
        <img src={props.RightImg} alt="" class="img-fluid"></img>
      </div>
    </div>
  );
};

export default ProjectListContentImg;
