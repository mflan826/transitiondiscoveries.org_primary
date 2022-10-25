import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './GetConnectedImageLeftTextRight.css';

const GetConnectedImageLeftTextRight = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }

  const font = {
    'font-size': '1.75rem',
  };

  return (
    <div className="container contentget-grid ptb-40">
      <div className="item-b">
        <img src={props.imageName} alt={"Young People" + props.heading} />
      </div>
      <div class="item-a">
        <div class="item-ab">
          <div>
            <strong class="green" style={font}>
              {props.heading}
            </strong>
          </div>
          {props.subheading ? (
            <p class="sub-txt mb-3">{props.subheading}</p>
          ) : (
            <div></div>
          )}
          <p>{ReactHtmlParser(props.content)}</p>

          <p class="">
            <a
              href={props.link ? props.link.url : props.linkHref}
              class="grtctatbg"
            >
              {props.link ? props.link.text : props.linkText}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetConnectedImageLeftTextRight;
