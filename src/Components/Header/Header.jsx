import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.scss'
import Card from '../Card/Card';
import WishCard from '../WishCard/WishCard';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header__logo-block'>
                    <img src='https://images-platform.99static.com//3je7LVnOYjRYjt0m4l8lnsK1-lg=/436x411:1068x1043/fit-in/500x500/99designs-contests-attachments/106/106453/attachment_106453565' />
                </div>

                <nav className='header__nav'>
                    <ul>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'nav-link active-nav' : 'nav-link'} to="/">Товари</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'nav-link active-nav' : 'nav-link'} to="/favorite">Список бажань</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'nav-link active-nav' : 'nav-link'} to="/card">Корзина</NavLink>
                        </li>
                    </ul>
                </nav>


                <div className='card-block'>
                    <WishCard/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}



// Header.propTypes = {
//     delateWish: PropTypes.func,
//     delateOrder: PropTypes.func,
//     wish: PropTypes.array,
//     orders: PropTypes.array,
//   };