import React from "react";
import "./styles.scss";

import doneIcon from "../../../../assets/DoneIcon.svg";

export default function OrderConfirmed() {
  return (
    <div className="Order-confirmed">
      <img src={doneIcon} alt="Done Icon" />
      <h1>Pedido realizado com sucesso!</h1>
    </div>
  );
}
