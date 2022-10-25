import React from "react";
import ReactHtmlParser from "react-html-parser";
import { getImage } from "./../../helper";
import "./ProjectsList.css";
const ProjectsList = (props) => {
  return (
    <div className="container" align="center">
      <h3 className="green">{props.heading}</h3>
      <p className="sub-txt mb-3">{props.subheading}</p>

      <div className="horizontleIconText">
      {props.Projects.map((Project) => {
        return (
        <div className="hIT-1">
          <div className="hit-11">
            <img className="hiticn" src={getImage(Project.ProjectImageName)} alt="icon"></img>
            <div className="projectcont">
              <h4 className="dark">{Project.ProjectName}</h4>
              <p className="">{Project.ProjectDesc}</p>
              <a className="ctaproject dark" href={Project.ProjectLink}>
                Read More
              </a>
            </div>
          </div>
        </div>
        );
           })}
      </div>
    </div>
  );
};

export default ProjectsList;
