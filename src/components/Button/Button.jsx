import React from "react";
import "./button.css";

function Button (props) {
  let styleButton = { backgroundColor: props.color, color:props.textColor };
  
  return (
    <button style={styleButton} className="btn">
      {props.children}
    </button>
  );
}

export default Button;