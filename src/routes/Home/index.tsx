import React, { useEffect } from 'react';
import './styles.scss';

import Button from '../../components/UI/Button';
import logo from '../../assets/logo.png'

import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate('/MakeOrder');
    }

    return (
        <div className={"Home"}>
            <h1>É um prazer te ter por aqui!</h1>
            <img src={logo} alt="Logo"/>
            <button className={"yellow-button"} onClick={handleButtonClick}>Faça seu pedido</button>
        </div>
    )
}