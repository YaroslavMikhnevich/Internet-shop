import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import './reset.scss'
import Modal from '../Components/Modal/Modal'
import ItemList from '../Components/ItemList/ItemList';
import Favorite from '../pages/Favorite/Favorite';
import CardPage from '../pages/CardPage.jsx/CardPage';
import Layout from '../pages/Layout';
import SingleItemPage from '../pages/SingleItemPage/SingleItemPage';

import { useSelector, useDispatch } from 'react-redux';
import { fetchListRequest } from '../store/sliceUsers';
import { addToOrders, addToWishList, showOrderModal, showWishesModal, delateOrders, delateWishes, showDelateModal, showDeleteWishesModal } from '../store/sliceUsers';

import ViewContext from '../context/context';

export default function App2() {
    useEffect(() => {
        dispatch(fetchListRequest())
    }, [])

    const dispatch = useDispatch()

    const currentItem = useSelector(state => state.items.currentItem);
    const orderModal = useSelector(state => state.items.orderModal);
    const wishesModal = useSelector(state => state.items.wishesModal);
    const delateOrdersModal = useSelector(state => state.items.delateOrdersModal);
    const delateWishModal = useSelector(state => state.items.delateWishModal);

    const pageView = (arg) => {
        setView(arg)
    }
    const [view, setView] = useState('items');
    return (
        <div>

            <BrowserRouter>
            <ViewContext.Provider value={{view, pageView}}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<ItemList />} />
                        <Route path='/:id' element={<SingleItemPage />} />
                        <Route path="favorite" element={<Favorite />} />
                        <Route path="card" element={<CardPage />} />
                    </Route>
                </Routes>
                </ViewContext.Provider>
            </BrowserRouter>

            {orderModal && <Modal
                closeModal={() => {
                    dispatch(showOrderModal())
                }}
                closeButton={false}
                btnAddOrder={true}
                btnText='Ок'
                onClick={() => {
                    dispatch(showOrderModal())
                    dispatch(addToOrders(currentItem))
                }}
                modalTitle='Додати товар до корзини'
                modalText={`Якщо бажаєте додати товар ${currentItem.category}  ${currentItem.name} до корзини, натисніть "Ок"`}
                background='#d5d5d5' />}

            {delateOrdersModal && <Modal
                closeModal={() => {
                    dispatch(showDelateModal())
                }}
                btnDelate={true}
                onClick={() => {
                    dispatch(showDelateModal())
                    dispatch(delateOrders(currentItem))

                }}
                btnText='Ок'
                modalTitle='Видалити товар з кошика?'
                modalText={`Підтвердіть видалення товару ${currentItem.category}  ${currentItem.name} з кошика, натиснувши "Ок"`}
                background='#d5d5d5' />
            }

            {wishesModal && <Modal
                closeModal={() => {
                    dispatch(showWishesModal())
                }}
                onClick={() => {
                    dispatch(showWishesModal())
                    dispatch(addToWishList(currentItem))
                }}
                closeButton={false}
                btnText='Ок'
                modalTitle='Додати товар до списку бажань'
                modalText={`Якщо бажаєте додати товар ${currentItem.category}  ${currentItem.name} до списку бажань, натисніть "Ок"`}
                background='#d5d5d5' />}

            {delateWishModal && <Modal
                closeModal={() => {
                    dispatch(showDeleteWishesModal())
                }}
                onClick={() => {
                    dispatch(showDeleteWishesModal())
                    dispatch(delateWishes(currentItem))
                }}
                btnText='Ок'
                modalTitle='Видалити товар з списку бажань?'
                modalText={`Підтвердіть видалення товару ${currentItem.category}  ${currentItem.name} з списку бажань, натиснувши "Ок"`}
                background='#d5d5d5' />
            }
        </div>
    )

}

