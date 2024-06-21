import React from 'react'
import style from '../styles/historyDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

function HistoryDetails({ event, amount, status, date }) {
    console.log(status);
    return (
        <div className={style.detailsContainer}>
            <div className={style.iconConatiner}>
                {
                    status === 'Win' ?
                        <FontAwesomeIcon icon={faFlag} color='white' /> :
                        <FontAwesomeIcon icon={faHeartBroken} color='white' />
                }
            </div>
            <div className={style.details}>
                <div className={style.detailsHeadding}>
                    <p>{event}</p>
                    <p>{amount}rs</p>
                </div>
                <div className={style.detailsSubHeadding}>
                    <p>{status}</p>
                    <p>{date}</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HistoryDetails