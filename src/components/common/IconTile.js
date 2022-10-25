import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../common/IconTile.css';
import { getImage } from '../../helper';

const IconTile = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url} style={{fontSize: "20px"}}>{props.link.text}</a>;
  }

  return (
    <div className={props.className}>
      <img
        src={getImage(props.iconTileImage)}
        style={{ maxHeight: 60 }}
        alt={props.iconTileImage}
      />
      <h2 className="conthd-icon">{props.heading}</h2>
      <p>{ReactHtmlParser(props.content)}</p>
      {button}
    </div>
  );
};

export default IconTile;
