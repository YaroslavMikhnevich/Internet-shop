import React from 'react';
import ReactDOM from 'react-dom/client';
import './CardItem.scss'
import { GrClose } from 'react-icons/gr';
import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';


export default function CardItem(props) {
    const {category, color, id, name, price, size, url} = props.item;

    return (
        <div className='card-item'>
            <img src={url} />
            <div>
                <span>{category}</span>
                <span>{name}</span>
                <span>{price} грн.</span>
            </div>
            {props.closeBtn && <Btn                
                className={props.classNameCloseBtn}
                text={props.textCloseBtn}
                onClick={props.onClickClose}
            />}

        </div>

    )
}


CardItem.propTypes = {
    cardInfo: PropTypes.object,
    delateOrder: PropTypes.func,
        }



