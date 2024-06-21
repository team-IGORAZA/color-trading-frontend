import React from 'react'
import styles from '../styles/walletScreen.module.css'
import TransactionDetiails from '../widgets/TransactionDetiails'
import { Transactions } from '../utils/supportFiles'

function WalletScreen() {
    return (
        <>
            <div className={styles.topContainer}>
                <h2>Earnings</h2>
                <div className={styles.balance}>
                    <p>Balance</p>
                    <br />
                    <p>200000 Rs</p>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.withdrawButton}><p>Withdraw</p></div>
                    <div className={styles.depositButton}><p>Deposit</p></div>
                </div>
                <h2>Transactions</h2>
            </div>
            <div className={styles.buttomContainer}>
                {Transactions.map((item, index) => <TransactionDetiails
                    key={index}
                    mode={item.mode}
                    status={item.status}
                    amount={item.amount}
                    date={item.date}
                />)}
            </div>
        </>
    )
}

export default WalletScreen