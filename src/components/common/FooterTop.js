import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./../common/IconTile.css";
import { getImage } from "../../helper";

const font={
  'font-size':'1.75rem'
}

const FooterTop = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }

  return (
    <div className="container ThreeBoxesFooter">
      <div className="supportBox" align="center">
        <img
          src="/images/support-icon.png"
          alt="Check Resources if you have question"
        ></img>
        <div style={font}> Still have questions? </div>
        <div className="sb-sub" style={font}>Check out these resources!</div>
        <a href="/resources" class=" blackborderbutton">
          View Resources
        </a>
      </div>
      <div className="workBox" align="center">
        <div style={font} className="white">Find out what works!</div>
        <a href="/what-works" class="green-btn abtn">
          Explore More
        </a>
      </div>
      <div className="socialBox" align="center">
        <img src={getImage("joinusicon.png")} alt="Connect with Us"></img>
        <div style={font} className="">Stay Connected!</div>
        <ul className="socialul">
          <li>
            <a href="https://www.facebook.com/transitiondisc1/" target="_blank">
              <img src="/images/fb.png" alt="Facebook"></img>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TransitionDisc1" target="_blank">
              <img src="/images/tw.png" alt="Twitter"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/transitiondiscoveries/?hl=en"
              target="_blank"
            >
              <img src="/images/ins.png" alt="Instagram"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC9_7KJVw_3F8po8VgS6iOZA"
              target="_blank"
            >
              <img src="/images/yt.png" alt="Youtube"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
