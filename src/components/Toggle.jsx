import React from "react";

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggleContainer flex">
      <input
        type="checkbox"
        id="toggle"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="toggle"></label>
    </div>
  );
};

export default Toggle;
