import React, { useState } from "react";
import "./styles.scss";

import logo from "../../assets/logo.png";

import OrderCard from "../../components/OrderCard";
import TextInput from "../../components/UI/Input/TextInput";

import { OrderProps, useOrderContext } from "../../context/OrderContext";

import { useNavigate } from "react-router-dom";
import OrderDetailModal from "../../components/OrderDetailModal";

export default function OrdersList() {
  const navigate = useNavigate();
  const { allOrdersList } = useOrderContext();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState(allOrdersList[0]);

  function handleButtonClick() {
    navigate("/OrderRegister");
  }

  function handleModalOpen(order: OrderProps) {
    setOpenModal(true);
    setSelectedOrder(order);
  }

  return (
    <div className="Orders-list">
      <OrderDetailModal
        order={selectedOrder}
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
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
            <OrderCard
              key={order?.orderId}
              onClick={() => handleModalOpen(order)}
              {...order}
            />
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
