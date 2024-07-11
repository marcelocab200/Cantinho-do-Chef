import React, { useState } from "react";
import "./styles.scss";

import TextInput from "../../../../components/UI/Input/TextInput";
import { useOrderContext } from "../../../../context/OrderContext";
import { getTravelTimeORS } from "../../../../services/api";

import DeliveryImg from "../../../../assets/Delivery.png";
import { CircularProgress } from "@mui/material";

export default function DeliveryInfo() {
  const { orderAddress, setOrderAddress, orderTravelTime, setOrderTravelTime } =
    useOrderContext();
  const [isLoading, setIsLoading] = useState(false);

  async function handleCalcDeliveryTime() {
    setIsLoading(true);
    try {
      const response = await getTravelTimeORS(orderAddress);
      setOrderTravelTime(response); // Tempo de viagem em segundos
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  }

  return (
    <div className="Delivery-info-container">
      <div className="Delivery-info">
        <h1>Só falta levar o pedido até você!</h1>
        <img src={DeliveryImg} alt="Delivery Icon" />
        <div className="search-input-container">
          <TextInput
            label="Qual seu endereço?"
            placeholder="Digite seu endereço"
            value={orderAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOrderAddress(e.target.value)
            }
          />
          <button
            className="yellow-button"
            onClick={handleCalcDeliveryTime}
            disabled={!orderAddress}
          >
            {isLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Calcular entrega"
            )}
          </button>
        </div>
        {orderTravelTime > 0 && (
          <div className={"Time-info"}>
            <div className={"Lower-text"}>
              <p>Tempo de viagem: </p>
              <p>{`${Math.round(orderTravelTime / 60)} minutos`}</p>
            </div>
            <div className={"Lower-text"}>
              <p>Tempo de preparo: </p>
              <p>{`30 minutos`}</p>
            </div>
            <div className={"Lower-text"}>
              <p>Tempo de entrega: </p>
              <p>{`${Math.round(orderTravelTime / 60) + 30} minutos`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
