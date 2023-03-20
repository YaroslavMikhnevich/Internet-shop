import React from 'react';
import ReactDOM from 'react-dom/client';
import './CardList.scss'
import CardItem from '../CardItem/CardItem';
import PropTypes from 'prop-types';
import {GrClose} from 'react-icons/gr'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showDelateModal, getCurrentItem } from '../../store/sliceUsers';


export default function CardList(props) {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.items.orders);
    const [setactiveCard] = props.funcs;
        return (
            <div className='card-list-block-background'>
                <div className='card-list-block'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}>
                    <ul>
                        {orders.length === 0 && <h3>{props.message}</h3>}
                        <GrClose onClick={
                            ()=>{
                                setactiveCard(!props.state)
                            }
                        } className='close-order-window'/>
                        {orders.length > 0 && orders.map((el) => {
                            return (
                                <CardItem
                                 key={el.id} 
                                 item={el} 

                                 closeBtn={true} //пропси для кнопки видалення:
                                 onClickClose={()=>{
                                   dispatch(getCurrentItem(el))
                                   dispatch(showDelateModal())
                                 }}
                                 textCloseBtn={<MdClose />}

                                />
                            )
                        })
                        }
                    </ul>
                <Link to='/card' className='.tocard-btn' >До кошика</Link>
                </div>
            </div>
        )
    }


CardList.propTypes = {
    delateOrder: PropTypes.func,
    message: PropTypes.string,
    orders: PropTypes.array,
}


