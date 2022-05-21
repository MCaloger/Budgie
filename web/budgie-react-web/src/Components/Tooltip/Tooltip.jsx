import React from "react";

export default function Tooltip(props) {
  return (
    <div className="tool-tip">
      <div className="tool-tip-text">{props.text}</div>
      {props.children}
    </div>
  );
}
