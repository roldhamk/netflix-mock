import React from "react";

const Bar = props => {
  return (
    <div className="bar">
      <button id="button">{props.text}</button>
    </div>
  );
};

export default Bar;
