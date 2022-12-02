import React from "react";

function InputForm(props) {
  return (
    <div className="d-flex justify-content-between">
      <label className="form-label">{props.title}</label>
      <input
      className="form-control"
        value={props.value}
        name={props.name}
        type={props.type}
        required
        onChange={props.onInputChange}
      />
    </div>
  );
}

export default InputForm;







