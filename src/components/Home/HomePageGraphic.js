import React from "react";

const HomePageGraphics = (props) => {
  return (
    <div class="container youngget-grid ptb-40">
      <div class="item-a">
        <div class="item-ab">
          <h3 class="white">{props.Heading}</h3>

          <p class="float-left">
            <a href={props.CTALink} class="ctadark mtcta-25">
              {props.CTAText}
            </a>
          </p>
        </div>
      </div>

      <div class="item-b">
        {" "}
        <img src={props.RightImage} class="" alt="icon"></img>
      </div>
    </div>
  );
};

export default HomePageGraphics;
