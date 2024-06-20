
import { faNoteSticky, faRightFromBracket, faShield, faUser } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from '../styles/userScreen.module.css'

function UserScreen() {
    return (
        <div className={style.container}>
            <div className={style.topContainer}>
                <img className={style.profilePic} src="" alt="" />
                <p>Anirudh MK</p>
                <p>anirudhmk123@gmail.com</p>
            </div>
            <div className={style.bottomContainer}>
                <div className={style.button}>
                    <FontAwesomeIcon icon={faUser} />
                    <p>Edit Profile</p>
                </div>
                <div className={style.button}>
                    <FontAwesomeIcon icon={faWallet} />
                    <p>Wallet</p>
                </div>
                <div className={style.button}>
                    <FontAwesomeIcon icon={faNoteSticky} />
                    <p>Terms and Conditions</p>
                </div>
                <div className={style.button}>
                    <FontAwesomeIcon icon={faShield} />
                    <p>Privacy and Security</p>
                </div>
            </div>
            <div className={style.logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                <p>Logout</p>
            </div>
        </div>
    )
}

export default UserScreen