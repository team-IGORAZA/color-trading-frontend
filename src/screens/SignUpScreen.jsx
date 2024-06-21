import React, { useState } from 'react';
import style from '../styles/signupScreen.module.css'

function SignUpScreen() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>name</p>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    <p>email</p>
                    <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
                    <p>phone</p>
                    <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                    <p>password</p>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                    <p>Confirm password</p>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpScreen;
