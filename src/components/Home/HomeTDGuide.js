import React from "react";
import { getHomeImage } from "./../../helper";
import FAQList from "../FAQs/FAQList";
const HomeTDGuide = (props) => {
  const font = {
    "font-size": "1.75rem",
  };
  return (
    <div class="container accordian-box-grid ptb-40 tdguide">
      <div class="item-a">
        <div class="item-ab">
          {props.LeftHeading ? (
            <div>
              <strong class="green" style={font}>
                {props.LeftHeading}
              </strong>
            </div>
          ) : null}
        </div>
        <FAQList faqs={props.faqList}></FAQList>
      </div>

      <div class="item-b">
        <img
          src={getHomeImage(props.FaqRightImage)}
          class=""
          alt="Download Transition Discoveries Infographic Guide"
        ></img>
        {/* <h4>
          <strong class="green">{props.RightHeading}</strong>
        </h4> */}
        <p class="float-left">
          <a
            target="_blank"
            href={getHomeImage(props.EnglishGuidePDFLink)}
            class="grtctatbg"
          >
            In English
          </a>
        </p>
        <p class="float-left-spanish">
          <a target="_blank" href={getHomeImage(props.SpanishGuidePDFLink)} class="grtctatbg">
            In Spanish 
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomeTDGuide;
