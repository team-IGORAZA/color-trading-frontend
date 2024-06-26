import React, { useState } from 'react'
import style from '../styles/loginScreen.module.css'
import { useNavigate } from 'react-router-dom'

function LoginScreen() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('dashboard/game')
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