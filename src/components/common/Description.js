import React from "react";
import ReactHtmlParser from "react-html-parser";

const font={
  'font-size':'1.75rem'
}

const Description = (props) => {
  let descriptionLink;
  let style=(props.page=='aboutus' ? {
    'border': 'solid 2px #659141',
    'color': '#659141',
    'padding': '3px 19px',
    'display': 'inline-flex',
    'font-family': 'sans-serif',
    'font-weight': '600',
    'margin-top': '25px',
    'float': 'right'
  }:{});

  if (props.link || props.descriptionLink) {
    descriptionLink = (
      <a style={style} href={props.link ? props.link.url : props.descriptionLink } className="ctadark mtcta-25">
        {props.page=='aboutus' ?  'Learn More' : props.link.text }
      </a>
    );
  }

  return (
    <>
      <div className={props.h3Class} style={font}>{props.heading}</div>
      <p className={props.pClass}>{ReactHtmlParser(props.content)}</p>
      <p class="float-right">{descriptionLink}</p>
    </>
  );
};

export default Description;
