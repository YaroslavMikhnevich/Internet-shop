import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './FilterBlock.scss'
import { TfiViewGrid, TfiViewList } from 'react-icons/tfi'
import ViewContext from '../../context/context';



export default function FilterBlock() {
    const {pageView, view} = useContext(ViewContext);

    function handleClick(arg) {
        pageView(arg);
    }

    return (
        <>
            <div className='filter-block'>
                    <div className='filter-block__icon-container'>
                        <TfiViewGrid 
                        onClick={()=>{handleClick('items')}} 
                        className= {view === 'items' ?  'filter-block__icon-container--icon active' : 'filter-block__icon-container--icon' } 
                        />
                        <TfiViewList 
                        onClick={()=>{handleClick('table')}} 
                        className={view === 'table' ?  'filter-block__icon-container--icon active' : 'filter-block__icon-container--icon' } 
                        />
                    </div>


            </div>
        </>

    )
}


