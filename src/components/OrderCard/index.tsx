import React from 'react';
import './styles.scss';

import OrderDescriptionIcon from '../../assets/OrderDescriptionIcon.svg'

export default function OrderCard() {
    return (
        <div className='Order-card' >
            <img className='order-image'/>
            <div className='lower-section'>
            <div>
                <p id="order-number">Pedido #1</p>
                <p>Tempo de entrega: 59 min</p>
            </div>
            <img className='order-description-icon' src={OrderDescriptionIcon}/>
            </div>
        </div>
    )
}