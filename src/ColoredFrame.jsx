import React from "react";
import "./styles.css";

function ColoredFrame({ color, children }) {
  return (
    <div className="colored-frame" style={{ borderColor: color }}>
      {children}
    </div>
  );
}

export default ColoredFrame;
