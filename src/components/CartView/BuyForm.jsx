import React, { useState } from "react";
import InputForm from "./InputForm";

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
    <form onSubmit={onSubmit} className="w-25 d-flex flex-column justify-content-center">
      <InputForm
        required="true"
        title="Nombre"
        name="name"
        type="text"
        value={userData.name}
        onInputChange={onInputChange}
      />
      <InputForm
        required="true"
        title="Email"
        name="email"
        type="email"
        value={userData.email}
        onInputChange={onInputChange}
      />
      <InputForm
        required="true"
        title="Teléfono"
        name="phone"
        type="text"
        value={userData.phone}
        onInputChange={onInputChange}
      />

      <button onClick={onSubmit}>Enviar formulario</button>
    </form>
  );
}

