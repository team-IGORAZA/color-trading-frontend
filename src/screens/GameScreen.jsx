import React from 'react'
import style from '../styles/gameScreen.module.css'
import GameCard from '../widgets/GameCard'
import { Games } from '../utils/supportFiles'



function GameScreen() {

    return (
        <div className={style.container}>
            {Games.map(
                (item, index) => <GameCard
                    key={index}
                    id={index}
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