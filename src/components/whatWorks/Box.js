import React from "react";

const Box = ({ active, children, onClick, onChange }) => (
  <div className="form-check pl-5">
    <input
      className="form-check-input"
      type="checkbox"
      id="DefaultCheckbox"
      checked={active}
      onChange={onChange}
      aria-label={children}
    />
    <label className="form-check-label" for={children}>
      {children}
    </label>
  </div>
);

export default Box;
