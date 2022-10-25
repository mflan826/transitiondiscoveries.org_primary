import React from "react";

const QisBox = ({ active, children, onQisChange }) => (
  <div className="form-check pl-5">
    <input
      className="form-check-input"
      type="checkbox"
      id="DefaultQisCheckbox"
      checked={active}
      onChange={onQisChange}
      aria-label={children}
    />
    <label className="form-check-label" for={children}>
      {children}
    </label>
  </div>
);

export default QisBox;
