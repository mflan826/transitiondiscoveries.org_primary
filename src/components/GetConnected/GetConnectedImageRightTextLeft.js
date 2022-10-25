import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './GetConnectedImageRightTextLeft.css';


const font={
  'font-size':'1.75rem'
}

const GetConnectedImageRightTextLeft = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }

  return (
    <div class="container youngget-grid ptb-40">
      <div class="item-a">
        <div class="item-ab">
          <div>     
            <strong class="green" style={font}>
              {props.heading}
            </strong>
          </div>
          <p class="sub-txt mb-3">{props.subheading}</p>
          <p>{ReactHtmlParser(props.content)}</p>
          <p class="float-right">
              <a href={props.linkHref} class="grtctatbg">
                {props.linkText}
              </a>
          </p>
        </div>
      </div>

      <div class="item-b">
        <img
          src={props.imageName}
          alt="Young Peoples"
          className="img-responsive"
        />
      </div>
    </div>
  );
};

export default GetConnectedImageRightTextLeft;
