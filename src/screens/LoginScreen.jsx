import React, { useState } from 'react'
import style from '../styles/loginScreen.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginScreen() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/v1/user/login/', {
            email: email,
            password: password
        })
            .then(function (response) {
                let accessToken = response.data.response.accessToken
                if (accessToken) {
                    navigate('dashboard/game')
                    localStorage.setItem('assessToken', response.data.response.accessToken);
                }
                setError(error.response.data.message.general[0])

            })
            .catch(function (error) {
                setError(error.response.data.message.general[0])
            });


    }

    return (
        <div className={style.container}>
            <div style={style.background}>
                <form onSubmit={handleLogin}>
                    <div>
                        <p>Email</p>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p>Password</p>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p className={style.errorText}>{error}</p>
                    <br />
                    <button type='submit' className={style.signInButton}><p>Sign In</p></button>
                </form>
                <button className={style.signUpButton} onClick={() => navigate('signup')}><p>Sign Up</p></button>
            </div>
            <p className={style.forgot}>forgot password?</p>
        </div>
    )
}

export default LoginScreen