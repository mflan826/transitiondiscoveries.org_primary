import React from "react";
import ReactHtmlParser from "react-html-parser";

import { getImage } from "../../helper";
import "./GallerySocialShareIcons.css";


const font={
  'font-size':'1.75rem'
}



const FooterTop = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }

  return (
    <div className=" GallerySocialShareIcons">
      <div className="socialBox" align="center">
        <div>     
          <strong class="green" style={font}>
          Stay Connected!
          </strong>
        </div>
        <ul className="socialul">
          <li>
            <a href="https://www.facebook.com/transitiondisc1/" target="_blank">
              <img src="/images/fb.png" alt="facebook icon" ></img>
            </a> 
          </li>
          <li>
            <a href="https://twitter.com/TransitionDisc1" target="_blank">
              <img src="/images/tw.png" alt="twitter icon"></img>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/transitiondiscoveries/?hl=en" target="_blank">
              <img src="/images/ins.png" alt="instagram icon"></img>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC9_7KJVw_3F8po8VgS6iOZA" target="_blank">
              <img src="/images/yt.png" alt="icon"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
