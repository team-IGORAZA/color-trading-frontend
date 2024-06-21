import React from 'react'
import style from '../styles/historyScreen.module.css'
import HistoryDetails from '../widgets/HistoryDetails'
import { History } from '../utils/supportFiles'

function HistoryScreen() {
    return (
        <div className={style.container}>
            <h1 className={style.headding}>History</h1>
            <div className={style.historyContainer}>
                <div className={style.activeFilter}><p>All</p></div>
                <div className={style.nonActiveFilter}><p>Win</p></div>
                <div className={style.nonActiveFilter}><p>Loss</p></div>
            </div>
            <div className={style.bottomContainer}>
                {
                    History.map((item, index) => <HistoryDetails
                        key={index}
                        event={item.event}
                        status={item.status}
                        amount={item.amout}
                        date={item.date}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default HistoryScreen