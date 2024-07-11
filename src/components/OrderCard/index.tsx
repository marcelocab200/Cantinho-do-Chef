import React from 'react';
import './styles.scss';

import OrderDescriptionIcon from '../../assets/OrderDescriptionIcon.svg'

import { OrderProps, useOrderContext } from '../../context/OrderContext';

export default function OrderCard(props: OrderProps) {
    const {orderDeliveryTimer} = useOrderContext()
    const {orderId, orderImg} = props

    return (
        <div className='Order-card' key={orderId} >
            <img className='order-image' src={orderImg}/>
            <div className='lower-section'>
            <div>
                <p id="order-number">Pedido #{`${orderId}`}</p>
                <p>Tempo de entrega: {`${orderDeliveryTimer && new Date(Math.round(orderDeliveryTimer[orderId]) * 1000).toISOString().slice(11, 19)}`}</p>
            </div>
            <img className='order-description-icon' src={OrderDescriptionIcon}/>
            </div>
        </div>
    )
}

