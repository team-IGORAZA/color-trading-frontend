import React from 'react'
import styles from '../styles/walletScreen.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function WalletScreen() {
    return (
        <div className={styles.container}>
            <h1 className={styles.headding}>Earnings</h1>
            <div className={styles.balance}>
                <h2>My Balance</h2>
                <br />
                <h2>Rs 10000000</h2>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.withdrawButton}>
                    <p>Withdraw</p>
                </div>
                <div className={styles.depositButton}>
                    <p>Deposit</p>
                </div>
            </div>
            <h2 className={styles.subHeadding}>Transactions</h2>
        </div>
    )
}

export default WalletScreen