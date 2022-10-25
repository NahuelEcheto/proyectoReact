import React from "react";
import "./button.css";

function Button (props) {
  let styleButton = { backgroundColor: props.color };
  
  return (
    <button style={styleButton} className="btn">
      {props.children}
    </button>
  );
}

export default Button;