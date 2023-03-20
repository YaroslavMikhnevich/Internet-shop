import React from 'react';
import ReactDOM from 'react-dom/client';
import './QuantityCard.scss'

export default function QuantityCard(props) {
        return (
            <>
                <p className='quantity-card'>{props.quantity}</p>
            </>
        )
    }