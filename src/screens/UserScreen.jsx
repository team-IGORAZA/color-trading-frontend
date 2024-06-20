
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function UserScreen() {
    return (
        <div>
            <img src="" alt="" />
            <p>Anirudh MK</p>
            <p>anirudhmk123@gmail.com</p>
            <div>
                <FontAwesomeIcon icon={faUser} />
                <p>Edit Profile</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faWallet} />
                <p>Wallet</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser} />
                <p>Edit Profile</p>
            </div>
        </div>
    )
}

export default UserScreen