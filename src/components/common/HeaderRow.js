import React from "react";

const HeaderRow = (props) => {
  return (
    <div className="indicatorgridhead">
      <div className="indicatorgridheadelmnt">
        <h3 className="green">{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
export default HeaderRow;
