import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


import "./SingleItemPage.scss"

export default function SingleItemPage(props) {
    const { id } = useParams()
    const itemList = useSelector(state => state.items.items);
    const item = itemList.find((el) => {
        if (el.id === id) {
            return el
        }
    })

    return (
        <>
            <div className="single-item-page">
                <div className="single-item-page__img-block">
                    <img src={item.url} alt="#" />
                    </div>
                <div className="single-item-page__info-block">
                    <h1>{item.name}</h1>
                </div>

            </div>
        </>
    )
}