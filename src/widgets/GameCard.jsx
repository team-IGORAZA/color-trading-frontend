import React from 'react'
import style from '../styles/gameCard.module.css'
function GameCard() {
    return (
        <div className={style.card}>
            <img src="https://plus.unsplash.com/premium_photo-1670007097576-0af87c2dd32e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={style.detailsContainer}>
                <div className={style.headdingContainer}>
                    <h2>Double Card</h2>
                    <h2>20 Rs</h2>
                </div>
                <div className={style.subHeaddingContainer}>
                    <p>150 People Participating</p>
                    <p>5 Min Left</p>
                </div>
            </div>
        </div>
    )
}

export default GameCard