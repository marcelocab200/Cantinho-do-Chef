import React, { useState, useRef } from "react";
import "./styles.scss";
import "swiper/css";

import { useNavigate } from "react-router-dom";

import { useOrderContext } from "../../context/OrderContext";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import SwiperPagination from "../../components/SwiperPagination";

import OrderDetail from "./slides/OrderDetail";
import DeliveryInfo from "./slides/DeliveryInfo";
import OrderConfirmed from "./slides/OrderConfirmed";

export default function OrderRegister() {
  const navigate = useNavigate();

  const {
    orderId,
    orderItem,
    orderSize,
    orderFlavor,
    orderAddress,
    registerOrder,
    resetOrderStates,
    orderTravelTime,
    orderDeliveryTimer,
    setOrderDeliveryTimer,
  } = useOrderContext();

  const [activeDotIndex, setActiveDotIndex] = useState(1);
  const swiperRef = useRef<SwiperCore | null>(null);

  function handleProceed() {
    // No passo 1 do cadastro de pedido, caso algum dos inputs obrigatorios nao tenha sido selecionado, nao permite o usuario prosseguir
    // Descricao adicional é um input opcional
    if (activeDotIndex === 1) {
      if (orderItem === "" || orderSize === "" || orderFlavor === "") {
        console.log("Por favor, preencha todos os campos obrigatorios.");
        return;
      }
    }

    // No passo 2 do cadastro de pedido, caso o input obrigatorio nao tenha sido preenchido, nao permite o usuario prosseguir
    if (activeDotIndex === 2) {
      if (orderAddress === "" || orderTravelTime === 0) {
        console.log("Por favor, preencha o campo de endereço.");
        return;
      }
    }

    // Caso tenha concluído o processo anterior, registra o pedido, reseta os estados com dados do pedido e redireciona para a tela de Lista de Pedidos.
    // Alem disso, envia a informacao do timer (pelo id do pedido) para orderDeliveryTimer, que ira armazenar todos os dados de timer dos pedidos
    if (activeDotIndex === 3) {
      if (orderDeliveryTimer === null) {
        setOrderDeliveryTimer({ [orderId + 1]: orderTravelTime + 30 * 60 });
      } else {
        setOrderDeliveryTimer((prev) => ({
          ...prev,
          [orderId + 1]: orderTravelTime + 30 * 60,
        }));
      }
      registerOrder();
      resetOrderStates();
      navigate("/OrdersList");
    }

    // Apenas avança o activeDotIndex caso tenha preenchido os campos corretamente
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveDotIndex((prev) => prev + 1);
    }
  }

  return (
    <div className="Order-register">
      <SwiperPagination
        activeDot={activeDotIndex}
        dots={[
          { id: 1, text: "Fazer pedido" },
          { id: 2, text: "Entrega" },
          { id: 3, text: "OK!" },
        ]}
      />
      <Swiper
        className="swiper"
        allowTouchMove={false}
        onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <OrderDetail />
        </SwiperSlide>
        <SwiperSlide>
          <DeliveryInfo />
        </SwiperSlide>
        <SwiperSlide>
          <OrderConfirmed />
        </SwiperSlide>
      </Swiper>
      <button className="yellow-button" onClick={handleProceed}>
        Prosseguir
      </button>
    </div>
  );
}
