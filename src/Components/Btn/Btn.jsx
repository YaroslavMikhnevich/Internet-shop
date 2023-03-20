import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Btn.scss"
import PropTypes from 'prop-types';

export default function Btn(props) {

    return(
        <button
        type={props.type}
        className={`${props.className}`}
        
        onClick={() =>{  
            props.onClick()
            }}>{props.text}</button>
        )
    }


// Btn.propTypes = {
//     className: PropTypes.string,
//     onClick: PropTypes.func,
//         }