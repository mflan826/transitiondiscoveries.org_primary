import React from "react";
import { SocialIcon } from "react-social-icons";

const FollowUs = (props) => {
  return (
    <>
      <ul className="list-inline text-md-right text-lg-right text-left">
        <li className="list-inline-item">
          <span>{props.text}</span>
          {props.links.map((link, i) => (
            <SocialIcon
              key={i}
              network={link.network}
              url={link.url}
              fgColor="#fff"
              className="mx-1"
              style={{ height: 25, width: 25 }}
            />
          ))}
        </li>
      </ul>
    </>
  );
};
export default FollowUs;
