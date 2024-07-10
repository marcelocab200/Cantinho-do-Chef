import React from 'react';
import './styles.scss';

type ButtonProps = {
    children: string
}

export default function Button({children}: ButtonProps) {
    return (
        <button>{children}</button>
    )
}