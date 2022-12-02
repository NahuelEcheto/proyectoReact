import React, { useState } from "react";
import InputForm from "./InputForm";
import Button from "../Button/Button";
import "./cartView.css";

export default function BuyForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(userData);

  function onInputChange(evt) {
    const inputName = evt.target.name;
    const value = evt.target.value;


    const newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
  }

  return (
    <div className="formulario-venta">
        <h1>Completar el formulario</h1>
        <p>Completa el siguiente formulario para terminar la compra.</p>
    <form onSubmit={onSubmit} className="w-25 d-flex flex-column justify-content-center">
      <div className="row mb-3">
      <InputForm
        required
        title="Nombre"
        name="name"
        type="text"
        value={userData.name}
        onInputChange={onInputChange}
      />
      </div>
      <div className="row mb-3">
      <InputForm
        required
        title="Email"
        name="email"
        type="email"
        value={userData.email}
        onInputChange={onInputChange}
      />  
      </div>
      <div className="row mb-3">
      <InputForm
        required
        title="Teléfono"
        name="phone"
        type="text"
        value={userData.phone}
        onInputChange={onInputChange}
      />
      </div>




      <Button onClick={onSubmit}>Finalizar compra</Button>
    </form>
    </div>
  );
}

