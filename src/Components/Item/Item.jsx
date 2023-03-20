import React, {useContext} from 'react';
import './Item.scss'
import PropTypes from 'prop-types';
import { BsStarFill } from 'react-icons/bs'
import Btn from '../Btn/Btn';
import "../Btn/Btn.scss"
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentItem, showWishesModal, delateWishes } from '../../store/sliceUsers';
import ViewContext from '../../context/context';




export default function Item(props) {
    const { name, category, size, price, id, color, url } = props.item;

    const dispatch = useDispatch()
    const currentItem = useSelector(state => state.items.currentItem);
    const { view } = useContext(ViewContext);
    return (
        <div className={view === 'table' ? 'table-item' : 'item'}>
            <div key={id} className='item__content'>
                <div className='item__content--img-block'><img src={url} /></div>
                <div className='item__content--info-block'>
                    <h3 className='item-title'>{category} {name}</h3>
                    <p className='item-price'>{price} грн</p>
                    <p>Артикул: {id}</p>
                    <p>Колір: {color}</p>
                    <NavLink to={`/${id}`}>Детальніше про товар</NavLink>
                </div>
            </div>

            {props.favoritBtn && <button
                onClick={() => {
                    dispatch(getCurrentItem(props.item))
                    props.isWish ? dispatch(delateWishes(currentItem)) : dispatch(showWishesModal())
                }}

                className={`wish-btn ${props.isWish && 'active'}`}

            >
                <BsStarFill />
            </button>}


            {props.closeBtn && <Btn
                className={props.classNameCloseBtn}
                text={props.textCloseBtn}
                onClick={props.onClickClose}
            />
            }

            {props.addBtn && <Btn
                className={props.className}
                text={props.text}
                onClick={props.onClick}
            />}
        </div>
    )
}


Item.propTypes = {
    addOrder: PropTypes.func,
    addWish: PropTypes.func,
    checkItem: PropTypes.func,
    delateWish: PropTypes.func,
    showFirstModal: PropTypes.func,
    showSecondModal: PropTypes.func
}


