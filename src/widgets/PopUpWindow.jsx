// Modal.js
import React from 'react';
import style from '../styles/popUpWindow.module.css';

function PopUpWindow({ message, onConfirm, onCancel }) {
    return (
        <div className={style.modalBackdrop}>
            <div className={style.modalContent}>
                <p>{message}</p>
                <div className={style.buttonContainer}>
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
}

export default PopUpWindow;
