import React from 'react'
import style from '../styles/historyScreen.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

function HistoryScreen() {
    return (
        <div className={style.container}>
            <h1 className={style.headding}>History</h1>
            <div className={style.historyContainer}>
                <div className={style.activeFilter}><p>All</p></div>
                <div className={style.nonActiveFilter}><p>Win</p></div>
                <div className={style.nonActiveFilter}><p>Loss</p></div>
            </div>
            <div className={style.detailsContainer}>
                <div className={style.iconConatiner}>
                    <FontAwesomeIcon icon={faFlag} color='white' />
                </div>
                <div className={style.details}>
                    <div className={style.detailsHeadding}>
                        <p>Double Money</p>
                        <p>50rs</p>
                    </div>
                    <div className={style.detailsSubHeadding}>
                        <p>Win</p>
                        <p>22-02-2024</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default HistoryScreen