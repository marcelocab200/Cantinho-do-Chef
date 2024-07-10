import React from 'react';
import './styles.scss';

import logo from '../../assets/logo.png'

import Input from '../../components/UI/Input';

import OrderCard from '../../components/OrderCard';
import { useNavigate } from 'react-router-dom';

export default function OrdersList() {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate('/OrderRegister');
    }

    return (
        <div className='Orders-list'>
            <header>
                <div className="Logo-title">
                <a href="/"><img src={logo} alt="Mini Logo" className="logo"></img></a>
                <h1>Lista de pedidos</h1>
                </div>
                <Input type="text" placeholder="Pesquisar"/>
            </header>
            <div className="Orders-grid">
                
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard /> <OrderCard />
            <OrderCard />
            <OrderCard />
            </div>
            <footer><button className='yellow-button' onClick={handleButtonClick}>Adicionar novo pedido</button></footer>
        </div>
    )
}