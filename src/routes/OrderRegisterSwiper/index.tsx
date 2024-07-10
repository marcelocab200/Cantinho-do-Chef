import React, { useState, useRef } from 'react';
import './styles.scss';
import 'swiper/css';

import { useNavigate } from 'react-router-dom';

import SwiperPagination from '../../components/SwiperPagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import OrderDetail from './slides/OrderDetail';
import DeliveryInfo from './slides/DeliveryInfo';
import OrderConfirmed from './slides/OrderConfirmed';

// Import Swiper styles
// import 'swiper/css/pagination';

export default function OrderRegister() {
    const navigate = useNavigate()

    const [activeDotIndex, setActiveDotIndex] = useState(1);
    const swiperRef = useRef<SwiperCore | null>(null);

    function handleButtonClick() {
        // Caso tenha concluído o Cadastro do Pedido, vai para a tela de Lista de Pedidos
        if (activeDotIndex === 3) {
            navigate('/OrdersList')
        }

        // Apenas avança o activeDotIndex
        if (swiperRef.current) {
            swiperRef.current.slideNext();
            setActiveDotIndex((prev) => prev + 1);
        }

    }

    return (
        <div className='Order-register'>
            <SwiperPagination activeDot={activeDotIndex} dots={[{id: 1, text: 'Fazer pedido'}, {id: 2, text: 'Entrega'}, {id: 3, text: 'OK!'}]}/>
            <Swiper
                
                className="swiper"
                allowTouchMove={false}
                onSwiper={(swiper: SwiperCore) => (swiperRef.current = swiper)}
                >

                <SwiperSlide><OrderDetail /></SwiperSlide>
                <SwiperSlide><DeliveryInfo /></SwiperSlide>
                <SwiperSlide><OrderConfirmed /></SwiperSlide>
            </Swiper>
            <button className='yellow-button' onClick={handleButtonClick}>Prosseguir</button>
        </div>
    )
}