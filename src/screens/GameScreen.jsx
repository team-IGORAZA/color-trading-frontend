import React from 'react'
import style from '../styles/gameScreen.module.css'
import GameCard from '../widgets/GameCard'

function GameScreen() {
    return (
        <div className={style.container}>
            <GameCard />
        </div>
    )
}

export default GameScreen