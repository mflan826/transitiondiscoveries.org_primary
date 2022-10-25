import React from "react";
import { getImage } from "../../helper";
import ModalBox from "./../common/ModalBox";

const font = {
  "font-size": "25px",
  "line-height": "32px",
};

const VideoBoxwithBG = (props) => {
  return (
    <div className="container">
      <div className="row videobox2">
        <div id="overlay"></div>
        <div className="col-md-8 col-xs=12">
          <div className="white fw500 mtcta-25" style={font}>
            {props.LeftHeading}
          </div>
          <p className="aboutvidobg">
            {" "}
            <a className="" href={props.CTALink} style={{ fontSize: "20px" }}>
              Learn More
            </a>
          </p>
        </div>
        <div className="col-md-4 col-xs=12" align="center">
          {/* <a href={props.VideoLink}> */}
          <a
            href="#"
            data-toggle="modal"
            data-target="#modalResources2"
            onClick={props.VideoLink}
          >
            <input
              type="image"
              src={getImage("playbutton.png")}
              alt="Play Video About TD"
              className="playicon"
            ></input>

            <span className="playtext white" style={{ fontSize: "20px" }}>
              Watch Tour
            </span>
          </a>
          <ModalBox
            id="modalResources2"
            link={props.VideoLink}
            title=""
            type="vedio"
          ></ModalBox>
        </div>
      </div>
    </div>
  );
};

export default VideoBoxwithBG;
