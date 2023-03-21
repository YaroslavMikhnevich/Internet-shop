import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Card.scss'
import { RiShoppingBagLine } from 'react-icons/ri'
import CardList from '../CardList/CardList';
import QuantityCard from '../QuantityCard/QuantityCard';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Card(props) {
    const [activeCard, setactiveCard] = useState(false)

    const orders = useSelector(state => state.items.orders);

    return (
        <div className='card-block'>
            <button onClick={() => { setactiveCard(!activeCard) }}>
                {!activeCard ? <RiShoppingBagLine
                    className={`shopping-bag ${activeCard && 'active'}`} /> : ''}

                {!activeCard && <QuantityCard
                    quantity={orders.length}
                />}

                {activeCard && <CardList
                    state={activeCard}
                    funcs={[setactiveCard]}
                    message={'Упс! Кошик порожній'}
                    orders={orders} />}
            </button>
        </div>
    )
}

Card.propTypes = {
    delateOrder: PropTypes.func,
    orders: PropTypes.array,
        }

