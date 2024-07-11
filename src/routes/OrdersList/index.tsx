import React from "react";
import "./styles.scss";

import logo from "../../assets/logo.png";

import OrderCard from "../../components/OrderCard";
import TextInput from "../../components/UI/Input/TextInput";

import { OrderProps, useOrderContext } from "../../context/OrderContext";

import { useNavigate } from "react-router-dom";

export default function OrdersList() {
  const navigate = useNavigate();
  const { allOrdersList } = useOrderContext();

  function handleButtonClick() {
    navigate("/OrderRegister");
  }

  return (
    <div className="Orders-list">
      <header>
        <div className="Logo-title">
          <a href="/">
            <img src={logo} alt="Mini Logo" className="logo"></img>
          </a>
          <h1>Lista de pedidos</h1>
        </div>
        <TextInput value="" placeholder="Pesquisar" />
      </header>
      <div className="Orders-grid">
        {allOrdersList.length > 0 ? (
          allOrdersList.map((order: OrderProps) => (
            <OrderCard key={order.orderId} {...order} />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      <footer>
        <button className="yellow-button" onClick={handleButtonClick}>
          Adicionar novo pedido
        </button>
      </footer>
    </div>
  );
}
