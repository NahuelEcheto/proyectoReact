import React from 'react';
import "./flexWrapp.css";

function FlexWrapp(props) {
  return (
    <div className="flex-wrapp">{props.children}</div>
  )
}

export default FlexWrapp