import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./BecomePartner.css";
const BecomePartner = (props) => {
  return (
    <div className="container BecomePartner" align="center">
      <div className="BecomePartnerA">
        <img
          className=""
          src={props.BecomePartnerLeft}
          className="img-fluid"
          alt="Having any Question"
        ></img>
      </div>
      <div className="BecomePartnerB">
        <div className="B1" align="center">
          <h3 class="white">{props.JoinUsText}</h3>
          <p class="white">{props.Subheading}</p>

          <a className="ctapartners" href={props.ProjectLink1}>
            {props.ProjectLinkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
