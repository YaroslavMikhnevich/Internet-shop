import React from 'react';
import ReactDOM from 'react-dom/client';
import './Modal.scss'
import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';

export default function Modal(props) {
    return (
        <div className='modal-background'
        data-testid="modal-background"
            onClick={() => {
                props.closeModal()
            }}>

            <div
                className='modal'
                onClick={(e) => {
                    e.stopPropagation()
                }}
                style={{ backgroundColor: props.background }}
            >

                <div className='modal__content-container'>
                    <h3>{props.modalTitle}</h3>
                    <p>{props.modalText}</p>
                    <div className='button-block'>

                    </div>
                </div>
                 
                <Btn
                    className={'modal-btn'}
                    text={props.btnText}
                    onClick={props.onClick}
                />


            </div>
        </div>
    )
}

