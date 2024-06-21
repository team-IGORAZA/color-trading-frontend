import React from 'react'
import styles from '../styles/walletScreen.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function WalletScreen() {
    return (
        <>
            <div className={styles.topContainer}>
                <h2>Earnings</h2>
                <div className={styles.balance}>
                    <p>Balance</p>
                    <p>200000 Rs</p>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.withdrawButton}><p>Withdraw</p></div>
                    <div className={styles.depositButton}><p>Deposit</p></div>
                </div>
                <h2>Transactions</h2>
            </div>
            <div className={styles.buttomContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.headdingContainer}>
                        <p>Withdraw</p>
                        <p>Success</p>
                    </div>
                    <div className={styles.subHeaddingContainer}>
                        <p>200</p>
                        <p>20-10-2024</p>
                    </div>
                    <p></p>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.headdingContainer}>
                        <p>Withdraw</p>
                        <p>Success</p>
                    </div>
                    <div className={styles.subHeaddingContainer}>
                        <p>200</p>
                        <p>20-10-2024</p>
                    </div>
                    <p></p>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.headdingContainer}>
                        <p>Withdraw</p>
                        <p>Success</p>
                    </div>
                    <div className={styles.subHeaddingContainer}>
                        <p>200</p>
                        <p>20-10-2024</p>
                    </div>
                    <p></p>
                </div>
            </div>
        </>
    )
}

export default WalletScreen