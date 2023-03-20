import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BsStarFill } from 'react-icons/bs'
import QuantityCard from '../QuantityCard/QuantityCard';
import WishList from '../WishList/WishList';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

export default function WishCard() {
    const [activeCard, setactiveCard] = useState(false)
    const wishes = useSelector(state => state.items.wishes);

    return (
        <div className='card-block'>
            <button onClick={() => { setactiveCard(!activeCard) }}>
                {!activeCard ? <BsStarFill
                    className={`shopping-bag ${activeCard && 'active'}`} /> : ''}
                {!activeCard && <QuantityCard quantity={wishes.length} />}

                {activeCard && <WishList
                    state={activeCard}
                    funcs={[setactiveCard]}
                    message={'Упс! Ваш список бажань пустий'}
                     />}
            </button>
        </div>
    )
}



WishCard.propTypes = {
    delateOrder: PropTypes.func,
    delateWish: PropTypes.func,
    wish: PropTypes.array,
        }


