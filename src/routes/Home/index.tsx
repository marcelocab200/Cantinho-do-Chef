import React from "react";
import "./styles.scss";

import logo from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/OrderRegister");
  }

  return (
    <div className={"Home"}>
      <h1>É um prazer te ter por aqui!</h1>
      <img src={logo} alt="Logo" className="logo" />
      <button className={"yellow-button"} onClick={handleButtonClick}>
        Faça seu pedido
      </button>
    </div>
  );
}
