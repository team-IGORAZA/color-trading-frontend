import React from 'react'
import style from '../styles/gameScreen.module.css'
import GameCard from '../widgets/GameCard'

import supportFile from '../utils/supportFiles'
function GameScreen() {
    return (
        <div className={style.container}>
            {supportFile.map(
                (item, index) => <GameCard
                    key={index}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    noOfParticipents={item.no_of_participents}
                    timeLeft={item.time_left}
                />)}
        </div>
    )
}

export default GameScreen