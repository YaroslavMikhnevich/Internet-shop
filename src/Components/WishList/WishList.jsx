import React from 'react';
import ReactDOM from 'react-dom/client';
import './WishList.scss'
import CardItem from '../CardItem/CardItem';
import PropTypes from 'prop-types';
import {GrClose} from 'react-icons/gr'
import { MdClose } from 'react-icons/md'

import { Link } from 'react-router-dom';
import { showDeleteWishesModal, getCurrentItem } from '../../store/sliceUsers';
import { useSelector, useDispatch } from 'react-redux';



export default function WishList(props) {
    const dispatch = useDispatch()
    const [setactiveCard] = props.funcs;
    const wishes = useSelector(state => state.items.wishes);

    return (
        <div className='wish-list-block-background'>
            <div className='card-list-block'
                onClick={(e) => {
                    e.stopPropagation()
                }}>
                <ul>
                    {wishes.length === 0 && <h3>Упс, список бажань пустий</h3>}
                    <GrClose onClick={
                            ()=>{
                                setactiveCard(!props.state)
                            }
                        } className='close-order-window'/>
                    {wishes.length > 0 && wishes.map((el) => {
                        return (
                            <CardItem
                                closeBtn={true} //пропси для кнопки видалення:
                                onClickClose={()=>{
                                  dispatch(getCurrentItem(el))
                                  dispatch(showDeleteWishesModal())
                                }}
                                textCloseBtn={<MdClose />}

                                key={el.id}
                                item={el}
                            />
                        )
                    })
                    }
                </ul>
                <Link to='/favorite' className='.tofav-btn' >До списку бажань</Link>
            </div>
        </div>
    )
}


WishList.propTypes = {
    delateOrder: PropTypes.func,
    item: PropTypes.object,
    delateWish: PropTypes.func,
    wish: PropTypes.array,
}

