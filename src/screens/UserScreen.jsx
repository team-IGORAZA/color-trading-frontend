import { faNoteSticky, faRightFromBracket, faShield, faUser } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import style from '../styles/userScreen.module.css'
import axios from 'axios'

function UserScreen() {
    const accessToken = localStorage.getItem('accessToken')

    const [response, setResponse] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/user/details/', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(function (response) {
                setResponse(response.data.response)
            })
            .catch(function (error) {
            })
            .finally(function () {
                // always executed
            });
    }, [])


    return (
        <div className={style.container}>
            <div className={style.topContainer}>
                <img className={style.profilePic} src="" alt="" />
                <p>{response.first_name}</p>
                <p>{response.email}</p>
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