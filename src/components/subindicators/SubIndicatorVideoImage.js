import React from "react";
import ModalBox from "./../common/ModalBox";
const SubIndicatorVideoImage = (props) => {
  let bannerImage;
  if (props.imageName) {
    bannerImage = (
      <div className="col-md-6 col-lg-6 mt-minus-5">
        <img src={props.imageName} alt="banner" />
      </div>
    );
  }
  return (
    <div className="container grid-dark ptb-40">
      <div className="item-a">
        <div className="item-ab darkgreen">
          <div className="video-txt">
            <a
              href="#"
              data-toggle="modal"
              data-target="#modalResources3"
              onClick={props.VideoLink}
            >
              <img src={props.icon} alt={props.heading}></img>
            </a>
            <ModalBox
              id="modalResources3"
              link={props.VideoLink}
              title=""
              type="vedio"
            ></ModalBox>
            <h2 className="white">{props.heading}</h2>
          </div>
        </div>
      </div>
      <div className="item-b">
        <img src={props.imageName} alt="banner" />
      </div>
    </div>
  );
};

export default SubIndicatorVideoImage;
