import React from 'react'
import styles from '../styles/transactionDetiails.module.css'


function TransactionDetiails({ mode, status, amount, date }) {
    return (
        <div className={styles.detailsContainer}>
            <div className={styles.headdingContainer}>
                <p style={{ color: mode === 'Deposit' ? 'green' : 'black' }}>{mode}</p>
                <p style={{ color: mode === 'Deposit' ? 'green' : 'black' }}>{mode === 'Withdraw' ? '-' : "+"}{amount}</p>
            </div>
            <div className={styles.subHeaddingContainer}>
                <p>{status}</p>
                <p>{date}</p>
            </div>
        </div >
    )
}

export default TransactionDetiails