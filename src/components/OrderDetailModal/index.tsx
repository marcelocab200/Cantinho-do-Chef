import React from "react";
import "./styles.scss";
import { Modal, Box } from "@mui/material";
import { OrderProps, useOrderContext } from "../../context/OrderContext";
import formattedTime, { FormattedTimeProps } from "../../misc/formattedTime";

export type OrderDetailModalProps = {
  order: OrderProps;
  open: boolean;
  handleClose: () => void;
};

export default function OrderDetailModal({
  order,
  open,
  handleClose,
}: OrderDetailModalProps) {
  const {
    orderId,
    orderItem,
    orderFlavor,
    orderSize,
    orderImg,
    orderAdditionalInfo,
  } = order;

  const { orderDeliveryTimer } = useOrderContext();

  const timerToFormat: FormattedTimeProps = {
    timer: orderDeliveryTimer,
    orderId: orderId,
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    maxWidth: "45rem",
    height: "35rem",
    bgcolor: "#fcfbf8",
    borderRadius: "10px",
    p: 4,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Modal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
    >
      <Box sx={style} className="modal-box">
        <div className="container">
          <h1>Detalhes do Pedido #{`${orderId}`}</h1>
          <div className="order-detail-content">
            <div className="order-detail-info">
              <div className={"detail-text"}>
                <p>Item: {orderItem}</p>
                <p>Sabor: {orderFlavor}</p>
                <p>Tamanho: {orderSize}</p>
                {orderAdditionalInfo !== "" && (
                  <p>Informação adicional: {orderAdditionalInfo}</p>
                )}
              </div>
              <img src={orderImg} alt="Item do pedido" />
            </div>
            <div className="delivery-info">
              <p>Tempo de entrega: {`${formattedTime(timerToFormat)}`}</p>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
