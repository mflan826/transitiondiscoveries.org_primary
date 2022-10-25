import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './PoliciesContent.css';

const PoliciesContent = (props) => {
  return (
    <div className="col-lg-9 PolicyContent">
      <h3 className="green">{props.PolicyName}</h3>
      <p>{ReactHtmlParser(props.PolicyContent)}</p>
    </div>
  );
};

export default PoliciesContent;
