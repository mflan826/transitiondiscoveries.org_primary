import React from "react";
import ModalBox from "./../common/ModalBox";
import { getHomeImage } from "./../../helper";
const HomePageCaptionSection = (props) => {
  return (
    <div class="container-fluid second-box-grid">
      <div class="item-b">
        <h1 class="home-headingtxt white">{props.LeftHeading}</h1>
        <p class="float-left">
          <a href={props.LeftCTALink} class="ctadark mtcta-25">
            {props.LeftCta}
          </a>
        </p>
      </div>

      <div class="item-a">
        <div class="item-ab">
          <a
            href={props.RightVideoLink ? props.RightVideoLink : '#'}
            data-toggle="modal"
            data-target="#modalResources"
            aria-label="first link"
          >
            {/* <img
              src={getHomeImage("icon-disability.png")}
              class="icon-vide"
              alt="icon"
            ></img> */}
          </a>
          <ModalBox id="modalResources" link={props.RightVideoLink}></ModalBox>
          {props.RightHeading ? <h3 class="gray">{props.RightHeading}</h3> : null }
        </div>
      </div>
    </div>
  );
};

export default HomePageCaptionSection;
