import React, { useEffect, useState } from 'react'
import style from '../styles/gameScreen.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


function GameScreen() {

    // const accessToken = localStorage.getItem('accessToken')

    // const [response, setResponse] = useState([])

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/v1/game/details/', {
    //         headers: {
    //             'Authorization': `Bearer ${accessToken}`
    //         }
    //     })
    //         .then(function (response) {
    //             setResponse(response.data.response)
    //         })
    //         .catch(function (error) {
    //         })
    //         .finally(function () {
    //             // always executed
    //         });
    // }, [])



    return (
        <div className={style.container}>
            <div className={style.timeContainer}>
                <div className={style.time} style={{ backgroundColor: '#252525', borderRadius: 10, color: 'white' }}>
                    <FontAwesomeIcon icon={faClock} />
                    <p>Win Go</p>
                    <p>1 Min</p>
                </div>
                <div className={style.time}>
                    <FontAwesomeIcon icon={faClock} />
                    <p>Win Go</p>
                    <p>1 Min</p>
                </div>
                <div className={style.time}>
                    <FontAwesomeIcon icon={faClock} />
                    <p>Win Go</p>
                    <p>1 Min</p>
                </div>
                <div className={style.time}>
                    <FontAwesomeIcon icon={faClock} />
                    <p>Win Go</p>
                    <p>1 Min</p>
                </div>
            </div>
            <div className={style.ad}>
                <img src="https://images.unsplash.com/photo-1627831389670-d20f5a01c536?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className={style.status}>
                <div>
                    <div className={style.howToPlay}>
                        <p>How to play</p>
                    </div>
                    <p>Win Go 1 Min</p>
                </div>
                <div className={style.rightContainer}>
                    <p>Time Remaining</p>
                    <div className={style.clock}>
                        <p className={style.clockBackround}>0</p>
                        <p className={style.clockBackround}>1</p>
                        <p>:</p>
                        <p className={style.clockBackround}>2</p>
                        <p className={style.clockBackround}>8</p>
                    </div>
                    <p>123563423</p>
                </div>
            </div>
            <div className={style.game}>
                <div className={style.top}>
                    <div className={style.redContainer}><p>Red</p></div>
                    <p>x</p>
                    <div className={style.greenContainer}><p>Green</p></div>
                </div>
                <div className={style.middle}>
                    <div className={style.red}></div>
                    <div className={style.green}></div>
                </div>
                <div className={style.options}>
                    <div className={style.random}>
                        <p>Random</p>
                    </div>
                    <p className={style.select}>1x</p>
                    <p className={style.select}>2x</p>
                    <p className={style.select}>5x</p>
                    <p className={style.select}>10x</p>
                    <p className={style.select}>20x</p>
                </div>
                <div className={style.button}>
                    <p>Submit</p>
                </div>
            </div>

        </div>
    )
}

export default GameScreen