import React from 'react'
import style from '../styles/winnerDetails.module.css'
function WinnerDetails({ name, amount, event, status }) {
    return (
        <div className={style.winnerDetails}>
            <img src="" alt="" />
            <div className={style.detailsContainer}>
                <div>
                    <div className={style.headding}>
                        <p>{name}</p>
                        <p>{amount}rs</p>
                    </div>
                    <div className={style.subHeadding}>
                        <p>
                            {event}
                        </p>
                        <p>{status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WinnerDetails