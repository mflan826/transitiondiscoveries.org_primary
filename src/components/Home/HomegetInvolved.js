import React from "react";
import { getHomeImage } from "./../../helper";

const font={
  'font-size':'1.75rem'
}

const HomegetInvolved = (props) => {
  console.log(props.heading,"ggggg");
  return (
    <div class="container-fluid HomegetInvolved-grid2 ">
      <div class="container HomegetInvolved-grid">
      <div className="HomegetInvolved-head">
        <div className="">
          <div>     
            <strong class="green" style={font}>
              {props.Heading}</strong>
          </div>
          <p class="sub-txt mb-3">{props.subheading}</p>
        </div>
      </div>
      <div className="HomegetInvolved-grid-boxes">
        {props.boxes.map((item, index) => {
          return (
            <a href={item.link.url}>
              <div class="item">
                <img src={getHomeImage(item.image)} class="img-fluid " alt={index}></img>
                <div class="subitem-1">
                  <h4 class=" white">{item.heading}</h4>
                  <p className="white">{item.text}</p>
                  <button class="green-btn">{item.link.text}</button>
                </div>
              </div>
            </a>
          );
        })}
      </div></div>
    </div>
  );
};

export default HomegetInvolved;
