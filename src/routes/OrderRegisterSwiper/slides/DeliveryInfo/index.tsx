import React from "react";
import "./styles.scss";

import TextInput from "../../../../components/UI/Input/TextInput";
import { useOrderContext } from "../../../../context/OrderContext";
import { getTravelTimeORS } from "../../../../services/api";

export default function DeliveryInfo() {
  const { orderAddress, setOrderAddress, orderTravelTime, setOrderTravelTime } =
    useOrderContext();

  async function handleCalcDeliveryTime() {
    try {
      const response = await getTravelTimeORS(orderAddress);
      setOrderTravelTime(response); // Tempo de viagem em segundos
    } catch (e: any) {
      console.log(e);
    }
  }

  return (
    <div className="Delivery-info-container">
      <div className="Delivery-info">
        <h1>Só falta levar o pedido até você!</h1>
        <p></p>
        <div className="search-input-container">
          <TextInput
            label="Qual seu endereço?"
            placeholder="Digite seu endereço"
            value={orderAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOrderAddress(e.target.value)
            }
          />
          <button className="yellow-button" onClick={handleCalcDeliveryTime}>
            Calcular
          </button>
        </div>
        {orderTravelTime > 0 && (
          <>
            <p>{`Tempo de viagem: ${Math.round(
              orderTravelTime / 60
            )} minutos.`}</p>
            <p>{`Tempo de preparo: 30 minutos.`}</p>
            <p>{`Tempo de entrega: ${
              Math.round(orderTravelTime / 60) + 30
            } minutos.`}</p>
          </>
        )}
      </div>
    </div>
  );
}
