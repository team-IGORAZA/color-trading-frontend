import React from 'react'
import style from '../styles/gameCard.module.css'
function GameCard({ img, name, price, noOfParticipents, timeLeft }) {
    return (
        <div className={style.card}>
            <img src={img} alt="" />
            <div className={style.detailsContainer}>
                <div className={style.headdingContainer}>
                    <h2>{name}</h2>
                    <h2>{price} Rs</h2>
                </div>
                <div className={style.subHeaddingContainer}>
                    <p>{noOfParticipents} People Participating</p>
                    <p>{timeLeft} Min Left</p>
                </div>
            </div>
        </div>
    )
}

export default GameCard