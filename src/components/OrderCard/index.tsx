import React from "react";
import "./styles.scss";

import OrderDescriptionIcon from "../../assets/OrderDescriptionIcon.svg";

import { OrderProps, useOrderContext } from "../../context/OrderContext";

import formattedTime, { FormattedTimeProps } from "../../misc/formattedTime";

export type OrderCardProps = OrderProps & {
  onClick: () => void;
};

export default function OrderCard(props: OrderCardProps) {
  const { orderDeliveryTimer } = useOrderContext();
  const { orderId, orderImg, onClick } = props;

  const timerToFormat: FormattedTimeProps = {
    timer: orderDeliveryTimer,
    orderId: orderId,
  };

  return (
    <div className="Order-card" key={orderId} onClick={onClick}>
      <img className="order-image" src={orderImg} alt="Imagem do pedido" />
      <div className="lower-section">
        <div>
          <p id="order-number">Pedido #{`${orderId}`}</p>
          <p>Tempo de entrega: {`${formattedTime(timerToFormat)}`}</p>
        </div>
        <img
          className="order-description-icon"
          src={OrderDescriptionIcon}
          alt="Icone de descriçao"
        />
      </div>
    </div>
  );
}
