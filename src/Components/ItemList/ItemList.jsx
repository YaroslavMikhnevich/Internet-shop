import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import Item from '../Item/Item';
import './ItemList.scss'
import PropTypes from 'prop-types';
import FilterBlock from '../FilterBlock/FilterBlock';
import { getCurrentItem, showOrderModal } from '../../store/sliceUsers';
import { useSelector, useDispatch } from 'react-redux';

export default function ItemList() {
    const dispatch = useDispatch()
    const itemList = useSelector(state => state.items.items);
    const wishes = useSelector(state => state.items.wishes);
    return (<>
        <div  className='item-list'>
        <FilterBlock />

            {
                itemList.map(item => {
                    const serchBoolean = wishes.some((el) => {
                        return item.id === el.id
                    })

                    return (
                        <Item
                            key={item.id}
                            item={item}
                            addBtn={true}
                            onClick={() => {
                                dispatch(getCurrentItem(item))
                                dispatch(showOrderModal())
                            }}
                            className={'card-btn'}
                            text={'Додати до кошика'}

                            favoritBtn={true}
                            isWish={serchBoolean}
                        />
                    )
                })}
        </div>
    </>
    )
}

ItemList.propTypes = {
    items: PropTypes.array
}